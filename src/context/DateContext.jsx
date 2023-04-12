import React, { createContext, useContext, useEffect, useState } from 'react'
import { calculateAge } from './calculateAge';

export const context = createContext();

export function DateContextProvider({ children }) {

  const [ date, setDate ] = useState({ day: '', month: '', year: '' });
  const [ age, setAge ] = useState({years: ' -- ', months: ' -- ', days: ' -- '});

  useEffect(() => {
    calculateAge(date, setAge);
  },[date])

  return (
    <context.Provider value={{ setDate, age }}> 
      { children }
    </context.Provider>
  )
}

export function useDateContext() {
  return useContext(context)
}