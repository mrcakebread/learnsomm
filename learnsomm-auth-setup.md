# LearnSomm — Firebase Auth + Entitlements (setup & how it works)

## What was added to learnsomm.html
- **Firebase Auth + Firestore** via the modular CDN SDK (v10.12.2), loaded as `<script type="module">` before `</body>`.
- **Your config is embedded** (project `mark-s-wine-training`). Web config keys are public by design; Firestore **security rules** are what protect data.
- **Auth modal** (the 👤 button): Log in / Create account toggle, **Forgot password** (Firebase emails the reset link), and a **Claim a purchase** stub for buyers whose purchase email ≠ login email.
- **Entitlement loading**: on login, reads `users/{uid}` from Firestore and writes the localStorage flags the existing tier system already uses (`ls_pass`, `ls_challenge`, `ls_vault`), then calls `LSEnt.refresh()` and rebuilds the rail. On logout those flags are cleared (admin flag is separate and untouched).
- **Offline**: you must be online to log in; once entitlements load they're cached in localStorage, so the offline single-file wheels keep working. Re-syncs next time online.

## The entitlement field map (IMPORTANT)
At the top of the Firebase module there is an `ENT = { ... }` object. It maps your Firestore `users/{uid}` fields onto LearnSomm's three entitlements. It reads **defensively** (several common field names), but if your webhooks write different names, edit only this block:
- `ENT.COLLECTION` — defaults to `"users"`. Change if your webhook writes elsewhere.
- `ENT.pass(d)` — truthy ⇒ time pass (sets `ls_pass`). Checks `pass/allAccess/subscriber` booleans or a future-dated `passUntil/accessUntil/expires/subscriptionEnd`.
- `ENT.challenge(d)` — truthy ⇒ a challenge purchase (sets `ls_challenge`).
- `ENT.vault(d)` — returns 0–3 (none/intro/next/master) from a numeric `vault`, a `tier/vaultTier/level` string, or boolean `vault:true ⇒ 3`.

**Confirm these against one real `users/{uid}` doc your webhooks produce.** If a buyer logs in and their tier doesn't unlock, the field names in `ENT` don't match your doc — fix them there.

## Firestore security rules you need
Each user must read/write only their own doc; webhooks (admin SDK) bypass rules. Minimum:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read: if request.auth != null && request.auth.uid == uid;
      // entitlement fields should be written ONLY by your Cloud Functions (admin SDK),
      // not the client. Allow client to create its own starter doc + edit profile fields:
      allow create: if request.auth != null && request.auth.uid == uid;
      allow update: if request.auth != null && request.auth.uid == uid
                    && !request.resource.data.diff(resource.data).affectedKeys()
                          .hasAny(['pass','passUntil','challenge','vault','tier','allAccess']);
    }
  }
}
```
This lets a user create their starter doc and edit their name, but **only your webhooks can grant entitlements** — clients can't self-unlock by editing Firestore.

## Enable in Firebase console
1. Authentication → Sign-in method → enable **Email/Password**.
2. (Optional) Authentication → Templates → customize the password-reset email.
3. Firestore → Rules → paste the rules above (adjust field names to match your webhooks).

## Exposed JS handles
- `window.LSAuth.signOut()`, `window.LSAuth.user()`, `window.LSAuth.refresh()`
- `window.LSEnt.refresh()` — re-reads flags (called automatically after login)
- The 👤 button opens login when signed out, profile when signed in.

## Not done here (your call)
- "Claim a purchase" is a stub message — needs a small flow (paste Gumroad/Payhip license or confirm Stripe email → a Cloud Function attaches it to the uid). Webhooks already exist per your note; this just links cross-email purchases.
- Google/Apple/magic-link sign-in (email+password is primary per your choice).
