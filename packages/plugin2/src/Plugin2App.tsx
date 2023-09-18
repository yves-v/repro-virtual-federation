import { useState } from "react";

export default function Plugin1App() {
  return (
    <div style={{ backgroundColor: "pink", borderRadius: 10, padding: 20 }}>
      Plugin2 <CountButton />
    </div>
  );
}

function CountButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() =>
        setCount((old) => {
          return old + 1;
        })
      }
    >
      click me: {count}
    </button>
  );
}
