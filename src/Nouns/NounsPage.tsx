import {Nouns} from "../Info/info";
import TitleH1 from "./title_h1";
import styles from './nounsPage.module.scss';
import React from "react";
import NounsLists from "./NounsLists";
import {useTranslation} from "react-i18next";

function NounsPage() {
    let nouns = Nouns();
    const {t} = useTranslation();
    return (
        <div>
            <div className={styles.nouns_container}>
                <TitleH1 title_h={t("nouns")}/>
                {nouns.map((nounsList, index) => (
                    <NounsLists nouns={nounsList} index={index}/>
                ))}
            </div>
        </div>
    )
}

export default NounsPage;