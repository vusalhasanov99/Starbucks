import axios from 'axios'
import './MenuAllDatas.css'
import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import Card from './Card';

function MenuAllDatas() {
    const [data, setData] = useState([])
    const { subcategory } = useParams();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get(("https://raw.githubusercontent.com/vusalhasanov99/Starbucks/master/src/datas/BestDevelopersProduct2.json"))
                .then(response => {
                    setData(response.data.products)
                    setLoading(false)
                }
                );
        }, 2000)
    }, []);

    const subCategory = data.find(item => item.subcategory.toLowerCase().split(" ").join('-') === subcategory)?.subcategory
    const types = [...new Set(data.filter(item => item.subcategory === subCategory).map(item => item.type))]
    return (
        <>
            {loading ? <div>yuklenir...</div> :
                <div className='menuAll'>
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
            }
        </>
    )
}

export default MenuAllDatas
