import style from '../../pages/store/store.module.scss'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion'
import toast from 'react-hot-toast';
import { TfasciaOrariaNonDisponibile } from '../utils/toaster';
import "swiper/css";

function DataRitiro(
    { listaFasciaOraria,
        setFasciaOraria,
        isDataRitiroOpen,
        fasciaOraria,
        setIsDataRitiroOpen }) {


    function isFasciaOrariaDisponibile(id) {
        const fascia = listaFasciaOraria.find((item) => Number(item.id) === id)
        if (fascia.disp !== 0) {
            return true
        }
        return false
    }




    const [activeIndex, setActiveIndex] = useState(1)

    return (

        <motion.div className={style.dataRitiro}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
        >
            <div className={style.carouselWrapper} >
                <Swiper
                    id="fasciaOraria"
                    effect="coverflow"
                    onSlideChange={(data) => {
                        setActiveIndex(data.activeIndex + 1)
                    }}
                >
                    {listaFasciaOraria?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div className={style.fascia}>
                                    {item.from} - {item.to}
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <button className={style.buttonOrdineFascia} disabled={!isFasciaOrariaDisponibile(activeIndex)} onClick={() => {
                setIsDataRitiroOpen(false)
                isFasciaOrariaDisponibile(activeIndex)
            }} >
                {isFasciaOrariaDisponibile(activeIndex) ? 'Conferma' :
                    'Non disponibile'}
            </button>
        </motion.div>
    )
}

export default DataRitiro
