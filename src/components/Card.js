import React from 'react'
import './Card.css'

export default function Card() {
  return (
    <div className='container'>
        <img src='/img/cover.png' alt='cover'/>
        <img className='avatar' src='/img/avatar.png' alt='avatar'/>
        <span className='views'>1237 views • 1 day ago</span>
        <div className='description'>
            <span className='title'>Everything about pineapples and other tropical fruits</span>
            <span className='author'>By:&nbsp; Nana McDougall</span>
            <div className='progressText'>
                <span className='progress'>Progress:&nbsp;</span>
                <span className='percentage'>64%</span>
            </div>
            <div className='progressBar'>
                <div className='progressFilled'></div>
            </div>
            <div className='actions'>
                <div className='actionsStart'>
                    <img src='/img/options.svg' width={36} height={36} alt='options'/>
                </div>
                <div className='actionsEnd'>
                    <img src='/img/like.svg' width={36} height={36} alt='like'/>
                    <img src='/img/share.svg' width={36} height={36} alt='share'/>
                </div>
            </div>
        </div>
    </div>
  )
}
