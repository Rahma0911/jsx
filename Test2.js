import React from 'react'
import picpic from './picpic/avatar.jpg'
import vidalgo from './picpic/vid.algo.mp4'
import './styles.css'

export const Test2 = () => {
    return (
        <div>
        <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
        <h1 className="title red">Your name here</h1>
        <br />
        <img src="picture.jpg"alt="logo" />
        <br />
        <img src={picpic} />
        </div>
        <video width="320" height="240" controls>
        <source src={vidalgo} type="video/mp4" />
        </video>
        </div>
    
    )
}