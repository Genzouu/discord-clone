import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../state/reducers";
import styles from "../styles/Post.module.css";
import { PostType, PublicUser } from "../types/Data";

interface PostProps extends PostType {
   showFull: boolean;
}

export default function Post(props: PostProps) {
   const user: PublicUser = useSelector(
      (state: StateType) => state.users[state.users.findIndex((x) => x.data.id === props.userID)].data
   );
   return (
      <div className={`${styles.post} ${props.showFull ? "" : styles.postPartial}`}>
         {props.showFull ? (
            <div className={styles["profile-pic-container"]}>
               <img className={styles["profile-pic"]} src={user.profilePic} />
            </div>
         ) : null}
         <div className={styles["right-container"]}>
            {props.showFull ? (
               <div className={styles["username-date-container"]}>
                  <p className={styles.username}>{user.username}</p>
                  <p className={styles.date}>{`${props.date.getDate()}/${
                     props.date.getMonth() + 1
                  }/${props.date.getFullYear()}`}</p>
               </div>
            ) : null}
            <div className={!props.showFull ? styles["message-container"] : ""}>
               {!props.showFull ? (
                  <p className={styles["post-time"]}>{`${props.date.getHours()}:${
                     props.date.getMinutes() < 10 ? "0" + props.date.getMinutes() : props.date.getMinutes()
                  }`}</p>
               ) : null}
               <p className={`${styles.message} ${!props.showFull ? styles["message-partial"] : ""}`}>
                  {props.message}
               </p>
            </div>
         </div>
      </div>
   );
}
