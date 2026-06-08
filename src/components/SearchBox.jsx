import styles from "./SearchBox.module.css"
export default function SearchBox({searcHandler,setSearch,search}){
    return(
        <div className={styles.container}>
        <input type="text" placeholder="Search title" value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
        <button className={styles.search} onClick={searcHandler} >Search</button>
        </div>
    )
}