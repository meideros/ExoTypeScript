/**
 * Test des classe
 */
import {Project} from "./Project";
import {Task} from "./Task";
import {date} from "./date";
let projet = new Project()
let task1 = new Task()
let date1 = new date(2020,1,23)
task1.content = "Le contenue du task1"
task1.date = new date(2020,1,23)
task1.checked = true
projet.addTask(task1)
projet.complete()
console.log(date1.addYear(100))

