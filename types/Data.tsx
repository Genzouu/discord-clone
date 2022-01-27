export default interface Data {
   user: PrivateUser,
   servers: {
      channelGroups: {
         channels: { 
            posts: Post[],
            members: PublicUser[],
         }[],
      },
   }[],
}

export interface Post {
   message: string,
   image: string,
   date: string,
   id: string,
}

export interface PrivateUser {
   data: PublicUser
   friendIDs: number[]
   directMessages: Post[][]
}

export interface PublicUser {
   username: string,
   discriminator: number,
   id: number,
   profilePic: string,
   status: Status, 
}

export enum Status {
   Online = "Online",
   Away = "Away",
   DoNotDisturb = "Do Not Disturb",
   Hidden = "Hidden",
   Offline = "Offline",
}