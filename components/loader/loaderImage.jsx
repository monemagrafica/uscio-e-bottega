import React from 'react'
import style from './loader.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'



/**
 * Componente per l'animazione del loader
 * @date 23/10/2023 - 15:59:39
 *
 */

function LoaderImage() {
    return (
        <div className={style.loader}>
            <motion.div
                className={style.wrapperImageLoader}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
                <Image src="/images/loader.svg" width={571} height={345} layout="responsive" alt="Loader" />
            </motion.div>
        </div>
    )
}

export default LoaderImage