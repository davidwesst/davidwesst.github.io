import React from "react";
import { Link } from "gatsby";
import generateSlug from "../utils/generate-slug";

import * as style from "../styles/game-list.module.css";

const GameList = ({ games }) => {
    const gameListItems = games.map( (game) => {
        return (
            <Link to={generateSlug(game.Title)}>{game.Title}</Link>
        );
    });

    return (
        <section className={style.StreamGameList}>
            {gameListItems}
        </section>
    );
}

export default GameList;