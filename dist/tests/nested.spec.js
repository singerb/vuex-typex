"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
describe("Create a store", function () {
    var outerBuilder;
    var innerBuilder;
    var storeBuilder;
    beforeEach(function () {
        storeBuilder = index_1.getStoreBuilder("nested-store");
        outerBuilder = storeBuilder.module("outer", { str: "hello, world." });
        innerBuilder = outerBuilder.module("inner", { int: 42 });
        // innerBuilder = storeBuilder.module("outer/inner", { int: 42 })
    });
    describe("that includes nested modules", function () {
        it("should access nested value", function () {
            var store = storeBuilder.vuexStore();
            var readState = outerBuilder.state();
            chai_1.expect(readState().inner.int).to.equal(42);
        });
    });
});
//# sourceMappingURL=nested.spec.js.map