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

// const data = useStaticQuery(graphql`
//   query AllProjectsQuery {
//     allProjectsYaml {
//       nodes {
//         name
//         link
//         type
//         description
//         image
//       }
//     }
//   }
// `);

const ProjectList : React.FunctionComponent<ProjectListProps> = (({ projectData }) => {
    //console.log(data.AllProjectsQuery.nodes);
    return (
        <>
        {projectData.map((projectItem) => (
            <article>
                <h3>{projectItem.title}</h3>
                {/* <StaticImage src={projectItem.image} alt="project image" /> */}
                <p>{projectItem.description}</p>
                {RenderLink(projectItem.link)}
            </article>
        ))}
        </>
    )
});
export default ProjectList;