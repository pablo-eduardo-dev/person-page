import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaQuestion } from "react-icons/fa6";
import { useSpring, animated } from "react-spring";

const Menu = ({ menu, setMenu }) => {
  const animation = useSpring({
    opacity: menu ? 1 : 0,
    transform: menu ? "translateX(0%)" : "translateX(-50%)",
  });

  console.log(menu)

  if (menu)
    return (
      <div className={style.container}>
        <ul>
          <a
            href="https://github.com/pablo-eduardo-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <animated.li style={animation}>
              <FaGithub /> Github
            </animated.li>
          </a>
          <a
            href="https://www.instagram.com/yuuta_kinoshi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <animated.li style={animation}>
              <FaInstagram /> Instagram
            </animated.li>
          </a>
          <animated.hr style={animation} />
          <animated.div style={animation}>
            <Link
              onClick={() => setMenu(false)}
              to="/about-project"
              id={style.about}
            >
              <FaQuestion /> Help
            </Link>
          </animated.div>
        </ul>
      </div>
    );
  else return;
};

export default Menu;
