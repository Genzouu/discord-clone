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
   friendIDs: string[]
   directMessages: Post[][]
}

export interface PublicUser {
   id: string,
   profilePic: string,
}