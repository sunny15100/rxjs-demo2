"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var interval_1 = require("rxjs/observable/interval");
var merge_1 = require("rxjs/observable/merge");
// 每2.5秒发出值
var first = interval_1.interval(2500);
// 每2秒发出值
var second = interval_1.interval(2000);
// 每1.5秒发出值
var third = interval_1.interval(1500);
// 每1秒发出值
var fourth = interval_1.interval(1000);
// 从一个 observable 中发出输出值
var example = merge_1.merge(first.pipe(operators_1.mapTo('FIRST!')), second.pipe(operators_1.mapTo('SECOND!')), third.pipe(operators_1.mapTo('THIRD')), fourth.pipe(operators_1.mapTo('FOURTH')));
// 输出: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
var subscribe = example.subscribe(function (val) { return console.log(val); });
//# sourceMappingURL=index.js.map