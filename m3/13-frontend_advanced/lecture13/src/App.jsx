import React, { Suspense } from "react";
import Navbar from "./components/Navbar";

import "./styles/App.css";

const LazyDataLoader = React.lazy(() => import("./components/LazyDataLoader.jsx"));

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Suspense fallback={<div style={{ color: "black" }}>Loading...</div>}>
          <LazyDataLoader />
        </Suspense>
      </div>
    </>
  );
}

export default App;
