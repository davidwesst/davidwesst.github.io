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

interface ShareButtonProps {
    url?: string;
    shareMessage?: string;
}

const ShareButtons = ({url, shareMessage} : ShareButtonProps) => {
    const shareTitleMessage = (!shareMessage) ? `Like the what you read? Share it! (Every bit helps 😊)` : shareMessage;
    return (
        <>
        <hr />
        <h3 className={styles.shareMessage}>{shareTitleMessage}</h3>
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