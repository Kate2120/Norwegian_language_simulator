import {SetStateAction} from "react";


export interface PropsButton {
    category_name: string,
    link: any,
    data: DataAttribute

}

export interface DataAttribute {
    data: SetStateAction<string>
}

export interface PropsTitle {
    title_h: string
}

export interface PropsMultiButtons {
    name: string,
    id: string,
    func: Function,
    funcAnotherButton: Function,
    show: string,
    dataStyle: string
}

export interface PropsListLearn {
    showList: string,
    nouns: PropsInfo[],
    index: number
}

export interface PropsInfo {
    article: string,
    word: string,
    translate: string,
    count: number
}

export interface PropsVideo {
    h2_title: string,
    video: any,

}

export interface PropsNounsList {
    nouns: PropsInfo[],
    index: number
}

export interface PropsListTraining {
    showTraining: string,
    nouns: PropsInfo[],
    index: number
}

export interface PropsLanguageButton {
    name: string,
    style: string,
    setLang: Function,
    lang: string
}