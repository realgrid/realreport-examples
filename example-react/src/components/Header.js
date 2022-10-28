import style from '../css/Report.module.css';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerContainer}>
                <a href='https://real-report.com/' className={style.headerTitle}>
                <img src='logo.png' alt='zoomout' className={style.headerIcon}></img>
                    <b className={style.headerTitle}>Real Report</b>
                </a>
                <a href='https://real-report.com/docs/getting-started' className={style.headerLink}>문서</a>
                <a href='https://demo.real-report.com/' className={style.headerLink}>데모</a>
            </div>
        </div>
    )
}
export default Header;