import { BiHash } from "react-icons/bi"
import { HiOutlinePlusSm } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"

import styles from "../styles/Category.module.css"
import { Channel } from "../types/Data"
import ChannelComponent from "./Channel"

interface CategoryProps {
   name: string, 
   channels: Channel[],
   index: number,
}

export default function Category(props: CategoryProps) {
   return (
      <details className={styles["category"]} key={props.index}>                
         <summary className={styles["category-summary"]}>
            <MdKeyboardArrowRight className={styles["expand-section-icon"]} />
            <p>{props.name + " " + (props.index + 1)}</p>
            <HiOutlinePlusSm className={styles["add-channel-icon"]}/>
         </summary>
         {props.channels.map((channel, index) => (                   
            <ChannelComponent name={channel.name} categoryIndex={props.index} index={index} key={index}/>
         ))}
      </details>
   )
}