import React from 'react'
import { cardData } from '../data'
import Navbar from './Navbar'
const Card = () => {
    return (
        <>
            <Navbar />
            <div className="m-3">

                {cardData.map((e) => (
                    <>
                        <h1> {e.title} </h1>
                        <p> {e.description} </p>
                    </>

                ))}
            </div>
        </>
    )
}

export default Card
