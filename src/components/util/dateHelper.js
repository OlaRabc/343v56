//import {useTranslation} from 'react-i18next'

export function firstOfMonth()
    {
      const current = new Date();
      const date = current.getDate();
      let day = current.getDay();
      if(date===1) return (day);
      if(day===0)  day=7;

      let firstDayOfMonth=date%7;
      firstDayOfMonth--;
      if(day<firstDayOfMonth)
      {
        firstDayOfMonth=firstDayOfMonth-day;
        firstDayOfMonth=7-firstDayOfMonth;
        if(firstDayOfMonth===7) firstDayOfMonth=0;
        return firstDayOfMonth;
      }

      firstDayOfMonth=day-firstDayOfMonth;
      firstDayOfMonth=firstDayOfMonth%7;
      if(firstDayOfMonth===0) firstDayOfMonth=7;    //Sunday === 7
      return firstDayOfMonth;
    }

export function whatMonth(month)
{
  switch(month) {
    case 1:
        return "Styczeń";
    case 2:
      return "Luty";
    case 3:
        return "Marzec";
    case 4:
        return "Kwiecień";
      case 5:
        return "Maj";
    case 6:
      return "Czerwiec";
    case 7:
      return "Lipiec";
    case 8:
      return "Sierpień";
    case 9:
      return "Wrzesień";
    case 10:
      return "Październik";
    case 11:
      return "Listopad";
    case 12:
      return "Grudzień";
    default:
      return 'error';
  }
}

function leapYear(year)
{
  if(year%4===0) { return(true)}
  if(year%100===0){
    if(year%400===0) { return(true)}
  }
  return (false)
  }

export function howLongMonth(month,year)
{
  if(month===2){
    if( leapYear(year) )return 29;
    else return 28;
  }
  if(month===4 || month===6 || month===9 || month===11){ return 30;}
  return 31;
}

export function lastDays(month,year,firstOfM,i)
{
  let tmpMonth=month-1;
  let tmpYear=year;
  if(tmpMonth<1) {tmpMonth=12; tmpYear=tmpYear-1;}
  let tmpHowLongMonth=howLongMonth(tmpMonth,tmpYear);
  let tmpDays=tmpHowLongMonth-firstOfM+i+1;
  return (tmpDays);
}

export function nextDays(month,year,firstOfM,i)
{
  let tmp=howLongMonth(month,year)
  tmp=i-tmp-firstOfM+1;
  return (tmp);
}

export function lastMonth(month)
{
  let tmpMonth=month-1;
  if(tmpMonth<1) tmpMonth=12;
  return (tmpMonth);
}

export function nextMonth(month)
{
  let tmpMonth=month+1;
  if(tmpMonth>12) tmpMonth=1;
  return (tmpMonth);
}

export function lastYear(month,year)
{
  let tmpYear=year;
  let tmpMonth=month-1;
  if(tmpMonth<1) tmpYear--;
  return (tmpYear);
}

export function nextYear(month,year)
{
  let tmpMonth=month+1;
  let tmpYear=year;
  if(tmpMonth>12) tmpYear++;
  return (tmpYear);
}

export function viewMonth(month)
{
  if(month<10) return ('0'+month)
  return month;
}

export function firstDayInNextMonth(month,year,firstOfM)
{
  let tmpHowLongM=howLongMonth(month,year);
  let firstDayInNextMonth=tmpHowLongM+firstOfM;
  firstDayInNextMonth=firstDayInNextMonth%7;
  if (firstDayInNextMonth===0) firstDayInNextMonth=7;
  return firstDayInNextMonth;
}

export function firstDayInLastMonth(month,year,firstOfM)
{
  let tmpFirstOfM=firstOfM;
  if(tmpFirstOfM===0) tmpFirstOfM=7;
  let tmpHowFolng=howLongMonth(month-1,year);
  let firstDayInLastM=tmpHowFolng-tmpFirstOfM;
  firstDayInLastM=firstDayInLastM%7;
  firstDayInLastM=firstDayInLastM-7;
  if(firstDayInLastM<0) firstDayInLastM=firstDayInLastM*(-1)
  firstDayInLastM=firstDayInLastM%7;
  if(firstDayInLastM===0) firstDayInLastM=7;
  return (firstDayInLastM);
}
export function dateInFirstSquare(firstOfM,month,year)
{
  let tmp = firstOfM-1
    let tmpMonth = month;
    let tmpYear = year;
  if(firstOfM === 1) {
   return new Date(tmpYear, tmpMonth - 1, 1);
  } else {
    tmpMonth -= 1;
    if(tmpMonth < 1) {
      tmpMonth = 12;
      tmpYear -=1 ;
    }
    tmp = howLongMonth(tmpMonth, tmpYear) - tmp + 1;
    return new Date(tmpYear, tmpMonth - 1, tmp);
  }
}
export function dateInLastSquare(firstOfM,month,year)
{
  const squareSize = 42;
  let tmpMonth = month + 1;
  let tmpYear = year;
  if(tmpMonth > 12) {
    tmpMonth = 1;
    tmpYear += 1;
  }
  let tmp = squareSize - howLongMonth(month, year);
  tmp = tmp - firstOfM + 1;
  return new Date(tmpYear, tmpMonth - 1, tmp);
}
/*
export function isEqualsDates(firstDate, secondDate) {
  return (
    firstDate.getFullYear() == secondDate.getFullYear() &&
    firstDate.getMonth() == secondDate.getMonth() &&
    firstDate.getDate() == secondDate.getDate()
  );
}
*/
export function timeFromString(date)
{
    let tmpMinutes=minutesFromString(date);
    if(tmpMinutes<10) tmpMinutes="0"+tmpMinutes;
    return (hoursFromString(date)+":"+tmpMinutes)

}
export function minutesFromString(date)
{
    let time="";
    let i=14;
    for(i;i<16;i++)   time+=date[i]
    return  parseInt(time);
}
export function hoursFromString(date)
{
    let time="";
    let i=11;
    for(i;i<13;i++)   time+=date[i]
    return  parseInt(time);
}

export function yearFromString(date_of_start)
{
  let i=0;
  let year="";
  for(i;i<4;i++) year+=date_of_start[i];
  return parseInt(year);
}
export function monthFromString(date_of_start)
{
  let i=5; 
  let month="";
  for(i;i<7;i++) month+=date_of_start[i];
  return parseInt(month);
}
export function dayFromString(date_of_start)
{
  let i=8;
  let day="";
  for(i;i<10;i++) day+=date_of_start[i]
  return day;
}
export function addZero(day)
{
  let tmpDay=parseInt(day);
  if(tmpDay<10)  
  {
    tmpDay="0"+tmpDay;
  }
  return String(tmpDay);
}
export function firstOfWeek()
{
  const current = new Date();
  const date = current.getDate();
  let day = current.getDay();
  return(date-day+1);
}
