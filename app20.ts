function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    id.toLowerCase();
  } else if (typeof id === 'number') {
    id.toFixed(2);
  }
}

logId(1);
logId('Some Text');
logId(true);

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    err.toLowerCase();
  }
}

function logObj(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}
