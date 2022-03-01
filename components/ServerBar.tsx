import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../state/reducers";
import { setSelectedServer } from "../state/slices/selectionSlice";
import { addServer } from "../state/slices/serversSlice";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdCompass } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

import styles from "../styles/ServerBar.module.css";
import ServerIcon, { ServerIconColourVariant } from "./ServerIcon";
import { FaDiscord } from "react-icons/fa";
import Tooltip from "./Tooltip";

export default function ServerBar() {
   const dispatch = useDispatch();
   const servers = useSelector((state: StateType) => state.servers);

   const [prevIndex, setPrevIndex] = useState<number>();

   const placeholderImages = [
      "https://121clicks.com/wp-content/uploads/2012/01/landscape_photographers_thumb.jpg",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh3.googleusercontent.com%2FlKcnnutMn6ZP2dB5AFuufefh2Z2etbIdc4AL-t0YAW-aQAaBz-L_Xh9ZB9cBhUz-DLM%3Ds180&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.d1kfj3y4opCoATkdIeYr9QAAAA%26pid%3DApi&f=1",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.P_VYzSnceY5KL6qxqqqWQAAAAA%26pid%3DApi&f=1",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gluF7x_xq1bDseYcdgrVNAAAAA%26pid%3DApi&f=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcaptainkimo.com%2Fwp-content%2Fuploads%2F2009%2F03%2Fhdr-panoramic-landscape-final-175x175.jpg&f=1&nofb=1",
      "https://antongorlin.com/wp-content/gallery/mountain-landscape/thumbs/thumbs_mountain-image-road.jpg",
      "https://antongorlin.com/wp-content/gallery/landscape/thumbs/thumbs_dark-forest-background.jpg",
   ];

   return (
      <div id="server-bar" className={styles["server-bar"]}>
         <ServerIcon
            icon={FaDiscord}
            colourVariant={ServerIconColourVariant.None}
            showPill={false}
            tooltipText="Home"
         />
         <hr className={`${styles.divider} ${styles.center}`} />
         <div id="server-container">
            {servers.map((server, index) => (
               <ServerIcon
                  icon={placeholderImages[index % placeholderImages.length]}
                  showPill={true}
                  index={index}
                  onClick={() => dispatch(setSelectedServer(index))}
                  key={index}
               />
               // <input className={styles.server} type="image" src="http://icon-library.com/images/discord-transparent-server-icon/discord-transparent-server-icon-17.jpg"></input>//
            ))}
         </div>
         <ServerIcon
            showPill={false}
            icon={AiOutlinePlus}
            colourVariant={ServerIconColourVariant.Green}
            onClick={() => dispatch(addServer("new server"))}
            tooltipText="Add New Server"
         />
         <ServerIcon
            showPill={false}
            icon={IoMdCompass}
            colourVariant={ServerIconColourVariant.Green}
            tooltipText="Explore Public Servers"
         />
         <hr className={`${styles.divider} ${styles.center}`} />
         <ServerIcon
            showPill={false}
            icon={FiDownload}
            colourVariant={ServerIconColourVariant.Green}
            tooltipText="Download App"
         />
      </div>
   );
}
