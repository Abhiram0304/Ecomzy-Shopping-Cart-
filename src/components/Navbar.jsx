import {HiShoppingCart} from 'react-icons/hi'
import logo from './logo.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cart} = useSelector((state)=>state);
  let size = cart.length;

  return (
    <div className='fixed top-0 w-full bg-[#0f1e33] py-[10px] z-[10]'>
      <div className='flex max-w-[1000px] mx-auto justify-between'>
        <NavLink to='/'>
          <img src={logo} width={130} height={70} />
        </NavLink>
        <div className='flex gap-[1rem] justify-between items-center'>
          <NavLink to="/"><span className='text-white text-[18px]'>Home</span></NavLink>
          <NavLink to='/cart'><HiShoppingCart className='text-white text-[22px] hover:scale-110 transition-all duration-200' />
            {
              size>0 ? (<div className='absolute top-[13px] right-[16.5vw] h-[15px] w-[15px] bg-[#cce019] rounded-full text-black text-[10px] font-bold flex justify-center items-center hover:scale-110 transition-all duration-200'><p>{size}</p></div>) : ("")
            }
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
