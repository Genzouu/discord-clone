import { useLayoutEffect } from "react";
import { VscTriangleUp } from "react-icons/vsc";
import styles from "../styles/Tooltip.module.css";

interface TooltipProps {
   text: string;
   direction?: "right" | "left" | "top" | "bottom";
   caller?: Element;
}

export default function Tooltip(props: TooltipProps) {
   useLayoutEffect(() => {
      if (process.browser) {
         let tooltip = document.getElementById("tooltip");
         if (props.text !== "") {
            tooltip!.style.display = "flex";
            let callerRect = props.caller!.getBoundingClientRect();
            switch (props.direction) {
               case "right":
                  tooltip!.style.left = callerRect.right + 20 + "px";
                  tooltip!.style.top = callerRect.top + callerRect.height / 2 - tooltip!.offsetHeight / 2 + "px";
                  break;
               case "left":
                  tooltip!.style.left = callerRect.left - tooltip!.offsetWidth - 10 + "px";
                  tooltip!.style.top = callerRect.top + callerRect.height / 2 - tooltip!.offsetHeight / 2 + "px";
                  break;
               case "top":
                  tooltip!.style.left = callerRect.right - callerRect.width / 2 - tooltip!.offsetWidth / 2 + "px";
                  tooltip!.style.top = callerRect.top - tooltip!.offsetHeight - 8 + "px";
                  break;
               case "bottom":
                  tooltip!.style.left = callerRect.right - callerRect.width / 2 - tooltip!.offsetWidth / 2 + "px";
                  tooltip!.style.top = callerRect.bottom + 8 + "px";
                  break;
            }
         } else {
            tooltip!.style.display = "none";
         }
      }
   }, [props.text]);

   return (
      <div id="tooltip" className={`${styles["tooltip"]} ${styles["tooltip-" + props.direction]}`}>
         <p className={styles["text"]}>{props.text}</p>
         <VscTriangleUp className={`${styles["arrow"]} ${props.direction ? styles["arrow-" + props.direction] : ""}`} />
      </div>
   );
}
