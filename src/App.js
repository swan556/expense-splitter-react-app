import { useState } from "react";
import FriendList from "./Componants/FriendList.js";
import SplitterTemplate from "./Componants/SplitterTemplate.js";
// import SplitterTemplate from "./Componants/SplitterTemplate.js";
export default function App() {
  const [friends, setFriends] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <div
          style={{
            gridColumn: "1/2",
            gridRow: "1/2",
            width: "100%",
            height: "98%",
            padding: "5px",
            border: "4px solid brown",
            borderRadius: "5px",
          }}
        >
          <FriendList />
        </div>
        <div style={{ gridColumn: "1/2", gridRow: "1/2" }}>
          <SplitterTemplate />
        </div>
      </div>
    </div>
  );
}
