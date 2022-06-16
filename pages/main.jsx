import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/main.module.scss'
import Layout from '../components/layout/layout'
import {motion} from 'framer-motion'
function Main() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Uscio e Bottega</title>
                    <meta name="description" content="uscio e bottega app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={style.mainPage} >
                    <div className={style.boxmain}>
                        <div className={style.imagePanino}>
                            <Image src="/images/main-panino.svg" layout='responsive' width={147} height={89} alt="main-panino" />
                        </div>
                        <div className={style.title}>
                            I Nostri Panini
                        </div>
                    </div>
                    <div className={style.boxmain}>
                        <div className={style.imageSpesa}>
                            <Image src="/images/main-spesa.svg" layout='responsive' width={153} height={169} alt="main-spesa" />
                        </div>
                        <div className={style.title}>
                            Un pò di Spesa
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default Main