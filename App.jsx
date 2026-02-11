import { useContext } from 'react'
import './App.css'

import FunComp from './assets/Components/FunComp'
import ClassComp from './assets/Components/ClassComp'
import Header from './assets/Components/Header'
import DynamicButton from './Assignment/DynamicButton'
import StatusMessage from './Assignment/StatusMessage'
import ContactForm from './Assignment/ContactForm'
import ToDoList from './Assignment/TodoList'
import DarkMode from './Assignment/DarkMode'

import { ThemeContext } from './Assignment/ThemeContext'

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

   return (
    <>
      <header>
        <h1>🌙 Full Page Dark Mode</h1>

        <button onClick={toggleTheme}>
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </header>

      <h2>Welcome to React JS</h2>
      <p>Dark mode applies to the entire page.</p>

      <DynamicButton />
      <br />

      <StatusMessage status="success" />
      <StatusMessage status="error" />
      <StatusMessage status="warning" />
      <br />

      <ContactForm />
      <br />

      <ToDoList />
      <br />

      <DarkMode />

      <br/>
      <ThemeContext />
    </>
  );
}

export default App;