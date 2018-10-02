"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var index_1 = require("./store/index");
var birthday_1 = require("./store/birthday/birthday");
describe("Run an action", function () {
    var store;
    beforeEach(function () {
        vue_1.default.use(vuex_1.default);
        store = index_1.buildStore();
        store.replaceState({
            birthday: {
                birthdays: [
                    { name: "Richard", dob: new Date(1995, 10, 11) },
                    { name: "Erlich", dob: new Date(1983, 1, 17) },
                    { name: "Nelson", dob: new Date(1996, 3, 28) },
                    { name: "Dinesh", dob: new Date(1989, 1, 7) },
                    { name: "Bertram", dob: new Date(1985, 7, 14) },
                    { name: "Donald", dob: new Date(1994, 5, 31) },
                    { name: "Monica", dob: new Date(1996, 8, 26) },
                ]
            },
            auth: { isLoggedIn: false, userID: "" }
        });
    });
    describe("that removes first 2 birthdays with delays", function () {
        it("should show Bertram after removing first two birthdays", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chai_1.expect(birthday_1.default.oldestName).equal("Erlich");
                        return [4 /*yield*/, birthday_1.default.dispatchRemoveFirstAfterDelay(5)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, birthday_1.default.dispatchRemoveFirstAfterDelay(5)];
                    case 2:
                        _a.sent();
                        chai_1.expect(birthday_1.default.oldestName).equal("Bertram");
                        return [2 /*return*/];
                }
            });
        }); });
        it("DOB for Betram should be defined", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                chai_1.expect(birthday_1.default.dateOfBirthFor("Bertram")).to.not.be.undefined;
                return [2 /*return*/];
            });
        }); });
        it("DOB for Betram should be 14-Aug-1985", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                chai_1.expect(birthday_1.default.dateOfBirthFor("Bertram").getTime()).to.equal(new Date(1985, 7, 14).getTime());
                return [2 /*return*/];
            });
        }); });
        it("DOB for Joe Bloggs should be undefined", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                chai_1.expect(birthday_1.default.dateOfBirthFor("Joe Bloggs")).to.be.undefined;
                return [2 /*return*/];
            });
        }); });
        it("oldestName should be undefined when no birthdays", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                birthday_1.default.commitClearBirthdays();
                chai_1.expect(birthday_1.default.oldestName).to.be.undefined;
                return [2 /*return*/];
            });
        }); });
        it("oldestName should be Nancy when birthday added from empty", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                birthday_1.default.commitClearBirthdays();
                birthday_1.default.commitAddBirthday({ birthday: { dob: new Date(2017, 5, 15), name: "Nancy" } });
                chai_1.expect(birthday_1.default.oldestName).to.equal("Nancy");
                return [2 /*return*/];
            });
        }); });
    });
});
//# sourceMappingURL=complete.spec.js.map