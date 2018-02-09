import { element, by } from 'protractor'

export module DateHelper {

  let months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let week: string[] =  ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
  let cod: number[] = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];

  export class UsefulDay {

    usefulDay(day: number, month: number, year: number, leap: boolean) {
      let result = this.weekDay(day, month, year, leap);
      // days da semana 0, 1, 2, 3, 4, 5, 6, sendo 0 domingo e 6 sábado.
      if(result > 0 && result < 6){
        return true;
      }else{
        return false;
      }
    }
    nextUsefulDay(day: number, month: number, year: number, leap: boolean){
      let result = this.usefulDay(day, month, year, leap);
      if(result == true){
        return day + "/" + month + "/" + year;
      }else{
        day = day > 31 ? 1 : day++;
        this.nextUsefulDay(day, month, year, leap)
      }
    }
    weekDayToString(day: number, month: number, year: number, leap: boolean){
      return week[this.weekDay(day, month, year, leap)];
    }
    weekDay(day: number, month: number, year: number, leap: boolean){
      //verifica se é um year leap
      if (leap == true && (month == 1 || month == 2)) {
        return (year + Math.trunc(year / 4) + cod[month - 1] + day - 1 - 2) % 7;
      } else {
        return (year + Math.trunc(year / 4) + cod[month - 1] + day - 2) % 7;
      }
    }

  }

}
