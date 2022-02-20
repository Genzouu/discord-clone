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
      <div className={styles["notice-container"]}>
         <BsX className={styles["close-icon"]} onClick={props.onClose} />
         <div className={styles["notice"]}>
            <img className={styles["image"]} src={props.image} />
            <p className={styles["invite-friends-notice-text"]}>
               Let's set on an adventure
               <br />
               Invite some friends!
            </p>
            <button className={styles["invite-friends-notice-button"]}>Invite Friends</button>
         </div>
      </div>
   );
}
