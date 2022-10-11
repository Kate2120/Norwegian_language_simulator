import i18next, {changeLanguage} from "i18next";
import React, {useState} from "react";
import makeActiveInput from "./makeActiveInput";

function handleChangeLanguage(event: React.MouseEvent<HTMLDivElement, MouseEvent>){

    changeLanguage(`${(event.target as HTMLElement).innerHTML}`);

    makeActiveInput();
}

export default handleChangeLanguage;