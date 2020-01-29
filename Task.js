"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __priority_1 = require("./\u200B priority");
var Task = /** @class */ (function () {
    function Task() {
        this._checked = false;
    }
    Object.defineProperty(Task.prototype, "content", {
        /**
         * Les getters et les setters
         */
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (value) {
            this._checked = value;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.add = function (contenue, date, checked, priority) {
        if (checked === void 0) { checked = false; }
        if (priority === void 0) { priority = __priority_1.Priority.Tint; }
        this._content = contenue;
        this._date = date;
        this._checked = checked;
        return this._id;
    };
    Task.prototype.update = function (content, date, checked) {
        this._content = content;
        this._date = date;
        this._checked = checked;
    };
    Task.prototype.close = function () {
        this._checked = true;
    };
    /**
     * Fonction permettant décrire une tache
     */
    Task.prototype.toString = function () {
        var data = "CONTENU :" + this._content + " \n" +
            "DATE :" + this.date.toString() + "\n" +
            "PRIORITE:" + this._priority + "\n";
        if (this._checked)
            data += "ETAT: Effectué";
        else
            data += "ETAT: Non effectué";
        return data;
    };
    return Task;
}());
exports.Task = Task;
