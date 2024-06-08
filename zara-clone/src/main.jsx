import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import ShoppingBagProvider from './context/ShoppingBagContext.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <ShoppingBagProvider>
  <AuthContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </AuthContextProvider>
  </ShoppingBagProvider>
);
