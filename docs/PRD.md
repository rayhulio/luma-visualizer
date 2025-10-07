Product Requirements Document (PRD)
Product Name: LUMA
Tagline: Modular, AI-powered music visualizer for walls.

1. Overview & Vision
LUMA is a modular, retro-style RGB LED matrix system that turns music into a living visual experience.
It brings together AI-enhanced real-time visualizations, tactile interaction, and wall-mountable modular design.
The vision: create a new category of “music-aware home decor” that blends art, interactivity, and social connection.

2. Problem Statement
Invisible taste: Digital listening makes music personal but not visible in physical spaces.
Flat decor: Posters and LED strips are static; they don’t adapt to mood or sound.
Missed social magic: Sharing playlists is functional (links, blends) but not embodied in the room.
Hardware gap: Smart lights (Nanoleaf, Hue) lack deep music integration; hi-fi gear is technical, not expressive.

3. Target Market
Earlyvangelists: Tech-savvy college students, bedroom producers, party hosts, small venue organizers.
SOM: College students and young professionals who invest in music, vibe-setting, and design.
SAM: Global music-enthusiast and home-decor buyers.
TAM: All music lovers seeking expressive, adaptive ambiance.

4. Core Value Proposition
LUMA is the first modular wall display that makes music visible:
AI-driven, retro-pixel visuals adapt to beats, lyrics, and moods.
Modular LED panels grow from desk piece → centerpiece wall.
Tactile “magic knob” + NFC “tap-to-join” unlock shared experiences.
“Turn your walls into music.”

5. User Stories
As a student throwing a party, I want visuals that pulse with the beat so my space feels alive.
As a music lover in a small apartment, I want modular panels that double as art when idle.
As a guest, I want to tap my phone and add my songs, seeing my music blend into the wall visuals.
As a DJ or bar owner, I want a plug-and-play visual system that turns playlists into an immersive wall experience.

6. Key Features (MVP)
Feature
Description
Priority
Modular LED Panels
16×16 or 32×32 retro-pixel squares; connectable via magnets/adhesive.
P0
AI Music Visualization
Cloud pipeline uses Spotify API + audio features to generate adaptive visuals.
P0
Static Display Mode
Displays album art, posters, or curated visuals when idle.
P0
Magic Knob
Rotary encoder to cycle visual styles, palettes, or lock static art.
P1
Tap-to-Join (NFC/QR)
Guests tap to merge playlists; visuals blend taste palettes.
P1

Future (v2+): lyric-aware animations, multi-room sync, artist-designed visual packs.

7. Functional Requirements
Hardware: Modular LED panels (matrix format), Wi-Fi/Bluetooth enabled, wall-mountable.
Controller: Raspberry Pi or ESP32 per cluster, cloud-assisted processing.
Lighting: Addressable RGB LEDs, ≥60fps.
Control: Magic Knob + companion mobile/web app.
Integration: Spotify/Apple APIs; optional lyric APIs.
Power: USB-C primary, daisy-chain power across panels.

8. Non-Functional Requirements
Latency: Visuals <200ms behind audio.
Aesthetic: Retro pixel-art meets sleek wall-decor; premium but fun.
Reliability: Stable multi-panel syncing.
Safety: UL/FCC compliant.

9. User Experience & Design
Look & Feel: Colorful retro-pixel style with modular expansion.
Interaction: Knob as centerpiece; NFC tap for guest magic.
Moments of Wonder: Panels bloom with group taste blends or react to lyric themes.

10. AI/ML Components
Beat & Mood Prediction: Spotify audio features + AI heuristics for lighting.
Lyric Interpretation: Optional AI mappings (“beach” → waves).
Generative Idle Mode: Album art-inspired visuals and abstract pixel patterns.

11. Competitive Landscape
Nanoleaf / Hue: Great lights, no deep music AI.
Hi-Fi DACs/AMPS: Purely functional, no visuals.
DIY LED kits: Require coding, lack polish.
LUMA = design-first + AI-enhanced + modular.

12. Pricing & Business Model
Base unit (single panel + knob): ~$80 MSRP.
Expansion panels: $40–50 each.
Premium packs: Paid visual themes, lyric-aware expansions, pro DJ kits.

13. Launch & Distribution
Phase 1: Kickstarter / Indiegogo for validation.
Phase 2: Campus pilots (UC Berkeley), influencer seeding.
Phase 3: Partnerships with artists, indie venues, and Spotify/Apple.

14. Risks & Assumptions
Market risk: Perceived as novelty → mitigated by modular scaling (desk → wall).
Technical risk: Cloud lyric analysis latency.
Licensing risk: Spotify/Apple API terms.

15. Metrics of Success
200+ preorders at Kickstarter launch.
≥60% weekly active usage in first 90 days.
Net Promoter Score >50.
Organic shares of “Magic Knob moments.”

16. Next Steps
Build working modular LED prototype (Raspberry Pi + matrix).
Design Magic Knob prototype with tactile haptics.
Conduct 15–20 interviews with students, DJs, and venue owners.
Scope cloud lyric + visual generation costs.



