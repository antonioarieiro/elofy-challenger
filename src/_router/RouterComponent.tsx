import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Pages } from "../_pages/Pages";
// import { Components } from "../_components/Components";

const RouterComponent = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default RouterComponent;