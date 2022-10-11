import { PropsListLearn} from "../Interfacies/interfacies";
import styles from "./nounsPage.module.scss";
import React from "react";

function NounsListLearn(props: PropsListLearn){
    return(
        <div>
            {props.showList === "show_" + (props.index).toString() && props.nouns.length > 0 ? <div className={styles.list_words}>
                {props.nouns.map(noun => (
                    <div>
                        <div className={styles.text}>
                            <div className={styles.word_text}>{noun.article + ' ' + noun.word}</div>
                            <div className={styles.word_text}>-</div>
                            <div className={styles.word_text}>{noun.translate}</div>
                        </div>
                        <div className={styles.text}>
                            <a href={"https://translate.google.com/?hl=ru&sl=no&tl=ru&text=" + noun.word + "&op=translate"}
                               target="_blank">Google Translater</a>
                            <div className={styles.word_text}></div>
                            <a href={"https://ordbokene.no/bm,nn/search?q=" + noun.word + "&scope=ei"}
                               target="_blank">ordbøkene.no</a>
                        </div>
                    </div>
                ))}
            </div> : ''}
        </div>
    )
}

export default NounsListLearn;