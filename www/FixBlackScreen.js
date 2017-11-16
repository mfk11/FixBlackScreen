
var exec = require('cordova/exec');

function FixBlackScreen(){}
FixBlackScreen.prototype.coolMethod = function(successCallback, errorCallback, options) {
    options = options || {};

    exec(successCallback, errorCallback, "FixBlackScreen", "coolMethod", []);
};
module.exports = new FixBlackScreen();
