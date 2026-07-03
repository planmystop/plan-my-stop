---
title: Design Tokens
version: 1.0.0
status: Active
owner: Plan My Stop
category: Design
last_updated: 2026-07-03
---

# Design Tokens

> Design Tokens are the single source of truth for the visual language of Plan My Stop. Every application, website, mobile app, design file, and UI component must use these tokens instead of hardcoded values.

---

# Purpose

Design Tokens ensure

- Consistency
- Scalability
- Accessibility
- Maintainability
- Cross-platform compatibility

No UI should contain hardcoded colors, spacing, fonts, shadows, or border radii.

---

# Vision

One design language.

Multiple platforms.

Everything should feel like the same product.

---

# Philosophy

Design Decisions

↓

Design Tokens

↓

Components

↓

Pages

↓

Applications

Tokens are the foundation.

---

# Principles

Every visual decision should be

- Reusable
- Predictable
- Accessible
- Themeable
- Platform Independent

---

# Token Hierarchy

```
Foundation Tokens

↓

Semantic Tokens

↓

Component Tokens

↓

Screen Tokens
```

Never skip layers.

---

# Token Categories

The system defines

- Colors
- Typography
- Spacing
- Sizing
- Radius
- Shadows
- Borders
- Opacity
- Motion
- Z-Index
- Breakpoints
- Icons

---

# Naming Convention

Use

```
color.primary

spacing.md

radius.lg

shadow.md

font.heading

motion.fast
```

Avoid

```
blue1

space10

radius2

shadowBig
```

Names describe purpose,

not appearance.

---

# Color Tokens

Foundation

```
color.blue.50
color.blue.100
color.blue.200
...
color.blue.900
```

Semantic

```
color.primary

color.secondary

color.success

color.warning

color.error

color.info

color.background

color.surface

color.border

color.text.primary

color.text.secondary
```

Applications should use semantic tokens.

---

# Typography Tokens

```
font.family.primary

font.family.mono

font.heading.xl

font.heading.lg

font.body.lg

font.body.md

font.body.sm

font.caption
```

Never define font sizes directly in components.

---

# Spacing Tokens

```
spacing.xs

spacing.sm

spacing.md

spacing.lg

spacing.xl

spacing.2xl

spacing.3xl
```

Spacing creates rhythm.

---

# Radius Tokens

```
radius.none

radius.sm

radius.md

radius.lg

radius.xl

radius.full
```

Border radius communicates personality.

---

# Shadow Tokens

```
shadow.none

shadow.sm

shadow.md

shadow.lg

shadow.xl
```

Shadows indicate elevation.

---

# Border Tokens

```
border.width.thin

border.width.medium

border.width.thick

border.color.default

border.color.focus

border.color.error
```

---

# Icon Tokens

```
icon.xs

icon.sm

icon.md

icon.lg

icon.xl
```

Icons maintain consistency across platforms.

---

# Motion Tokens

```
motion.instant

motion.fast

motion.normal

motion.slow
```

Animations should use tokens,

never hardcoded durations.

---

# Opacity Tokens

```
opacity.disabled

opacity.overlay

opacity.hover

opacity.selected
```

---

# Elevation Tokens

```
elevation.0

elevation.1

elevation.2

elevation.3

elevation.4

elevation.5
```

Elevation improves hierarchy.

---

# Breakpoint Tokens

```
mobile

tablet

desktop

wide

ultrawide
```

Responsive layouts depend on breakpoints.

---

# Z-Index Tokens

```
base

dropdown

sticky

overlay

modal

toast

tooltip
```

Avoid arbitrary z-index values.

---

# Theme Tokens

Support

- Light Theme
- Dark Theme
- High Contrast Theme
- Future Brand Themes

Themes should override semantic tokens,

not foundation tokens.

---

# Accessibility

Tokens should satisfy

- WCAG AA minimum
- WCAG AAA where possible
- High Contrast Mode
- Reduced Motion
- Dynamic Text Scaling

Accessibility is built into the design system.

---

# Platform Support

Design Tokens should generate values for

- Web (CSS Variables)
- React
- React Native
- Flutter (Future)
- SwiftUI (Future)
- Jetpack Compose (Future)
- Figma Variables
- Storybook

One token system,

many platforms.

---

# Token Governance

Every new token must

- Solve a real problem
- Follow naming conventions
- Avoid duplication
- Be documented
- Be reviewed

---

# Versioning

Tokens follow Semantic Versioning

Major

Breaking changes

Minor

New tokens

Patch

Corrections

---

# Token Deprecation

Deprecated tokens

- Remain available temporarily
- Include migration guidance
- Are removed only in major releases

---

# Token Documentation

Every token includes

- Name
- Description
- Category
- Usage
- Examples
- Accessibility Notes
- Related Tokens

Documentation is mandatory.

---

# Design Principles

Tokens should

Simplify

↓

Standardize

↓

Scale

↓

Unify

↓

Future-Proof

Everything begins with tokens.

---

# Golden Rules

Never hardcode values.

Never duplicate tokens.

Never bypass semantic tokens.

One source of truth.

Every screen,

every component,

every platform.

---

# Related Documents

- COLOR_SYSTEM.md
- TYPOGRAPHY.md
- SPACING_SYSTEM.md
- ICONOGRAPHY.md
- MOTION_SYSTEM.md
- COMPONENT_LIBRARY.md

---

# Revision History

| Version | Date | Description |
|----------|------------|------------------------------|
| 1.0.0 | 2026-07-03 | Initial Design Tokens Documentation |