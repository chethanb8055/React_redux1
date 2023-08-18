import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"; // Import your Product component here

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false); // Set an initial value for loading
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);
      setLoading(false);
    } catch (err) {
      console.log(err.detail, err);
      setPost([]);
      setLoading(false); // Set loading to false even in case of an error
    }
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length > 0 ? (
        <div>
          {post.map((item) => (
            <Product key={item.id} post={item} /> // Pass individual 'item' to Product component
          ))}
        </div>
      ) : (
        <p>data not found</p>
      )}
    </div>
  );
};

export default Home;
