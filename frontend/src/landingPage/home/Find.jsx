import "./find.css"

export default function Find() {
  return (
    <div className="find mb-5 p-5">
        <img className="find-image" src="media\images\landing-call-to-action.jpg" alt="" />    
        <div className="find-overlay">
            <div className="container">
                <div className="row ">
                    <div className="col mt-5">
                        <h1 className="p-5 fs-2 text-light"> Find Your Dream Rental Property</h1>

                    </div>
                    <div className="col mt-5  ">
                        <p className="mt-5 text-light">Discover a wide range of rental properties in your desired location.</p>
                        <button className="btn btn-light me-4 ">Search</button>
                        <button className="btn btn-danger">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
