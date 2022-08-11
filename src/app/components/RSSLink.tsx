import * as React from "react";


const RSSLink = () => {

    async function handleClick(e: React.SyntheticEvent) {
        e.preventDefault();
        console.log("Hello from RSS feed!");

        fetch("http://localhost:7071/api/articles/")
            .then(async (res) => {
                const data = await res.text();
                const dataBlob = new Blob([data], { type: 'text/plain' });

                const dlButton = document.createElement("a");
                dlButton.href = window.URL.createObjectURL(dataBlob);
                dlButton.download = "rss.json";
                dlButton.click();
            }).catch(err => {
                console.error(err);
            });
    }

    return (
        <>
        <a onClick={handleClick}>RSS</a>
        </>
    );
};
export default RSSLink;