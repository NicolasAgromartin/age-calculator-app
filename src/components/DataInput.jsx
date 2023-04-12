import React, { useRef } from 'react';
import { useDateContext } from '../context/DateContext';
import { validateForm } from './validateForm';

export default function DataInput() {

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const dayErrorRef = useRef(null);
  const monthErrorRef = useRef(null);
  const yearErrorRef = useRef(null);

  const { setDate } = useDateContext();


  function handleSubmit(e){
    e.preventDefault();

    let checks = {
      dayCheck : false,
      monthCheck : false,
      yearCheck : false
    }

    if(dayRef.current.value === '' || monthRef.current.value === '' || yearRef.current.value === '' ){
      
      dayRef.current.value === '' ? (dayErrorRef.current.classList.add('showError'), dayErrorRef.current.innerHTML = 'This field is required') : (dayErrorRef.current.classList.remove('showError'));
      
      monthRef.current.value === '' ? (monthErrorRef.current.classList.add('showError'), monthErrorRef.current.innerHTML = 'This field is required') : (monthErrorRef.current.classList.remove('showError'));
      
      yearRef.current.value === '' ? (yearErrorRef.current.classList.add('showError'), yearErrorRef.current.innerHTML = 'This field is required') : (yearErrorRef.current.classList.remove('showError'));
      
    } else {

      dayErrorRef.current.classList.remove('showError');
      monthErrorRef.current.classList.remove('showError');
      yearErrorRef.current.classList.remove('showError');

      checks = validateForm(dayRef.current.value, monthRef.current.value, yearRef.current.value);

      checks.dayCheck ? (dayErrorRef.current.classList.remove('showError')) : (dayErrorRef.current.classList.add('showError'), dayErrorRef.current.innerHTML = 'Must be a valid day');

      checks.monthCheck ? (monthErrorRef.current.classList.remove('showError')) : (monthErrorRef.current.classList.add('showError'), monthErrorRef.current.innerHTML = 'Must be a valid month');

      checks.yearCheck ? (yearErrorRef.current.classList.remove('showError')) : (yearErrorRef.current.classList.add('showError'), yearErrorRef.current.innerHTML = 'Must be in the past')

    }
    (checks.dayCheck & checks.monthCheck & checks.yearCheck) ?
    setDate({ day : dayRef.current.value , month : monthRef.current.value, year: yearRef.current.value}) 
      : 
    null   
  }

  


  return (
    <form className='data-input' onSubmit={handleSubmit}>
      <div className="inputs">
        <label htmlFor="day" >
          Day
          <input type="number" name='day' placeholder='DD' ref={dayRef} />
          <p className='error' ref={dayErrorRef}> </p>
        </label>
        <label htmlFor="month">
          Month
          <input type="number" name='month' placeholder='MM' ref={monthRef} />
          <p className='error' ref={monthErrorRef} >Must be a valid month</p>
        </label>
        <label htmlFor="year">
          Year
          <input type="number" name='year' placeholder='YYYY' ref={yearRef} />
          <p className='error' ref={yearErrorRef} >Must be a in the past</p>
        </label>
      </div>
      <div className="action-button">
        <button type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.   019C37.667 21.686 23 25.616 23 44"/></g></svg>
        </button>
      </div>
    </form>
  )
}
