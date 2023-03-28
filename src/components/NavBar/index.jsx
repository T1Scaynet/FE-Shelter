import React, { useEffect, useState } from 'react';
import { options } from '../../constants/optionsRutes';
import logo from '../../assets/Group.svg';
import signUp from '../../assets/sign-in-svgrepo-com.svg';
import menu from '../../assets/menu-icon.svg';
import menuClose from '../../assets/menu-close.svg';
import 'tailwindcss/tailwind.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../../styles';

export const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [toggle, setToggle] = useState(false);
  const [sticky, setSticky] = useState(false);
  const userLogged = useSelector((state) => state.login.token);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.boxWidth}  fixed top-0 z-10 ${
        sticky && 'stickyNav'
      } ${styles.paddingX}`}
    >
      <nav className={`flex items-center py-4  navbar  justify-between`}>
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-[118px] h-[42px]" />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className=" list-none md:flex hidden justify-end items-center flex-1">
          {options.length &&
            options.map((o, index) => (
              <li key={o.window}>
                <Link
                  to={o.rute}
                  className={`text-#0E081E-300 cursor-pointer  font-bold bg-[#d3dbdb00] transition-colors duration-500 rounded-[16%] text-[16px] hover:bg-[#d3dbdb53] texdt-[16px] cursor-pointer ${
                    index === options.length - 1 ? 'mr-0' : 'mr-10'
                  } `}
                >
                  {o.window}
                </Link>
              </li>
            ))}
        </ul>

        {/* Sign up */}
        <div className="flex-shrink-0 flex items-center mx-5 ">
          {userLogged ? (
            <a href="/perfil" className="text-[#0E081E] font-bold">
              Mi perfil
            </a>
          ) : (
            <a
              href="/ingresar"
              className="flex items-center bg-transparent text-[#0E081E] font-bold hover:bg-[#7C58D3] hover:text-white py-2 px-4 border border-[#7C58D3] rounded shadow transition duration-300 ease-in-out focus:outline-none"
            >
              Ingresar
              <img
                src={signUp}
                alt="acceso"
                className="w-4 h-4 ml-2 text-purple-500 hover:filter hover:hue-rotate-0"
              />
            </a>
          )}
          {userLogged && (
            // cart
            <div className="flex justify-center sm:flex hidden items-center ml-6 font-medium mx-5">
              <Link to="/carrito" className="flex items-center justify-center">
                <i className="bx bx-shopping-bag  text-[32px] text-[#7e5ad3] " />
                <span>{cartTotalQuantity}</span>
              </Link>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center">
          {/* menu icon */}

          <div className="md:hidden flex flex-1 justify-end items-center cursor-pointer">
            <img
              src={toggle ? menuClose : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain "
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          {/* Mobile menu */}
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 absolute z-10 bg-white top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className=" list-none flex flex-col justify-end items-center flex-1">
              {options.length &&
                options.map((o, index) => (
                  <li key={o.window}>
                    <Link
                      to={o.rute}
                      className={`text-#0E081E-300 font-bold bg-[#d3dbdb00] transition-colors inline-block duration-500 rounded-[16%] text-[16px] hover:bg-[#d3dbdb53] text-[16px] cursor-pointer mb-4 mr-0`}
                    >
                      {o.window}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  to="/carrito"
                  className="text-#0E081E-300 font-bold bg-[#d3dbdb00] transition-colors inline-block duration-500 rounded-[16%] text-[16px] hover:bg-[#d3dbdb53] text-[16px] cursor-pointer"
                >
                  Carrito
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
