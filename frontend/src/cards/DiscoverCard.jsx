export default function DiscoverCard() {
  return (
    <div class="card " style={{ width: "18rem", backgroundColor: "white" }}>
      <div
        className="card-icon p-2 m-auto mt-3"
        style={{
          display: "flex",
          backgroundColor: "black",
          width: "25%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        <img
          src="media\images\landing-icon-wand.png"
          className="card-img-top p-2"
          alt="wand"
          style={{ margin: "0 auto", width: "70%" }}
        />
      </div>
      <div className="card-body">
        <h1 style={{ fontSize: "25px" }}>Search for Properties</h1>
        <p className="card-text">
          Browse through our extensive collection of rental properties in your
          desired location.
        </p>
      </div>
    </div>
  );
}
