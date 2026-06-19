# LearnSomm — Make.com → Firestore → Auth (complete setup)

## The model (keyed by email)
```
Buyer pays (Stripe/Gumroad/Payhip)
   → webhook → Make.com scenario
   → writes  entitlements/{sanitized-email}  in Firestore
App on login → reads entitlements/{sanitized-email} → unlocks tier (cached for offline)
```
Chosen because Make.com always has the buyer's email but never the Firebase UID (the UID
doesn't exist until the person signs up, and people often pay first).

## THE DOCUMENT MAKE.COM MUST WRITE

**Collection:** `entitlements`
**Document ID:** the buyer email, sanitized — **lowercase, replace every `.` and `@` with `_`**
  e.g. `Mark@Email.com` → `mark_email_com`
  (The app uses the identical rule, so the IDs always match.)

**Fields (write what applies to the product sold):**
| Field        | Type      | Meaning                                  | Example          |
|--------------|-----------|------------------------------------------|------------------|
| `email`      | string    | buyer email, lowercased                  | `mark@email.com` |
| `tier`       | string    | vault tier: `intro` / `next` / `master`  | `master`         |
| `pass`       | boolean   | time-pass all-access                      | `true`           |
| `passUntil`  | timestamp | when a time pass expires                  | (date)           |
| `challenge`  | boolean   | bought a challenge                        | `false`          |
| `points`     | number    | optional starting points                  | `0`              |
| `source`     | string    | which processor                           | `gumroad`        |
| `updatedAt`  | timestamp | last write                                | (now)            |

Only write the fields relevant to the purchase. The app reads them defensively:
- `pass` true OR `passUntil` in the future  → all-access pass
- `challenge` true OR a `challenges` array  → challenge access
- `tier` master/next/intro (or numeric `vault` 1–3, or `vault:true`=full) → vault tier

## MAKE.COM SCENARIO

1. **Trigger module:** your existing Stripe / Gumroad / Payhip webhook.
2. **Add module:** *Google Cloud Firestore* → **Create/Update a Document**
   (search "Firestore"; sign in with the Google account that owns project
   `mark-s-wine-training`). If you prefer, the generic **HTTP** module can POST to the
   Firestore REST API, but the Firestore module is easier.
3. Configure the module:
   - **Project ID:** `mark-s-wine-training`
   - **Database:** `(default)`
   - **Collection:** `entitlements`
   - **Document ID:** a formula that sanitizes the email, e.g.
     `{{ replace(replace(lower(1.email); "."; "_"); "@"; "_") }}`
     (adjust `1.email` to wherever the email sits in your webhook payload)
   - **Fields:** map `email`, `tier`/`pass`/`challenge` (based on the product purchased),
     `source`, and set `updatedAt` to `now`.
   - Turn ON "Create if it doesn't exist" / upsert so repeat buyers update the same doc.
4. **Map the product → tier.** Add a Router or a small "Set variable" before the Firestore
   module that turns the purchased product/SKU into the right `tier`/`pass`/`challenge`
   values. (e.g. Gumroad product "Vault — Master" ⇒ `tier=master`; "30-day Pass" ⇒
   `pass=true, passUntil = now + 30 days`.)
5. Save & turn the scenario on. Test with a real (or test-mode) purchase, then check
   Firestore → `entitlements` for the new doc.

## FIREBASE CONSOLE — enable these
1. **Authentication → Sign-in method → Email/Password → Enable.**
2. **Firestore → Rules** (clients can read their own entitlement, but only Make.com — which
   uses a privileged connection — can write entitlements):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // entitlements: readable by the matching signed-in user; NOT client-writable.
    match /entitlements/{emailKey} {
      allow read: if request.auth != null
                  && emailKey == lower(request.auth.token.email).replace('.', '_').replace('@','_');
      allow write: if false;   // only Make.com (Google service account) writes these
    }
    // profiles: the app's own per-user profile doc (name etc.)
    match /profiles/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```
Note: the rule's email-key transform must match the app/Make sanitizer (lowercase, `.`→`_`,
`@`→`_`). Firestore rules string functions are limited; if the inline transform gives you
trouble, simplify to `allow read: if request.auth != null;` (entitlements contain no secrets,
just tier flags) and keep `allow write: if false;`.

## How recovery works (recap)
- Forgot password → in-app "Forgot password?" → Firebase emails a reset link. Unlocks are
  untouched (they live on the email-keyed entitlement doc, not the password).
- New device → log in → entitlement doc loads → tiers reappear, cached for offline.
- Paid with a different email than they log in with → their entitlement doc is under the
  *purchase* email; they either log in with that email, or you (manually, for now) copy the
  doc to their login email. A self-serve "claim" flow can be added later.

## Editing the field map
If your Make scenario writes different field names, edit ONLY the `ENT = { ... }` block at the
top of the Firebase module in learnsomm.html. Everything downstream uses it.
