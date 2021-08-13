import React, { ReactElement, useReducer, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Popup from "./components/Popup";
// import Page from "./components/Page";
// import { menuItems } from "./constants";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(reducers, compose(applyMiddleware(thunk)));
// const store = createStore(reducers);

interface Props {}

export const AppContext = React.createContext(null);

export default function App({}: Props): ReactElement {
  // const [modal, dispatchModal] = useReducer(reducers.Modal, null);

  const [openPopup, setOpenPopup] = useState(false);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContext.Provider
          value={{ openPopup, setOpenPopup }}
          // value={{ modal, dispatchModal, menuItems, openPopup, setOpenPopup }}
        >
          <div className="wrapper">
            <Navbar />
            <Page />
            {/* <Header /> 
          <Page />
          <Footer />  */}
          </div>
          {/* {openPopup && ReactDOM.createPortal(<Popup />, popupDiv)} */}
        </AppContext.Provider>
      </BrowserRouter>
    </Provider>
  );
}
