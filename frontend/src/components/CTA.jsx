import { NavLink } from "react-router-dom";
export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <h2>Ready to manage your rentals smarter?</h2>
        <NavLink to={"/register"}>
          <button>Create Free Account</button>
        </NavLink>
      </div>
    </section>
  );
}
