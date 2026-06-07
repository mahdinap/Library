import { useState } from "react"
import styles from "./BookCard.module.css"

export default function BookCard({data,likeListHandler}){
    const{title,image,language,year,pages,author,country}=data
    const [like,setLike]=useState(false)
    
    
    function likeHandler(){
        setLike((like)=>!like)
        likeListHandler(data,like)
    }
    
    return(
        <>
        <div className={styles.card}>
           <img width={100}  src={image}/>
           <div className={styles.info}>
            <h3>{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages}pages</span>
            </div>
           </div>
           <button onClick={likeHandler} className={like?`${styles.likedButton}`:`${styles.button}`}>Like</button>
        </div>

        </>
    )
}