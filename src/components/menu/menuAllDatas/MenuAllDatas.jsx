import axios from 'axios'
import './MenuAllDatas.css'
import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';



function MenuAllDatas() {

    const [data, setData] = useState([])
    const { category, subcategory } = useParams();
    useEffect(() => {
        axios
            .get(("https://raw.githubusercontent.com/vusalhasanov99/Starbucks/master/src/datas/AllProducts.json"))
            .then(response => setData(response.data.products));
    }, []);
    const drinksData = data.filter(item => item.category == "Drinks")
    return (
        <div className='menuAllDatas'>
            {drinksData.filter(item => item.category.toLocaleLowerCase().slice(0, 4) == category.toLocaleLowerCase().slice(0, 4) && item.subcategory.toLocaleLowerCase().slice(0, 4) == subcategory.toLocaleLowerCase().slice(0, 4)).map(item => (
                <div key={nanoid()} className="item">
                    <div className="img">
                        <img src={item.img} alt={item.name}/>
                    </div>
                    <p>{item.name}</p>
                </div>
            ))}

        </div>
    )
}

export default MenuAllDatas
