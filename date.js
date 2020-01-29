"use strict";
/**
 * La classe date
 */
Object.defineProperty(exports, "__esModule", { value: true });
var date = /** @class */ (function () {
    /**
     * Le constructeur de la classe
     */
    function date(year, month, day) {
        if (year < 1 || month < 1 || 12 < month || day < 1 || 31 < day) {
            console.log("Date incorrecte!");
        }
        else {
            this._year = year;
            this._month = month;
            this._day = day;
        }
    }
    Object.defineProperty(date.prototype, "year", {
        /**
         * Les assesseurs et les mutateurs
         */
        get: function () {
            return this._year;
        },
        set: function (value) {
            if (value < 1) {
                console.log("Année incorrecte renseignée une année supérieure à 0");
            }
            else
                this._year = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            if (value < 1 || 12 < value) {
                console.log("Mois incorrect renseigné un mois entre 1 et 12");
            }
            else {
                this._month = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (value) {
            if (value < 1 || 31 < value)
                console.log("Mois incorrect renseigné un mois entre 1 et 12");
            else
                this._day = value;
        },
        enumerable: true,
        configurable: true
    });
    date.prototype.toString = function () {
        return this._year + '-' + this._month + '-' + this._day;
    };
    date.prototype.create = function (year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
        return this._year + '-' + this._month + '-' + this._day;
    };
    date.prototype.setDate = function (year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
        return this._year + '-' + this._month + '-' + this._day;
    };
    /**
     * Renvoie la date d'hier  en fonction de celle d'aujourdhuit
     */
    date.prototype.yesterday = function () {
        var monthThatHaveThirtyOneDay = [1, 3, 5, 7, 8, 10, 12];
        var monthThatHaveThirtyDay = [4, 6, 9, 11];
        if (this._day == 1) {
            if (this._month == 1) {
                this._day = 31;
                this._month = 12;
                this._year -= 1;
            }
            else if (this._month - 1 == 2) {
                this._day = 28;
                this._month -= 1;
            }
            else {
                for (var i = 0; i < monthThatHaveThirtyDay.length; i++) {
                    if (this._month - 1 == monthThatHaveThirtyDay[i]) {
                        this._day = 30;
                        this._month -= 1;
                        break;
                    }
                }
                for (var i = 0; i < monthThatHaveThirtyOneDay.length; i++) {
                    if (this._month - 1 == monthThatHaveThirtyOneDay[i]) {
                        this._day = 31;
                        this._month -= 1;
                        break;
                    }
                }
            }
        }
        else
            this.day -= 1;
        return this._year + '-' + this._month + '-' + this._day;
    };
    /**
     * Renvoie la date de demain en fonction de celle d'aujourdhuit
     */
    date.prototype.tomorrow = function () {
        var monthThatHaveThirtyDay = [4, 6, 9, 11];
        var theMonthHaveThirtyDay;
        for (var i = 0; i < monthThatHaveThirtyDay.length; i++) {
            if (this._month == monthThatHaveThirtyDay[i]) {
                theMonthHaveThirtyDay = true;
                break;
            }
        }
        if (this._day == 31) {
            if (this._month == 12) {
                this._day = 1;
                this._month = 1;
                this._year += 1;
            }
            else {
                this._day = 1;
                this._month += 1;
            }
        }
        else if ((this._day == 28 || this._day == 29) && this._month == 2) {
            this._day = 1;
            this._month = 3;
        }
        else if (this._day == 30 && theMonthHaveThirtyDay) {
            this._day = 1;
            this._month += 1;
        }
        else {
            this._day += 1;
        }
        return this._year + '-' + this._month + '-' + this._day;
    };
    date.prototype.addDay = function (value) {
        for (var i = 0; i < value; i++) {
            this.tomorrow();
        }
        return this.toString();
    };
    date.prototype.addMonth = function (value) {
        return this.addDay(value * 31);
    };
    date.prototype.addYear = function (value) {
        return this.addDay(value * 365);
    };
    date.prototype.subDay = function (value) {
        for (var i = 0; i < value; i++) {
            this.yesterday();
        }
        return this.toString();
    };
    date.prototype.subMonth = function (value) {
        return this.subDay(value * 31);
    };
    date.prototype.subYear = function (value) {
        return this.subDay(value * 365);
    };
    return date;
}());
exports.date = date;
