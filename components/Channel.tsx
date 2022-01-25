import { BiHash } from "react-icons/bi";

import styles from "../styles/Channel.module.css"

interface ChannelProps {
   name: string,
}

export default function Channel({ name }: ChannelProps) {
   return (
      <div className={styles.channel}>
         <BiHash className={styles["channel-icon"]}/>
         <p>{name}</p>
      </div>
   )
}