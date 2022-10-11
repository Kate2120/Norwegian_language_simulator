import checkSize from "../functions/checkSize";
import {Link} from "react-router-dom";
import {Path} from "../Constants/path";

function Logo() {
    let width = checkSize();
    return (
        <div>
            <Link  to={Path.HOME}>
            {width === "large" ? <img src="/flag-of-norway_80.png" alt=""/> :
                <img src="/flag-of-norway_40.png" alt=""/>}
            </Link>
        </div>
    )
}

export default Logo;