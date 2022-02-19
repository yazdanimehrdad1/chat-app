import React from 'react'
import { ListGroup } from 'react-bootstrap'
import {useContacts} from '../contexts/ContactsProvider'

export default function Contacts() {

    const {contacts} = useContacts()


    return (
        // <div className="d-flex" style={{height: '100vh'}}>
        //     <h1>Contacts</h1>
            
        // </div>

        <ListGroup varient="flush">
            { contacts.map( contact =>(
                <ListGroup.Item key={contact.id}>
                    {contact.name}
                </ListGroup.Item>
            ))}

        </ListGroup>
    )
}
