export default interface Data {
   user: PrivateUser,
   servers: {
      name: string,
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
   posts: Post[],
}

export interface Post {
   message: string,
   image: string,
   date: string,
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