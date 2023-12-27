import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header flex justify-between items-center px-6'>
      <NavLink to='/' className='absolute top-2 left-0'>
        <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-8 font-medium absolute top-2 right-0'>
        <NavLink
          to='/Soul'
          className={({ isActive }) => `${isActive ? "text-black " : "text-red-600 "}`}
        >
          Soul
        </NavLink>
        <NavLink
          to='/Heart'
          className={({ isActive }) => `${isActive ? "text-blue-400 " : "text-red-600 "}`}
        >
          Heart
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
