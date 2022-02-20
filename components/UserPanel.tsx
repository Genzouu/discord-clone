import { IoMdSettings } from "react-icons/io";
import { MdMicOff } from "react-icons/md";
import { RiHeadphoneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Store } from "../state/reducers";
import styles from "../styles/UserPanel.module.css";

export default function UserPanel() {
   const user = useSelector((state: Store) => state.users[0].data);

   const getDiscriminator = (discriminator: number): string => {
      return (
         Array(4 - discriminator.toString().length)
            .fill("0")
            .join("") + discriminator
      );
   };

   return (
      <div className={styles["user-panel"]}>
         <div className={styles["profile-pic-container"]}>
            <img className={styles["profile-pic"]} src={user.profilePic} alt="" />
            <rect className={styles["status-icon"]} />
         </div>
         <div className={styles["username-container"]}>
            <p className={styles["username"]}>{user.username}</p>
            <p className={styles["discriminator"]}>{"#" + getDiscriminator(user.discriminator)}</p>
         </div>
         <div className={styles["toolbar"]}>
            <div className={styles["element-container"]}>
               <MdMicOff className={styles["toolbar-element"]} />
            </div>
            <div className={styles["element-container"]}>
               <RiHeadphoneFill className={styles["toolbar-element"]} />
            </div>
            <div className={styles["element-container"]}>
               <IoMdSettings className={styles["toolbar-element"]} />
            </div>
         </div>
      </div>
   );
}
