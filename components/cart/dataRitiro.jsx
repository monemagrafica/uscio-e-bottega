import style from '../../pages/store/store.module.scss'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
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

    //se fasciaOraria è gia stata settata, allora setto l'indice attivo altrimenti lo setto a 1

    const [activeIndex, setActiveIndex] = useState(1 || fasciaOraria)

    return (

        <motion.div className={style.dataRitiro}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
        >
            <div className={style.carouselWrapper} >
                <div className={`${style.swipeIcons} ${style.left}`} >
                    <BiChevronLeft />

                </div>
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
                                    {item.from}-{item.to}
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className={`${style.swipeIcons} ${style.right}`} >

                    <BiChevronRight />
                </div>
            </div>
            <button className={style.buttonOrdineFascia}
                disabled={!isFasciaOrariaDisponibile(activeIndex)}
                onClick={() => {
                    setIsDataRitiroOpen(false)
                    setFasciaOraria(activeIndex)
                }} >
                {isFasciaOrariaDisponibile(activeIndex) ? 'Conferma' :
                    'Non disponibile'}
            </button>
        </motion.div>
    )
}

export default DataRitiro
