import { PublicUser } from "../types/Data"
import styles from "../styles/Member.module.css"


export default function Member({ username, discriminator, id, profilePic, status }: PublicUser) {
   return (
      <div className={styles.member}>
         <img className={styles["profile-picture"]} src={profilePic}></img>
         <p className={styles.username}>{username}</p>
      </div>
   )
}