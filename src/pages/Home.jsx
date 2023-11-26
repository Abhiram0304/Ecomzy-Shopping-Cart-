import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";
import Product from '../components/Product'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  console.log(API_URL);

  const [loading,setLoading] = useState(false);
  const [items,setItems] = useState([]);

  async function fetchData(){
    setLoading(true);
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      setItems(data);
      console.log(data);
    }
    catch(e){
      toast.error(e);
      setItems([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="w-[1000px] mx-auto mt-[100px] flex flex-wrap gap-[20px] mb-[30px]">
      {
        loading ? (<Spinner/>) : 
        items.length > 0 ? (items.map((item) => <Product key={item.id} item={item} />)) : (<div className="absolute top-[48rem] left-[48rem]">No Data Found</div>)
      }
    </div>
  );
};

export default Home;
