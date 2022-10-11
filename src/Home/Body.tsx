import styles from './body.module.scss';
import ButtonsRow from "./ButtonsRow";
import NounsPage from "../Nouns/NounsPage";

function Body() {
    return (
        <div className={styles.body_container}>
            <ButtonsRow/>
        </div>
    )
}

export default Body;