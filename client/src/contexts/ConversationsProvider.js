import React, {createContext, useContext , useState} from 'react'
import UseLocalStorage from '../custom_hooks/UseLocalStorage'
import {useContacts} from './ContactsProvider'

const ConversationsContext = React.createContext()

export function useConversations(){
    return useContext(ConversationsContext)
}


export  function ConversationsProvider({children}) {

    const [ conversations, setConversations] = UseLocalStorage('conversations' , [])
    const {contacts} = useContacts()
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)


    function createConversation(recipients){
        setConversations(prevConversations =>{
            return[...prevConversations, {recipients, messages:[]}]
        } )
    }

    const formattedConversations = conversations.map( (conversation, index) =>{
        const recipients = conversation.recipients.map( recipient =>{
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            const name = (contact && contact.name) || recipient
            return {id: recipient, name}
        })

        const selected = index === selectedConversationIndex

        return {...conversation, recipients, selected}
    })

    const value = {
        conversations: formattedConversations, 
        selectedConversationIndex: setSelectedConversationIndex,
        selectedConversation: formattedConversations[selectedConversationIndex],
        createConversation
    }

    return (

        <ConversationsContext.Provider value={ value }>
        {/* <ConversationsContext.Provider value={ { conversations, createConversation} }></ConversationsContext.Provider> */}

            <div>
                {children}
            </div>

        </ConversationsContext.Provider>

    )
}
