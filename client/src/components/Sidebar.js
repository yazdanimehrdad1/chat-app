import React from 'react'
import {useState} from 'react'
import {Tab, Nav} from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewConversationModal from './NewConversationModal'
import NewContactModal from './NewContactModal'

import {Container, Form, Button, Modal} from 'react-bootstrap'

export default function Sidebar({id}) {


    const conversations_key = "conversations"
    const contacts_key = "contacts"

    const [activeKey, setActiveKey] = useState(conversations_key)
    const [modalOpen, setModalOPen] = useState(false)
    const conversationOpen = activeKey === conversations_key

    function closeModal(){
        setModalOPen(false)
    }


    return (
        <div style={{width:'300px'}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={conversations_key}>conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={contacts_key}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content className="overflow-auto border-right flex-grow-1">
                    <Tab.Pane eventKey={conversations_key}>
                        <Conversations />
                    </Tab.Pane>

                    <Tab.Pane eventKey={contacts_key}>
                        <Contacts />
                    </Tab.Pane>

                </Tab.Content>



                <Modal show={modalOpen} onHide={closeModal} >
                    { conversationOpen ? <NewConversationModal closeModal = {closeModal} /> : <NewContactModal  closeModal = {closeModal} />}

                </Modal>


                


                <div className="p2 border-right border-right">
                    Your ID<span className="text-muted"> : {id}</span>
                </div>


                <div>
                <Button onClick={ ()=> setModalOPen(true)}  className="rounded-0"> New { conversationOpen? 'Conversation' : 'Contact'} </Button>

                </div>
            </Tab.Container>

        </div>
    )
}
