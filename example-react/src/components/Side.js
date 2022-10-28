import style from '../css/Report.module.css';
import { RiFileSearchLine } from "react-icons/ri";

const text = [1, 2, 3, 4, 5, 6];
function Side({ getJson }) {

    return (
        <div className={style.side}>
            <ul className={style.sideItem}>
                {text.map((id) => (
                    <li className={style.list} key={id} onClick={() => getJson(id)}>
                        <span ><RiFileSearchLine className={style.sideIcon} /></span>
                        {id > 5 ?
                            <span className={style.sideText}>여러 양식 리포트 - {id}</span>
                            : <span className={style.sideText}>샘플 양식 - {id}</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Side;
