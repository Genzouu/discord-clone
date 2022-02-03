import { FormEvent, useState } from "react"
import { HiPlusCircle } from "react-icons/hi"
import { HiGift } from "react-icons/hi"
import { RiFileGifFill } from "react-icons/ri"
import { FaStamp } from "react-icons/fa"
import { FaLaughSquint } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

import styles from "../styles/Chat.module.css"
import PostComponent from "./Post"
import { StoreState } from "../state/reducers"
import { Post } from "../types/Data"
import { addPost } from "../state/slices/serversSlice"
import { text } from "stream/consumers"

export default function Chat() {

   const dispatch = useDispatch();
   const selection = useSelector((state: StoreState) => state.selection);
   const posts: Post[] | undefined = useSelector((state: StoreState) => state.servers[selection.server]?.categories[selection.category]?.channels[selection.channel]?.posts);

   const addPostFunc = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let input = (document.getElementById("text-input") as HTMLInputElement);
      dispatch(addPost({ 
         serverIndex: selection.server, 
         categoryIndex: selection.category, 
         channelIndex: selection.channel,
         post: {
            message: input.value,
            image: "",
            date: Date.now.toString(),
         }
      }));
      input.value = "";
   }

   return (
      <div className={styles.chat}>
         <div className={styles.posts}>
            {posts?.map((post, index) => (
               <PostComponent userID={0} message={post.message} time={post.date}/>
            ))}
         </div>
         <div className={styles["text-input-area"]}>
            <div className={styles["text-input-container"]}>
               <div className={styles["left-icon-container"]}>
                  <HiPlusCircle className={styles["utility-icon"]} />
               </div>
               <form onSubmit={(e) => addPostFunc(e)}>
                  <input id="text-input" className={styles["text-input"]}></input>
               </form>
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