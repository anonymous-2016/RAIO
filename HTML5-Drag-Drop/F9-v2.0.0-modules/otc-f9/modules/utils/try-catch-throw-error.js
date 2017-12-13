/**
 * @author xgqfrms 2017-12-13
 * @license MIT
 * @description Try-Catch-Throw-Error
 *
 * @param {*String } message
 * @param {*String } fileName
 * @param {*Number} lineNumber
 */



function UserException(message = ``, fileName = ``, lineNumber = 0){
    this.message = message;
    this.fileName = fileName;
    this.lineNumber = lineNumber;
    this.name = 'UserException';
 }

 try {
     let message = `handle json error!`,
         fileName = `latest-transaction-data.js`,
         lineNumber = 29;
     throw new UserException(message, fileName, lineNumber);
     // new Error([message[, fileName[, lineNumber]]]);
 } catch (err) {
     console.log(`catch error = \n`, err);
     console.log(`catch error.name = \n`, err.name);
     console.log(`catch error.message = \n`, err.message);
     console.log(`catch error.fileName = \n`, err.fileName);
     console.log(`catch error.lineNumber = \n`, err.lineNumber);
 }
