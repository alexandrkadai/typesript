"use strict";
//enums
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 0] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["IN_PROCESS"] = 1] = "IN_PROCESS";
    STATUS_CODE[STATUS_CODE["FAILED"] = 2] = "FAILED";
})(STATUS_CODE || (STATUS_CODE = {}));
const responseVal = {
    message: 'Tansaction Success',
    statusCode: STATUS_CODE.SUCCESS,
};
// 1 - Success
// p = process
// f = failed
if (responseVal.statusCode === STATUS_CODE.SUCCESS) {
}
function action(status) { }
action(STATUS_CODE.SUCCESS);
action(1);
action(2);
