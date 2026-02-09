import { useState } from "react";

export default function AddFriendMechanism() {
  const [friendAddtoggle, setFriendToggle] = useState(false);
  return (
    <div className="addfriend">
      {!friendAddtoggle ? (
        <button onClick={() => setFriendToggle(!friendAddtoggle)}>
          + Add Friend
        </button>
      ) : (
        <div className="addfriendselection" style={{ height: "150px" }}></div>
      )}
    </div>
  );
}
