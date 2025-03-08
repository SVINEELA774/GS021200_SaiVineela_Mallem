# Data Viewer App

## Overview
This is a **Progressive Web App (PWA)** built with **ReactJS and TypeScript** for data manipulation and analysis. The application includes functionalities such as adding, updating, and visualizing data using chart libraries.

## Features
- **Stores Page**: Add, remove, update, and reorder stores.
- **SKUs Page**: Manage SKUs with Prices and Costs.
- **Planning Page**: AG-Grid displaying cross join of Stores and SKUs with calculated fields and conditional formatting.
- **Chart Page**: Visualizing GM Dollars and GM %.
- **Navigation**:
  - Top navigation bar with logo and authentication.
  - Left sidebar with icons and labels.
- **Responsive Design**: Minimum width of 1080px.
- **Styling**: Uses a popular UI library.

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/data-viewer-app.git
   cd data-viewer-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the application:**
   ```sh
   npm start
   ```
4. **Build for production:**
   ```sh
   npm run build
   ```

## Folder Structure
```
/data-viewer-app
│-- src
│   │-- components/   # Reusable UI components
│   │-- pages/        # Main pages (Stores, SKUs, Planning, Charts)
│   │-- hooks/        # Custom hooks
│   │-- utils/        # Helper functions
│   │-- assets/       # Images & static files
│-- public/           # Static assets
│-- package.json      # Project dependencies
│-- tsconfig.json     # TypeScript configuration
│-- README.md         # Project documentation
```

## Tech Stack
- **Frontend:** ReactJS, TypeScript
- **State Management:** useState, useEffect, useContext
- **UI Library:** Material UI / Chakra UI
- **Data Grid:** AG-Grid
- **Charts:** Recharts, Chart.js, D3.js
- **PWA Support:** Service Workers

## Issues & Debugging
- **TS2345 Type Errors:** Ensure correct prop types in `onChange` handlers.
- **ESLint Hook Errors:** Make sure hooks like `useState` are used inside function components.
- **Module Build Errors:** Check for misplaced `return` statements inside components.


