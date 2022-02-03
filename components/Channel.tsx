import { BiHash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setSelectedChannel } from "../state/slices/selectionSlice";

import styles from "../styles/Channel.module.css"

interface ChannelProps {
   name: string,
   categoryIndex: number,
   index: number,
}

export default function Channel(props: ChannelProps) {

   const dispatch = useDispatch();

   return (
      <div className={styles.channel} onClick={() => dispatch(setSelectedChannel({category: props.categoryIndex, channel: props.index}))}>
         <BiHash className={styles["channel-icon"]}/>
         <p>{props.name}</p>
      </div>
   )
}