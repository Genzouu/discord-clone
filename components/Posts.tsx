import styles from "../styles/Posts.module.css"

export default function Posts() {
   return (
      <div className={styles.posts}>
         {[...new Array(30)].map((post, index) => (
            <p>asd</p>
         ))}
      </div>
   )
}