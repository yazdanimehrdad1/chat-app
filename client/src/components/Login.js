import React from 'react'
import {useState, useEffect, useRef} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import { uuid } from 'uuidv4';

export default function Login({onIdSubmit}) {

    const idRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        onIdSubmit(idRef.current.value)

    }

    const registerHandler =(e)=>{
        
        onIdSubmit(uuid())

    }


    return (
        <div className="container align-items-center d-flex" style={{height:'100vh'}}>

            <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required></Form.Control>

                </Form.Group>
                <Button type="submit" >Log in </Button>
                <Button onClick={registerHandler} variant="secondary">Register</Button>
            </Form>
            
        </div>
    )
}

