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
            <Link to="/play">Go Back</Link>
        </Layout>
    );
}
export default GameTemplate;

export const query = graphql`
    query GameBySlug($title: String!) {
        playMyCollectionCsv(Title: {eq: $title}) {
            Title
            Gameplay
            Gameplay_Comment
        }
    }
`;