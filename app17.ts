//enums
enum STATUS_CODE {
  SUCCESS,
  IN_PROCESS,
  FAILED,
}

const responseVal = {
  message: 'Tansaction Success',
  statusCode: STATUS_CODE.SUCCESS,
};

// 1 - Success
// p = process
// f = failed

if (responseVal.statusCode === STATUS_CODE.SUCCESS) {
}

function action(status: STATUS_CODE) {}

action(STATUS_CODE.SUCCESS);
action(1);
action(2);

const enum Roles {
  Admin = 1,
  User = 2,
}
