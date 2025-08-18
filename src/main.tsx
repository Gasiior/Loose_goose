import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'


let scrollTimeout: ReturnType<typeof setTimeout>;

window.addEventListener("scroll", () => {
  document.body.classList.add("scrolling", "show-scrollbar");

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    document.body.classList.remove("scrolling", "show-scrollbar");
  }, 800);
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
