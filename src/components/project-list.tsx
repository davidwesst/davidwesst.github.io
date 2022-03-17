import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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
                    image
                    tech
                    type
                    description
                }
                }
            }  
        `);
        console.dir(data);
    return (
        <>
        {data.allProjectsYaml.nodes.map((projectItem) => (
            <article key={projectItem.id} >
                <h3>{projectItem.title}</h3>
                <StaticImage src={`/projects/${projectItem.image}`} alt="project image" />
                <p>{projectItem.description}</p>
                {RenderLink(projectItem.link)}
            </article>
        ))}
        </>
    )
});
export default ProjectList;