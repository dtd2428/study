# 정답·풀이 단축키 및 무응답 표시 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add `Alt + Enter` for answer/explanation display in practice mode and make unanswered questions visibly identifiable while preserving unanswered submission.

**Architecture:** Reuse the existing `session.checked`, `answered`, `feedbackHTML`, and `submitSession` flows in `assets/js/app.js`. Add only quiz-page keyboard handling, unanswered labels, and focused Playwright coverage in a new test file.

**Tech Stack:** Vanilla JavaScript, static HTML, Node.js, Playwright.

## Global Constraints

- Do not reveal answers or explanations in exam mode.
- Do not change the persisted session schema.
- Preserve existing `Alt + Left/Right` navigation.
- Verify with focused and full existing tests before committing.

### Task 1: Add regression coverage

**Files:**
- Create: `tests/answer-shortcut.cjs`
- Read: `index.html`, `assets/js/app.js`

- [ ] Write a Playwright test that starts practice mode, checks `Alt + Enter` with an answer, reloads with an unanswered session, checks `Alt + Enter` without an answer, asserts visible unanswered labels and feedback, then submits an unanswered exam session.
- [ ] Run `node tests/answer-shortcut.cjs` and confirm it fails because the shortcut and unanswered feedback behavior are not implemented.

### Task 2: Implement quiz behavior

**Files:**
- Modify: `assets/js/app.js`

- [ ] Add a keyboard listener scoped to the quiz page that ignores inputs except `Alt + Enter`, triggers the existing check flow without requiring `answered(q)`, and preserves `Alt + Left/Right` navigation.
- [ ] Render unanswered state in the answer area, feedback, question palette, and helper text.
- [ ] Keep exam mode answer-hidden and retain the existing submit confirmation/count behavior.
- [ ] Run the focused test and confirm it passes.

### Task 3: Verify and commit

**Files:**
- Modify: `README.md` only if the existing shortcut documentation needs updating.

- [ ] Run the focused test and the existing smoke/regression tests.
- [ ] Inspect `git diff` and `git status` for only intended changes.
- [ ] Commit with `feat: add alt-enter answer explanation shortcut`.
