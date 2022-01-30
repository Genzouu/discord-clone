import { useState } from "react"
import { HiPlusCircle } from "react-icons/hi"
import { HiGift } from "react-icons/hi"
import { RiFileGifFill } from "react-icons/ri"
import { FaStamp } from "react-icons/fa"
import { FaLaughSquint } from "react-icons/fa"

import styles from "../styles/Chat.module.css"
import Post, { PostProps } from "./Post"

export default function Chat() {

   const postsInitState: PostProps[] = [];
   const [posts, setPosts] = useState(postsInitState);

   return (
      <div className={styles.chat}>
         <div className={styles.posts}>
            {[...new Array(40)].map((post, index) => (
               <Post userID={0} message="asd" time=""/>
            ))}
         </div>
         <div className={styles["text-input-area"]}>
            <div className={styles["text-input-container"]}>
               <div className={styles["left-icon-container"]}>
                  <HiPlusCircle className={styles["utility-icon"]} />
               </div>
               <input className={styles["text-input"]}></input>
               <div className={styles["right-icon-container"]}>
                  <HiGift className={styles["right-icon"]}/>
                  <RiFileGifFill className={styles["right-icon"]}/>
                  <FaStamp className={styles["right-icon"]}/>
                  <FaLaughSquint className={styles["right-icon"]}/>
               </div>
            </div>
         </div>        
      </div>
   )
}