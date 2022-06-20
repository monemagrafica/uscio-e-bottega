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
    animate: { opacity: 1, top: ['30vh', '30vh', '0vh'], scale: 1, transition: { duration: .7, ease: 'easeOut' } },
    exit: { opacity: 0 },
}
const animateOpacity = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 1.3 } },
    exit: { opacity: 0 }
}

export {
    animateTitle,
    animatePrezzo,
    animateLista,
    animatePanino,
    animateOpacity
}