import React, { useCallback, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import db from '../../db.json';
import './styles.scss';

function Post(props) {
    let data = db.posts[props.postId];
    let isFullScreen = false;

    const handle = useFullScreenHandle();

    const toggleFullScreen = () => {
        if (isFullScreen) {
            handle.exit();
        } else {
            handle.enter();
        }
    };

    const onChange = useCallback((state, handle) => {
        isFullScreen = state;
    }, [handle]);

    useEffect(() => {
        document.title = data.title;
    });

    return (
        <FullScreen handle={handle} onChange={onChange}>
            <div className="image_wrapper">
                <img src={"images/" + data.image} alt={data.title} />
            </div>
            <h1>{"text" in data && data.text}</h1>
            <div className="menu">
                <div className="buttons">
                    <div className="btn"><a href="#">Go back to main</a></div>
                    <div className="btn fullscreen" onClick={toggleFullScreen}>Toggle fullscreen</div>
                </div>
                <div>
                    {Object.keys(data.audio).map(function (key, index) {
                        return <div key={key}>
                            <audio autoPlay loop controls>
                                <source src={"audio/" + data.audio[index]} />
                            </audio>
                        </div>
                    }.bind(this))}
                </div>
            </div>
        </FullScreen>
    )
}

export default Post;
