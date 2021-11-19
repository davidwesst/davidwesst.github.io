import React from "react";
import { Link } from "gatsby";

import * as style from "../styles/stream-game-list.module.css";

const StreamGameList = ({ games }) => {
    const gameListItems = games.map( (game) => {
        return (
            <Link to="#">{game.Title}</Link>
        );
    });

    return (
        <section className={style.StreamGameList}>
            {gameListItems}
        </section>
    );
}

export default StreamGameList;