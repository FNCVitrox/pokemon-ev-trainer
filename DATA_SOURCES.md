# Data Sources and Validation

This project is a static FireRed / LeafGreen EV trainer. It does not call a backend or database at runtime. Most gameplay data is stored directly in `app.js` so the site works from GitHub Pages.

## Primary Sources

### PokeAPI

Source: https://pokeapi.co/docs/v2

Used for:

- Kanto Pokemon IDs, names, types, and sprite paths
- FireRed / LeafGreen move learnability through `version_group_details`
- Move data such as type, power, accuracy, and PP
- EV yields for training targets
- Ability checks for recommended builds
- Generation-specific type checks where available

Important endpoints used during audits:

- `https://pokeapi.co/api/v2/pokemon/{id}`
- `https://pokeapi.co/api/v2/move/{id-or-name}`
- `https://pokeapi.co/api/v2/type/{id-or-name}`
- `https://pokeapi.co/api/v2/item/{id-or-name}`

### PokeAPI Sprites Repository

Source: https://github.com/PokeAPI/sprites

Used for:

- Normal and shiny Pokemon artwork
- Runtime image URLs from the public raw GitHub sprite files

The app only loads images from GitHub's raw sprite host and blocks other remote connections through the Content Security Policy in `index.html`.

### FireRed / LeafGreen Held Item Locations

Source: https://altissimo1.github.io/Main-Series/FRLG/held-items.html

Used for:

- Held item availability
- Wild-held item sources
- Trainer Tower / e-Reader caveats
- International FR/LG availability notes

This is especially important for items such as Scope Lens, BrightPowder, Focus Band, Dragon Scale, and King's Rock, where normal international availability is not always the same as special content or trades from other Gen 3 games.

## Manual Curation

Some app data is intentionally curated for PvE instead of strict competitive play:

- Recommended EV spreads
- Recommended natures
- Recommended story-friendly movesets
- Build item suggestions
- Training location shortcuts
- Tutorial wording
- German / English display text

These choices are meant to be practical for a normal FireRed / LeafGreen playthrough. They are not meant to be Smogon sets or perfect link-battle builds.

## Validation Already Done

The current data has been checked with local scripts and PokeAPI lookups:

- All 151 Kanto Pokemon IDs, names, and types were compared against PokeAPI.
- Nidoran names were aligned with PokeAPI as `Nidoran female` and `Nidoran male` display variants.
- FireRed / LeafGreen move recommendations were checked against PokeAPI `firered-leafgreen` learnability.
- Evolution-family moves were handled correctly, so moves learned before evolution count for evolved Pokemon.
- Training targets were checked against PokeAPI EV yields.
- Doduo was replaced with Spearow for Speed training because Doduo gives Attack EVs.
- Recommended build EV targets were checked for valid stat keys, per-stat caps, and total EV limits.
- Build moves were synchronized with the moves actually rendered in the UI.
- Build item suggestions were cleaned up to avoid unreliable normal FR/LG availability.
- Item guide entries were reviewed against held-item location data.
- English UI labels and accessibility labels were checked for leftover German text.

## Known Scope Limits

- The app focuses on FireRed / LeafGreen and Kanto Pokemon.
- The type chart uses Gen 3 logic. Fairy type is intentionally not included.
- Some locations are written as practical route-guide notes, not exhaustive encounter tables.
- Item availability can differ between international cartridges, Japanese e-Reader content, Trainer Tower modes, and trades from other Gen 3 games. The app calls this out where it matters.
- PokeAPI currently reflects modern Pokemon data in some places. For historical Gen 3 cases, the app uses FireRed / LeafGreen-specific version group data or documented Gen 3 behavior.

## How to Re-Audit Later

When changing data, re-check these areas:

1. Pokemon identity: ID, name, type, sprite.
2. Moves: FireRed / LeafGreen learnability, type, category, power, accuracy, PP.
3. EV yields: defeated Pokemon, EV stat, EV amount.
4. Items: normal availability, wild-held sources, postgame status, version caveats.
5. Builds: EV total, nature, ability, item, moves, PvE usefulness.
6. English / German UI: no mixed-language visible text.
7. Mobile layout: no horizontal overflow and no oversized cards.

Suggested future prompt:

```text
Please audit the Pokemon EV Trainer data and UI. Check PokeAPI for Pokemon IDs/types, FRLG move learnability, move stats, EV yields, and abilities. Check item/location data against FireRed/LeafGreen sources. Flag anything uncertain before changing it, then fix confirmed issues, run local checks, and commit/push the result.
```
