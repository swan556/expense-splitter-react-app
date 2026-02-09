import FriendCard from "./FriendCard";

export default function FriendList({ friends, setFriends }) {
  function handleSelection(name) {
    setFriends((currFriends) =>
      currFriends.map(
        (friend) =>
          friend.name === name
            ? { ...friend, selected: !friend.selected } // 1. Match found? Create NEW object with flipped toggle
            : friend, // 2. No match? Keep the old object exactly as is
      ),
    );
  }
  return (
    <div className="friendlist">
      {!friends.length ? (
        <p>Nothing to see here. add new friends to see your friendlist</p>
      ) : (
        <div style={{ width: "100%" }}>
          {friends.map((friend) => (
            <FriendCard
              name={friend.name}
              money={friend.money}
              selected={friend.selected}
              handleSelection={handleSelection}
            />
          ))}
        </div>
      )}
    </div>
  );
}
