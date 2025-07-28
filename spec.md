# React Component Checkpoint Spec

## Overview
Build a React app using Create React App demonstrating JSX and reusable components. Displays product details in a Bootstrap card and a personalized greeting.

## Goals
- Scaffold app with `create-react-app`
- Define a `product` JSON in `product.js` (name, price, description, image URL)
- Create four components for each field: `Name`, `Price`, `Description`, `Image` in `components/`
- Use React Bootstrap Card in `App.js` to compose these components
- Show greeting message below card: "Hello, <FirstName>!" or "Hello, there!"
- Conditionally render a profile image if `firstName` provided

## Technical Stack
- React (Create React App)
- React Bootstrap for UI
- JSX for component logic

## Requirements
1. **product.js** exports:
   ```js
   export const product = {
     name: 'Awesome Widget',
     price: 49.99,
     description: 'An awesome widget that makes life easier.',
     image: 'https://via.placeholder.com/150'
   };
