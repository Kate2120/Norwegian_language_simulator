import React from "react";

export function showList(event: React.MouseEvent<HTMLDivElement, MouseEvent>, functionSet: any, showList: string, functionSetAnotherButton: any){
    console.log(event.target);
    if(showList === ''){
        functionSet((event.target as HTMLElement).id);
        functionSetAnotherButton('');
    }
    else{
        functionSet('');
    }

}