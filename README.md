# ShadowPlay

A **headless React audio player** for building audio experiences with **timed text (LRC)** and **shadowing practice**.

ShadowPlay provides **logic, state, and accessibility** — not UI. You bring your own styles, components, and design system.

---

## Features

- 🎵 Audio playback (play, pause, stop, seek)
- 📜 Timed text / lyrics support (LRC)
- 🎯 Active sentence / phrase / verse tracking
- 🗣️ Shadowing mode (pause & record per line)
- 🎙️ Recording via Web Media APIs
- 🧩 Headless & framework-agnostic
- ♿ Accessibility-first (semantic HTML & ARIA-ready)

---

## Philosophy

ShadowPlay is **headless by design**:

- No UI framework dependencies
- No enforced styles or themes
- Works with MUI, Tailwind, Ant, Vanilla CSS, or anything else

Think of it as an **audio + timing engine**, not a UI kit.

---

## Installation

```bash
npm install shadowplay
```

(Documentation and examples coming soon.)

---

## Usage (Conceptual)

```tsx
import { AudioPlayer } from "shadowplay";

<AudioPlayer
  src="/audio/story.mp3"
  lrcSrc="/audio/story.lrc"
  mode="shadowing"
  onRecordingComplete={(blob) => {
    // send audio for pronunciation evaluation
  }}
/>
```

> ShadowPlay exposes **logic and state only**. You control layout and styling.

---

## Status

🚧 **Early development**

APIs are evolving. Feedback and contributions are welcome.

---

## License

MIT
