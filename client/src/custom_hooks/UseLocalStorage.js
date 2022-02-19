import React from 'react'
import {useState, useEffect} from 'react'

const PREFIX = "chat-socket-"

export default function UseLocalStorage(key, initialValue) {

    const prefixKey  =  PREFIX +key


    const handleLocalStorage = ()=>{
        const jsonValue = localStorage.getItem(prefixKey)
        if(jsonValue != null){ return JSON.parse(jsonValue)}
        if (typeof initialValue === "function"){
            return initialValue()
        }else{
            return initialValue
        }
    }

    const [value, setValue ] = useState( handleLocalStorage )

   

    useEffect(()=>{
        localStorage.setItem(prefixKey, JSON.stringify(value))
    },[prefixKey, value])

    return [value, setValue]

}