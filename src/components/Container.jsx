import React from 'react'

export default function Container() {
    return (
        <div>
            <div className="container">
                <input type="text" />
                <button> <img src="/yesOutline.svg" alt="submit" /></button>
                <button id="buttonReset"> <img src="/noOutline.svg" alt="Reset" /></button>
            </div>
        </div>
    )
}
