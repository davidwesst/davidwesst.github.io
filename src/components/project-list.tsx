import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";

import ProjectListItem, { IProjectItemProps } from './project-list-item';

interface ProjectListProps {
    projectData: Array<IProjectItemProps>;
}

const RenderLink = (hrefValue: string) => {
    if(hrefValue) {
        return <a href={hrefValue}>Learn More</a>
    }
    else {
        return <div>More Info Soon...</div>
    }
}

const ProjectList : React.FunctionComponent = ( () => {
        const data = useStaticQuery(graphql`
            query ProjectListQuery {
                allProjectsYaml {
                    nodes {
                        id
                        name
                        link
                        thumbnail {
                            childImageSharp {
                                ...fluid
                            }
                        }
                        thumbnailAlt
                        tech
                        type
                        description
                    }
                }
            }  
        `);

    return (
        <>
        {data.allProjectsYaml.nodes.map((projectItem) => (
            <article key={projectItem.id} >
                <h3>{projectItem.title}</h3>
                <p>{projectItem.description}</p>
                <img src={projectItem.thumbnail.publicURL} alt={projectItem.thumbnailAlt} />
                {RenderLink(projectItem.link)}
            </article>
        ))}
        </>
    )
});
export default ProjectList;