import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

import * as style from "../styles/game-template.module.css";

const GameTemplate = ({ data }) => {
    const { 
        Date_Added,
        Stream_Date,
        Title,
        Platform,
        Worth_It,
        Price_Complete,
        Price_GameOnly,
        Price_Source,
        //Price_Notes,
        Gameplay,
        Gameplay_Comment,
        Controls,
        Controls_Comment,
        Puzzles,
        Puzzles_Comment,
        Co_op_Style,
        Co_op_Comment,
        The_Fun,
        The_Less_Fun,
        The_Hook,
        TLDR,
        Time_Played,
        Story,
        Story_Comment,
    } = data.playMyCollectionCsv;
    
    return (
        <Layout
            title={Title}
        >
            <div className={style.contentLayout}>
                <header>
                    <h1>{Title} ({Platform})</h1>
                    <article>
                        {DateDisplay(Date_Added, 'Date Added')}
                        {DateDisplay(Stream_Date, 'Streamed On')}
                        {TimeDisplay(Time_Played)}
                    </article>
                </header>

                <aside>
                    <h2>TL;DR;</h2>
                    <article>
                        <span>Gameplay: {Gameplay}</span>
                        <span>Controls: {Controls}</span>
                        <span>Story: {Story}</span>
                        <span>Puzzles: {Puzzles}</span>
                        <span>Co-Op: {Co_op_Style}</span>
                        <span>Worth it? {Worth_It} ({Price_GameOnly} - {Price_Complete} USD)</span>
                    </article>
                </aside>

                <section className={style.details}>
                    <h2>The Details</h2>
                    <article>
                        <h3>Gameplay: {Gameplay}</h3>
                        <p>{Gameplay_Comment}</p>
                    </article>
                    <article>
                        <h3>Controls: {Controls}</h3>
                        <p>{Controls_Comment}</p>
                    </article>
                    <article>
                        <h3>Story: {Story}</h3>
                        <p>{Story_Comment}</p>
                    </article>
                    <article>
                        <h3>Puzzles: {Puzzles}</h3>
                        <p>{Puzzles_Comment}</p>
                    </article>
                    <article>
                        <h3>Co-op Style: {Co_op_Style}</h3>
                        <p>{Co_op_Comment}</p>
                    </article>
                    <article>
                        <h3>The Hook</h3>
                        <p>{The_Hook}</p>
                    </article>
                    <article>
                        <h3>The Fun</h3>
                        <p>{The_Fun}</p>
                    </article>
                    <article>
                        <h3>The Less Fun</h3>
                        <p>{The_Less_Fun}</p>
                    </article>
                </section>

                <footer>
                    <Link to="/play">Back to List</Link>
                </footer>
            </div>
        </Layout>
    );
}
export default GameTemplate;

const DateDisplay = function(dateValue, label) {
    
    if(dateValue) {
        const theDate = new Date(dateValue);
        return (
            <span>{`${label}: ${theDate.toLocaleDateString()}`}</span>
        );
    }
    else {
        return;
    }
}

const TimeDisplay = function(timeValue) {
    if(timeValue) {
        return (
            <span>{`Hours played: ${timeValue}`}</span>
        );
    }
}

export const query = graphql`
    query GameBySlug($title: String!) {
        playMyCollectionCsv(Title: {eq: $title}) {
            Date_Added
            Stream_Date
            Title
            Platform
            Worth_It
            Price_Complete
            Price_GameOnly
            Price_Source
            Price_Notes
            Gameplay
            Gameplay_Comment
            Controls
            Controls_Comment
            Puzzles
            Puzzles_Comment
            Co_op_Style
            Co_op_Comment
            The_Fun
            The_Less_Fun
            The_Hook
            TLDR
            Time_Played
            Story
            Story_Comment
        }
    }
`;