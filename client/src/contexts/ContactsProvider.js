import React, {createContext, useContext} from 'react'
import UseLocalStorage from '../custom_hooks/UseLocalStorage'
const ContactsContext = React.createContext()

export function useContacts(){
    return useContext(ContactsContext)
}


export  function ContactsProvider({children}) {

    const [ contacts, setContacts] = UseLocalStorage('contacts' , [])

    function createContact(id,name){
        setContacts(prevContacts =>{
            return[...prevContacts, {id,name}]
        } )
    }



    return (

        <ContactsContext.Provider value={ { contacts, createContact} }>

            <div>
                {children}
            </div>

        </ContactsContext.Provider>

    )
}
