import React from "react";
import { Route, Router } from 'react-router-dom'

export default function Routes() {
  return (
    <div>
      <Router>
        <Route path="/*" element={<Home />} />
      </Router>
    </div>
  );
}
