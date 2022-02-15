import { useEffect } from "react"
import { BiHash } from "react-icons/bi"
import { HiOutlinePlusSm } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { Store } from "../state/reducers"
import { addChannel } from "../state/slices/serversSlice"

import styles from "../styles/Category.module.css"
import { Channel } from "../types/Data"
import ChannelComponent from "./Channel"

interface CategoryProps {
   name: string, 
   channels: Channel[],
   index: number,
}

export default function Category(props: CategoryProps) {

   const dispatch = useDispatch();
   const selection = useSelector((state: Store) => state.selection);

   const addNewChannel = () => {
      dispatch(addChannel({serverIndex: selection.server, categoryIndex: props.index, name: "new channel " + props.channels.length, description: "new description"}));
      // open this category if the user adds a new channel (in case it's closed)
      (document.getElementById("categories-container")!.children[props.index].children[1] as HTMLDetailsElement).open = true;
   }

   return (
      <div className={styles["category"]}>
         <HiOutlinePlusSm className={styles["add-channel-icon"]} onClick={() => addNewChannel()}/> 
         <details className={styles["category-details"]}>                     
            <summary className={styles["category-summary"]}>
               <MdKeyboardArrowRight className={styles["expand-section-icon"]} />
               <p className={styles["category-name"]}>{props.name + " " + (props.index + 1)}</p>
            </summary>
            {props.channels.map((channel, index) => (
               <ChannelComponent name={channel.name} categoryIndex={props.index} index={index} key={index}/>
            ))}
         </details>
      </div>
   )
}