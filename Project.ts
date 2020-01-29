/**
 * La classe Projet
 */
import {Task} from "./Task";

export class Project {
        private tasks :  Task[] = []
    addTask(value : Task){
        this.tasks.push(value)
    }
    getTask(index: number){
        return this.tasks[index]
    }
    deleteTask(index: number){
        this.tasks.splice(index)
    }
    all(){
        this.tasks.forEach(value => console.log(value.toString()))
    }
    complete(){
        this.tasks.forEach(value => value.checked ? console.log(value.toString()) : '')
    }
    uncomplete(){
        this.tasks.forEach(value => !value.checked ? console.log(value) : '')
    }
}