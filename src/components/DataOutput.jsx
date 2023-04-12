import React, { useLayoutEffect } from 'react';
import { useDateContext } from '../context/DateContext';

export default function DataOutput() {

  const { age } = useDateContext();

  useLayoutEffect(() => {

  },[age])

  return (
    <div className='data-output'>
      <div className='year'>
        <span> {age.years} </span>
        <p>years</p>
      </div>
      <div className='month'>
        <span> {age.months} </span>
        <p>months</p>
      </div>
      <div className='day'>
        <span> {age.days} </span>
        <p>days</p>
      </div>
    </div>
  )
}
