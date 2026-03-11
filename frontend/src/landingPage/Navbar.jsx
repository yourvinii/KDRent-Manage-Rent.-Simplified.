import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="3">
          KD<span className="text-danger">R</span>ent
        </a>
        <div className="mx-auto text-light small">
          Discover your perfect rental apartment with our advanced search
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light">Sign In</button>
          <button style={{backgroundColor:"#ff6b6b", color:"#fff"}} className="btn btn-danger">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
