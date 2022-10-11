import {PropsInfo} from "../Interfacies/interfacies";
import React from "react";

function setNextWord(nouns: PropsInfo[], indexWord: number, setIndexWord: React.Dispatch<React.SetStateAction<number>>) {
    let inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(input => {
        input.value = '';
        input.focus();

    })
    if (nouns.length === 1) {
        setIndexWord(0);

    } else {
        if (indexWord === nouns.length - 1) {
            setIndexWord(0);

        } else {
            setIndexWord(indexWord => indexWord + 1);
        }
    }
}

export default setNextWord;