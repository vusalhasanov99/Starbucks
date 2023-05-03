import axios from 'axios'
import './MenuAllDatas.css'
import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import Card from './Card';
import ProgressBar from '../../progressBar/ProgressBar';


function MenuAllDatas() {
    const [data, setData] = useState([])
    const { subcategory } = useParams();
    useEffect(() => {
        setTimeout(() => {
            axios
                .get(("https://raw.githubusercontent.com/vusalhasanov99/Starbucks/master/src/datas/MenuAllDatas.json"))
                .then(response => {
                    setData(response.data.products)
                }
                );
        }, 2000)
    }, []);

    const subCategory = data.find(item => item.subcategory.toLowerCase().split(" ").join('-') === subcategory)?.subcategory
    const types = [...new Set(data.filter(item => item.subcategory === subCategory).map(item => item.type))]
    return (

                <div className='menuAll'>
                    <ProgressBar/>
                    <h1>{subCategory}</h1>
                    <section className='menuAllDatas'>
                        {types.includes(undefined) && (
                            <div className='items'>
                                {data.filter(item => item.subcategory === subCategory)
                                    .map(product => <Card key={nanoid()} {...product} />)}
                            </div>)}
                        {!types.includes(undefined) && (
                            <div >
                                {types.map(item => (
                                    <div key={nanoid()}>
                                        <h3 >{item}</h3>
                                        <div className='items'>
                                            {data
                                                .filter(product => product.type === item)
                                                .map(product => <Card key={nanoid()} {...product} />)}
                                        </div>
                                    </div>))}
                            </div>
                        )}
                    </section>
                </div >
    )
}

export default MenuAllDatas
