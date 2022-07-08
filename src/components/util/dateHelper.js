import moment from "moment";

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
export function helper(day) {
  let tmpDay = day - 1;
  if (tmpDay < 0) return 6
  return tmpDay
}
