import {PropsTitle} from "../Interfacies/interfacies";

function TitleH1(props: PropsTitle){
    return(
        <div>
            <h1>{props.title_h}</h1>
        </div>
    )
}

export default TitleH1;