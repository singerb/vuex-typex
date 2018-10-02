"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../../..");
var initialState = {
    userID: "b6c8185c6d0af2f5d968",
    isLoggedIn: true
};
var storeBuilder = __1.getStoreBuilder();
var moduleBuilder = storeBuilder.module("auth", initialState);
var auth = {
    commitSetUserID: moduleBuilder.commit(function (state, payload) { return state.userID = payload.userID; }, "setUserID"),
    commitSetIsLoggedIn: moduleBuilder.commit(function (state, payload) { return state.isLoggedIn = payload.isLoggedIn; }, "isLoggedIn"),
    dispatchLogin: moduleBuilder.dispatch(function (context) {
        return;
    }, "login")
};
exports.default = auth;
//# sourceMappingURL=auth.js.map