
import Head from "next/head"
import Nav from '@/components/Nav'
import styles from './Layout.module.scss';
const Layout = ({children}) => {
    return(
       <>
        <Head>
            <title>Home</title>
            <link rel='icon' href='/static/favicon.ico' />
        </Head>
        <Nav />
        <main className={styles.main}>{children}</main></>
    )
}

export default Layout;