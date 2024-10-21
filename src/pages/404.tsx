import Styles from "@/styles/404.module.scss";
const Custom404 = () => {
    return(
        <div className={Styles.error}>
            <img src="/404.png" alt="404" className={Styles.error__image}/>
            <div>Halaman Tidak Ditemukan</div>
        </div>
    )
    }

export default Custom404;