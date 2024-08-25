import "bootstrap/dist/css/bootstrap.rtl.min.css";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "router/index";
import { RootState } from "state-manager/store";
import { GlobalStyle } from "../style/globalStyles";

const App: React.FC = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        rtl
        autoClose={5000}
        position="bottom-left"
        theme={mode}
        className="app_toast_container"
      />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
