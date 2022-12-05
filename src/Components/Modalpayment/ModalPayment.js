import { useRouter } from "next/router";
import React from "react";
import styles from "./ModalPayment.module.css";

const Modal = (props) => {
  const router = useRouter()

  const handleOk = async () => {
    if (props.title === "bca") {
      window.open("https://simulator.sandbox.midtrans.com/bca/va/index")
    } else if (props.title === "bri") {
      window.open("https://simulator.sandbox.midtrans.com/bri/va/index");
    } else {
      window.open("https://simulator.sandbox.midtrans.com/bni/va/index")
    }
    // try {
    //   // console.log("test");
    //   await logout();
    //   localStorage.removeItem("login");
    //   navigate("/");
    //   // console.log(result);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      {props.open ? (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <p className={styles["modal-title"]}>{props.title}</p>
            </div>
            <div className={styles["modal-body"]}>{props.body}</div>
            <div className={styles["modal-footer"]}>
              <button
                className={styles.button}
                onClick={() => props.setOpen(!props)}
              >
                no
              </button>
              <button className={styles.button} onClick={handleOk}>
                yes
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;