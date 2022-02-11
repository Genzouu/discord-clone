import { useEffect } from "react"
import { BiHash } from "react-icons/bi"
import { HiOutlinePlusSm } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { StoreState } from "../state/reducers"
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
   const selection = useSelector((state: StoreState) => state.selection);
   const server = useSelector((state: StoreState) => state.servers[selection.server]);

   // useEffect(() => {
   //    if (server.categoryIndex === props.index) {
   //       if (process.browser) (document.getElementsByClassName("category-details")[props.index] as HTMLDetailsElement).open = true;
   //    }
   // }, []);

   const addNewChannel = () => {
      dispatch(addChannel({serverIndex: selection.server, categoryIndex: props.index, name: "new channel " + props.channels.length, description: "new description"}));
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