import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProfilePage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { push } = useRouter();
    useEffect (() => {
        if(!isLogin){
            push("/auth/login");
        }
    }, [])
 return(
    <div>
        <h1>Profile Page</h1>
    </div>
 )   
}

export default ProfilePage;