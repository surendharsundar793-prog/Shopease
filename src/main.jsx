import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./Context/Cartcontext";
import { RealTimeProvider } from "./Context/RealTimeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <RealTimeProvider>
        <App />
      </RealTimeProvider>
    </CartProvider>
  </BrowserRouter>
);