import styles from './body.module.scss';
import Button from "./Button";
import {Path} from "../Constants/path";
import {useTranslation} from "react-i18next";

function ButtonsRow() {
    let dataNouns = {'data': 'nouns'};
    let dataVideo = {'data': 'video'};
    let dataGrammar = {'data': 'grammar'};
    const {t} = useTranslation();
    return(
        <div className={styles.buttons_box}>
            <Button category_name = {t("nouns")} link={Path.NOUNS} data={dataNouns}/>
            <Button category_name = {t("video_radio")} link={Path.VIDEO} data={dataVideo}/>
            <Button category_name={t("grammar")} link={Path.GRAMMAR} data={dataGrammar}/>

        </div>
    )
}
export default ButtonsRow;