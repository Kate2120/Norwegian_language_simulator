import styles from "./nounsPage.module.scss";
import {PropsListTraining} from "../Interfacies/interfacies";
import {useState} from "react";
import checkNounAnswer from "../functions/chekNounAnswer";
import setNextWord from "../functions/setNextWord";
import {useTranslation} from "react-i18next";

function NounsTraining(props: PropsListTraining) {
    let [indexWord, setIndexWord] = useState(0);
    let [isRight, setIsRight] = useState('');
    let [isWrong, setIsWrong] = useState('');
    let {t} = useTranslation();

    return (
        <div>
            {props.nouns.length === 0 ?
                <div>Вы выучили все слова</div> : props.showTraining === ('start_' + props.index).toString() ?
                    <div className={styles.training_row + ' ' + 'training_box'}>
                        <div className={styles.words_box}>
                            <div><input autoFocus={true}/></div>
                            <div className={styles.text}>{props.nouns[indexWord].word}</div>
                            <div className={isRight === 'right' ? styles.image_right_visible : styles.image_right}>
                                <svg height="20" viewBox="0 -46 417.81333 417" width="20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0"
                                        fill="#008000FF"/>
                                </svg>
                            </div>
                            <div className={isWrong === 'wrong' ? styles.image_wrong_visible : styles.image_wrong}>
                                <svg id="Layer_1" height="18" viewBox="0 0 512 512" width="18"
                                     xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                                    <path
                                        d="m490.891 388.969a72.071 72.071 0 1 1 -101.923 101.924l-132.968-132.969-132.968 132.969a72.072 72.072 0 0 1 -101.924-101.925l132.968-132.968-132.967-132.967a72.07 72.07 0 1 1 101.923-101.923l132.968 132.968 132.968-132.969a72.071 72.071 0 0 1 101.924 101.923l-132.969 132.968z"
                                        fill="#FF0000FF"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.buttons_row} data-name = "button_check">
                            <div className={styles.button_check} onClick={(event) => {
                                checkNounAnswer(event, props.nouns, indexWord, isRight, setIsRight, setIndexWord, isWrong, setIsWrong);
                            }}>{t("check")}
                            </div>
                            <div className={styles.button_next} onClick={() => {
                                setNextWord(props.nouns, indexWord, setIndexWord);
                            }}>{t("next")}
                            </div>
                        </div>


                    </div>
                    : ''}
        </div>
    )
}

export default NounsTraining;