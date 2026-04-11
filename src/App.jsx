// App.jsx
// Purpose: Root component with React Router setup (ready for future pages)

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        {/* Phase 2 will add /add and /edit/:id routes here */}
      </Routes>
    </Router>
  );
};

export default App;
