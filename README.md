# Zeller Coding Challenge
# Author - Bhuwan Aryal

Welcome to the Zeller Coding Challenge project! This is a simple React application integrated with GraphQL APIs that allows you to fetch and display a list of Zeller customers based on their user type (Admin/Manager).

![Screenshot](./example.gif)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Testing](#testing)
- [Performance Optimization](#performance-optimization)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your development machine.
- An AWS AppSync GraphQL API with API Key authentication. You will need the `aws-exports.js` configuration file for this project.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/bhuwanaryal0202/zeller-coding-challenge.git

### Project Structure

src/
|-- components/
|   |-- CustomerList.tsx     # React components related to the customer list
|   |-- UserTypeSelector.tsx # React components for user type selection
|   |-- ...
|
|-- graphql/
|   |-- queries.ts           # GraphQL queries and mutations
|   |-- ...
|
|-- aws-exports.js            # aws-exports file with all credential
|-- App.tsx                   # The main application component
|-- index.tsx                 # Entry point for rendering the app
|-- apollo.js                 # Apollo Client configuration
|
|-- utils/                    # Utility functions or modules
|
|-- README.md                 # Project documentation
|-- package.json
|-- package-lock.json
|-- tsconfig.json
|-- ...



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Performance Optimization
Performance optimization is essential for ensuring the application runs smoothly. Here are some best practices to consider:

- Caching: Implement caching for API responses or frequently used data.
- Code Splitting: Use code splitting to load only necessary code chunks.
- Virtualization: Implement virtualization for long lists or tables.
- Bundle Analysis: Regularly analyze your bundle size to identify and eliminate unnecessary dependencies.
- Memoization: Consider memoization for expensive computations.


### License
This project is licensed under the MIT License - see the LICENSE file for details.