# Pokémon Memory Game

This is an interactive memory game built with React, utilizing data from the Pokémon API for the card images. The objective of the game is to find all matching pairs of cards in as few attempts as possible.

## Key Features

- **Intuitive User Interface:** Clean and engaging design featuring Pokémon cards.
- **API Integration:** Pokémon images are fetched dynamically from the PokeAPI.
- **Scorekeeping:**
  - **Current Score:** Displays the player's score during the current game.
  - **Best Score:** Records the highest score achieved across previous sessions.
- **Random Order:** Cards are shuffled randomly at the start of each game and whenever a pair is successfully matched.
- **Dynamic Effects:** Cards have a subtle lift and shadow change on hover, providing visual feedback.
- **Adaptive Design:** The layout adapts to different screen sizes (further testing and adjustments needed for full responsiveness).
- **Styled with CSS:** The application is styled with CSS for an appealing presentation.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Hooks:** `useState`, `useEffect`, and `useCallback` for managing state and side effects.
- **PokeAPI:** A RESTful API to obtain Pokémon information.
- **CSS:** For styling the components.

## How to Run the Project

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:osoriogeorge/Project-Memory-Card.git
    cd Project-Memory-Card
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    # or
    yarn start
    ```

    This will open the application in your browser at `http://localhost:5173`.

## Credits

- Pokémon images are provided by the [PokeAPI](https://pokeapi.co/).
- The Pokeball icon (if used) may originate from various online sources. Thanks to their creators.

## Potential Future Improvements

- Implement different difficulty levels (varying the number of cards).
- Add an attempt counter.
- Enhance responsiveness for various screen sizes (full responsive design).
- Persist the best score using `localStorage` or a database.
- Add more elaborate animations.
- Implement a turn-based game system for multiple players (optional).

Thank you for playing!
