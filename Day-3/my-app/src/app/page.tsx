import Button from "../components/ui/button";
import ProfileCard from "../components/profile-card";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p
        style={{
          color: "green",
          border: "1px dashed yellow",
          width: "500px",
          padding: "10px",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, iste.
      </p>

      <Button>Click me</Button>
      <Button>Tekan aku</Button>

      <ProfileCard name="Andi" email="andi@mail.com" />
      <ProfileCard name="Budi" email="budi@mail.com" />
      <ProfileCard name="Caca" email="caca@mail.com" address="Jakarta" />
    </div>
  );
}
