import ItemVideo from "../Video/ItemVideo";
import styles from '../Video/video.module.scss';

function GrammarPage() {
    return (
        <div className={styles.video_container}>

            <div className={styles.video_row}>
                <div>
                    <ItemVideo video={<iframe width="100%" height="auto" src="https://www.youtube.com/embed/i0DYl17O0gk"
                                              title="YouTube video player" frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                              allowFullScreen></iframe>}
                               h2_title="Существительные, определенные, неопределенные, множественное число"/>
                    <div className={styles.description_block}>
                        <div className={styles.h3_style}>Подсказки по существительным (мини конспект из видео)</div>
                        <div className={styles.row_description}>
                            <div className={styles.h4_style}>Мужской род</div>
                            <div>
                                <ol>
                                    <li>Мужской пол (отец, сын, мужчина).</li>
                                    <li>Растения, животные.</li>
                                    <li>Окончания: <span>-er, -ing, -else, -het, -dom, -sjon, -ikk, -tet</span>.</li>
                                </ol>
                            </div>

                        </div>
                        <div className={styles.row_description}>
                            <div className={styles.h4_style}>Средний род</div>
                            <div>
                                <ol>
                                    <li>Окончания: <span>-eri, -skap, -ek, -al, -em, -iv, -ment, -krati, -um</span>.
                                    </li>
                                </ol>
                            </div>

                        </div>
                        <div className={styles.row_description}>
                            <div className={styles.table}>
                                <div className={styles.column_style}>
                                    <div className={styles.name_column}>Мужской род</div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Неопр.ф.ед.ч.</div>
                                        <div className={styles.ending}> -</div>
                                        <div className={styles.example}>en gutt</div>
                                    </div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Опр.ф.ед.ч.</div>
                                        <div className={styles.ending}>en</div>
                                        <div className={styles.example}>gutt<span>en</span></div>
                                    </div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Неопр.ф.мн.ч.</div>
                                        <div className={styles.ending}>er</div>
                                        <div className={styles.example}>gutt<span>er</span></div>
                                    </div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Опр.ф.мн.ч.</div>
                                        <div className={styles.ending}>ene</div>
                                        <div className={styles.example}>gutt<span>ene</span></div>
                                    </div>
                                </div>
                                <div className={styles.column_style}>
                                    <div className={styles.name_column}>Женский род</div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Неопр.ф.ед.ч.</div>
                                        <div className={styles.ending}>-</div>
                                        <div className={styles.example}>ei/en jente</div>
                                    </div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Опр.ф.ед.ч.</div>
                                        <div className={styles.ending}>a/en</div>
                                        <div className={styles.example}>jent<span>a</span>/ent<span>en</span></div>
                                    </div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Неопр.ф.мн.ч.</div>
                                        <div className={styles.ending}>er</div>
                                        <div className={styles.example}>jent<span>er</span></div>
                                    </div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Опр.ф.мн.ч.</div>
                                        <div className={styles.ending}>ene</div>
                                        <div className={styles.example}>jent<span>ene</span></div>
                                    </div>
                                </div>
                                <div className={styles.column_style}>
                                    <div className={styles.name_column}>Средний род</div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Неопр.ф.ед.ч.</div>
                                        <div className={styles.ending}>-</div>
                                        <div className={styles.example}>et bilde</div>
                                    </div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Опр.ф.ед.ч.</div>
                                        <div className={styles.ending}>et</div>
                                        <div className={styles.example}>bild<span>et</span></div>
                                    </div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Неопр.ф.мн.ч.</div>
                                        <div className={styles.ending}>er</div>
                                        <div className={styles.example}>bild<span>er</span></div>
                                    </div>
                                    <div className={styles.row_ending}>
                                        <div className={styles.name_form}>Опр.ф.мн.ч.</div>
                                        <div className={styles.ending}>ene</div>
                                        <div className={styles.example}>bild<span>ene</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.row_description}>
                            <div className={styles.h4_style}>Неопределенная форма используется:</div>
                            <div>
                                <ol>
                                    <li>Когда мы говорим о предмете впервые. <br></br>✔Например: ❝ Jeg
                                        har <span>en venn</span> ❞.
                                    </li>
                                    <li>Когда перед предметом стоит прилагательное, характеризующее предмет. <br></br>✔Например:
                                        ❝ Det er <span>en</span> stor <span>bil</span> ❞.
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className={styles.row_description}>
                            <div className={styles.h4_style}>Неопределенная форма не используется:</div>
                            <div>
                                <ol>
                                    <li>Когда нельзя посчитать. <br></br>✔Например: ❝ <span>vann, luft</span> ❞.</li>
                                    <li>При устойчивых оборотах. <br></br>✔Например: ❝ <span>Hun lager mat, baker kake, kjøper sko, spiller piano</span>❞.<br></br>Когда не важно о каком предмете речь, важно действие.
                                    </li>
                                    <li>Профессия, национальность, религиозная принадлежность. <br></br>✔Например: ❝ <span>Hun er student.  <br></br>Jeg er lærer. <br></br>Tor er nordmann. <br></br>Du er kristen</span>❞.</li>
                                </ol>
                            </div>
                        </div>
                        <div className={styles.row_description}>
                            <div className={styles.h4_style}>Исключения</div>
                            <div>
                                К словам среднего рода состоящим из 1 слога в неопр.ф.мн.ч. не добавляется
                                окончание <span>-er</span>.

                            </div>
                            <div>
                                ✔Например: ❝ et bord - <span>mange bord</span>, et språk - <span>fire språk</span>, et
                                år - <span>15 år</span>, et ord - <span>mange ord</span> ❞.
                            </div>
                            <div className={styles.nota_bene}>
                                <span>Но исключение:</span>
                                <ol>
                                    <li>et sted - <span>fem steder</span> (неопр.ф.мн.ч.).</li>
                                    <li>Слова, состоящие из 2 слов, последнее из которых односложное. <br></br>✔Например:
                                        ❝ et spørsmål - <span>mange spørsmål</span> ❞.
                                    </li>
                                    <li>Et barn - barnet - barn - <span>barna</span></li>
                                </ol>

                            </div>

                        </div>

                    </div>

                </div>
                <div>
                    <div className={styles.description_block}>
                        <div className={styles.h3_style}>Местоимения</div>
                        <div className={styles.row_description}>
                            <div className={styles.h4_style}></div>
                            <div className={styles.img_style}>
                                <div className={styles.img_item}><img src="/pronomen_1.png" alt="Pronomen"/></div>
                                <div className={styles.img_item}><img src="/pronomen_2.png" alt="Pronomen exemples"/></div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.link_radio}><a href="" target="_blank"></a></div>

        </div>
    )
}

export default GrammarPage;