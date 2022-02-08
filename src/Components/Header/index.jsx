import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from 'react-icons/fi';

import styles from "./Header.module.scss";

const Header = (props) => {
  const name = props.name || "App";
  const links = props.links || [{ link: "/", label: "Link" }];

  const CheckActive = (link) => {
    const resolved = useResolvedPath(link);
    const match = useMatch({ path: resolved.pathname, end: true })

    return match ? styles.active : "";
  }

  const [isActive, setIsActive] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  }


  return (
    <header className={styles.header}>

      <a className={styles.logo}>{name}</a>
      <button className={styles.resp_menu} onClick={handleMenu}>
        <FiMenu className={styles.icon_menu} />
      </button>
      <ul className={`${styles.menuItems} ${isActive ? styles.showMenu : ''}`}>
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className={CheckActive(item.link)}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </header>


  )

};

export default Header;




{/* <header className={styles.header}>
  
<h1>{name}</h1>
<button className={styles.resp_menu} onClick={handleMenu}>
  <FiMenu className={styles.icon_menu} />
</button>
<nav className={isActive ? styles.showMenu : ''}>
  <ul>
    {links.map((item, index) => (
      <li key={index}>
        <Link to={item.link} className={CheckActive(item.link)}>{item.label}</Link>
      </li>
    ))}
  </ul>
</nav>


</header> */}