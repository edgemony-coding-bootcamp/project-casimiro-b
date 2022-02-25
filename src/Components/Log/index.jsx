import { useState } from "react";
import styles from "./Log.module.scss";
import { BiHide, BiShow } from "react-icons/bi";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";


const Log = (props) => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.log_wrapper}>
      <div className={styles.text_container}>
        <h1>{props.title}</h1>
        <h4>{props.subtitle}</h4>
      </div>
      <div className={styles.input_container}>
        <input type="email" placeholder="inserisci la tua email" onChange={props.onChangeEmail} />

        <input
          type={values.showPassword ? "text" : "password"}
          onChange={props.onChangePassword}
          placeholder="inserisci la tua password"
        />
        <i
          className={styles.icons}
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {values.showPassword ? <BiShow /> : <BiHide />}
        </i>

        <p>password dimenticata</p>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.btn_one} onClick={props.logBtn}>
          <p>{props.btn}</p>

        </button>
        <button className={styles.btn_two} onClick={props.logGoogle} >
          <i><FaGoogle /></i>
          <p>Continua con Google</p>
        </button>
        <button className={styles.btn_two}>
          <i><FaFacebookSquare /></i>
          <p>Continua con Facebook</p>
        </button>
      </div>
      <div className={styles.terms}>
        <input className={styles.terms_input} type="checkbox" />
        <p className={styles.terms_par}>
          I agree with <b>Terms of Servicer</b> and <b>Privacy</b>{" "}
        </p>
      </div>
    </div>
  );
};

export default Log;
