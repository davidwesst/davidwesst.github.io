import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

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
            <header>
                <h1>{Title} ({Platform})</h1>
                <ul>
                    <li>Date Added: {Date_Added}</li>
                    <li>Streamed On: {Stream_Date}</li>
                    <li>Time Played: {Time_Played} hours</li>
                </ul>
            </header>

            <aside>
                <h2>TL;DR;</h2>
                <ul>
                    <li>Gameplay: {Gameplay}</li>
                    <li>Controls: {Controls}</li>
                    <li>Story: {Story}</li>
                    <li>Puzzles: {Puzzles}</li>
                    <li>Co-Op: {Co_op_Style}</li>
                </ul>
                <ul>
                    <li>Price: {Price_GameOnly} - {Price_Complete} (from {Price_Source})</li>
                    <li>Worth It: {Worth_It}</li>
                </ul>
                <article>
                    <p>{TLDR}</p>
                </article>
            </aside>

            <section>
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

            <Link to="/play">Back to List</Link>
        </Layout>
    );
}
export default GameTemplate;

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