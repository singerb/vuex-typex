"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
describe("Create a store", function () {
    var moduleBuilder;
    var storeBuilder;
    var log = [];
    var commitIncrease;
    var commitDecrease;
    beforeEach(function () {
        storeBuilder = index_1.getStoreBuilder("plugin-store");
        moduleBuilder = storeBuilder.module("pluggy", { age: 36 });
        commitIncrease = moduleBuilder.commit(function (state, payload) { state.age++; }, "increase");
        commitDecrease = moduleBuilder.commit(function (state, payload) { state.age--; }, "decrease");
    });
    describe("that includes a logger plugin", function () {
        it("should log each mutation", function () {
            var loggerPlugin = function (store) {
                store.subscribe(function (mutation, state) {
                    log.push(mutation.type);
                });
            };
            storeBuilder.vuexStore({ plugins: [loggerPlugin] });
            commitIncrease();
            commitDecrease();
            chai_1.expect(log.length).to.eq(2);
            chai_1.expect(log).to.deep.equal(["pluggy/increase", "pluggy/decrease"]);
        });
    });
});
//# sourceMappingURL=plugin.spec.js.map