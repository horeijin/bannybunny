import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Footer } from "./components";
import {
  Home,
  Chronicle,
  Membership,
  GameMarket,
  Login,
  Register,
} from "./pages";
import Auth from "./hoc/auth";

function App({ store }) {
  const AuthHome = Auth(Home, null);
  const AuthChronicle = Auth(Chronicle, null);
  const AuthMembership = Auth(Membership, true);
  const AuthGameMarket = Auth(GameMarket, true);
  const AuthLogin = Auth(Login, false);
  const AuthRegister = Auth(Register, false);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AuthHome />} />
        <Route path="/chronicle" element={<AuthChronicle />} />
        <Route path="/membership/*" element={<AuthMembership />} />
        <Route path="/gamemarket/*" element={<AuthGameMarket />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
