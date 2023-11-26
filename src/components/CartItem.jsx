import toast from 'react-hot-toast';
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice'

const CartItem = ({cartItem}) => {

  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(cartItem.id));
    toast.error("Item Removed From cart");
  }

  const itemDesc = cartItem.description.substring(0,100);

  return (
    <div>
      <div className='flex gap-[3rem]'>
      <div>
        <img src={cartItem.image} className='w-[200px] h-[150px]' />
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='font-semibold text-[18px]'>{cartItem.title}</h2>
        <h2 className='text-[15px]'>{itemDesc}...</h2>
        <div className='flex justify-between w-[22rem]'>
          <p className='text-[#126e3b] font-bold'>${cartItem.price}</p>
          <button className='w-[25px] h-[25px] rounded-full bg-[#fc8c86] flex items-center justify-center hover:scale-110 transition-all duration-200'><AiFillDelete className='text-[#b50e05]' onClick={removeItem} /></button>
        </div>
      </div>
      </div>
      <div className='w-full h-[2px] bg-[#126e3b] my-[2rem]'></div>
    </div>
  );
};

export default CartItem;
