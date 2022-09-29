import React from "react";
import { Link } from 'react-router-dom';

import db from '../../db.json';
import './styles.scss';

class Main extends React.Component {
    render() {
        return (
            <div className="elements">
                {Object.keys(db.posts).map(function (key, index) {
                    return <div className="element" key={key}>
                        <Link to={"/" + key}>
                            <img src={"images/" + db.posts[key].image} alt={key} />
                        </Link>
                    </div>;
                }.bind(this))}
            </div >
        )
    }
}

export default Main;
