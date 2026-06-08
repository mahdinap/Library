import styles from "./LikedList.module.css"
export default function LikedList({data:{image,title}}){
    return(
        <div className={styles.card}>
        <img src={image} alt={title}/>
        <p>{title}sss</p>
        </div>
    )
}