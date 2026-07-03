# PROJECT_RULES.md

Version: 1.0.0
Status: Approved
Project: Plan My Stop
Owner: Rupesh

---

# Purpose

This document defines the mandatory engineering, design, architecture, documentation, and AI standards for the Plan My Stop project.

Every contributor, whether human or AI, must follow these rules.

These rules are considered the project's constitution.

---

# Rule 1 — Product First

Every decision must improve one of the following:

• User Experience
• Performance
• Scalability
• Maintainability
• Revenue
• Security

If a change does not improve at least one of these, it should not be implemented.

---

# Rule 2 — Build Once

Temporary solutions are prohibited.

Prototype code must never enter the main codebase.

Every implementation should be production-ready.

---

# Rule 3 — Documentation Before Development

No feature may be implemented unless:

Business requirements exist.

Functional requirements exist.

Technical approach is documented.

UI/UX has been approved.

Database impact has been reviewed.

API impact has been reviewed.

---

# Rule 4 — Mobile First

Every page must be designed for mobile devices first.

Desktop is an enhancement.

Never sacrifice mobile usability.

---

# Rule 5 — Simplicity

Simple solutions are preferred over clever solutions.

Readable code is preferred over short code.

Avoid unnecessary abstraction.

---

# Rule 6 — Modularity

Every component should have one responsibility.

Avoid large files.

Reusable components should be extracted.

Business logic should never live inside UI components.

---

# Rule 7 — Performance

Optimize for speed.

Minimize JavaScript.

Lazy load heavy components.

Optimize images.

Avoid unnecessary re-renders.

Measure performance continuously.

---

# Rule 8 — Accessibility

Keyboard navigation required.

Semantic HTML required.

Color contrast must meet WCAG standards.

Support screen readers.

Never rely on color alone.

---

# Rule 9 — Security

Never expose secrets.

Never hardcode API keys.

Validate all inputs.

Sanitize outputs.

Follow least privilege.

Use HTTPS everywhere.

---

# Rule 10 — AI Development Rules

AI must never invent architecture.

AI must follow project documentation.

AI must generate modular code.

AI must not duplicate logic.

AI must explain complex implementations.

AI-generated code must be reviewed before merging.

---

# Rule 11 — Git Workflow

Every change requires:

Meaningful commit message.

Testing.

Documentation update (if applicable).

Single-purpose commits.

Never commit broken code.

---

# Commit Message Standard

feat: add AI itinerary generator

fix: resolve route calculation bug

docs: update product blueprint

style: improve homepage spacing

refactor: optimize search module

test: add itinerary API tests

chore: update dependencies

---

# Branch Strategy

main

Production-ready code only.

develop

Integration branch.

feature/<feature-name>

New feature development.

bugfix/<issue>

Bug fixes.

hotfix/<issue>

Production emergency fixes.

---

# Folder Naming

Use lowercase.

Use hyphens.

Examples:

journey-planner

business-dashboard

premium-features

Avoid:

JourneyPlanner

JourneyPlannerNew

FinalVersion

Latest

Temp

---

# File Naming

React Components

PascalCase

Example

JourneyPlanner.tsx

Hooks

camelCase

Example

useJourney.ts

Utilities

camelCase

Example

calculateBudget.ts

Markdown

UPPERCASE

PROJECT_CONTEXT.md

SYSTEM_ARCHITECTURE.md

---

# TypeScript Rules

Strict mode enabled.

Avoid any.

Use interfaces where appropriate.

Prefer explicit typing.

No unused variables.

No unused imports.

---

# React Rules

Functional components only.

Hooks only.

Server Components by default.

Client Components only when necessary.

Avoid prop drilling.

Prefer composition.

---

# Styling Rules

Material UI

Theme-based colors only.

No inline colors unless justified.

Consistent spacing.

8px spacing system.

Responsive by default.

Animations should enhance UX.

Never animate for decoration only.

---

# Icons

Material Symbols preferred.

Use SVG when custom icons are required.

Avoid emoji in production UI.

---

# Images

Use optimized formats.

Compress before upload.

Lazy load.

Avoid oversized assets.

---

# Error Handling

Every API call must handle:

Loading

Empty state

Success

Error

Retry

Never leave blank screens.

---

# Logging

Development:

Verbose logging allowed.

Production:

No console.log.

Use structured logging.

---

# Testing

Every critical feature requires:

Unit tests

Integration tests

Manual verification

---

# Documentation Rules

Every feature must include:

Purpose

Requirements

Dependencies

Future improvements

Known limitations

---

# Code Review Checklist

Readable

Reusable

Responsive

Accessible

Secure

Documented

Tested

Performant

Scalable

---

# Quality Standard

Every screen should feel like a premium SaaS product.

No placeholder UI.

No unfinished interactions.

No inconsistent spacing.

No duplicated components.

---

# Project Philosophy

We are not building another travel website.

We are building the world's first Journey Intelligence Platform.

Every decision should reinforce this vision.
