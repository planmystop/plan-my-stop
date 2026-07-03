# Accessibility UI Guidelines

**Document Version:** 1.0

**Status:** Draft

**Owner:** UX Team

**Applies To**

- Web
- Mobile
- Tablet
- Desktop
- PWA
- AI Interfaces

---

# Purpose

Accessibility is a core product requirement.

Every user, regardless of ability, device, language, or environment, should be able to successfully use Plan My Stop.

Accessibility is not an optional feature.

It is a quality requirement.

---

# Goals

Our accessibility goals are to

- Support every user
- Reduce barriers
- Improve usability
- Meet WCAG standards
- Improve AI understanding
- Improve SEO
- Improve keyboard navigation
- Improve screen reader support

---

# Accessibility Principles

Design for

Everyone

↓

Every Device

↓

Every Ability

↓

Every Environment

↓

Every Situation

---

# Compliance

Minimum

WCAG 2.2 AA

Preferred

WCAG AAA

---

# Accessibility Pillars

Every interface must be

Perceivable

Operable

Understandable

Robust

Consistent

Accessible

---

# Supported Users

Our product supports

Users with

• Blindness

• Low Vision

• Color Blindness

• Hearing Loss

• Motor Disabilities

• Cognitive Disabilities

• Temporary Disabilities

• Elderly Users

• One-Handed Users

• Poor Network Users

---

# Semantic HTML

Always use semantic elements.

Correct

```
<header>

<nav>

<main>

<section>

<article>

<footer>
```

Avoid

```
<div>

<div>

<div>

<div>
```

---

# Headings

Every page starts with

One H1

Example

```
H1

↓

H2

↓

H3

↓

H4
```

Never skip heading levels.

---

# Images

Every image needs

Alternative Text.

Good

```
Traveler standing beside mountain lake.
```

Bad

```
Image123.jpg
```

Decorative images

must use

```
alt=""
```

---

# Icons

Icons must never communicate meaning alone.

Always pair icons with

Text

Tooltip

Label

---

# Buttons

Buttons require

Visible Label

Accessible Name

Keyboard Support

Focus State

Hover State

Pressed State

Disabled State

Loading State

---

# Links

Every link should explain

its destination.

Good

```
View Journey Details
```

Bad

```
Click Here
```

---

# Forms

Every field needs

Visible Label

Accessible Label

Helper Text

Validation

Error Message

Keyboard Support

Never rely on placeholders.

---

# Form Errors

Errors should explain

Problem

↓

Reason

↓

Solution

Example

Good

```
Password must contain at least 8 characters.
```

Bad

```
Invalid Password
```

---

# Required Fields

Required fields

must be clearly indicated.

Example

```
Email *

Required
```

Do not rely only on color.

---

# Color Usage

Never communicate using

Color Only.

Always combine

Color

+

Icon

+

Text

Example

Good

```
✓ Success
```

Bad

Green only.

---

# Color Contrast

Minimum

4.5:1

Preferred

7:1

Large Text

3:1

---

# Typography

Minimum font size

16 px

Preferred

18 px

Support

Large Text Mode

Responsive Scaling

Readable Line Height

---

# Keyboard Navigation

Everything must work using

Tab

Shift + Tab

Enter

Space

Escape

Arrow Keys

No exceptions.

---

# Focus Indicators

Focused elements must be obvious.

Never remove

outline

or focus rings.

---

# Focus Order

Navigation follows

Top

↓

Bottom

↓

Left

↓

Right

Avoid unexpected jumps.

---

# Skip Links

Support

Skip Navigation

Skip Content

Skip Search

Skip Footer

---

# Screen Readers

Every interactive element must expose

Accessible Name

Role

State

Description

Hint

---

# ARIA Usage

Use ARIA only

when native HTML

cannot express semantics.

Examples

```
aria-label

aria-expanded

aria-current

aria-live

aria-describedby
```

Avoid unnecessary ARIA.

---

# Live Regions

Announce

Success Messages

Errors

Progress

Notifications

Loading

Use

```
aria-live="polite"

aria-live="assertive"
```

appropriately.

---

# Motion

Support

Reduced Motion.

Disable

Large Animations

Parallax

Auto Scroll

Continuous Motion

---

# Flashing

Never flash

more than

3 times

per second.

---

# Audio

Provide

Captions

Subtitles

Transcripts

Volume Controls

Mute

Replay

---

# Video

Videos require

Captions

Transcript

Pause

Stop

Replay

---

# Maps

Maps require

Voice Navigation

Text Directions

Keyboard Support

Large Controls

High Contrast

Alternative Route List

---

# AI Accessibility

AI responses should

Use Simple Language

Support Voice

Explain Recommendations

Avoid Technical Terms

Support Multiple Languages

---

# Mobile Accessibility

Touch Target

Minimum

48dp

Spacing

Minimum

8dp

Support

Voice

Gestures

Keyboard

Switch Devices

---

# Dark Mode

Dark Mode must preserve

Contrast

Readability

Focus

Icons

Status Colors

---

# Notifications

Notifications should

Be announced

Be dismissible

Remain keyboard accessible

Avoid stealing focus

---

# Loading

Skeletons are preferred

over spinners.

Announce loading state.

---

# Empty States

Every empty state includes

Illustration

Heading

Explanation

Primary Action

---

# Error Pages

Every error page explains

What Happened

Why

Recovery

Support

Retry

---

# Accessibility Testing

Every release must include

Keyboard Testing

Screen Reader Testing

Contrast Testing

Zoom Testing

Reduced Motion Testing

Mobile Testing

RTL Testing

Voice Testing

---

# Accessibility Checklist

Before release verify

✓ Keyboard

✓ Screen Reader

✓ Labels

✓ Headings

✓ Contrast

✓ Forms

✓ Images

✓ Maps

✓ AI

✓ Motion

✓ Zoom

✓ RTL

✓ Large Text

✓ Touch Targets

✓ Voice

---

# Common Mistakes

Never

❌ Remove focus outlines

❌ Use color only

❌ Tiny buttons

❌ Placeholder labels

❌ Auto-play media

❌ Infinite animations

❌ Keyboard traps

❌ Missing alt text

❌ Low contrast

❌ Hidden labels

---

# Developer Checklist

Every UI component must support

✓ Accessibility

✓ Keyboard

✓ Focus

✓ Screen Reader

✓ Responsive

✓ Dark Mode

✓ High Contrast

✓ Reduced Motion

✓ RTL

✓ Localization

---

# AI Coding Rules

AI-generated code must

Use semantic HTML

Generate ARIA attributes

Preserve focus

Support keyboard navigation

Generate accessible forms

Use design tokens

Respect reduced motion

Maintain color contrast

Never remove accessibility features

---

# Success Criteria

A feature is complete only when

✓ WCAG AA passes

✓ Accessibility testing passes

✓ Manual testing passes

✓ Keyboard testing passes

✓ Screen reader testing passes

✓ Mobile testing passes

✓ AI review passes

---

# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Initial Release | Accessibility UI Guidelines |