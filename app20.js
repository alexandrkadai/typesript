"use strict";
function logId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else if (typeof id === 'number') {
        id.toFixed(2);
    }
}
logId(1);
logId('Some Text');
logId(true);
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        err.toLowerCase();
    }
}
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
