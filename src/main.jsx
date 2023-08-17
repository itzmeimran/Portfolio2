import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import   {theme}  from "./theme.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        closeButton={false}
        hideProgressBar={true}
      />
    </ThemeProvider>
  </Provider>
);
