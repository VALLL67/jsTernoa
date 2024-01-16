"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var ternoa_js_1 = require("ternoa-js");
var UnDelegateTX = function (reseau, seed, allnftId) { return __awaiter(void 0, void 0, void 0, function () {
    var keyring, allTx, i, delegueTx, signableBatchTx, batchedEvents, isBatchCompleted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, , 11, 13]);
                return [4 /*yield*/, (0, ternoa_js_1.initializeApi)(reseau)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, ternoa_js_1.getKeyringFromSeed)(seed)];
            case 2:
                keyring = _a.sent();
                allTx = new Array(0);
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < allnftId.length)) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, ternoa_js_1.delegateNftTx)(allnftId[i], undefined)];
            case 4:
                delegueTx = _a.sent();
                allTx.push(delegueTx);
                _a.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 3];
            case 6:
                console.log('Nombre de TX : ' + allTx.length);
                if (!(allTx.length >= 1)) return [3 /*break*/, 9];
                return [4 /*yield*/, (0, ternoa_js_1.batchTxHex)(allTx)];
            case 7:
                signableBatchTx = _a.sent();
                return [4 /*yield*/, (0, ternoa_js_1.submitTxBlocking)(signableBatchTx, ternoa_js_1.WaitUntil.BlockInclusion, keyring)];
            case 8:
                batchedEvents = _a.sent();
                isBatchCompleted = batchedEvents.events.findEvents(ternoa_js_1.BatchCompletedEvent);
                if (isBatchCompleted.length <= 0) {
                    console.log('UnDelegate Fail');
                }
                else {
                    console.log('UnDelegate Done');
                }
                return [3 /*break*/, 10];
            case 9:
                console.log('Aucune operation lancée');
                _a.label = 10;
            case 10: return [3 /*break*/, 13];
            case 11: return [4 /*yield*/, (0, ternoa_js_1.safeDisconnect)()];
            case 12:
                _a.sent();
                process.exit();
                return [7 /*endfinally*/];
            case 13: return [2 /*return*/];
        }
    });
}); };
var DelegateTX = function (reseau, seed, recipient, allnftId) { return __awaiter(void 0, void 0, void 0, function () {
    var keyring, allTx, i, delegueTx, signableBatchTx, batchedEvents, isBatchCompleted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, , 14, 16]);
                return [4 /*yield*/, (0, ternoa_js_1.initializeApi)(reseau)];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, ternoa_js_1.getKeyringFromSeed)(seed)];
            case 2:
                keyring = _a.sent();
                allTx = new Array(0);
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < allnftId.length)) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, ternoa_js_1.delegateNftTx)(allnftId[i], recipient)];
            case 4:
                delegueTx = _a.sent();
                allTx.push(delegueTx);
                _a.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 3];
            case 6:
                console.log('Nombre de TX : ' + allTx.length);
                if (!(allTx.length >= 1)) return [3 /*break*/, 12];
                return [4 /*yield*/, (0, ternoa_js_1.batchTxHex)(allTx)];
            case 7:
                signableBatchTx = _a.sent();
                return [4 /*yield*/, (0, ternoa_js_1.submitTxBlocking)(signableBatchTx, ternoa_js_1.WaitUntil.BlockInclusion, keyring)];
            case 8:
                batchedEvents = _a.sent();
                isBatchCompleted = batchedEvents.events.findEvents(ternoa_js_1.BatchCompletedEvent);
                if (!(isBatchCompleted.length <= 0)) return [3 /*break*/, 9];
                console.log('Delegate Fail');
                return [3 /*break*/, 11];
            case 9:
                console.log('Delegate Done');
                return [4 /*yield*/, UnDelegateTX(reseau, seed, allnftId)];
            case 10:
                _a.sent();
                _a.label = 11;
            case 11: return [3 /*break*/, 13];
            case 12:
                console.log('Aucune operation lancée');
                _a.label = 13;
            case 13: return [3 /*break*/, 16];
            case 14: return [4 /*yield*/, (0, ternoa_js_1.safeDisconnect)()];
            case 15:
                _a.sent();
                process.exit();
                return [7 /*endfinally*/];
            case 16: return [2 /*return*/];
        }
    });
}); };
var seed = ""; //votre seed
var allnftId = [10718, 341552, 344139, 347909, 356036, 360778, 361036, 363069, 366093, 367058, 373567, 376485, 376646, 379794, 387217, 387262]; // mettre le numero des 100 nft separé par une virgule
var recipient = "5FKpteZCNEWd6rUa1RxMdzG8gir3SufzYVTKRqyoKix4RRKX"; //l'adresse du monstre
var mainnet = "wss://mainnet.ternoa.network";
var alphanet = ""; //Pour tester en alphanet remplacer à la ligne 66 la valeur mannaint par alphanet
DelegateTX(mainnet, seed, recipient, allnftId);
