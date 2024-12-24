# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Install Dependencies
### `npm install`

## Run Project
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Approach

- Dynamic Form: Use Axios to fetch Pokémon types from the PokeAPI for a dropdown and enable real-time filtering by name or type using React hooks.
- Pokémon List: Display Pokémon as cards in a responsive grid, showing their name and image.
- Navigation: Use React Router for navigation, with a detailed page for each Pokémon showing stats, types, and abilities.
- Breadcrumb: Include breadcrumbs for better navigation (e.g., Home > Pokémon Name).
- State Management: Use useState and useEffect for dynamic updates, with custom hook for reusability.
- Error Handling: Add loading indicators and error messages for API interactions.
- Modular Code: Create reusable components like Card, Breadcrumb, API services and Loader.
- Responsive Design: Ensure adaptability for mobile, tablet, and desktop, maintaining 2+ cards per row.
