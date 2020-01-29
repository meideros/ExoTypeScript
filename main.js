"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Test des classe
 */
var Project_1 = require("./Project");
var Task_1 = require("./Task");
var date_1 = require("./date");
var projet = new Project_1.Project();
var task1 = new Task_1.Task();
var date1 = new date_1.date(2020, 1, 23);
task1.content = "Le contenue du task1";
task1.date = new date_1.date(2020, 1, 23);
task1.checked = true;
projet.addTask(task1);
projet.complete();
console.log(date1.addYear(100));
