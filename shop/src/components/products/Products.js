import "./Products.css";

const Products = (props) => {
  const products = props.products;

  const addToCart = (product) => {
    props.setCart(product);
  };

  const showDiscount = (product) => {
    if (product.promoPrice) {
      return (
        <div className="discount">
          <p className="discount__text">
            Zaoszczędzasz {product.price - product.promoPrice}zł
          </p>
        </div>
      );
    }
  };

  // rabat code TechniSchools2022, jezeli jest poprawny obniz cene produktu o 20%

  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <h4>{product.name}</h4>
            <img src={product.img} alt="shopCart" className="img" />
            <p>{product.description}</p>
            {product.promoPrice ? (
              <p className="price">
                <span>{product.price}zł</span> <b>{product.promoPrice}zł</b>
              </p>
            ) : (
              <p>{product.price}zł</p>
            )}
            {showDiscount(product)}
            <button
              type="submit"
              className="add-to-cart"
              onClick={() => addToCart(product)}
            >
              Dodaj do koszyka
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
