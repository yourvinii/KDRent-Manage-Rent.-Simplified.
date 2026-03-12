export default function SearchFilter() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col mb-5">
          <h1>
            Quick find the home you want using our effective serach filter
          </h1>
        </div>
      </div>
      <div className="row " style={{display:"flex", alignItems:"center"}}>
        <div className="col-4">
          <div>
            <img src="media\images\landing-search1.png" alt="" />
          </div>
          <div>
            <h3>Trustworthy and Verifed Listings</h3>
            <p>
              Discover the best rental options with user reviews and ratings.
            </p>
          </div>
          <div className="search-filter-card-btn" >
            <button className="btn btn-outline-danger">Explore</button>

          </div>
        </div>
        <div className="col-4">
          <div>
            <img src="media\images\landing-search2.png" alt="" />
          </div>
          <div>
            <h3>Browse Rental Listings with Ease</h3>
            <p>
              Get access to user reviews and ratings for a better understanding
              of rental options.
            </p>
          </div>
          <div className="search-filter-card-btn">
            <button className="btn btn-outline-danger">Search</button>

          </div>
        </div>

        <div className="col-4">
          <div>
            <img src="media\images\landing-search3.png" alt="" />
          </div>
          <div>
            <h3>Simplify Your Rental Search with Advanced</h3>
            <p>
              Find trustworthy and verified rental listings to ensure a
              hassle-free expreience.
            </p>
          </div>
          <div className="search-filter-card-btn">
            <button className="btn btn-outline-danger">Discover</button>

          </div>
        </div>
      </div>
    </div>
  );
}
