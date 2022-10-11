import styles from "./nounsPage.module.scss";
import Button from "./Button";
import React, {useState, useTransition} from "react";
import {PropsNounsList} from "../Interfacies/interfacies";
import NounsListLearn from "./NounsListLearn";
import NounsTraining from "./NounsTraining";
import {useTranslation} from "react-i18next";

function NounsLists(props: PropsNounsList) {
    let [showList, setShowList] = useState('');
    let [showTraining, setShowTraining] = useState('');
    let arrayNounsForTraining = props.nouns.slice(0);
    const {t} = useTranslation();

    return (
        <div>
            <div className={styles.part}>{t("part")} {props.index + 1}</div>
            <div className={styles.row_button}>
                <Button dataStyle="show_list" show={showList} func={setShowList} funcAnotherButton={setShowTraining}
                        id={"show_" + props.index.toString()}
                        name={t("view_list")}
                />
                <Button dataStyle="start_training" show={showTraining} func={setShowTraining}
                        funcAnotherButton={setShowList}
                        id={"start_" + props.index.toString()} name={t("start_workout")}
                />

            </div>
            <NounsListLearn showList={showList} nouns={props.nouns} index={props.index}/>
            <NounsTraining nouns={arrayNounsForTraining} showTraining={showTraining} index={props.index}/>


        </div>
    )
}

export default NounsLists;