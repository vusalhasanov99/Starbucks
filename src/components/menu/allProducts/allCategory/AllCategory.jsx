import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
                .get(("https://raw.githubusercontent.com/vusalhasanov99/Starbucks/master/src/datas/BestDevelopersProduct2.json"))
                .then(response => {
                    setData(response.data.products)
                    setLoading(false)
                }
                );
        }, 2000)
    }, []);

    return (
        <div className='allCategory'>
            <h1>Menu</h1>
            {data.map(item => (
                <div className="category">
                    <h2>{item.category}</h2>
                    <hr />
                    <div className="items">
                        {item.products.map(item => (
                            <div className="item">
                                <div className="img">
                                    <img src={item.img} alt="" />
                                </div>
                                <h3>{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllCategory
