export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <h2>Overview</h2>
      <input placeholder="Search..." />
    </div>
  );
}
