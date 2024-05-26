import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TonConnectUIProvider manifestUrl="http://localhost:5173/first_contract_front_end/tonconnect-manifest.json">
    <App />
  </TonConnectUIProvider>,
);
