import React from "react";
import ButtonModal from "../components/ButtonModal";
import style from "./Profile.module.css";
import Modal from "../components/Modal";

import { FaCss3, FaHtml5, FaJs, FaReact, FaShare } from "react-icons/fa6";

const Profile = () => {
  const [modal, setModal] = React.useState(false);
  console.log(modal)

  return (
    <main>
      <section id="top" className={style.thumbnail}>
        <div className={style.infoDescription}>
          <div className={style.mainInfo}>
            <div className={style.name}>
              <h2>Pablo Eduardo</h2>
              <span>Premium</span>
            </div>
            <p>San Francisco, CA, United States</p>
            <div className={style.shareButton}></div>
          </div>
          <ButtonModal text={<FaShare />} setModal={setModal} />
        </div>
        <Modal modal={modal} setModal={setModal} />
      </section>
      <section className={style.section}>
        <div className={style.perfilDetail}>
          <div className={style.image}></div>
        </div>
        <div className={style.rightContent}>
          <h1>Hard Skills</h1>
          <div className={style.hardSkills}>
            <div className={style.skills}>
              <div className={style.icon}>
                <FaHtml5 />
              </div>
              <div className={style.detail}>
                <h3>HTML5</h3>
                <p>Intermediary</p>
              </div>
            </div>
            <div className={style.skills}>
              <div className={style.icon}>
                <FaCss3 />
              </div>
              <div className={style.detail}>
                <h3>CSS3</h3>
                <p>Intermediary</p>
              </div>
            </div>
            <div className={style.skills}>
              <div className={style.icon}>
                <FaJs />
              </div>
              <div className={style.detail}>
                <h3>Javascript</h3>
                <p>Intermediary</p>
              </div>
            </div>
            <div className={style.skills}>
              <div className={style.icon}>
                <FaReact />
              </div>
              <div className={style.detail}>
                <h3>React</h3>
                <p>Basic</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
