import React, { useState, useEffect } from "react";
import axios from 'axios';
import { RestaurantCard, AccountEventCard, ReviewCard } from "../../components";


const Recommendations = () => {
    const [dataArray, setDataArray] = useState([])

    useEffect(async ()=>{
        const {data} = await axios.get(`http://localhost:8000/places/reviews/latest`)
        let arr = []
        for (let key in data){
            arr.push(data[key])
        }
        console.log(arr)
        setDataArray(arr)
    }, [])

    let elements = dataArray.map((item, idx) => {
        if (item.restaurant){
            return <div key={idx}>
                <RestaurantCard result={item.restaurant} />
                <h3 style= {{"textAlign":"center"}} >Reviews for {item.restaurant.name} </h3>
                {item.reviews.map((review, itemIdx) => <div key={itemIdx}><ReviewCard review={review}/></div>)}
            </div>
        } else {
            return <div key={idx}>
                <AccountEventCard result={item.event} />
                {item.reviews.map((review, itemIdx) => <div key={itemIdx}><ReviewCard review={review}/></div>)}
            </div>
        }
    })
    return (
        <>
        {elements}
        </>
    )
}

export default Recommendations;

