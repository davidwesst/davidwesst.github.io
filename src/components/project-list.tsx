import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";

import * as styles from '../styles/project-list.module.css';

const RenderLink = (hrefValue: string) => {
    if(hrefValue) {
        return <a href={hrefValue}>Check it out!</a>
    }
    else {
        return <div>More Info Soon...</div>
    }
}

const RenderProjectImage = (thumbnailImage, thumbnailAlt) => {
    const projectImg = getImage(thumbnailImage);
    return (
        <GatsbyImage 
            image={projectImg} 
            alt={thumbnailAlt}
            className={styles.projectImage}
            />
    );
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
                                gatsbyImageData(
                                    width: 256
                                    placeholder: BLURRED
                                )
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
            <>
            <article key={projectItem.id} className={styles.project} >
                {RenderProjectImage(projectItem.thumbnail, projectItem.thumbnailAlt)}
                <div className={styles.projectInfo}>
                    <h3>{projectItem.name} ({projectItem.type})</h3>
                    <p>{projectItem.description}</p>
                    {RenderLink(projectItem.link)}
                </div>
            </article>   
            <hr key={`${projectItem.id}_spacer`} />
            </>
        ))}
        </>
    )
});
export default ProjectList;