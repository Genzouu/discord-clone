import { FormEvent } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { HiGift } from "react-icons/hi";
import { RiFileGifFill } from "react-icons/ri";
import { FaStamp } from "react-icons/fa";
import { FaLaughSquint } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import styles from "../styles/Chat.module.css";
import Post from "./Post";
import { StateType } from "../state/reducers";
import { PostType } from "../types/Data";
import { addPost } from "../state/slices/serversSlice";
import { TooltipCTX } from "./Tooltip";

export default function Chat() {
   const dispatch = useDispatch();
   const selection = useSelector((state: StateType) => state.selection);
   const server = useSelector((state: StateType) => state.servers[selection.server]);
   const posts: PostType[] | undefined = useSelector((state: StateType) =>
      server.categoryIndex >= 0
         ? state.servers[selection.server]?.categories[server.categoryIndex].channels[server.channelIndex]?.posts
         : state.servers[selection.server]?.newChannels[server.channelIndex]?.posts
   );

   const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];

   const addPostFunc = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let input = document.getElementById("text-input") as HTMLInputElement;
      if (input.value !== "") {
         let post: PostType = {
            userID: 12345678,
            message: input.value,
            image: "",
            date: new Date(),
         };
         dispatch(
            addPost({
               serverIndex: selection.server,
               categoryIndex: server.categoryIndex,
               channelIndex: server.channelIndex,
               post: post,
            })
         );
         input.value = "";
      }
   };

   const isSameDate = (indexOne: number, indexTwo: number) => {
      return posts[indexOne].date.toDateString() === posts[indexTwo].date.toDateString();
   };

   const showFull = (index: number): boolean => {
      if (index !== 0) {
         if (posts[index].userID === posts[index - 1].userID && isSameDate(index, index - 1)) {
            return false;
         }
      }
      return true;
   };

   // add date line break (if the previous message was posted on a diffrent date to the new message, split the sections up)

   return (
      <TooltipCTX>
         {(ctx) => (
            <div className={styles.chat}>
               <div className={styles["posts-container"]}>
                  <div className={styles.posts}>
                     {posts?.map((data, index) => (
                        <div>
                           {index === 0 || !isSameDate(index, index - 1) ? (
                              <div className={styles["line-break-container"]}>
                                 <div className={styles["line-break"]}></div>
                                 <div className={styles["line-break-date"]}>
                                    {`${data.date.getDate()}
                              ${months[data.date.getMonth()]} 
                              ${data.date.getFullYear()}`}
                                 </div>
                              </div>
                           ) : null}
                           <Post
                              showFull={showFull(index)}
                              userID={data.userID}
                              message={data.message}
                              image={data.image}
                              date={data.date}
                              key={index}
                           />
                        </div>
                     ))}
                  </div>
               </div>
               <div className={styles["text-input-area"]}>
                  <div className={styles["text-input-container"]}>
                     <div className={styles["left-icon-container"]}>
                        <HiPlusCircle className={styles["utility-icon"]} />
                     </div>
                     <form className={styles["text-input-form"]} onSubmit={(e) => addPostFunc(e)}>
                        <input id="text-input" className={styles["text-input"]}></input>
                     </form>
                     <div className={styles["right-icon-container"]}>
                        <HiGift
                           className={styles["right-icon"]}
                           onMouseEnter={(e) => {
                              ctx.setTooltipCTX({
                                 caller: e.currentTarget,
                                 text: "Gift your friends nitro so that they can use cool chat benefits",
                                 direction: "top",
                              });
                           }}
                           onMouseLeave={() => {
                              ctx.setTooltipCTX({ text: "" });
                           }}
                        />
                        <RiFileGifFill className={styles["right-icon"]} />
                        <FaStamp className={`${styles["right-icon"]} ${styles["stamp"]}`} />
                        <FaLaughSquint className={styles["right-icon"]} />
                     </div>
                  </div>
               </div>
            </div>
         )}
      </TooltipCTX>
   );
}
