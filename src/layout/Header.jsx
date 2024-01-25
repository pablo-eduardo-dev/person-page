import React from "react"
import { Link } from "react-router-dom"
import { FaBarsStaggered, FaBacon } from "react-icons/fa6"

import style from "./Header.module.css"
import Menu from "./Menu"



const Header = () => {

    const [menu, setMenu] = React.useState(false)

    function handleMenu() {
        setMenu(!menu)
    }

    return (
        <header className={style.headerContainer}>
            <div className={style.headerWrapper}>
                <div className={style.logo}>
                    <Link to='/'><FaBacon /></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Profile</Link></li>
                        <li><Link to="/about-project">About</Link></li>
                    </ul>
                </nav>
                <div>
                    <FaBarsStaggered onClick={handleMenu} className={style.mebuBtn} />
                    <Menu menu={menu} />
                </div>
            </div>
        </header>
    )
}

export default Header