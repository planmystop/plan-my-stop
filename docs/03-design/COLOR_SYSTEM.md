---
title: Color System
version: 1.0.0
status: Active
owner: Plan My Stop
category: Design
last_updated: 2026-07-03
---

# Color System

> The Color System defines the visual language of Plan My Stop. Colors communicate meaning, establish hierarchy, reinforce branding, improve accessibility, and create emotional connections. Every color used in the product must have a defined purpose.

---

# Purpose

Color should never be decorative.

Every color should communicate

- Meaning
- Status
- Importance
- Emotion
- Brand

Users should understand information before reading text.

---

# Vision

Colors should make users feel

Safe

↓

Confident

↓

Calm

↓

Inspired

↓

In Control

---

# Philosophy

Meaning

↓

Consistency

↓

Accessibility

↓

Brand

↓

Emotion

Color exists to improve understanding.

---

# Core Principles

Colors should be

- Consistent
- Accessible
- Semantic
- Predictable
- Calm
- Premium
- Purposeful
- Scalable

---

# Color Hierarchy

```
Brand Colors

↓

Semantic Colors

↓

Surface Colors

↓

Content Colors

↓

Interactive Colors

↓

Feedback Colors
```

---

# Brand Colors

Primary

Represents

Trust

Journey

Navigation

Intelligence

Secondary

Supports

Exploration

Discovery

Creativity

Accent

Highlights

Premium features

Achievements

Important actions

---

# Semantic Colors

Success

Used for

- Completed Journey
- Booking Success
- Saved
- Healthy Status

Warning

Used for

- Heavy Traffic
- Weather Alert
- Low Fuel
- Battery Warning

Error

Used for

- Navigation Failure
- Payment Error
- Critical Problem
- Invalid Input

Information

Used for

- AI Insight
- Journey Tip
- General Information

Never use semantic colors outside their meaning.

---

# Surface Colors

Define

- Background
- Cards
- Navigation
- Modals
- Dialogs
- Tooltips

Surfaces should create visual hierarchy.

---

# Content Colors

Support

- Primary Text
- Secondary Text
- Disabled Text
- Placeholder
- Links
- Captions

Readability always comes first.

---

# Interactive Colors

Buttons

↓

Links

↓

Hover

↓

Pressed

↓

Focused

↓

Disabled

Interaction states must remain consistent.

---

# Journey Colors

Journey Planned

↓

Journey Active

↓

Journey Completed

↓

Journey Cancelled

↓

Journey Delayed

Each journey state receives a unique visual identity.

---

# Navigation Colors

Current Position

↓

Destination

↓

Suggested Route

↓

Alternative Route

↓

Completed Route

↓

Traffic

Users should immediately understand route status.

---

# Traffic Colors

Free Flow

↓

Moderate

↓

Heavy

↓

Blocked

Traffic colors should match global expectations.

---

# Weather Colors

Sunny

↓

Cloudy

↓

Rain

↓

Storm

↓

Snow

↓

Fog

Weather colors should improve readability.

---

# AI Colors

AI Recommendations

↓

AI Insights

↓

AI Warnings

↓

AI Confidence

AI interactions should feel distinct but subtle.

---

# Notification Colors

Success

↓

Information

↓

Reminder

↓

Warning

↓

Critical

Notifications should communicate urgency instantly.

---

# Achievement Colors

Bronze

↓

Silver

↓

Gold

↓

Platinum

↓

Legend

Recognition should feel premium.

---

# Accessibility

Color alone should never communicate information.

Always combine with

- Icons
- Labels
- Patterns
- Shapes

Meet

- WCAG AA
- WCAG AAA where practical

---

# Dark Mode

Dark mode is

Not

An inverted light theme.

It should be designed independently.

Goals

- Reduce eye strain
- Preserve contrast
- Maintain brand identity

---

# High Contrast Theme

Support users requiring

- Strong contrast
- Larger text
- Clear focus indicators
- Reduced visual ambiguity

Accessibility is a first-class requirement.

---

# Color Tokens

All colors originate from

```
color.primary

color.secondary

color.success

color.warning

color.error

color.info

color.surface

color.background

color.text.primary

color.text.secondary

color.border

color.focus
```

Never reference raw color values directly in components.

---

# Theme Support

Support

- Light
- Dark
- High Contrast

Future

- Seasonal Themes
- Festival Themes
- Brand Themes
- Partner Themes

Themes modify semantic tokens,

not component implementations.

---

# Color Governance

Before adding a new color

Ask

- Does a token already exist?
- Does it communicate new meaning?
- Can an existing semantic color be reused?

Avoid palette expansion without justification.

---

# Design Principles

Color should

Clarify

↓

Guide

↓

Warn

↓

Celebrate

↓

Inspire

Never distract.

---

# Golden Rules

Use color

to communicate.

Never

to decorate.

Every color should have

one meaning,

one purpose,

one token.

Consistency creates trust.

---

# Related Documents

- DESIGN_TOKENS.md
- TYPOGRAPHY.md
- SPACING_SYSTEM.md
- ACCESSIBILITY_UI.md
- PREMIUM_EXPERIENCE.md

---

# Revision History

| Version | Date | Description |
|----------|------------|------------------------------|
| 1.0.0 | 2026-07-03 | Initial Color System Documentation |