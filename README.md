# Redux Toolkit Todo App

A simple yet powerful React project built to practice **state management using Redux Toolkit** — featuring adding, editing, toggling, and deleting todos with local persistence.

## 🚀 Tech Stack

- React + Vite
- Redux Toolkit
- React Router DOM
- Tailwind CSS

## ⚙️ Features

- **Add Todo** — Create new tasks with title and description
- **Edit Todo** — Update existing task details
- **Toggle Todo** — Mark tasks as complete or incomplete
- **Delete Todo** — Remove tasks permanently
- **Persistent Storage** — Automatically saves todos in `localStorage`
- **Dynamic Routing** — Edit each todo via unique `/edit/:id` routes

## 🧠 Learning Goals

- Understand the **Redux Toolkit slice** pattern (`createSlice`, `configureStore`, `useDispatch`, `useSelector`)
- Learn how to:
  - Manage global app state efficiently
  - Connect Redux store with React using `<Provider>`
  - Persist and rehydrate state from `localStorage`
  - Work with **non-serializable data** (like `Date` objects) safely
  - Use **React Router DOM** for route-based CRUD operations
- Practice building a clean, modular Redux setup for scalable React apps

## 🖥️ How to Run

```bash
npm install
npm run dev
```
