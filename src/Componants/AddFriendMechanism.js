import { useState } from "react";

export default function AddFriendMechanism({ name, setName, addNewCard }) {
  const [friendAddtoggle, setFriendToggle] = useState(false);
  return (
    <div className="addfriend">
      {!friendAddtoggle ? (
        <button onClick={() => setFriendToggle(!friendAddtoggle)}>
          + Add Friend
        </button>
      ) : (
        <div className="addfriendselection">
          <form>
            <input
              className="addfriendform"
              placeholder="name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                addNewCard({ name });
                setName("");
              }}
            >
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
