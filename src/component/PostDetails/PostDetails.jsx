import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    // const params = useParams();
    const {postId} = useParams();
    const {id, title, body} = post;
    console.log(postId)

    const handleGoBack =()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Post Details About: {id}</h1>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
            
        </div>
    );
};

export default PostDetails;