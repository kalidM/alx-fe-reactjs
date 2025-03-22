import React from "react";
import HomePage from "./components/HomePage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}




function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}


function App() {
  return (
      <div className="p-4 bg-blue-500 text-white">
          <h1 className="text-2xl font-bold">Tailwind CSS is working!</h1>
      </div>
  );
}
function App() {
  return (
    <div className="text-center text-blue-500 text-4xl font-bold mt-10">
      Welcome to the Recipe Sharing Platform!
    </div>
  );
}

export default App;
