# Darija Path

A vocabulary-first Moroccan Arabic learning website. Built as a portable static ES-module app with Supabase Auth/Postgres and Vercel hosting. No framework or runtime dependencies are required.

## Included

- 24 original lessons: eight beginner, eight intermediate, eight advanced; 192 vocabulary entries.
- Learning objectives, grammar notes, bilingual exchanges, word recall, writing notebooks, speaking prompts and local voice recording.
- Latin/Arabizi by default, persistent Arabic-script toggle, and a separate 28-letter alphabet guide.
- Short flashcard, typed-answer and two-turn conversation exercises, review intervals and practice points.
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

## Supabase

Project: `vhqmjmlegxkvoitbxvzt` (Darija Path). The initial schema is in `supabase/001_learner_state.sql` and has been applied. All four data policies restrict access to `auth.uid() = user_id`. Anonymous access to the table is revoked. Only a public publishable key is used in the browser; never put service-role keys in this repository.

`config.js` contains the public project endpoint and publishable key. Build-time `SUPABASE_URL` and `SUPABASE_ANON_KEY` may override them (both must be set). The variable name accepts a modern publishable key as well as the legacy anon key.

In Supabase Authentication → URL Configuration, set the Site URL to the final production origin and allow that origin as a redirect URL. Add http://127.0.0.1:4173 for local testing if needed. Confirm the email/password provider is enabled. Configure a production SMTP provider: the default Supabase email service is intended for testing and may restrict recipients and throughput. Keep email confirmation enabled.

## Privacy and persistence

Passwords are sent directly to Supabase Auth and are not stored by this application. Sessions are kept in browser local storage. Each authenticated user has a separate local cache and database row. Guest data is not automatically mixed into account data; import it explicitly. Notebook drafts and learning history are private under row-level security. Recordings remain in memory as browser blob URLs and are discarded on reload. No analytics or advertising trackers are installed. Fonts are requested from Google Fonts.

Cloud writes are serialized within a tab. This first edition uses one JSON document per learner; simultaneous edits on multiple devices use last-write-wins semantics. Failed cloud loads block cloud writes to avoid replacing an unloaded account with an empty state. Local progress remains available during failures.

## Content and launch status

This is a functional first edition, not a complete proficiency certification. Lessons are original authored starter material; stage labels describe the learning sequence. Vocabulary has Arabic counterparts, while spelling and pronunciation vary regionally. Writing checks accept a limited set of aliases, not every valid Arabizi spelling. The three guided conversations are scripted, not an open-ended AI tutor. Open writing and speech are self-assessed.

Before a broad educational launch, have a Moroccan Darija educator review every lesson and record native-speaker audio. Expand exercises, vocabulary coverage and conversation branching. No verified native audio, automated speech scoring, or open-writing correction is included yet. A full advanced curriculum will require substantially more reading, listening and guided speaking material.

Reference for further curriculum development: [Peace Corps Moroccan Arabic resources](https://www.friendsofmorocco.org/learnarabic.htm). All course prose in this repository is original; the linked textbook is not copied or redistributed.

## Verification

Automated checks cover stage completeness, vocabulary/answer consistency, bookmark identifiers, alphabet/conversation integrity, account/guest isolation, and authenticated write ownership. Browser checks cover lesson navigation, script toggle, bookmarks, spelling aliases, saved drafts after reload, completion and conversation scoring. Supabase security advisor reported no findings after migration. Real email confirmation/recovery and cross-device login must be tested once production URL and SMTP are configured.
