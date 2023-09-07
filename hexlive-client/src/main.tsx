import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme
      appearance="dark"
      accentColor="iris"
      grayColor="slate"
      panelBackground="solid"
      scaling="100%"
      radius="full">
      <App />
    </Theme>
  </React.StrictMode>
);
