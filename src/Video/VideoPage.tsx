import styles from './video.module.scss';
import ItemVideo from "./ItemVideo";
import {useTranslation} from "react-i18next";

function VideoPage(){
    const {t} = useTranslation();
    return(
        <div className={styles.video_container}>
            <div></div>
            <div className={styles.video_row}>
                <ItemVideo video={<iframe width="100%" height="auto" src="https://www.youtube.com/embed/xBpKtPPpalI"
                                          title="YouTube video player" frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen></iframe>} h2_title={t("song_verbs")}/>
                <ItemVideo video={<iframe width="100%" height="auto" src="https://www.youtube.com/embed/cWUfgj9QkZY"
                                          title="YouTube video player" frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen></iframe>} h2_title={t("song_questions")}/>
                <ItemVideo video={<iframe width="100%" height="auto" src="https://www.youtube.com/embed/IQotT76pA8M"
                                          title="YouTube video player" frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen></iframe>} h2_title={t("song_tarzan")}/>
                <ItemVideo video={<iframe width="100%" height="auto" src="https://www.youtube.com/embed/MdaeOhDtQtQ"
                                          title="YouTube video player" frameBorder="0"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen></iframe>} h2_title={t("cartoon_simple_phrases")}/>
            </div>

            <div className={styles.link_radio}><a href="https://radio.nrk.no/direkte/radio_super" target="_blank">{t("listen_child_radio")}</a></div>

        </div>
    )
}

export default VideoPage;