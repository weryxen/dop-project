import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import App from "./App";
import Card from "./components/card/Card";

const MainApp = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path=":id" element={<h1>ID </h1>} />
          <Route path="/card" element={<Card />} />
          <Route path="/" element={<App />} />
          <Route
            path="main/:id"
            element={<h1>Динамические роуты main/:id</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainApp;
