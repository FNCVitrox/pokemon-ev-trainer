# Pokemon EV Trainer

A lightweight web app for planning and tracking EV training in **Pokemon FireRed and LeafGreen**.

The app is built for players who want a simple way to choose a Pokemon, follow a recommended EV spread, track defeated training targets, and understand how EVs, Pokerus, and the Macho Brace affect training.

Live site: [https://fncvitrox.github.io/pokemon-ev-trainer/](https://fncvitrox.github.io/pokemon-ev-trainer/)

## Features

- Searchable Kanto Pokemon list
- Recommended EV spreads for story-friendly builds
- Build suggestions with natures, items, moves, and short move explanations
- Manual EV editing with stat caps
- Training target buttons for common FireRed / LeafGreen EV spots
- Pokerus and Macho Brace multiplier support
- Undo for training clicks
- Shiny artwork toggle
- German and English language switch
- Mobile-friendly layout
- Visual tutorial explaining how EV training works

## How It Works

1. Pick the Pokemon you want to train.
2. Review the recommended build and EV target.
3. Enable Pokerus and/or Macho Brace if your Pokemon has them.
4. Defeat the matching Pokemon in-game.
5. Tap the same defeated Pokemon in the app.
6. Stop when the target EV spread is complete.

Example:

If you defeat 10 Abra, you gain Sp. Atk EVs.

- No bonus: `10 Sp. Atk EVs`
- Macho Brace: `20 Sp. Atk EVs`
- Pokerus: `20 Sp. Atk EVs`
- Pokerus + Macho Brace: `40 Sp. Atk EVs`

## Why This Exists

FireRed and LeafGreen do not show exact EV numbers in-game. You can notice EV training indirectly through stat gains on level-up, but the safest way to train accurately is to count defeated Pokemon.

This app acts as that counter and keeps the target build visible while you play.

## Tech Stack

This is a static frontend project:

- `index.html`
- `styles.css`
- `app.js`

No build step, package manager, backend, account system, or database is required.

## Run Locally

Clone the repository and open `index.html` in your browser.

```bash
git clone https://github.com/FNCVitrox/pokemon-ev-trainer.git
cd pokemon-ev-trainer
```

You can also serve it with any static file server if you prefer.

## Notes

- The app focuses on FireRed / LeafGreen training.
- EV recommendations are meant to be practical and beginner-friendly, not strict competitive Smogon sets.
- Pokemon artwork is loaded from the public PokeAPI sprites repository.
- Data sources and audit notes are documented in [`DATA_SOURCES.md`](DATA_SOURCES.md).

## License

This project is currently published without a specific license.
