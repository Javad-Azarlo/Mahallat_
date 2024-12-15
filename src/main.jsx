import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import App from "./App.jsx";
import "./index.css";
import "./styles/fonts.css";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* <StrictMode> */}
      <App />
    {/* </StrictMode> */}
  </QueryClientProvider>
);
