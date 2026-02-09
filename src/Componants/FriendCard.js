export default function FriendCard({ name, money, selected, handleSelection }) {
  return (
    <div className="friendcard">
      <h3
        style={{
          gridColumn: "1/2",
          gridRow: "1/2",
          marginLeft: "20px",
          marginTop: "20px",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          gridColumn: "1/2",
          gridRow: "2/3",
          marginLeft: "25px",
          marginBottom: "30px",
        }}
      >
        something mkbhd {money}
      </p>
      <button
        style={{ gridColumn: "2/3", gridRow: "1/3" }}
        className={`selectbtn ${selected ? "selected" : "notselected"}`}
        onClick={() => handleSelection({ name })}
      >
        {`Select${selected ? "ed" : ""}`}
      </button>
    </div>
  );
}
