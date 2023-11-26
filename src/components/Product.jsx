import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from '../redux/Slices/CartSlice'

const Product = ({item}) => {

  const {cart} = useSelector((state) => state);

  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(add(item));
    toast.success("Item Added to Cart");
  }
  const removeHandler = () => {
    dispatch(remove(item.id));
    toast.error("Removed Item Cart");
  }

  let itemTitle = item.title.substring(0,17);
  let itemDesc = item.description.substring(1,60);

  return (
    <div className="w-[235px] h-[380px] rounded-lg shadow-lg shadow-slate-500/70 flex flex-col py-[1rem] px-[12px] justify-evenly hover:scale-105 transition-all duration-200">
      <div>
        <p className="font-semibold text-[16px] text-left">{itemTitle}...</p>
      </div>
      <div>
        <p className="text-[13px]">{itemDesc}...</p>
      </div>
      <div>
        <img src={item.image} className="w-[140px] h-[180px] mx-auto" />
      </div>
      <div className="flex justify-between items-center mt-[1rem]">
        <p className="text-[#10c263] text-[16px] font-semibold">${item.price}</p>
        {
          cart.some((p)=> p.id == item.id) ? (<button className="text-[15px] font-semibold border-[2px] border-[#3e4a49] text-[#3e4a49] py-[3px] rounded-3xl hover:bg-[#3e4a49] hover:border-[black] hover:text-[white] hover:scale-110 transition-all duration-200 w-[130px] text-center" onClick={removeHandler}>Remove Item</button>) : (<button className="text-[15px] font-semibold border-[2px] text-[#3e4a49] border-[#3e4a49] py-[3px] rounded-3xl hover:bg-[#3e4a49] hover:border-[black] hover:text-[white] hover:scale-110 transition-all duration-200 w-[130px] text-center" onClick={addHandler}>Add to Cart</button>)
        }
      </div>
    </div>
  );
};

export default Product;
