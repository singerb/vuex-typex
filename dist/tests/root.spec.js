"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
describe("Create a store", function () {
    var storeBuilder;
    beforeEach(function () {
        storeBuilder = index_1.getStoreBuilder("root");
        storeBuilder.reset();
    });
    describe("that has no modules (root-only)", function () {
        it("should access root state value", function () {
            var stateReader = storeBuilder.state();
            var store = storeBuilder.vuexStore({
                state: { name: "david" }
            });
            chai_1.expect(stateReader().name).to.equal("david");
        });
        it("should support getters", function () {
            var uppercaseName = function (state) { return state.name.toUpperCase(); };
            var uppercaseNameGetter = storeBuilder.read(uppercaseName);
            var store = storeBuilder.vuexStore({
                state: { name: "david" }
            });
            chai_1.expect(uppercaseNameGetter()).to.equal("DAVID");
        });
    });
});
//# sourceMappingURL=root.spec.js.map