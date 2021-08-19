import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import StyledLink from '../components/styled-link';

const GameTemplate = ({ pageContext }) => {
    return (
        <div>
            <h1>{pageContext.Title}</h1>
        </div>
    )
}

export default GameTemplate;
