import React from "react";
import {PropsInfo} from "../Interfacies/interfacies";
import setNextWord from "./setNextWord";
import makeActiveInput from "./makeActiveInput";

function checkNounAnswer(event: React.MouseEvent<HTMLDivElement, MouseEvent>, array: PropsInfo[], indexWord: number, isRight: string, setIsRight: React.Dispatch<React.SetStateAction<string>>, setIndexWord: React.Dispatch<React.SetStateAction<number>>, isWrong: string, setIsWrong: React.Dispatch<React.SetStateAction<string>>) {

    if (event.target !== null) {
        if ((event.target as HTMLElement).closest('.training_box') !== null) {
            let box = (event.target as HTMLElement).closest('.training_box');
            let answer = (((box as HTMLElement).querySelector('input') as HTMLInputElement).value).toLowerCase();
            if (answer === array[indexWord].article) {
                setIsRight(isRight => 'right');
                setTimeout(() => {
                    setIsRight('');
                }, 200)
                if (array[indexWord].count < 2) {
                    array[indexWord].count = array[indexWord].count + 1;
                    setTimeout(() => {
                        ((box as HTMLElement).querySelector('input') as HTMLInputElement).value = '';
                        if (array.length !== 0) {
                            if (indexWord === array.length - 1) {
                                setIndexWord(0);
                                makeActiveInput();
                            } else {
                                makeActiveInput();
                                setIndexWord(indexWord => indexWord + 1);
                            }
                        } else {
                        }

                    }, 400)
                } else {
                    if (array.length === 2) {
                        setIndexWord(0);
                        makeActiveInput();
                    }
                    setTimeout(() => {
                        ((box as HTMLElement).querySelector('input') as HTMLInputElement).value = '';
                        array.splice(indexWord, 1);
                        if (indexWord < array.length - 1 && array.length !== 0) {
                            setNextWord(array, indexWord, setIndexWord);
                        } else if (array.length === 0) {

                        } else {
                            setIndexWord(0);
                            makeActiveInput();
                        }

                        if (array.length === 0) {
                            setNextWord(array, indexWord, setIndexWord);
                        }

                    }, 400)
                }

            } else {
                array[indexWord].count = 0;
                setIsWrong('wrong')
                setTimeout(() => {
                    setIsWrong('');
                    setNextWord(array, indexWord, setIndexWord);
                }, 300)
            }
        }

    }
}

export default checkNounAnswer;