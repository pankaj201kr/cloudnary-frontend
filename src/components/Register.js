import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [file, setfile] = useState("")
    console.log(name)

    const historyData = useNavigate();

    const setdata = (e) => {
        const { value } = e.target
        setname(value)
        // console.log(e.target.value)
    }
    const setImgFile = (e) => {
        setfile(e.target.files[0])
    }
    const setdataDescrip = (e) => {
        const { value } = e.target
        setdescription(value)
        // console.log(e.target.value)
    }

    const addUserData = async (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("image", file)
        formData.append("name", name)
        formData.append("description", description)


        const config = {
            headers: {
                "Content-type": "multipart/form-data"
            }
        }

        const responce = await axios.post("/image", formData, config)
        console.log(responce);
        if (responce.status === 401 || !responce.data) {
            console.log(Error)
        } else {
            historyData("/")
        }
    }

    return (
        <>
            <div className='container mt-3' ></div>
            <h2>Upload Your Image Here</h2>

            <Form className='mt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image Name</Form.Label>
                    <Form.Control type="text" name='name' onChange={setdata} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name='name' onChange={setdataDescrip} placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Select Your Image</Form.Label>
                    <Form.Control type="file" name='image' onChange={setImgFile} placeholder="" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addUserData}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Register
