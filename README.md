# Netflix Clone

A Netflix-inspired movie streaming frontend built with **React.js** and the **TMDB API**.

The application dynamically fetches movie and TV-show data from TMDB and displays it through reusable React components, including a featured banner, categorized movie rows, and YouTube trailer playback.

## Features

- 🎬 Dynamic movie and TV-show content using the TMDB API
- 🖼️ Random featured title displayed in the hero banner
- 📺 Multiple movie categories
- 🎞️ Netflix Originals
- 🔥 Trending movies and shows
- ⭐ Top-rated movies
- 🎭 Genre-based movie sections
- ▶️ YouTube trailer playback
- 📱 Responsive Netflix-inspired interface
- ⚡ Axios-based API requests
- 🧩 Reusable React components

## Tech Stack

- **React.js**
- **JavaScript**
- **Axios**
- **TMDB API**
- **React YouTube**
- **Movie Trailer**
- **CSS**
- **Firebase Hosting**

## Project Structure

```text
src/
├── App.js
├── axios.js
├── Requests.js
├── Banner.js
├── Banner.css
├── Nav.js
├── Nav.css
├── Row.js
├── Row.css
├── App.css
└── index.js
```

## How It Works

The application uses the TMDB API as its movie and TV-show data source.

Axios is configured with the TMDB API base URL, while `Requests.js` contains the different API endpoints used by the application.

The main `App` component renders the navigation bar, featured banner, and multiple reusable `Row` components.

Each `Row` receives a title and API endpoint as props, fetches its corresponding movie data, and renders the results as horizontally scrollable posters.

Clicking a movie poster attempts to find its trailer and displays the corresponding YouTube video.

## API Categories

The application currently uses TMDB endpoints for:

- Netflix Originals
- Trending content
- Top-rated movies
- Action
- Comedy
- Horror
- Romance
- Documentaries

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd netflix
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add your TMDB API key:

```env
REACT_APP_TMDB_API_KEY=your_api_key_here
```

Start the development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Production Build

To create a production build:

```bash
npm run build
```

## Disclaimer

This project is a personal educational project inspired by the Netflix user interface. It is not affiliated with or endorsed by Netflix.

Movie and TV-show data is provided by the TMDB API.

## What I Learned

This project helped me practice:

- React component architecture
- React hooks such as `useState` and `useEffect`
- REST API integration
- Axios
- Asynchronous data fetching
- Passing data through component props
- Conditional rendering
- Dynamic UI rendering
- Working with third-party APIs
- YouTube trailer integration
- Responsive CSS layouts
- Deploying a React application
