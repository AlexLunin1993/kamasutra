import React from 'react'
import preloader from '../../../assets/preloader.gif'
import s from './preloader.module.css'

let Preloader = () => {
    return (
        <div className={s.img}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;