# FIFA Player Cards Spec

## Overview
Build a React app using Create React App that displays a list of FIFA player cards. Each card shows player details in a React Bootstrap card.

## Goals
- Scaffold app with `create-react-app`
- Create `players.js` exporting an array of at least four player objects
- Build a `Player` component to render individual player data
- Build a `PlayersList` component to map over players and render `Player` for each
- Use React Bootstrap for UI
- Apply inline styling to `Player` cards
- Define default props in `Player` for all attributes
- Render `PlayersList` in `App.js`

## Player Attributes
- `name` (string)
- `team` (string)
- `nationality` (string)
- `jerseyNumber` (number)
- `age` (number)
- `image` (string URL)

## Use Cases
1. **View Player Cards**: App loads and displays all player cards

## Technical Stack
- React (Create React App)
- React Bootstrap for cards
- Inline styling

## Open Questions
- Should we add interaction (e.g., flip card)? (future enhancement)
