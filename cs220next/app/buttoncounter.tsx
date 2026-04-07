import { useState } from "react";

export default function ButtonCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          border: "none",
          background: "blue",
          color: "white",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}