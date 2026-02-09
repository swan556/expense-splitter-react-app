import FriendCard from "./FriendCard";

export default function FriendList() {
  return (
    <div className="friendlist">
      <FriendCard name={"Abc"} money={4} selected={false} />
      <FriendCard name={"Def"} money={1} selected={true} />
      <FriendCard name={"Ghi"} money={1} selected={true} />
      <FriendCard name={"Abc"} money={4} selected={false} />
      <FriendCard name={"Def"} money={1} selected={true} />
      <FriendCard name={"Ghi"} money={1} selected={true} />
      <FriendCard name={"Abc"} money={4} selected={false} />
      <FriendCard name={"Def"} money={1} selected={true} />
      <FriendCard name={"Ghi"} money={1} selected={true} />
      <FriendCard name={"Abc"} money={4} selected={false} />
      <FriendCard name={"Def"} money={1} selected={true} />
      <FriendCard name={"Ghi"} money={1} selected={true} />
      <FriendCard name={"Abc"} money={4} selected={false} />
      <FriendCard name={"Def"} money={1} selected={true} />
      <FriendCard name={"Ghi"} money={1} selected={true} />
    </div>
  );
}
