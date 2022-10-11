import LanguageButton from "./LanguageButton";
import styles from './header.module.scss';
import {useState} from "react";
import i18next from "i18next";
import detectUserLanguage from "../functions/detectUserLanguage";

function LanguageBox(){
    let [lang, setLang] = useState(i18next.language);

    return(
        <div className={styles.lang_row}>
            <LanguageButton setLang = {setLang} lang = {lang} style={lang === "ua" ? styles.lang_button : styles.lang_button_active} name="ua"/>
            <LanguageButton setLang = {setLang} lang = {lang} style={lang === "no" ? styles.lang_button : styles.lang_button_active} name="no"/>
            <LanguageButton setLang = {setLang} lang = {lang} style={lang === "ru" ? styles.lang_button : styles.lang_button_active} name="ru"/>
            <LanguageButton setLang = {setLang} lang = {lang} style={lang === "en" ? styles.lang_button : styles.lang_button_active} name="en"/>

        </div>
    )
}

export default LanguageBox;