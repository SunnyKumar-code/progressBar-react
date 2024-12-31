import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    const loadInterval = setInterval(() => {
      setLoading((prevLoading) => {
        if (prevLoading >= 100) {
          clearInterval(loadInterval);
          return prevLoading;
        }
        return prevLoading+1 ;
      });
    }, 100);
    return () => clearInterval(loadInterval);
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 style={{ textAlign: "center" }}>Progress Bar</h3>
      <div
        style={{
          width: "50%",
          height: "20px",
          borderRadius: "50px",
          backgroundColor: "lightgray",
          overflow: "hidden",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: `${loading}%`,
            backgroundColor: "#00C251",
            textAlign: "center",
            color: "white",
            transition: "width 0.1s ease-in-out",
          }}
        >
          {loading}%
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>
        {loading === 100 ? "Completed!" : "Loading..."}
      </h3>
    </div>
  );
}

export default App;
