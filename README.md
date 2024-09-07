# Wedding Dress Rental Service - Frontend

![React](https://img.shields.io/badge/React-18.x-blue) ![Vite](https://img.shields.io/badge/Vite-4.x-purple) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow) ![License](https://img.shields.io/badge/license-MIT-green)

## About

This project is the frontend application for a Wedding Dress Rental Service, built using ReactJS and Vite. It provides an intuitive and user-friendly interface that allows users to browse available wedding dresses, make reservations, and manage their accounts. The application interacts with the backend API to handle data and perform user actions.

## Features

- **Browse Dresses**: View wedding dresses with detailed information. ✅
- **User Authentication**: Register, login, and manage user sessions. ❌
- **Reservation Management**: Reserve dresses, view reservation history, and manage active reservations. ❌
- **Responsive Design**: Ensures the application is accessible on various devices, including mobile, tablet, and desktop. ✅
- **Interactive UI**: Modern and clean design using React components and hooks. ✅

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js >= 14.x**
- **NPM >= 6.x**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/alaazamelDev/wedding-dress-rental-web.git
   cd wedding-dress-rental-web
   ```

2. **Install Dependencies**

   Install the required packages using NPM:

   ```bash
   npm install
   ```

3. **Environment Setup**

   Open `src/services/api.ts` file and set the api base url.

### Running the Application

Start the development server using Vite:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, use:

```bash
npm run build
```

The built files will be available in the `dist` folder.

## Project Structure

- **`/src`**: Main source code folder containing components, hooks, services, and styles.
- **`/src/components`**: Reusable UI components such as buttons, forms, and modals.
- **`/src/pages`**: Main application pages, including Home, Dress Details, Reservation, and Profile.
- **`/src/services`**: API service functions to interact with the backend.
- **`/src/styles`**: Global and component-specific styles.

## Key Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run preview`**: Previews the built application.
- **`npm test`**: Runs the test suite (if applicable).
- **`npm run lint`**: Lints the codebase to ensure code quality.

## API Integration

This frontend application interacts with the backend API for data and functionality. Key API integrations include:

- **Dresses API**: Fetch and display available dresses.
- **Authentication API**: Manage user registration, login, and logout.
- **Reservations API**: Create and view reservations.

For more details on the backend API, refer to the [API Documentation](https://documenter.getpostman.com/view/27792396/2sAXjNXW9K).

## Code Quality and Best Practices

- Written in modern JavaScript (ES6+).
- Uses functional components and React hooks for clean and maintainable code.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please reach out to [alaaaldeenzamel@gmail.com](mailto:alaaaldeenzamel@gmail.com).
