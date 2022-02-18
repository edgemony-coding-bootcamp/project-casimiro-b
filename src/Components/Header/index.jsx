import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { auth } from '../../firebase-config';
import { signOut } from 'firebase/auth';
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = (props) => {
  const name = props.name || "App";
  const links = props.links || [{ link: "/", label: "Link" }];

  const CheckActive = (link) => {
    const resolved = useResolvedPath(link);
    const match = useMatch({ path: resolved.pathname, end: true });

    return match ? styles.active : "";
  };

  const [isActive, setIsActive] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const scrollNav = () => {
    if (window.scrollY >= 100) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    scrollNav();
    window.addEventListener("scroll", scrollNav);
  }, []);
  console.log(props.user)
  return (
    <header
      className={`${styles.header} ${isActive || navScroll ? styles.headerResp : ""
        }`}
    >
      <Link to="/">  <p className={`${styles.logo} ${isActive || navScroll ? styles.logoActive : ""
        }`}>{name}</p></Link>
      <button className={styles.resp_menu} onClick={handleMenu}>
        {isActive ? <MdClose className={styles.icon_menu} /> : <FiMenu />}
      </button>
      <ul className={`${styles.menuItems} ${isActive ? styles.showMenu : ""}`}>
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className={CheckActive(item.link)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <p><Link to={props.dash}><FaUserAlt /></Link></p>
      <p onClick={props.logOut}><FaUserAltSlash /></p>
    </header>
  );
};

export default Header;
