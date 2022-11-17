import style from '../styles/Report.module.css';
import Header from './Header';
import Head from 'next/head';
import Side from './Side';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>RealReport-Next.js</title>
            </Head>
            <div className={style.container}>
                <Header />
                <div className={style.viewContainer}>
                    <Side />
                    {children}
                </div>
            </div>
        </>
    );
}
