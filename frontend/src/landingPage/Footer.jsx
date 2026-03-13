import "./footer.css";

export default function Footer() {
  return (
    <div className="container p-5 mt-5 mb-5  ">
      <div className="row mb-5">
        <div className="col-3">
          <h1>KDRent</h1>
        </div>
        <div className="col-6 footer-links">
          <a href="">About Us</a>
          <a href="">Contact Us</a>
          <a href="">FAQ</a>
          <a href="">Terms</a>
          <a href="">Privacy</a>
        </div>
        <div className="col-3 d-flex justify-content-evenly fs-4">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </div>
      </div>
      <div className="row d">
     
         
        <div className="col">&copy; KDRent. All rights reserved.</div>
        <div className="col">  Privacy Policy</div>
        <div className="col">Tearms of Service</div>
        <div className="col"> Cookie Policy</div>
      </div>
    </div>
  );
}
