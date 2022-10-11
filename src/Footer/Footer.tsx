import styles from './footer.module.scss';
import {useTranslation} from "react-i18next";

function Footer(){
    const {t} = useTranslation();
    return(
        <div className={styles.footer_container}>
            <div className={styles.link_my}>{t("created_by")}
                <a href="https://katerynakoruma.com/" target="_blank">katerynakoruma.com</a>
            </div>
        </div>
    )
}
export default Footer;