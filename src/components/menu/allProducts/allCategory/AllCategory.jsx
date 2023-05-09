import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ProgressBar from '../../../progressBar/ProgressBar';

function AllCategory() {
    // const datas = [
    //     {
    //         category: "Drinks",
    //         products: [
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/3DB27F5E792C48E9B867A443AA648D26.jpg?impolicy=1by1_tight_288",
    //                 name: "Oleato™"
    //             },
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288",
    //                 name: "Hot Coffees"
    //             }
    //             ,
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_tight_288",
    //                 name: "Hot Teas"
    //             }
    //             ,
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/677d276173ec4bc192c2b9a21776339f.jpg?impolicy=1by1_tight_288",
    //                 name: "Hot Drinks"
    //             }
    //             ,
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/01092efc144c4e2394a279807d2781ed.jpg?impolicy=1by1_tight_288",
    //                 name: "Frappuccino® Blended Beverages"
    //             }
    //         ]
    //     },
    //     {
    //         category: "Food",
    //         products: [
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/012cdfb74d294be28ca6604768408c4b.jpg?impolicy=1by1_tight_288",
    //                 name: "Hot Breakfast"
    //             },
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/D1FB41D7B2A646A6865E707D25FB9CBF.jpg?impolicy=1by1_tight_288",
    //                 name: "Oatmeal & Yogurt"
    //             }
    //             ,
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_tight_288",
    //                 name: "Bakery"
    //             }
    //             ,
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_tight_288",
    //                 name: "Lunch"
    //             }
    //             ,
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/d513aab3a617481ab369c227421e6f75.jpg?impolicy=1by1_tight_288",
    //                 name: "Snacks & Sweets"
    //             }
    //         ]
    //     },
    //     {
    //         category: "At Home Coffee",
    //         products: [
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/b58ec53a78f24cfb82502cd5259cb764.jpg?impolicy=1by1_tight_288",
    //                 name: "Whole Bean"
    //             },
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/713f533b151b4d4d92d76eddeb06d4a2.jpg?impolicy=1by1_tight_288",
    //                 name: "VIA® Instant"
    //             }
    //         ]
    //     },
    //     {
    //         category: "Merchandise",
    //         products: [
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/96d448445d914c819ccc47f0dc36af71.jpg?impolicy=1by1_tight_288",
    //                 name: "Cold Cups"
    //             },
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/66bd9f5281e0459985882a1de2f7a195.jpg?impolicy=1by1_tight_288",
    //                 name: "Tumblers"
    //             },
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/240ba4012d1447779f329e349720f374.jpg?impolicy=1by1_tight_288",
    //                 name: "Mugs"
    //             },
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/cbae1e06960c4bf2be4669ff9d1c68a9.jpg?impolicy=1by1_tight_288",
    //                 name: "Water Bottles"
    //             },
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/5814e3b108464af6bf3352e87576206b.jpg?impolicy=1by1_tight_288",
    //                 name: "Other"
    //             }
    //         ]
    //     },
    //     {
    //         category: "Gift Cards",
    //         products: [
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/834dfe8a5d1e4980b87636f4ff62f83a.jpg?impolicy=1by1_tight_288",
    //                 name: "Happy Birthday"
    //             },
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/21ee04ff3a5340979275e3b9ffd2824d.jpg?impolicy=1by1_tight_288",
    //                 name: "Thank You"
    //             },
    //             {
    //                 img: "https://globalassets.starbucks.com/assets/9e2617bd4b0744cb940c67b3fad9ca35.jpg?impolicy=1by1_tight_288",
    //                 name: "Traditional"
    //             }
    //         ]

    //     }
    // ]

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get(("https://raw.githubusercontent.com/vusalhasanov99/Starbucks/master/src/datas/MenuAllDatas.json"))
                .then(response => {
                    setData(response.data.allCategory)
                    setLoading(false)
                }
                );
        }, 2000)
    }, []);

    return (
        <>
            {loading ? <div className='loadingCoffe'>
            <ProgressBar/>

                <svg aria-labelledby="coffee-cup-loading-title-1" className="my9 sb-loadingCoffeeCup " role="img" viewBox="0 0 73 85" data-e2e="coffee-loader"><title id="coffee-cup-loading-title-1">Loading content... (steaming coffee cup)</title><g><path d="M53.8 38.6c-2-4-9.6-7.2-17.6-7.2-8 0-15.2 3.2-17.6 7.2 0 0 3.6 8 18.4 8 13.6-.4 16.8-8 16.8-8z" fill="#000000" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.908"></path><path d="M55.254 40.5c2.528.356 4.692 2.723 4.692 5.3 0 2.728-2.11 5.03-4.726 5.357-.797.1-1.362.827-1.263 1.623.1.797.827 1.362 1.623 1.263 1.49-.186 2.866-.78 4.013-1.666 2.24 2.168 3.553 4.71 3.553 7.023 0 7.444-11.758 14.146-26.146 14.146-14.632 0-26.146-6.448-26.146-14.146 0-2.646 1.3-5.075 3.892-7.296.61-.523.68-1.44.158-2.05-.523-.61-1.44-.68-2.05-.158-3.194 2.738-4.908 5.937-4.908 9.504 0 9.758 13.03 17.054 29.054 17.054 15.78 0 29.054-7.566 29.054-17.054 0-3.213-1.7-6.485-4.498-9.17.82-1.285 1.298-2.806 1.298-4.43 0-4.403-3.85-8.254-8.254-8.254h-.4c-.504 0-.948.256-1.21.645-.388.262-.644.706-.644 1.21v4c0 9.054-7.204 16.146-16.146 16.146-8.797 0-16.146-7.35-16.146-16.146v-4.8c0-.803-.65-1.454-1.454-1.454-.803 0-1.454.65-1.454 1.454v4.8c0 5.496 2.415 10.503 6.227 14.004-.38.263-.627.7-.627 1.196 0 4.656 6.044 8.254 13.054 8.254 1.872 0 3.79-.303 5.953-.843.78-.194 1.252-.984 1.058-1.763-.194-.78-.984-1.252-1.763-1.058-1.95.487-3.653.756-5.247.756-5.14 0-9.375-2.263-10.052-4.678 3.015 2.01 6.614 3.186 10.452 3.186 10.538 0 19.054-8.383 19.054-19.054v-2.9z" fill="#000000"></path><path d="M36.2 58.454c1.545 0 3.447-.317 5.553-.843.78-.194 1.252-.984 1.058-1.763-.194-.78-.984-1.252-1.763-1.058-1.894.473-3.592.756-4.847.756h-2.4c-.803 0-1.454.65-1.454 1.454 0 .803.65 1.454 1.454 1.454h2.4zM26.993 55.81c.67.445 1.57.265 2.017-.403.445-.67.265-1.57-.403-2.017-2.2-1.466-3.53-3.212-4.21-5.59-.22-.772-1.024-1.22-1.796-.998-.772.22-1.22 1.025-.998 1.797.875 3.062 2.635 5.372 5.39 7.21z" fill="#000000"></path><path d="M35.8 32.355c-5.93 0-11.048 1.524-14.627 4.21-.462.345-.556 1-.21 1.462.347.462 1.002.556 1.464.21 3.197-2.398 7.874-3.792 13.373-3.792 2.316 0 3.323.063 4.546.37.56.14 1.128-.2 1.268-.76.14-.562-.2-1.13-.76-1.27-1.444-.36-2.57-.43-5.054-.43zM45.654 33.986c-.56-.14-1.128.2-1.268.76-.14.56.2 1.128.76 1.268 1.353.338 2.835 1.03 4.074 1.856.48.32 1.13.19 1.45-.29.32-.48.19-1.13-.29-1.45-1.428-.952-3.126-1.744-4.726-2.144z" fill="#ffffff"></path><path className="sb-loadingCoffeeSteam" d="M31 26.333c0-2.89 4.063-2.89 4.063-5.777 0-2.89-4.063-2.89-4.063-5.778 0-2.89 4.063-2.89 4.063-5.778M38 26.333c0-2.89 4.063-2.89 4.063-5.777 0-2.89-4.063-2.89-4.063-5.778 0-2.89 4.063-2.89 4.063-5.778" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></g></svg>
            </div> :
                <div className='allCategory'>
                    <h1>Menu</h1>
                    {data?.map(item => (
                        <div className="category">
                            <h2>{item.category}</h2>
                            <hr />
                            <div className="items">
                                {item.products.map(item => (
                                    <NavLink to={item.link}>
                                        <div className="item">
                                            <div className="img">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <h3>{item.name}</h3>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default AllCategory
