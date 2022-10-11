import styles from './header.module.scss';
import Logo from "./logo";
import LanguageBox from "./LanguageBox";

function Header() {

    return (
        <div className={styles.header_box}>
            <div className={styles.container}>
                <Logo/>
                <LanguageBox/>
            </div>
        </div>
    )
}

export default Header;