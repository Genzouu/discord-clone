import styles from "../styles/MembersBar.module.css";
import Member from "./Member";
import { useSelector } from "react-redux";
import { Store } from "../state/reducers";

//http://icon-library.com/images/discord-transparent-server-icon/discord-transparent-server-icon-17.jpg

export default function MembersBar() {
   const members = useSelector((state: Store) => state.users);
   const membersBarToggle = useSelector((state: Store) => state.membersBarToggle);

   return (
      <div className={`${styles.members} ${membersBarToggle ? "" : styles["members-hidden"]}`}>
         <div className={styles["member-group"]}>{"Online - " + members.length}</div>
         {members.map((member, index) => (
            <Member
               username={member.data.username}
               discriminator={member.data.discriminator}
               id={member.data.id}
               profilePic={member.data.profilePic}
               status={member.data.status}
               key={index}
            />
         ))}
      </div>
   );
}
