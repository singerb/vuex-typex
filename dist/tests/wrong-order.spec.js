"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var store_1 = require("./store");
var index_1 = require("../index");
describe("Output the store", function () {
    var store;
    beforeEach(function () {
        vue_1.default.use(vuex_1.default);
        store = store_1.buildStore();
        store.replaceState({
            birthday: { birthdays: [] },
            auth: { isLoggedIn: false, userID: "" }
        });
    });
    describe("then try to add another module", function () {
        it("should fail", function () {
            chai_1.expect(function () { return index_1.getStoreBuilder().module("blah", {}); }).to.throw();
        });
    });
    describe("then create a different store and try to add a module", function () {
        it("should succeed", function () {
            chai_1.expect(function () {
                var anotherStore = index_1.getStoreBuilder("another");
                anotherStore.module("another-module", {});
            }).to.not.throw();
        });
    });
});
//# sourceMappingURL=wrong-order.spec.js.map