import { useState } from "react"
import {books} from "../constants/mockData.js"
import BookCard from "./BookCard"
import LikedList from "./LikedList"
import styles from "./Books.module.css"
import SearchBox from "./SearchBox.jsx"

export default function Books(){
    const[likeBooks,setLikeBooks]=useState([])
    const [search,setSearch]=useState([])
    const[book,setBook]=useState(books)

    function likeListHandler(Book,status){
        
        if(status){
            const newlist=likeBooks.filter((i)=>i.id!==Book.id)
            setLikeBooks(newlist)
        }
        else{
            setLikeBooks(prev=>[...prev,Book])
        }
       
        console.log(Book)
        console.log(likeBooks);
        
    }
    function searcHandler(){
        if(search){
            const searchList=books.filter((book)=>book.title.toLowerCase().includes(search))
            setBook(searchList)
            console.log(searchList);
        }else{
            setBook(books)
        }
        
    }
    return(<>
    
        <SearchBox searcHandler={searcHandler} search={search} setSearch={setSearch}/>
        <div className={styles.container}>
        <div className={styles.allbooks}>
            {book.map((b)=><BookCard key={b.id} data={b} likeListHandler={likeListHandler}/>)}
        </div>
        
            
            {!!likeBooks.length && <div className={styles.favbooks}><h4>Favorites</h4>{likeBooks.map((i)=><LikedList key={i.id} data={i}/>)}</div>}
       
        </div></>
    )
}