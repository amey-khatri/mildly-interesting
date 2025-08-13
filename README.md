
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

