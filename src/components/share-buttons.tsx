import React from "react";
import {
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";
import * as styles from '../styles/share-buttons.module.css';

const ShareButtons = ({url}) => {
    return (
        <>
        <hr />
        <h3 className={styles.shareMessage}>Like the article? Share it (every bit helps)!</h3>
        <article className={styles.shareButtons}>
            <LinkedinShareButton url={url}>
                <LinkedinIcon round={true}  />
            </LinkedinShareButton>
            <RedditShareButton url={url}>
                <RedditIcon round={true} />
            </RedditShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={url}>
                <WhatsappIcon round={true} />
            </WhatsappShareButton>
        </article>
        <hr />
        </>
    )
};
export default ShareButtons;