// import DiscoverCard from "../../cards/DiscoverCard";
const data = [{}];

export default function Discover() {
  return (
    <div className="container p-5 mb-5 text-center d-flex  ">
      <div className="row d-flex gap-4">
        <div  className="col   d-flex flex-column justify-content-center align-items-center gap-2 border border-light rounded p-3 shadow ">
          <div className="rounded-circle " style={{ backgroundColor: "black" }}>
            <img
              // style={{ width: "10%" }}
              className="p-2 "
              src="media\images\landing-icon-wand.png"
              alt="wand-icon"
            />
          </div>
          <h1 style={{ fontSize: "23px" }}>Search for Properties</h1>
          <p style={{fontSize:"15px"}}>
            Browse through our extensive collection of rental properties in your
            desired location.
          </p>
        </div>

        <div className="col d-flex flex-column justify-content-center align-items-center gap-2 border border-light rounded p-3 shadow ">
          <div className="rounded-circle" style={{ backgroundColor: "black" }}>
            <img
              // style={{ width: "10%" }}
              className="p-2 "
              src="media\images\landing-icon-calendar.png"
              alt="calender-icon"
            />
          </div>
          <h1 style={{ fontSize: "23px" }}>Book Your Rental</h1>
          <p style={{fontSize:"15px"}}>
            Once you've found the perfext renalt property, easily book it online
            with just a few clicks.
          </p>
        </div>

        <div className="col d-flex flex-column justify-content-center align-items-center gap-2 border border-light rounded p-3 shadow ">
          <div className="rounded-circle" style={{ backgroundColor: "black" }}>
            <img
              // style={{ width: "10%" }}
              className="p-2 "
              src="media\images\landing-icon-heart.png"
              alt="heart-icon"
            />
          </div>
          <h1 style={{ fontSize: "23px" }}>Enjoy Your New Home</h1>
          <p style={{fontSize:"15px"}}>
            Move into your new rental property and start enjoying your dream
            home.
          </p>
        </div>
      </div>
    </div>
  );
}
