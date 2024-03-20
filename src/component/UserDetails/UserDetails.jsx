import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2>Details about users</h2>
            <h1>Name: {name}</h1>
            <h3>Website: {website}</h3>
        </div>
    );
};

export default UserDetails;