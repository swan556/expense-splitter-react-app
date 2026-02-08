import { useState } from "react";
import FriendList from "./Componants/FriendList.js";
import SplitterTemplate from "./Componants/SplitterTemplate.js";
import AddFriendMechanism from "./Componants/AddFriendMechanism.js";
// import SplitterTemplate from "./Componants/SplitterTemplate.js";
export default function App() {
  // const [friends, setFriends] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <div
          style={{
            gridColumn: "1/2",
            gridRow: "1/3",
            width: "100%",
            height: "98%",
            padding: "5px",
            border: "4px solid brown",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "90%",
            }}
          >
            <FriendList />
          </div>
          <AddFriendMechanism />
        </div>
        <div style={{ gridColumn: "2/3", gridRow: "1/3" }}>
          <SplitterTemplate />
        </div>
      </div>
    </div>
  );
}
