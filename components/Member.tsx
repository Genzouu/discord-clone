import { PublicUser } from "../types/Data";
import styles from "../styles/Member.module.css";

export default function Member(props: PublicUser) {
   return (
      <div className={styles.member}>
         <img className={styles["profile-picture"]} src={props.profilePic}></img>
         <p className={styles.username}>{props.username}</p>
      </div>
   );
}
