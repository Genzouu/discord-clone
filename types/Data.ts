export default interface Data {
   user: PrivateUser,
   servers: {
      name: string,
      categoryIndex: number,
      channelIndex: number,
      newChannels: Channel[],
      categories: Category[],
      members: PublicUser[],
   }[],
}

export interface Category {
   name: string,
   channels: Channel[],
}

export interface Channel {
   name: string,
   description: string,
   posts: PostType[],
}

export interface PostType {
   userID: number,
   message: string | null,
   image: string | null,
   date: Date,
}

export interface PrivateUser {
   data: PublicUser
   friendIDs: number[]
   directMessages: PostType[][]
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