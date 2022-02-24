import { BsX } from "react-icons/bs";
import { TiUserAdd } from "react-icons/ti";
import styles from "../styles/Notice.module.css";

interface NoticeProps {
   onClose: () => void;
   image: string;
   text: string[];
   buttonText: string;
}

export default function Notice(props: NoticeProps) {
   return (
      // https://discord.com/assets/7de1e682a4fbf1483ad81f3872e5a9b2.png
      // Want to emphasize the individuality of your server?
      // You can unlock a custom server banner after 7 more boosts (bolded)
      // Boost the server
      <div className={styles["notice"]}>
         <BsX className={styles["close-icon"]} onClick={props.onClose} />
         <div className={styles["container"]}>
            <img className={styles["image"]} src={props.image} />
            <p className={styles["text"]}>
               {props.text[0]}
               <br />
               {props.text[1]}
            </p>
            <button className={styles["button"]}>{props.buttonText}</button>
         </div>
      </div>
   );
}
