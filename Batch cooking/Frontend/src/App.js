import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen justify-center items-center bg-[#F2EEED]">
          <main className="flex-grow flex justify-center items-center w-full">
            <Routes>
              <Route path="/createrecipe" element={<RecipePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
