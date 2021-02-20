import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
    const [posts, setposts] = useState();

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            const responsePosts = res.data;
            setposts(responsePosts);
        });
    }, []);
    return (
        <div>
            <h1>Post List</h1>
            {posts &&
            posts.map((post) => {
                const {userId, id, title} = post;
                return (
                    <div key={userId}>
                        <h5>{title}</h5>
                        <h6>Assigned to user {userId}, post #{id}</h6>
                    </div>
                )
            })}
        </div>

    );
};

export default PostList;