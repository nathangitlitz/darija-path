# Darija Path — project instructions

## Start here

- Work from this repository root, `darija-path`, not its parent `Darija` folder.
- Read `README.md` for the current architecture and release setup. Read `ROADMAP.md` when planning features or checking prior decisions.
- Check `git status` before editing. Preserve unrelated work and coordinate overlapping edits if other chats are working in this checkout.
- Treat roadmap proposals as context, not authorization to implement them. Follow the user's current request and carry authorized work through verification.

## Product requirements

- Teach Moroccan Darija to English speakers, with vocabulary as the main focus alongside grammar, reading, writing, and conversation.
- Use Latin/Arabizi by default, including number-based sound representations. Keep the persistent Arabic-script toggle working and supply corresponding Arabic for new Darija content.
- Keep the Arabic alphabet guide separate from the three course stages. Keep the course and practice studio distinct but connected through learner progress.
- Acknowledge regional and spelling variation. Answer checks should accept supported variants without collapsing meaningful sound distinctions. Do not claim that every alternative spelling is wrong.
- Preserve the established visual design and responsive, keyboard-accessible interactions unless the task calls for changes.

- Use direct, specific interface copy. Avoid generic motivational slogans and repeated encouragement. Preserve the owner-approved sidebar text “ONE WORD AT A TIME” and “Shwiya b shwiya.”

## Code map

- `src/app.js`: UI rendering, hash routes, lesson interactions, bookmarks, and practice sessions.
- `src/style.css`: shared visual design and responsive styles.
- `src/beginner-data.js`: authored beginner units and teaching lessons.
- `src/higher-data.js`: authored intermediate/advanced lessons, shared unit readings, and conversation rehearsals.
- `src/content.js`: original lesson identities, composed curriculum, stage metadata, and alphabet.
- `src/curriculum.js`: stage builder, generated exercises, and cumulative checkpoints.
- `src/learning.js`: answer checking, spelling aliases, review scheduling, and practice pools.
- `src/store.js`: guest/account state, authentication, and persistence.
- `config.js`: public configuration and account feature flag. `supabase/`: database schema.
- `scripts/`: dependency-free Node development server and static build. `tests/`: Node tests.

## Compatibility and boundaries

- This is a static HTML/CSS/JavaScript ES-module app, with no frontend framework or runtime dependencies. Keep routine changes within that architecture; framework migration is a separate task.
- Preserve stable lesson, word, exercise, and bookmark identifiers. Do not reuse an existing ID for unrelated content. Correct content when necessary, but consider saved references and answers and provide migration/invalidation if their meaning changes.
- Extend persisted state with safe defaults so existing progress, drafts, reviews, and bookmarks survive updates. Keep guest and account data separate; guest import is explicit.
- Guest mode is the current release. Accounts remain disabled until the requested email setup and authentication tests are complete. Native review/audio, payments, and AI tutoring are deferred or proposed as described in `ROADMAP.md`.
- Keep private credentials and service-role keys out of source and browser code. Preserve Supabase per-user access controls when changing persistence.
- Current course files are publicly served. Paid content would need server-side authorization and protected delivery, not just hidden UI.
- Guided practice is scripted. Open writing and speech are self-assessed; do not describe them as automatically graded or native-speaker verified.

## Run and verify

Use Node 22 or newer:

```sh
npm run dev   # http://127.0.0.1:4173
npm test
npm run build
```

- If npm is unavailable, run `node scripts/serve.mjs`, `node --test`, and `node scripts/build.mjs` with an available Node executable. Do not install dependencies merely to run this app.
- For curriculum or behavior changes, run the relevant tests and build. Check content references, valid exercise answers, and persistence compatibility.
- For UI changes, verify the affected learner flow in the browser, including Arabic on/off and a narrow viewport where relevant. Test draft/bookmark/progress persistence when touched.
- For documentation-only changes, check accuracy, paths, and diff formatting; application tests are unnecessary unless behavior also changes.
- Do not edit generated `dist/` as source. Keep tests meaningful and update expectations when an intended curriculum change alters counts.

## Delivery and documentation

- Source: `https://github.com/nathangitlitz/darija-path`. Production: `https://darija-path.vercel.app`.
- Owner preference: commit and push completed, verified project changes to GitHub by default, including documentation. The normal delivery path is `main` and its automatic Vercel deployment unless the user requests a branch, preview, or local-only work. Do not stop at local files or ask again for routine delivery already covered by the task. Commit only the task's changes; leave unfinished or unrelated work out. If delivery is blocked, explain what remains unsynced.
- GitHub `main` is connected to Vercel production: pushing it is a deployment. For an authorized release, verify the target, run appropriate checks, and confirm the deployed commit and live behavior.
- Report whether work is local, committed, pushed, or deployed; do not equate those states.
- Update `README.md` when architecture or behavior changes and `ROADMAP.md` when status or decisions change. Keep these files concise and current rather than copying chat transcripts into them.
