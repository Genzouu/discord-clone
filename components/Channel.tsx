import { BiHash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../state/reducers";
import { setSelectedChannel } from "../state/slices/serversSlice";

import styles from "../styles/Channel.module.css"

interface ChannelProps {
   name: string,
   categoryIndex: number,
   index: number,
}

export default function Channel(props: ChannelProps) {

   const dispatch = useDispatch();
   const selection = useSelector((state: StateType) => state.selection);
   const server = useSelector((state: StateType) => state.servers[selection.server]);

   return (
      <div 
         className={`${styles.channel} ${server.categoryIndex === props.categoryIndex && server.channelIndex === props.index ? styles.selected : ""}`} 
         onClick={() => dispatch(setSelectedChannel({ serverIndex: selection.server, categoryIndex: props.categoryIndex, channelIndex: props.index}))}
      >
         <BiHash className={styles["channel-icon"]}/>
         <p>{props.name}</p>
      </div>
   )
}