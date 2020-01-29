import {date} from "./date";
import {Priority} from "./​ priority"

export class Task {
    /**
     * Les propriétées de la classe
     */
    private _id : number
    private _content : string
    private _date : date
    private _priority : Priority
    private _checked : boolean = false


    /**
     * Les getters et les setters
     */
    get content(): string {
        return this._content;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    set content(value: string) {
        this._content = value;
    }

    get date(): date {
        return this._date;
    }

    set date(value: date) {
        this._date = value;
    }

    get priority(): Priority {
        return this._priority;
    }

    set priority(value: Priority) {
        this._priority = value;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(value: boolean) {
        this._checked = value;
    }

    add(contenue : string, date: date, checked :boolean =false, priority : Priority= Priority.Tint){
        this._content = contenue
        this._date = date
        this._checked = checked
        return this._id
    }

    update(content : string, date : date, checked : boolean){
        this._content = content
        this._date = date
        this._checked = checked
    }

    close(){
        this._checked = true
    }
    /**
     * Fonction permettant décrire une tache
     */
    toString(){
       let  data = "CONTENU :"  + this._content+ " \n" +
            "DATE :" + this.date.toString() + "\n"+
            "PRIORITE:" + this._priority + "\n"
        if (this._checked)
            data += "ETAT: Effectué"
        else
            data+="ETAT: Non effectué"
        return data
    }

}