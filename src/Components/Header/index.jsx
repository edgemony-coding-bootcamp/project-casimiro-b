import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import styles from "./Header.module.scss";

const Header = (props) => {
  const name = props.name || "App";
  const links = props.links || [{ link: "/", label: "Link" }];
  const log = props.log || [{ link: "/", label: "Link" }];

  const CheckActive = (link) => {
    const resolved = useResolvedPath(link);
    const match = useMatch({ path: resolved.pathname, end: true });

    return match ? styles.active : "";
  };

  const [isActive, setIsActive] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  const user = useSelector((state) => state.user);

  const logSign = () => {
    if (user === null)  {
      return (
        <>
          {log.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className={CheckActive(item.link)} onClick={() => setIsActive(!isActive)}>
                {item.label}
              </Link>
            </li>
          ))}
        </>
      )
    } else {
      return <Link onClick={props.logOut} to={props.dash}>LOG OUT</Link>
    }
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <p className={styles.logo}>
          {name}
        </p>
      </Link>
      <button className={styles.resp_menu} onClick={handleMenu}>
        {isActive ? <MdClose className={styles.icon_menu} /> : <FiMenu className={styles.icon_menu} />}
      </button>
      <ul className={`${styles.menuItems} ${isActive ? styles.showMenu : ""}`}>
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className={CheckActive(item.link)} onClick={() => setIsActive(!isActive)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={`${styles.menuItems} ${isActive ? styles.showMenu : ""}`}>
        {logSign()}
        <Link to="/sidecart" onClick={() => setIsActive(!isActive)}>
          <FaShoppingCart />
        </Link>
      </ul>



    </header>
  );
};

export default Header;
