# Darija Path roadmap

Last updated: 2026-11-21.

This file preserves project decisions across chats. It is not a queue of automatically authorized work. Items marked proposed have been discussed but are not approved for implementation. See `README.md` for technical setup and `AGENTS.md` for working instructions.

## Delivered

- Static website hosted on Vercel, with source on GitHub and automatic production deployment from `main`.
- Beginner, intermediate, and advanced: 8 units per stage, each with 4 teaching lessons and a checkpoint; 120 teaching/review lessons in total.
- Vocabulary, grammar, bilingual readings, contextual examples, writing notebooks, speaking tasks, and cumulative checkpoints.
- Latin/Arabizi-first presentation with a persistent Arabic toggle, plus a standalone alphabet guide.
- Practice studio with recall, typed answers, grammar/reading checks, sentence building, guided conversation, and review scheduling.
- Saved words, sentences, paragraphs, and lessons; guest progress persists in the current browser.
- Supabase database and authentication integration are implemented. Public account access is disabled pending production email setup and end-to-end verification.
- User recording/playback works locally within a browser session. This is not a library of native-speaker recordings.

## Deferred by the owner

### Public accounts and email

The owner chose guest access for the current release. They have since asked how email and cross-device saving would work, but have not yet selected a sending domain/provider or requested activation.

- Resend with a verified owned domain was recommended; it has not been configured or selected as a final decision.
- When resumed: configure email delivery and authentication redirects; test signup confirmation, login/logout, password recovery, account isolation, guest import, and cross-device saving before enabling public accounts.
- Account data will live in Supabase with a browser cache. Guest data remains browser-only. Voice recordings are currently session-only.

### Native-speaker review and pronunciation recordings

The owner explicitly prioritized curriculum coverage and deferred these. Plan an educator review and native audio as later work. Existing text and automated checks are not a substitute for linguistic review; do not present the curriculum as proficiency certification.

## Discussed possibilities — not yet approved

### Monthly and annual subscriptions

Stripe was recommended for checkout, recurring billing, and a customer portal. No prices, paid/free content split, provider configuration, trial policy, or cancellation policy has been selected.

Possible implementation:

- Tie subscription entitlement to an authenticated account and update it through verified billing events.
- Protect paid content on the server; current static curriculum files are public.
- Provide billing management and preserve learning history after paid access ends.
- Test purchases, renewals, failed payments, cancellations, and access expiration before accepting real payments.

A free alphabet guide, introductory lessons, and limited practice were suggested as a possible free tier, not a settled product decision.

### Personalized AI tutor

The owner explored whether a tutor could know each learner's course history and how token costs work. No model/provider, budget, architecture, retention policy, or launch scope has been selected.

Potential behavior:

- Use relevant completed lessons, exercise/checkpoint results, missed or due words, bookmarks, and script preference to adapt practice.
- Read fresh progress as tutoring continues and distinguish lesson completion from demonstrated mastery.
- Offer open-ended role-play and explanations, with evaluated Darija accuracy and appropriate uncertainty about variants.
- Scope access to the signed-in learner. Define what conversation history is retained and how users can reset it before adding memory.
- Track usage per user, enforce server-side allowances and a global cost cutoff, and send compact relevant context rather than the entire course.

Text-first tutoring was recommended as an initial experiment. Voice would require separate implementation and cost evaluation. The likely model is owner-paid API usage funded by subscriptions; no unlimited-use promise or allowance has been made.

### Framework or backend changes

React, Next.js, and a separate backend were explained as options. No migration is requested. Keep the current stack for routine improvements; assess server functions or a framework when an approved feature requires them. A standalone backend is not currently needed.

## Next site changes

The owner has mentioned additional site changes but has not specified them yet. Record concrete requests and acceptance criteria here when agreed; do not invent a feature list or priority order.

## Working across chats

- The Codex project's primary folder is now the local `darija-path` repository.
- Use one chat per substantial feature or related batch of changes; keep its fixes and follow-ups together.
- Preserve durable decisions here and implementation facts in `README.md`. New chats should not depend on this conversation's transcript.
- Owner preference: completed, verified changes, including documentation, should be committed and pushed to GitHub as part of finishing the task. The normal `main` workflow also triggers Vercel deployment; local-only work is an exception when requested or when delivery is blocked.
- Coordinate edits to shared files. Use separate worktrees when concurrent implementation would otherwise collide.
