import styles from "./Layout.module.css"
export default function Layout({children}){
    return(
        <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p><a target="balnk" href="https://github.com/mahdinap">Github</a> | React.js Full Course </p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed for my Course </p>
        </footer>
        </>
    )
}