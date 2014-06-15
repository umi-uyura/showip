/*jslint node: true, nomen: true, unparam: true, vars: true, white: true */

"use strict";

var address = require("address");

address(function(err, addrs) {
  console.log(addrs.ip, addrs.ipv6, addrs.mac);
});
