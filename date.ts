/**
 * La classe date
 */

export class date{
    /**
     * Les propriétées de la classe
     */
    private _year: number
    private _month: number
    private _day: number
    /**
     * Le constructeur de la classe
     */
    constructor(year: number, month: number, day: number){
        if (year<1 || month<1 || 12<month || day<1 || 31 < day ){
            console.log("Date incorrecte!")
        }
        else{
            this._year =year
            this._month = month
            this._day = day
        }
    }

    /**
     * Les assesseurs et les mutateurs
     */
    get year(): number {
        return this._year;
    }

    set year(value: number) {
        if (value<1){
            console.log("Année incorrecte renseignée une année supérieure à 0")
        }else
            this._year = value;
    }

    get month(): number {
        return this._month;
    }

    set month(value: number) {
        if (value<1 || 12<value){
            console.log("Mois incorrect renseigné un mois entre 1 et 12")
        }else {
            this._month = value;
        }
    }

    get day(): number {
        return this._day;
    }

    set day(value: number) {
        if (value<1 || 31 < value)
            console.log("Mois incorrect renseigné un mois entre 1 et 12")
        else
            this._day = value;
    }
     toString(): string{
        return this._year + '-'+ this._month +'-' + this._day
    }

     create(year: number, month: number, day: number){
        this._year = year
        this._month = month
        this._day = day
         return this._year + '-'+ this._month +'-' + this._day
     }

     setDate(year: number, month: number, day: number){
        this._year = year
        this._month = month
        this._day = day
         return this._year + '-'+ this._month +'-' + this._day
    }
    /**
     * Renvoie la date d'hier  en fonction de celle d'aujourdhuit
     */
     yesterday(){
        let monthThatHaveThirtyOneDay = [1,3,5,7,8,10,12]
        let monthThatHaveThirtyDay = [4,6,9,11]
        if(this._day == 1){
            if(this._month==1){
                this._day=31
                this._month=12
                this._year-=1
            }else if(this._month-1==2){
                this._day=28
                this._month-=1
            }else {
                for (let i =0; i< monthThatHaveThirtyDay.length ; i++){
                    if (this._month-1 == monthThatHaveThirtyDay[i] ){
                        this._day=30
                        this._month-=1
                        break;
                    }
                }
                for (let i =0; i < monthThatHaveThirtyOneDay.length ; i++){
                    if (this._month-1 == monthThatHaveThirtyOneDay[i] ){
                        this._day=31
                        this._month-=1
                        break;
                    }
                }
            }

        }else
            this.day-=1
         return this._year + '-'+ this._month +'-' + this._day
    }

    /**
     * Renvoie la date de demain en fonction de celle d'aujourdhuit
     */
     tomorrow(){
        let monthThatHaveThirtyDay = [4,6,9,11]
        let theMonthHaveThirtyDay
        for (let i =0; i< monthThatHaveThirtyDay.length ; i++){
            if (this._month == monthThatHaveThirtyDay[i] ){
                theMonthHaveThirtyDay = true
                break;
            }
        }
        if(this._day == 31){
            if(this._month==12){
                this._day=1
                this._month=1
                this._year+=1
            }else {
                this._day = 1
                this._month+=1
            }
        }else if ((this._day == 28 || this._day ==29)  && this._month == 2){
            this._day=1
            this._month=3
        }else if (this._day == 30 && theMonthHaveThirtyDay) {
                        this._day=1
                        this._month+=1
        }
        else {
            this._day+=1
        }
         return this._year + '-'+ this._month +'-' + this._day
    }

     addDay(value: number){
         for (let i =0; i< value ; i++){
             this.tomorrow()
         }
         return this.toString()
     }

     addMonth(value: number){
         return this.addDay(value*31);
     }

    addYear(value: number){
       return this.addDay(value*365)
    }

    subDay(value: number){
        for (let i =0; i< value ; i++){
                this.yesterday()
            }
         return this.toString()
    }

    subMonth(value: number){
       return this.subDay(value*31)
    }

    subYear(value: number){
        return this.subDay(value*365)
    }

}
