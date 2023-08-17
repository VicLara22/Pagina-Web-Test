import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import style from './navBar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useScrollPosition } from '../hook/scrollPosition';

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener('resize', detectDimension);
    }
  }, [windowDimension]);

  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "Services"
    },
    {
      id: 3,
      link: "HowWeWork"
    },
    {
      id: 4,
      link: "Benefits"
    }
  ]

  const scrollPosition = useScrollPosition();

  return (
    <div className={
      navBarOpen  
        ? style.navOpen
        : scrollPosition  > 0
        ? style.navOnScroll
        : style.navBar
      }>
      {!navBarOpen && <p className={style.logo}>TECO | Digital Soluctions</p>}
      {!navBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu 
        onClick={() => setNavBarOpen(!navBarOpen)} 
        color='f1f1f1' 
        size={25} />
      )
        :
        (
          windowDimension.width < 800 && (
            <AiOutlineClose 
            onClick={() => setNavBarOpen(!navBarOpen)} 
            color='f1f1f1' 
            size={25} />
          )
        )}
      {navBarOpen && (
        <ul className={style.linkContainer}>
          {links.map(l => (
            <div>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={l.link}
                smooth={500}
                className={style.navLink}>
                {l.link === "HowWeWork" ? "How we work" : l.link}
              </Link>
              <div className={style.border}>
              </div>
            </div>

          ))}
        </ul>
        
      )}
       {windowDimension.width > 800 && (
        <ul className={style.linkContainer}>

          {links.map(l => (
            <div>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={l.link}
                smooth duration={500}
                className={style.navLink}>
                {l.link === "HowWeWork" ? "How we work" : l.link}
              </Link>
            </div>
          ))}
          <div>
           <Link
                onClick={() => setNavBarOpen(false)}
                to="Contacto"
                smooth duration={500}
                className={style.contactLink}>Contacto
            </Link>
            </div>
        </ul>
       )}
    </div>
  );
};

export default NavBar;