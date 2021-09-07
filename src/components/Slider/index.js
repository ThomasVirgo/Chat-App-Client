import React, {useState} from 'react'
import './style.css'

const Slider = ({data}) => {
    const [index, setIndex] = useState(0)

    function slideRight(){
        let newIndex = (index+1)%data.length
        setIndex(newIndex)
    }

    function slideLeft(){
        let newIndex = index - 1
        newIndex < 0 ? setIndex(data.length-1) : setIndex(newIndex)
    }

    return (
        <div className='slider-card'>
            <button onClick={slideLeft}>{"<"}</button>
            <div>Content Here... {data[index]}</div>
            <button onClick={slideRight}>{">"}</button>
        </div>
    )
}

export default Slider