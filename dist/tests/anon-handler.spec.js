"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
describe("Create an anon store", function () {
    var moduleBuilder;
    beforeEach(function () {
        var anonStore = index_1.getStoreBuilder("anon");
        anonStore.reset();
        moduleBuilder = anonStore.module("anon", { age: 36 });
    });
    describe("try to create a getter with anon function", function () {
        it("should fail", function () {
            chai_1.expect(function () {
                var readApproxDaysAlive = moduleBuilder.read(function (state) { return Math.round(state.age * 365.25); });
            }).to.throw();
        });
    });
    describe("try to create a getter with explicit name", function () {
        it("should succeed", function () {
            chai_1.expect(function () {
                var readApproxDaysAlive = moduleBuilder.read(function (state) { return Math.round(state.age * 365.25); }, "daysAlive");
            }).to.not.throw();
        });
    });
    var daysAliveGetter = function (state) { return Math.round(state.age * 365.25); }; // <-- named function
    describe("try to create a getter with named function", function () {
        it("should succeed", function () {
            chai_1.expect(function () {
                var readApproxDaysAlive = moduleBuilder.read(daysAliveGetter);
            }).to.not.throw();
        });
    });
});
//# sourceMappingURL=anon-handler.spec.js.map