import styles from "../styles/Post.module.css"

export interface PostProps {
   userID: number,
   message: string,
   time: string,
}

export default function Post({ message }: PostProps) {
   return (
      <div className={styles.post}>
         <p>{message}</p>
      </div>
   )
}