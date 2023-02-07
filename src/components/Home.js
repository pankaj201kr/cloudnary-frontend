import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import moment from 'moment';


const Home = () => {

    const [data, setData] = useState([]);

    const getImageData = async () => {
        const res = await axios.get("/getImage", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.data.status === 401 || !res.data) {
            console.log("error")
        } else {
            setData(res.data.findImage)
        }
    }

    useEffect(() => {
        getImageData()
    }, [])

    return (
        <>
            <div className='container mt-2'>
                <h1 className='text-center mt-2'>Mern image uploader</h1>
                <div className='text-end'>
                    <>
                        <Button variant="primary"> <NavLink to="/register" className="text-decoration-none text-light">Add Image</NavLink></Button>{' '}
                    </>
                </div>
                <div className='row d-flex justify-content-between align-items-center mt-5'>

                    {
                        data.length > 0 ? data.map((el, i) => {
                            return (
                                <>
                                    <Card style={{ width: '22rem', height: '18rem' }} className='mb-3'>
                                        <Card.Img variant="top" style={{ width: '100px', textAlign: 'center', margin: "auto" }} src={el.profile_img} className='mt-2' />
                                        <Card.Body className='text-center'>
                                            <Card.Title>Image Name :{el.imageName}</Card.Title>
                                            <Card.Text>
                                                Description:{el.description}
                                            </Card.Text>
                                            <Card.Text>
                                                views:{el.views}
                                            </Card.Text>
                                            <Card.Text>
                                                date:{moment(el.date).format("L")}
                                            </Card.Text>
                                            {/* <Button variant="danger" className='col-lg-6 text-center'>Delete</Button> */}
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        }) : ""

                    }
                </div>
            </div>
        </>
    )
}

export default Home
