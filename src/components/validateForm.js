export function validateForm(day,month,year) {
  let checked = {
    dayCheck : false,
    monthCheck : false,
    yearCheck : false,
  }
 
  if(day > 0 && day <= 32 ){
    checked.dayCheck = true;
  }
  if(month > 0 && month < 13 ){
    checked.monthCheck = true;
  }
  if(year > -1 && year < 2024 ){
    checked.yearCheck = true;
  }
  
  return checked;
}