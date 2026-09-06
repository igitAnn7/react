import axios from 'axios';
import { Header } from '../components/Header';
import './HomePage.css';
import { useEffect,useState } from 'react';



export function HomePage() {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/products')  
    //axios is a cleaner way to make request to the backend for geetting data
      .then((response) => {
        setProducts(response.data);
        //setproducts save the data in the array and genertes the product html
      })

      axios.get('/api/cart-items')
       .then((response) => {
        setCart(response.data);
      })



  },[])  
   //useeffect is created to ensure that data is only fetched once from the backend whner the site reloads, [] only runs once after componnet is created


  return (

    <>
      <Header  cart={cart}/>

      <div className="home-page">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-container">
              <div className="product-image-container">
                <img className="product-image"
                  src={product.image} />
              </div>

              <div className="product-name limit-text-to-2-lines">
                {product.name}
              </div>

              <div className="product-rating-container">
                <img className="product-rating-stars"
                  src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                <div className="product-rating-count link-primary">
                  {product.rating.count}
                </div>
              </div>

              <div className="product-price">
                ${(product.priceCents / 100).toFixed(2)}
              </div>

              <div className="product-quantity-container">
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className="product-spacer"></div>

              <div className="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
              </div>

              <button className="add-to-cart-button button-primary">
                Add to Cart
              </button>
            </div>

          );
        })}

      </div >
    </>
  );
}