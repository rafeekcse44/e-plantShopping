import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>🌿 Paradise Nursery</h1>
        <p className="lead">Hand-picked indoor & outdoor plants to brighten your home.</p>
        <Link to="/products">
          <button className="btn primary">Shop Plants</button>
        </Link>
      </div>
      <div className="hero-image" aria-hidden="true" />
    </main>
  );
}
