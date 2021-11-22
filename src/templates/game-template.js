import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const GameTemplate = ({ data }) => {
    const { Gameplay, Gameplay_Comment, Title } = data.playMyCollectionCsv;
    
    return (
        <Layout
            title={Title}
        >
            <header>
                <h1>{Title}</h1>
                <article>

                </article>
            </header>
            <section>
                <article>
                    <h2>Gameplay: {Gameplay}</h2>
                    <p>{Gameplay_Comment}</p>
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