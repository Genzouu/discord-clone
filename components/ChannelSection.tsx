import { BiHash } from "react-icons/bi"
import { HiOutlinePlusSm } from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md"

import styles from "../styles/ChannelSection.module.css"
import Channel from "./Channel"

interface ChannelSectionProps {
   name: string, 
   channels: string[],
   index: number,
}

export default function ChannelSection({ name, channels, index }: ChannelSectionProps) {
   return (
      <details className={styles["channel-section"]} key={index}>                
         <summary className={styles["channel-section-summary"]}>
            <MdKeyboardArrowRight className={styles["expand-section-icon"]} />
            <p>{name + " " + (index + 1)}</p>
            <HiOutlinePlusSm className={styles["add-channel-icon"]}/>
         </summary>
         {channels.map((channel, index) => (                   
            <Channel name={channel} key={index}/>
         ))}
      </details>
   )
}