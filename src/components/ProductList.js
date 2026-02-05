import { plants } from "./data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div className="container">
      <h2 className="section-title">Our Plants</h2>
      {categories.map((cat) => (
        <section key={cat} className="category-section">
          <h3 className="category-title">{cat}</h3>
          <div className="products-grid">
            {plants
              .filter((p) => p.category === cat)
              .map((plant) => (
                <article className="card" key={plant.id}>
                  <img className="card-image" src={plant.image} alt={plant.name} />
                  <div className="card-body">
                    <h4 className="card-title">{plant.name}</h4>
                    <p className="card-desc">{plant.description}</p>
                    <div className="card-footer">
                      <span className="price">${plant.cost}</span>
                      <button className="btn" onClick={() => dispatch(addToCart(plant))}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
