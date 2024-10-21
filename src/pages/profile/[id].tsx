import { useRouter } from "next/router";
const DetailProfile = () => {
    const {query} = useRouter();
    return (
        <div>
            <h1>Detail Profile</h1>
            <p>Nama : {query.id}</p>
        </div>
    );
};

export default DetailProfile; 