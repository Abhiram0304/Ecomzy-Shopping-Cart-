import { useSelector } from "react-redux";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Cart = () => {

  const [totalAmountValue,setTotalAmountValue] = useState(0);

  const {cart} = useSelector((state) => state);

  useEffect(() => {
    setTotalAmountValue(cart.reduce((acc,currVal) => acc+ currVal.price,0));
  },[cart]);

  function submitHandler(){
    toast.success(`CheckOut SuccessFul - Paid $${totalAmountValue}`)
  }

  return (
    <div className="w-[1000px] mx-auto mt-[100px]">
      {
        cart.length > 0 ? 
        (
          <div className="flex justify-between gap-[3rem]">
            <div className="w-3/5">
              {
                cart.map((cartItem)=> <CartItem key={cartItem.id} cartItem={cartItem} />)
              }
            </div>
            <div className="flex flex-col justify-between my-[2rem] h-[70vh] w-2/5 fixed left-[56rem]">
              <div>
                <h2 className="font-semibold text-[#118545] text-[15px]">Your Cart</h2>
                <h1 className="font-bold text-[#118545] text-[25px]">SUMMARY</h1>
                <p className="font-semibold mt-[20px]">Total Items : {cart.length}</p>
              </div>
              <div className="flex flex-col gap-[15px]">
                <p className="font-semibold">Total Amount : <span className="font-bold">${totalAmountValue}</span> </p>
                <button className="text-[white] bg-[#118545] w-[300px] py-1 font-bold rounded-lg hover:scale-110 transition-all duration-200" onClick={submitHandler}>Checkout Now</button>
              </div>
            </div>
          </div>
        ):
        (
          <div className="absolute top-[45vh] left-[47vw] flex flex-col justify-center items-center gap-3">
            <p className="font-bold text-[25px]">Cart Empty</p>
            <NavLink to='/' ><button className="w-[200px] font-bold text-[white] bg-[#118545] py-1 rounded-lg hover:scale-110 transition-all duration-200">Shop Now</button></NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
