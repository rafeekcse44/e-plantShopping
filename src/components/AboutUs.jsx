import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
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

      {/* About Company Section */}
      <section className="about-section">
        <h2>About Paradise Nursery</h2>
        <article className="about-content">
          <p>
            Welcome to <strong>Paradise Nursery</strong>, your trusted online destination for premium houseplants 
            and botanical solutions. Since our founding, we have been committed to bringing the beauty and benefits 
            of nature into homes and offices across the nation.
          </p>
          <p>
            Our carefully curated collection features a diverse range of plants, from aromatic herbs to medicinal 
            varieties, each selected for quality, resilience, and unique characteristics. Every plant in our catalog 
            is sourced from sustainable growers and nurtured with care before reaching your doorstep.
          </p>
        </article>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Our Mission</h2>
        <article className="mission-content">
          <p>
            At Paradise Nursery, our mission is simple: to make plant ownership accessible, enjoyable, and rewarding 
            for everyone. We believe that plants have the power to transform spaces, improve air quality, enhance 
            mental well-being, and connect us with nature.
          </p>
          <p>
            We strive to provide not just exceptional plants, but also the knowledge and support customers need to 
            help their plants thrive. Whether you're a seasoned botanist or a first-time plant parent, we're here 
            to guide you on your green journey.
          </p>
        </article>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <article className="services-content">
          <ul className="services-list">
            <li>
              <strong>Hand-Picked Selection:</strong> Every plant is personally selected for health, appearance, and 
              suitability to various environments.
            </li>
            <li>
              <strong>Expert Curation by Category:</strong> Browse our extensive catalog organized by plant type — 
              Aromatic Plants for natural fragrance and wellness, Medicinal Plants for herbal benefits and healing properties.
            </li>
            <li>
              <strong>Quality Assurance:</strong> All plants undergo rigorous quality checks before shipment to ensure 
              they arrive healthy and vibrant.
            </li>
            <li>
              <strong>Detailed Product Information:</strong> Each plant listing includes care instructions, benefits, 
              origin, and pricing to help you make informed decisions.
            </li>
            <li>
              <strong>Secure Online Shopping:</strong> Shop with confidence using our secure platform with a reliable 
              cart system and straightforward checkout process.
            </li>
            <li>
              <strong>Sustainable Practices:</strong> We're committed to eco-friendly packaging and supporting sustainable 
              cultivation methods.
            </li>
          </ul>
        </article>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <h2>Why Choose Paradise Nursery?</h2>
        <article className="why-us-content">
          <p>
            <strong>Passion for Plants:</strong> Our team is genuinely passionate about plants and their positive impact 
            on life quality. We don't just sell plants — we foster a community of plant lovers.
          </p>
          <p>
            <strong>Accessibility:</strong> We believe high-quality plants shouldn't be expensive or hard to find. Our 
            competitive pricing makes botanical beauty affordable for everyone.
          </p>
          <p>
            <strong>Reliability:</strong> With our streamlined e-commerce platform, managing your shopping cart, tracking 
            orders, and finding the perfect plant has never been easier.
          </p>
          <p>
            Start your journey with us today and discover how Paradise Nursery can transform your home into a lush, 
            vibrant sanctuary. <Link to="/products"><strong>Explore our plant collection now!</strong></Link>
          </p>
        </article>
      </section>
    </div>
  );
}
