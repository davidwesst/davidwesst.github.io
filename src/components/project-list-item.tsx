import React from "react";

export interface IProjectItemProps {
    title: string;
    link?: string;
    image: string;
    description: string;
}

const ProjectListItem : React.FunctionComponent<IProjectItemProps> = ((props) => {
    return (
        <article>Project goes here</article>
    )
});
export default ProjectListItem;