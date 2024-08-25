import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppThemeProvider from "style/theme-provider";
import App from "./app";
import { store } from "./state-manager/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </Provider>
);
