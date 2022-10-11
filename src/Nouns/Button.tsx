import {PropsMultiButtons} from "../Interfacies/interfacies";
import {showList} from "../functions/showList";
import {useState} from "react";
import styles from "./nounsPage.module.scss";


function Button(props: PropsMultiButtons){
    let [isHover, setIsHover] = useState('');

    return(
        <div data-style = {props.dataStyle} className={isHover === props.id ? styles.buttonNoun_hover : styles.buttonNoun} id={props.id} onClick={(event) => {showList(event, props.func, props.show, props.funcAnotherButton)}} onMouseEnter={() => {setIsHover(props.id)}} onMouseLeave={() => {setIsHover('')}}>
            {props.name}
        </div>
    )
}
export default Button;