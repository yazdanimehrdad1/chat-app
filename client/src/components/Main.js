import React from 'react'
import {useState} from 'react'
import ReactDom from 'react-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import UseLocalStorage from '../custom_hooks/UseLocalStorage'
import {ContactsProvider} from '../contexts/ContactsProvider'
import {ConversationsProvider} from '../contexts/ConversationsProvider'

export default function Main() {
    // const [ id, setId] = useState()
    const [ id, setId] = UseLocalStorage('id')

    const dashboard =(
        <ContactsProvider>
            <ConversationsProvider>
                <Dashboard id={id}/>
            </ConversationsProvider>
        </ContactsProvider>
    )


    return (
        <div>
            <h1>Hello</h1>
            {/* <div>{id}</div> */}

             {id ? dashboard : <Login onIdSubmit={setId} />    }
            
            
        </div>
    )
}
