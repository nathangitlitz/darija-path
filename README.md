# Darija Path

A vocabulary-first Moroccan Arabic learning website. Built as a portable static ES-module app with Supabase Auth/Postgres and Vercel hosting. No framework or runtime dependencies are required.

## Included

- 56 lessons overall: a 40-lesson beginner course (8 units, 32 teaching lessons and 8 checkpoints), plus the existing 8 intermediate and 8 advanced lessons.
- Beginner includes 336 focus vocabulary entries (some deliberately revisited), 32 bilingual readings, 96 grammar examples, 256 lesson exercises and 156 checkpoint questions.
- Each beginner unit has a goal, four teaching lessons and an 80%-pass checkpoint. Later checkpoints retrieve material from earlier units. Best scores and exercise responses persist.
- Recognition, typed recall, sentence construction and reading checks include explanations. Writing notebooks and practical speaking/writing tasks remain self-assessed.
- Learning objectives, grammar notes, bilingual exchanges, word recall, writing notebooks, speaking prompts and local voice recording.
- Latin/Arabizi by default, persistent Arabic-script toggle, and a separate 28-letter alphabet guide.
- Personalized practice defaults to completed lessons, with optional stage exploration and saved-item practice. Word recall, typed vocabulary, grammar/reading review, sentence construction and guided two-turn conversation are available. Conversation turns move from choosing a reply to typing the taught reply.
- Review prioritizes missed items, due items, unseen items, then early review. Successful recall grows intervals from 1 day to a 30-day cap; misses return sooner. Explicit word-specific Arabizi aliases are supported, without collapsing meaningful consonants.
- Bookmarks for vocabulary, exchanges, grammar paragraphs and entire lessons; searchable saved collection.
- Guest persistence, email/password login, signup confirmation, password recovery, cloud progress and explicit guest import.
- Responsive layout and keyboard-accessible controls.

## Run

Use Node 22 or newer:

```sh
npm run dev
npm test
npm run build
```

The development server listens at http://127.0.0.1:4173. Vercel builds `dist/` using `vercel.json`.

## Release mode

Guest access is enabled for this release at https://darija-path.vercel.app. The owner deferred public accounts until production email setup. Set `accountsEnabled: true` in config.js only after email delivery and authentication redirects are configured and tested. If using build-time Supabase overrides, also set `ACCOUNTS_ENABLED=true`.

## Supabase

Project: `vhqmjmlegxkvoitbxvzt` (Darija Path). The initial schema is in `supabase/001_learner_state.sql` and has been applied. All four data policies restrict access to `auth.uid() = user_id`. Anonymous access to the table is revoked. Only a public publishable key is used in the browser; never put service-role keys in this repository.

`config.js` contains the public project endpoint and publishable key. Build-time `SUPABASE_URL` and `SUPABASE_ANON_KEY` may override them (both must be set). The variable name accepts a modern publishable key as well as the legacy anon key.

In Supabase Authentication → URL Configuration, set the Site URL to the final production origin and allow that origin as a redirect URL. Add http://127.0.0.1:4173 for local testing if needed. Confirm the email/password provider is enabled. Configure a production SMTP provider: the default Supabase email service is intended for testing and may restrict recipients and throughput. Keep email confirmation enabled.

## Privacy and persistence

Passwords are sent directly to Supabase Auth and are not stored by this application. Sessions are kept in browser local storage. Each authenticated user has a separate local cache and database row. Guest data is not automatically mixed into account data; import it explicitly. Notebook drafts and learning history are private under row-level security. Recordings remain in memory as browser blob URLs and are discarded on reload. No analytics or advertising trackers are installed. Fonts are requested from Google Fonts.

Cloud writes are serialized within a tab. This first edition uses one JSON document per learner; simultaneous edits on multiple devices use last-write-wins semantics. Failed cloud loads block cloud writes to avoid replacing an unloaded account with an empty state. Local progress remains available during failures.

## Content and launch status

This is a functional first edition, not a complete proficiency certification. Lessons are original authored starter material; stage labels describe the learning sequence. Vocabulary has Arabic counterparts, while spelling and pronunciation vary regionally. Writing checks accept a limited set of aliases, not every valid Arabizi spelling. The 32 beginner guided conversation/reading scenarios are scripted, not an open-ended AI tutor. Higher-stage pattern exercises and guided conversation expansion remain future work; their vocabulary can already be practiced. Open writing and speech are self-assessed.

Before a broad educational launch, have a Moroccan Darija educator review every lesson and record native-speaker audio. Expand intermediate and advanced with the beginner unit structure and further conversation branching. No verified native audio, automated speech scoring, or open-writing correction is included yet. A full advanced curriculum will require substantially more reading, listening and guided speaking material.

Reference for further curriculum development: [Peace Corps Moroccan Arabic resources](https://www.friendsofmorocco.org/learnarabic.htm). All course prose in this repository is original; the linked textbook is not copied or redistributed.

## Verification

Automated checks cover stage completeness, vocabulary/answer consistency, bookmark identifiers, alphabet/conversation integrity, account/guest isolation, and authenticated write ownership. Browser checks cover lesson navigation, script toggle, bookmarks, spelling aliases, saved drafts after reload, completion and conversation scoring. Supabase security advisor reported no findings after migration. A rolled-back database integration test verified own-account reads/updates and blocked other-account reads, updates, and inserts. Real email confirmation/recovery and cross-device login must be tested once production URL and SMTP are configured.

## Beginner curriculum architecture

`src/beginner-data.js` is the editable authored curriculum: 8 units and 32 teaching records. `src/curriculum.js` composes these with the original lesson IDs and word IDs, builds exercise records, and assembles cumulative checkpoints. Existing original lessons, bookmark identifiers, notes and completion remain valid. A checkpoint completion is added only after every question is answered with at least 80% correct; retries retain the best score. Teaching lessons use learner-marked completion.

`src/learning.js` contains pure answer normalization, curated aliases, spaced-review scheduling, pool selection, and checkpoint scoring. New `answers` and `checkpoints` state fields default safely for old guest profiles. No database migration is needed; guest mode remains active.

Expanded-course browser verification: recognition feedback, incorrect-answer correction, word-bank sentence construction, lesson-to-practice enrollment, missed-word priority, choose-then-type conversation with spelling variants, a 16-question checkpoint pass, persistence after reload, best-score retention on retry, and a 390px viewport without horizontal overflow. Automated tests cover curriculum integrity, legacy identities, correct answer references, cumulative review sources, spelling discrimination, pool scoping, review ordering and pass thresholds.
