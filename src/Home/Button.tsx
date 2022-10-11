import styles from './body.module.scss';
import {PropsButton} from "../Interfacies/interfacies";
import {useEffect, useState} from "react";
import React from "react";
import {Link} from "react-router-dom";


function Button(props: PropsButton) {
    let [styleButton, setStyleButton] = useState(styles.button_div);
    useEffect(() => {
        let buttons = Array.from(document.querySelectorAll('#button_cat'));

        buttons.forEach(button => {
            button.addEventListener('mouseover', (event) => {
                console.log(event.target);
                if(event !== null){
                    let data: any = ((event.target as HTMLElement).closest('div') as HTMLElement).getAttribute('data');
                    setStyleButton(data);
                }

            })
        })
        buttons.forEach(button => {
            button.addEventListener('mouseout', () => {
                setStyleButton(styles.button_div);
            })
        })
        buttons.forEach(button => {

            button.addEventListener('click', (event) => {
                let data: any = ((event.target as HTMLElement).closest('div') as HTMLElement).getAttribute('data');
                setStyleButton(data);
            })
        })
        buttons.forEach(button => {
            button.addEventListener('touchstart', (event) => {
                let data: any = ((event.target as HTMLElement).closest('div') as HTMLElement).getAttribute('data');
                setStyleButton(data);
                setTimeout(() => {
                    setStyleButton('');
                }, 2000);
            })
        })
        buttons.forEach(button => {
            button.addEventListener('touchend', () => {
                setStyleButton(styles.button_div);
            })
        })
    })
    return (
        <div className={styleButton === props.data.data ? styles.button_div_hover : styles.button_div} id = 'button_cat' {...props.data}>
            <Link to={props.link} >{props.category_name}</Link>

        </div>
    )
}

export default Button;