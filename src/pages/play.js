import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import GameList from '../components/game-list';

const PlayMyCollection = ({ data }) => {
    const pmcGames = data.allPlayMyCollectionCsv.nodes;

    return (
        <Layout title="Play My Collection">
            <header>
                <h1>Play My Collection</h1>
                <h2>This is the page where all the games that I stream on Twitch go.</h2>
            </header>
            <section>
                <GameList games={pmcGames} />
            </section>
        </Layout>
    );
}

export default PlayMyCollection;

export const query = graphql`
    query {
        allPlayMyCollectionCsv {
            nodes {
                Title
                Stream_Date
                Platform
            }
        }
    }
`