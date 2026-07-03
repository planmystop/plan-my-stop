---
title: UI Patterns
version: 1.0.0
status: Active
owner: Plan My Stop
category: Design
last_updated: 2026-07-03
---

# UI Patterns

> This document defines the reusable user interface patterns used throughout Plan My Stop. These patterns ensure consistency, reduce cognitive load, and create a premium user experience.

---

# Purpose

A UI pattern is a reusable solution to a common user interaction.

Instead of designing every screen independently, Plan My Stop uses consistent patterns across the entire application.

Benefits

- Faster Development
- Better UX
- Better Consistency
- Easier Learning
- Lower Maintenance

---

# Design Philosophy

Users should never need to learn a screen twice.

If a pattern appears once,

it should behave the same everywhere.

---

# Pattern Categories

The application uses

- Navigation Patterns
- Search Patterns
- List Patterns
- Card Patterns
- Detail Patterns
- Form Patterns
- AI Patterns
- Map Patterns
- Journey Patterns
- Feedback Patterns
- Loading Patterns
- Empty Patterns
- Error Patterns

---

# Navigation Pattern

Every major page follows

```
Page Header

↓

Primary Content

↓

Floating Primary Action

↓

Bottom Navigation (Mobile)

or

Side Navigation (Desktop)
```

Navigation should always remain predictable.

---

# Search Pattern

Every search page follows

```
Search Bar

↓

Recent Searches

↓

Suggested Searches

↓

Filters

↓

Results

↓

Map (Optional)
```

Search should begin immediately as the user types.

---

# Journey Planning Pattern

```
Destination

↓

Travel Preferences

↓

AI Analysis

↓

Journey Options

↓

Journey Timeline

↓

Confirmation
```

The planning flow should never feel like filling a form.

It should feel like planning with an intelligent assistant.

---

# AI Recommendation Pattern

Every AI recommendation contains

- Recommendation
- Explanation
- Confidence Level
- Why Suggested
- Accept
- Dismiss

Users should always understand why AI suggested something.

---

# Card Pattern

Every card should contain

- Title
- Supporting Information
- Primary Action
- Optional Secondary Action

Cards should never contain unnecessary information.

---

# List Pattern

Lists should support

- Search
- Sorting
- Filtering
- Pagination or Infinite Scroll
- Empty State

Long lists should remain fast.

---

# Detail Page Pattern

Every detail page follows

```
Hero Image

↓

Summary

↓

Primary Action

↓

Key Information

↓

Photos

↓

Reviews

↓

Related Recommendations
```

Important information appears first.

---

# Form Pattern

Forms should

- Group related fields
- Validate immediately
- Explain errors clearly
- Auto-save where appropriate

Long forms should be divided into logical sections.

---

# Confirmation Pattern

Critical actions require confirmation.

Examples

- Delete Journey
- Cancel Subscription
- Remove Business
- Delete Account

Confirmations should explain consequences.

---

# Feedback Pattern

Every important action provides feedback.

Examples

Journey Saved

↓

Success Toast

Trip Shared

↓

Confirmation Banner

AI Completed

↓

Success Animation

---

# Loading Pattern

Never display blank pages.

Preferred loading methods

- Skeleton Screens
- Progressive Loading
- Placeholder Cards
- Map Placeholder

Avoid blocking the interface.

---

# Empty State Pattern

Every empty state includes

- Illustration
- Title
- Explanation
- Primary Action

Example

No Saved Trips

↓

Plan Your First Journey

---

# Error Pattern

Every error includes

- Friendly Message
- Explanation
- Recovery Action
- Retry Option

Never expose technical details.

---

# AI Chat Pattern

Every AI interaction includes

- User Message
- AI Response
- AI Explanation
- Suggested Actions
- Follow-up Questions

The AI should guide users rather than waiting for commands.

---

# Notification Pattern

Notifications should include

- Icon
- Short Title
- Brief Description
- Timestamp
- Action

Notifications should never interrupt the user's current task unless critical.

---

# Map Pattern

Every map screen should provide

- Current Location
- Journey Route
- Nearby Recommendations
- Quick Actions
- Route Information

Maps should support planning, not just navigation.

---

# Journey Timeline Pattern

Timeline items include

- Time
- Location
- Activity
- Duration
- Travel Distance
- AI Suggestions

Users should understand their entire journey at a glance.

---

# Dashboard Pattern

Every dashboard includes

- Welcome Section
- Quick Actions
- Current Journey
- AI Insights
- Recommendations
- Recent Activity

Dashboards should prioritize actions over information.

---

# Mobile Pattern

Mobile screens should

- Support one-hand usage
- Place primary actions within thumb reach
- Avoid excessive scrolling
- Minimize typing

---

# Desktop Pattern

Desktop layouts should

- Use additional space wisely
- Avoid stretching content
- Maintain readable line lengths
- Support keyboard shortcuts

---

# Animation Pattern

Animations should communicate

- Navigation
- State Change
- Success
- Progress

Avoid decorative animations.

---

# Pattern Rules

Every new feature should

- Reuse existing patterns
- Avoid creating new patterns without justification
- Follow accessibility standards
- Support dark mode
- Be responsive

---

# Future Patterns

Future additions

- Voice Interaction
- AI Co-Planning
- Collaborative Journey Planning
- Live Journey Tracking
- Augmented Reality Navigation
- AI Memory Timeline

---

# Best Practices

Always

- Reuse patterns
- Keep interfaces predictable
- Explain AI recommendations
- Prioritize user tasks
- Minimize cognitive load

Never

- Reinvent interactions
- Surprise users
- Hide primary actions
- Create inconsistent layouts

---

# Related Documents

- UX_PRINCIPLES.md
- PREMIUM_EXPERIENCE.md
- COMPONENT_LIBRARY.md
- DESIGN_SYSTEM.md
- RESPONSIVE_DESIGN.md

---

# Revision History

| Version | Date | Description |
|----------|------------|----------------------|
| 1.0.0 | 2026-07-03 | Initial UI Patterns |