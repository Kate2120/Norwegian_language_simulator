import {PropsLanguageButton} from "../Interfacies/interfacies";
import handleChangeLanguage from "../functions/handleChangeLanguage";
import styles from './header.module.scss';

function LanguageButton(props: PropsLanguageButton){

    return(
        <div className={styles.button_box}>
            <div className={props.style} onClick={(event) => {handleChangeLanguage(event); props.setLang(props.name); navigator.vibrate(100)}}>{props.name}</div>
        </div>
    )
}

export default LanguageButton;