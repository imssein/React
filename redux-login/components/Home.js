import React, { useState, useEffect } from "react";
import userService from "../services/user.service";

function Home(props) {
    const [content, setContent] = useState("");

    useEffect(() => {
        userService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            }, 
            (error) => {
                const _content = 
                    (error.response && error.response.data) || 
                    error.message || 
                    error.toString();
                setContent(_content); 
            }
        );
    }, []);

    return (
        <div>
            <h3>{content}</h3>
        </div>
    );
}

export default Home;