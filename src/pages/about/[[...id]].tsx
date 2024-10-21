import { useRouter } from "next/router";

const AboutPage = () => {
    const {query} = useRouter();
    return (
        <div>
            <h1>About Page</h1>
            <p>About : {query.id ? query.id[0] : ""} / {query.id ? query.id[1] : ""}</p>
        </div>
    );
};

export default AboutPage;