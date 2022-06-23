import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Menu() {
    const [menuItems, setMenuItems] = useState([])
    let navigate = useNavigate();
    const editMenu=(e,item)=>{
        navigate('/editMenu',{state:item})

    }

    
    const deleteMenu = (e,item)=>{
        
        const config = {
            headers: {
                'x-auth-token': sessionStorage.getItem('token'),
            }
        }
        axios.delete(`api/menuresturent/${item._id}`, config).then((res) => {  
            setMenuItems(res.data)
        }).catch(err => {
        })
    
    }

    useEffect(() => {
        const config = {
            headers: {
                'x-auth-token': sessionStorage.getItem('token'),
            }
        }
        axios.get('api/menuresturent', config).then((res) => {  
            setMenuItems(res.data)
        }).catch(err => {
        })
    }, [])
    return (
        <div class=" px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-11 col-lg-11 col-md-11 col-11 ">
                    <h3>Menu Items</h3>
                    <p class="text-muted">Now publish your food item Is one Click Away
                     .</p>

                    <div className="container mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 
                    row-cols-xl-3 justify-content-start">
                            {
                                menuItems.map(item => {
                                    return (
                                        <div key={item._id} className="col mb-5">
                                            <div className="card h-100 product-card">
                                                <img className="card-img-top" src={`/api/uploads/${item.ImagePlaceholder[0]}`} width="100%" height="200" alt="..." />
                                                <div className="card-body p-4 pb-0">
                                                    <div className="text-left">
                                                        <h5>{item.title}</h5>
                                                        <div className="d-flex justify-content-between">
                                                            <p className="price">{item.subTitle}</p>
                                                            <p className="price"><button onClick={(e)=>{editMenu(e,item)}}>Edit</button></p>
                                                            <p className="price"><button onClick={(e)=>{deleteMenu(e,item)}}>Delete</button></p>
                                                        </div>
                                                       
                                                        <div className="d-flex justify-content-between">
                                                            <p className="price">{item.Quantity} <span> {item.Unit}</span></p>
                                                            <p className="price">{item.price} <span> {item.currency}</span></p>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )

                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
