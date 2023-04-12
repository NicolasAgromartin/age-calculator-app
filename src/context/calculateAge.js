
export function calculateAge(date, setAge){
  let submitedDate = `${date.year}-${date.month}-${date.day}`;

  let dias = Math.floor((new Date() - new Date(submitedDate) ) / (1000 * 60 * 60 * 24));

  if( !isNaN(dias) ) { 

    let calculatedYears = Math.floor(dias / 365);
    let calculatedMonths = Math.floor((dias % 365) / 30);
    let calculatedDays = Math.floor((dias % 365) % 30);

    setAge({days : calculatedDays, months : calculatedMonths, years : calculatedYears})
   }

}