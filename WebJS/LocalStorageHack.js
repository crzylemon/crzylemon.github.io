//Created by Emmettdewet14.

var local = prompt('What local storage key would you like to change?');
var value = prompt('Insert the value for ' + local + '.');

localStorage.setItem(local, value);
