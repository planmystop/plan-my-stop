---
title: Animation Guidelines
version: 1.0.0
status: Approved
owner: Plan My Stop
category: Design System
priority: High
last_updated: 2026-07-03
---

# Animation Guidelines

> Animation is communication through motion. Every animation in Plan My Stop should improve usability, provide meaningful feedback, reinforce hierarchy, and create a premium experience. Animation should never exist solely for decoration.

---

# Purpose

Animations should help users

Understand

↓

Navigate

↓

Recognize

↓

Focus

↓

Complete Tasks

Motion exists to communicate.

Not to entertain.

---

# Vision

Users should never think

"That animation looks cool."

They should think

"That interaction feels natural."

---

# Philosophy

Every movement must answer

Why is this moving?

If no meaningful answer exists,

remove the animation.

---

# Animation Principles

Animations should be

- Purposeful
- Fast
- Predictable
- Smooth
- Accessible
- Consistent
- Interruptible
- Performance Friendly

---

# Animation Objectives

Animations communicate

- Change
- Feedback
- Hierarchy
- Relationships
- Focus
- Navigation
- Completion

---

# Never Animate

Never animate

- Large paragraphs
- Navigation delays
- Critical alerts
- Every element simultaneously
- Decorative movement

Motion should never slow users down.

---

# Motion Hierarchy

```
Critical

↓

Navigation

↓

Interaction

↓

Feedback

↓

Decoration
```

Critical information always takes priority.

---

# Animation Categories

Support

- Page Transitions
- Component Transitions
- Microinteractions
- Loading
- Success
- Error
- AI Responses
- Notifications
- Maps
- Journey Timeline

---

# Page Transitions

Purpose

Maintain orientation.

Examples

```
Fade

Slide

Cross Fade

Scale
```

Avoid

- Spins
- Flips
- Excessive zoom

---

# Navigation Animation

When changing screens

Users should understand

Where they came from

↓

Where they are going

↓

What changed

Navigation should never feel abrupt.

---

# Modal Animation

Open

Fade + Scale

Close

Fade + Scale

Duration

200–250 ms

Do not bounce dialogs.

---

# Bottom Sheet

Open

Slide Up

Close

Slide Down

Should follow touch direction.

---

# Drawer

Desktop

Slide

Mobile

Swipe

Animation follows edge direction.

---

# Card Animation

Hover

Slight elevation

↓

Small shadow increase

↓

Very subtle scale

Never exceed 2% scaling.

---

# Button Animation

States

Hover

Pressed

Disabled

Loading

Success

Feedback should feel immediate.

---

# Input Animation

Animate

Focus

Validation

Success

Error

Never animate typing.

---

# Loading Animation

Prefer

Skeleton

↓

Progress

↓

Spinner

Spinners should be a last resort.

---

# Skeleton Screens

Skeletons should mimic

Real layout

↓

Real spacing

↓

Real proportions

Avoid generic gray rectangles.

---

# Progress Indicators

Support

- Linear
- Circular
- Journey Progress
- Upload Progress

Always show progress when measurable.

---

# Success Animation

Examples

- Checkmark
- Gentle Scale
- Fade

Celebrate briefly.

Never exaggerate.

---

# Error Animation

Use

Small shake

↓

Highlight

↓

Explanation

Avoid aggressive shaking.

---

# AI Animation

AI should appear

Thinking

↓

Responding

↓

Highlighting

↓

Explaining

Motion should reinforce intelligence.

---

# Notification Animation

Toast

Slide

↓

Fade

↓

Disappear

Notifications should never cover important controls.

---

# Journey Timeline

Timeline events

Fade

↓

Slide

↓

Highlight

Progress should feel continuous.

---

# Map Animation

Support

- Smooth Zoom
- Marker Appearance
- Route Drawing
- Location Update
- Camera Movement

Avoid sudden jumps.

---

# List Animation

When items appear

Use staggered fade.

Never animate hundreds of items.

---

# Search Results

Results

Fade

↓

Slide

↓

Highlight Changes

Search should feel responsive.

---

# Hover Animation

Desktop only.

Never rely on hover for critical functionality.

---

# Gesture Animation

Support

- Swipe
- Drag
- Pinch
- Pull to Refresh
- Long Press

Animation follows user input.

---

# Timing Guidelines

Instant

0–100 ms

Fast

100–200 ms

Normal

200–300 ms

Slow

300–500 ms

Avoid animations longer than 500 ms.

---

# Easing

Preferred

Ease Out

Ease In Out

Spring (Subtle)

Avoid

Elastic

Bounce

Overshoot

Unless specifically justified.

---

# Interruptibility

Animations should stop immediately

if users interact again.

Never trap users in animations.

---

# Accessibility

Support

Reduced Motion

↓

Disable non-essential animations

↓

Preserve functionality

Respect operating system accessibility settings.

---

# Performance

Maintain

60 FPS minimum

Avoid

- Layout Thrashing
- Expensive Blur
- Large Repaints
- Continuous Animation

Use GPU acceleration where appropriate.

---

# Platform Guidelines

Web

CSS

Framer Motion

React Native

Reanimated

Native APIs

Keep motion behavior consistent.

---

# AI Implementation Notes

Developers should

- Reuse motion tokens
- Avoid custom durations
- Use shared easing functions
- Follow semantic motion patterns

Never hardcode animation timing.

---

# Motion Tokens

Use

```
motion.instant

motion.fast

motion.normal

motion.slow

motion.duration.fast

motion.duration.normal

motion.duration.slow

motion.ease.standard

motion.ease.decelerate

motion.ease.accelerate
```

---

# Testing Checklist

Verify

✓ Smooth at 60 FPS

✓ Reduced Motion

✓ Keyboard Navigation

✓ Mobile Gestures

✓ Touch Responsiveness

✓ Screen Reader Compatibility

✓ No Motion-Induced Delays

---

# Common Mistakes

Avoid

❌ Animation for decoration

❌ Long delays

❌ Excessive scaling

❌ Continuous movement

❌ Too many simultaneous animations

❌ Flashing elements

❌ Blocking user input

---

# Future Vision

Future enhancements

- Adaptive Motion
- AI Context-Aware Animation
- Platform-Specific Motion
- Dynamic Motion Scaling
- Haptic + Motion Integration
- Vehicle Display Motion Profiles

---

# Design Principles

Motion should

Guide

↓

Explain

↓

Confirm

↓

Reward

↓

Disappear

Great animation feels invisible.

---

# Golden Rules

Animate

only with purpose.

Prefer

clarity over beauty.

Prefer

speed over spectacle.

Never let animation delay user work.

The best animation is the one users understand without noticing.

---

# Related Documents

- MOTION_SYSTEM.md
- DESIGN_TOKENS.md
- COMPONENT_STATES.md
- ACCESSIBILITY_UI.md
- MICROINTERACTIONS.md

---

# Revision History

| Version | Date | Description |
|----------|------------|------------------------------|
| 1.0.0 | 2026-07-03 | Initial enterprise animation guidelines |