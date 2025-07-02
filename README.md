
# 🧠 MildlyInteresting – React + Supabase Web App

**Live Demo**: 🌐 [https://mildlyinteresting.netlify.app/](https://mildlyinteresting.netlify.app/)

MildlyInteresting is a modern web application that lets users share interesting facts, categorize them, and vote on their credibility. It features a sleek design, responsive layout, and live backend connectivity using Supabase.

---

## 🚀 What This App Does

- Users can **submit facts** with an optional source link and select a **category**.
- Each fact appears on the homepage and can be **upvoted** based on:
  - Whether it's interesting
  - Whether it's mind-blowing
  - Whether it's false (disputed)
- Users can **filter facts by category** using interactive buttons.
- A **real-time database** connection ensures newly added facts appear immediately.
- Clean UI with responsive layout and animated vote buttons.

---

## 🛠 Frameworks and Libraries Used

### 🖥 Frontend
- **React**: For building UI components and stateful logic.
- **CSS (custom)**: A colorful, responsive UI using modern styles and media queries.
- **Google Fonts (Sono, Coiny)**: For stylish typography.

### ☁ Backend
- **Supabase**: An open-source Firebase alternative used for:
  - Real-time data storage and retrieval of facts
  - PostgreSQL database
  - Supabase JS client for querying

---

## 🔧 How It All Fits Together

1. **Frontend (React):**
   - `App.js`: Main app logic, manages state, fetches facts, and displays UI elements.
   - `index.js`: Entry point that renders the React app into the DOM.
   - `style.css`: Styles all components, including layout, buttons, fact boxes, and mobile responsiveness.

2. **Backend (Supabase):**
   - `supabase.js`: Initializes and exports the Supabase client using your project URL and API key.
   - Used in `App.js` to fetch, insert, and update facts in the database.

3. **Components:**
   - Facts are rendered dynamically with vote buttons.
   - Vote counts update both locally and in the Supabase database.
   - Filtering is achieved by applying logic to fetched data and re-rendering based on category.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
