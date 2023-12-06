import style from '../styles/Report.module.css';
import { RiFileSearchLine } from "react-icons/ri";
import Link from "next/link";

const text = [1, 2, 3, 4, 5, 6, 7];
function Side() {
    return (
        <div className={style.side}>
            <ul className={style.sideItem}>
                {text.map((id) => (
                    <li className={style.list} key={id} >
                        <Link href={`http://localhost:3000/report/${id}`} style={{ textDecoration: 'none' }}>
                            <span ><RiFileSearchLine className={style.sideIcon} /></span>
                            {id > 6 ?
                                <span className={style.sideText}>여러 양식 리포트 - {id}</span>
                                : <span className={style.sideText}>샘플 양식 - {id}</span>} 
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Side;
