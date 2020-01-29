"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project() {
        this.tasks = [];
    }
    Project.prototype.addTask = function (value) {
        this.tasks.push(value);
    };
    Project.prototype.getTask = function (index) {
        return this.tasks[index];
    };
    Project.prototype.deleteTask = function (index) {
        this.tasks.splice(index);
    };
    Project.prototype.all = function () {
        this.tasks.forEach(function (value) { return console.log(value.toString()); });
    };
    Project.prototype.complete = function () {
        this.tasks.forEach(function (value) { return value.checked ? console.log(value.toString()) : ''; });
    };
    Project.prototype.uncomplete = function () {
        this.tasks.forEach(function (value) { return !value.checked ? console.log(value) : ''; });
    };
    return Project;
}());
exports.Project = Project;
