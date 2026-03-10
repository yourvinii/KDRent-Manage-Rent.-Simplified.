import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
        <video className="hero-video" autoPlay loop muted src="\media\videos\propertyVid2.mp4"></video>
      <div className="hero-overlay">
        <div className="hero-content text-center">
          <h1>Start your journey to finding the perfect place to call home</h1>
          <p>
            Explore our wide range of rental properties tailored to fit your
            lifestyle and needs!
          </p>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by city, nighborhood or address"
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
