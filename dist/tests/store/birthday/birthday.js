"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../../..");
var removeFirstAfter_1 = require("./actions/removeFirstAfter");
var initialState = {
    birthdays: []
};
var mb = __1.getStoreBuilder().module("birthday", initialState);
exports.birthdayModuleBuilder = mb;
var addBirthdayMut = function (state, payload) { return state.birthdays.push(payload.birthday); };
var removeFirstBirthdayMut = function (state) { return state.birthdays.shift(); };
var clearBirthdaysMut = function (state) { return state.birthdays = []; };
var oldestNameGetter = mb.read(function (state) {
    var oldestBirthday = state.birthdays.slice().sort(function (a, b) { return a.dob.getTime() - b.dob.getTime(); })[0];
    return oldestBirthday && oldestBirthday.name;
}, "oldestName");
var dateOfBirthForMethod = mb.read(function (state) { return function (name) {
    var matches = state.birthdays.filter(function (b) { return b.name === name; });
    if (matches.length) {
        return matches[0].dob;
    }
    return;
}; }, "dob");
var stateReader = mb.state();
var birthday = {
    // getters + methods
    get state() { return stateReader(); },
    get oldestName() { return oldestNameGetter(); },
    dateOfBirthFor: function (name) { return dateOfBirthForMethod()(name); },
    // mutations    
    commitAddBirthday: mb.commit(addBirthdayMut),
    commitRemoveFirstBirthday: mb.commit(removeFirstBirthdayMut),
    commitClearBirthdays: mb.commit(clearBirthdaysMut),
    // actions
    dispatchRemoveFirstAfterDelay: mb.dispatch(removeFirstAfter_1.default),
};
// birthday.commitAddBirthday({ birthday: { dob: new Date(1980, 2, 3), name: "Louise" } })
// birthday.commitRemoveFirstBirthday()
// birthday.dateOfBirthFor("Louise")
// birthday.dispatchRemoveFirstAfter(1000)
exports.default = birthday;
//# sourceMappingURL=birthday.js.map