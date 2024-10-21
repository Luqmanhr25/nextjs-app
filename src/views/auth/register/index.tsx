import Link from "next/link";
import styles from "./Register.module.css";
const RegisterViews = () => {
    return (
        <div className={styles.register}>
            <head>
                <title>Register</title>
            </head>
            <h1 className="big">Register Page</h1>
            <p>Sudah Punya Akun ? Login <Link href="/auth/login" style={{color: "blue", textDecoration:"underline"}}>disini</Link></p>
        </div>
    )
}

export default RegisterViews;