interface IProfileCardProps {
  name: string;
  email: string;
  address?: string;
}

function ProfileCard(props: IProfileCardProps) {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
        borderRadius: "10px",
        width: "300px",
      }}
    >
      <h1>Name: {props.name}</h1>
      <p>Email: {props.email}</p>
      {props.address && <p>Address: {props.address}</p>}
    </div>
  );
}

export default ProfileCard;
