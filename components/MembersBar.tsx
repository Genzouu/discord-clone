import styles from "../styles/MembersBar.module.css"
import { PublicUser, Status } from "../types/Data";
import Member from "./Member";

const members: PublicUser[] = [
   { username: "Genzou", discriminator: 0, id: 12345678, profilePic: "", status: Status.Online },
   { username: "tri/KUMA", discriminator: 0, id: 87654321, profilePic: "", status: Status.Online },
   { username: "romanholidaygoggles", discriminator: 0, id: 88908568, profilePic: "", status: Status.Online },
   { username: "messier81doughnuts", discriminator: 0, id: 10045678, profilePic: "", status: Status.Online },
   { username: "junobatman", discriminator: 0, id: 12312312, profilePic: "", status: Status.Online },
   { username: "insideoutr567ockysnail", discriminator: 0, id: 4756786, profilePic: "", status: Status.Online },
   { username: "sweetpic5klepi76oneer10", discriminator: 0, id: 12353535, profilePic: "", status: Status.Online },
   { username: "ryebreadpool", discriminator: 0, id: 11235678, profilePic: "", status: Status.Online },
   { username: "beachd123eepimpactmayonnaisenamaka", discriminator: 0, id: 12347388, profilePic: "", status: Status.Online },
   { username: "waterhalo", discriminator: 0, id: 49505863, profilePic: "", status: Status.Online },
   { username: "mirweb", discriminator: 0, id: 12038502, profilePic: "", status: Status.Online },
   { username: "tromboneowlgoldfish2342", discriminator: 0, id: 10192934, profilePic: "", status: Status.Online },
   { username: "tromboneowlgoldfish2342", discriminator: 0, id: 10192934, profilePic: "", status: Status.Online },
   { username: "tromboneowlgoldfish2342", discriminator: 0, id: 10192934, profilePic: "", status: Status.Online },
   { username: "tromboneowlgoldfish2342", discriminator: 0, id: 10192934, profilePic: "", status: Status.Online },
   { username: "8678678", discriminator: 0, id: 10192934, profilePic: "", status: Status.Online },
   { username: "3456456", discriminator: 0, id: 10192934, profilePic: "", status: Status.Online },
   { username: "234234", discriminator: 0, id: 10192934, profilePic: "", status: Status.Online },
   { username: "3453", discriminator: 0, id: 10192934, profilePic: "", status: Status.Online },
   { username: "9789789", discriminator: 0, id: 10192934, profilePic: "", status: Status.Online },
];

export default function MembersBar() {
   return (
      <div className={styles.members}>
         <div className={styles["member-group"]}>{"Online - " + members.length}</div>
         {members.map((member, index) => (
            <Member 
               username={member.username} 
               discriminator={member.discriminator} 
               id={member.id} 
               profilePic="http://icon-library.com/images/discord-transparent-server-icon/discord-transparent-server-icon-17.jpg" 
               status={member.status} 
               key={index} 
            />
         ))}
      </div>
   )
}