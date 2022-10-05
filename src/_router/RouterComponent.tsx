import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Pages } from "../_pages/Pages";
import { Components } from "../_components/Components";

const RouterComponent = () => {

  return (
    <>
      <Router>
        <Components.NavBar/>
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/notifications" element={<Pages.Notifications />} />
          <Route path="/blog" element={<Pages.Blog />} />
        </Routes>
      </Router>
    </>
  )
}

export default RouterComponent;