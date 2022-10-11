import styles from './video.module.scss';
import {PropsVideo} from "../Interfacies/interfacies";


function ItemVideo(props: PropsVideo) {
    return (
        <div className={styles.video_box}>
            <div className={styles.h2_style}>
                {props.h2_title}
            </div>
            <div className={styles.video}>
                {props.video}
            </div>
        </div>
    )
}

export default ItemVideo;