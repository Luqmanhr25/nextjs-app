import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push("/profile");
    };

    return (
        <div className={styles.login}>
            <head>
                <title>Login</title>
            </head>
            <h1 className="text-3xl font-bold">Login Page</h1>
            <button onClick={() => handleLogin()}>Login</button>
            <p>Belum Punya Akun ? Register <Link href="/auth/register" style={{color: "blue", textDecoration:"underline"}}>disini</Link></p>
        </div>
    );
};

export default LoginViews;