# Todo App

Todo App is a React application that allows users to manage their to-do lists. Users can add new tasks, mark tasks as completed, and delete tasks from their list. The app is built with React and utilizes Redux for state management.

## Directory Structure

The Todo App follows a logical directory structure that promotes organization and separation of concerns. Below is an overview of the main directories and their purposes:

- **src**: This directory contains the source code of the Todo app.
  - **components**: Contains UI components used throughout the app.
    - **common**: Contains components that can be reused throughout the app.
  - **redux**: Contains Redux-related files, including actions, reducers, and the store configuration.
  - **pages**: Contains the main pages of the app, including the task list.
  - **constants**: Contains constants used throughout the app.
  - **styles**: Holds styles and CSS related to the app.
  - **types**: Contains TypeScript type definitions for the app.
  - **utils**: Holds utility functions and helper files used throughout the app.

## Architecture

The Todo app follows a component-based architecture using the following technologies:

- React: A JavaScript library for building user interfaces.
- Redux: A state management library that enables efficient data flow and state updates.
- React-Redux: A library that integrates React with Redux for seamless state management in React applications.

The app's architecture promotes modularity, reusability, and maintainability of the codebase. Components are structured to handle specific functionality, and Redux ensures efficient management of the app's state.

## Installation

To install the required packages, use the package manager of your choice. Here's an example using npm:

```bash
cd todo-app
npm install
```
