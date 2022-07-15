const animateTitle = {
    initial: { opacity: 0, top: 20, scale: 0.8, rotate: 9 },
    animate: { opacity: 1, top: 0, scale: 1, rotate: -4, transition: { delay: 0.7 } },
    exit: { opacity: 0 },
}
const animatePrezzo = {
    initial: { opacity: 0, top: 20, rotate: -150 },
    animate: { opacity: 1, top: 0, rotate: 10, transition: { delay: 1 } },
    exit: { opacity: 0 },
}
const animateLista = {
    initial: { opacity: 0, top: 20, scale: 0.8 },
    animate: { opacity: 1, top: 0, scale: 1 },
    exit: { opacity: 0 },
}
const animatePanino = {
    initial: { opacity: 0, top: '30vh', scale: 0.5 },
    animate: { opacity: 1, top: ['30vh', '30vh', "30vh", '0vh'], scale: 1, transition: { duration: .7, ease: [0.89, 0, 0.97, 0.49] } },
    exit: { opacity: 0 },
}
const animateOpacity = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 1.3 } },
    exit: { opacity: 0 }
}

const animateCart = {
    initial: { opacity: 0, top: '100%' },
    animate: { opacity: 1, top: '0px', transition: { duration: .5, ease: 'easeIn' } },
    exit: { opacity: 0, top: '100%', transition: { duration: 1, ease: 'easeOut' } }
}
const animateEmptyCart = {
    initial: { top: [-30] },
    animate: { top: [-30, 0, 0, 0 - 30], transition: { duration: 2 } },

}
const animateRiepilogo = {
    initial: { opacity: 0, left: '100%' },
    animate: { opacity: 1, left: '0px', transition: { duration: .5, ease: 'easeIn' } },
    exit: { opacity: 0, left: '100%', transition: { duration: .5, ease: 'easeOut' } }
}

const animateListItem = {
    initial: { opacity: 0, top: 20 },
    animate: { opacity: 1, top: 0 }
}
const animateInfo = {
    initial: { transform: 'scale(0.8)', opacity: 0 },
    animate: { transform: 'scale(1)', opacity: 1, transition: { type: "spring", stiffness: 60 } },
    exit: { opacity: 0, transform: 'scale(0.9)' }
}
const animatePrice = {
    initial: { opacity: 0, top: -20, rotate: 80 },
    animate: { opacity: 1, top: 0, rotate: -2, transition: { delay: 0.2, type: "spring", stiffness: 100 } }
}
const animateIcon = {
    initial: { opacity: 0, top: 20 },
    animate: { opacity: 1, top: 0 }
}
const animateSearchPage = {
    initial: { opacity: 0, top: -200 },
    animate: { opacity: 1, top: 0 }
}
const animateLogin = {
    initial: { opacity: 0, top:20 },
    animate: { opacity: 1, top:0, transition:{duration:1} },
    exit: { opacity: 0, top:20, transition:{duration:1} }
}
const animateDrawer = {
    initial: { opacity: 0, left: -500 },
    animate: { opacity: 1, left: 0, transition: { duration: .5, ease: 'easeIn' } },
    exit: { opacity: 0, left: -500, transition: { duration: .5, ease: 'easeIn' } }
}

const animazioneLogo = {
    initial: {
        opacity: 0,
        top: -50
    },
    animate: {
        opacity: 1,
        top: 0
    }
}
const animazioneForm = {
    initial: {
        opacity: 0,
        
    },
    animate: {
        opacity: 1,
        
    }
}
const animazioneBackground = {
    initial: {
        opacity: 0,

    },
    animate: {
        opacity: 1,

    }
}
const animateListCart = {
    initial: { opacity: 0,  },
    animate: { opacity: 1, transition :{duration:0.3} } ,
    exit: { opacity: 0 }
}

export {
    animateTitle,
    animatePrezzo,
    animateLista,
    animatePanino,
    animateOpacity,
    animateCart,
    animateEmptyCart,
    animateRiepilogo,
    animateListItem,
    animateInfo,
    animatePrice,
    animateIcon,
    animateSearchPage,
    animateLogin,
    animateDrawer,
    animazioneLogo,
    animazioneForm,
    animazioneBackground,
    animateListCart
}