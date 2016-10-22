var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var request = require("request");
var fs = require("fs");
var config = require("./config");

var debug = false;

var serialPort = new SerialPort("/dev/ttyUSB0", {
	baudrate: 9600,
	parser: serialport.parsers.readline("<ENDECEND>"),
});

serialPort.on("open", function() {
	if(debug) console.log("ENDEC serial connection opened!");

	serialPort.on("data", function(data) {
		if (debug) console.log("Got data from endec: " + data);
		request.post(config.iftttURL, function(err, resp, body) {
			console.log(body);
		});
		fs.appendFile("alerts.txt", data, function(err) {
			if (err) console.error(err);
		});
		fs.appendFile("alerts.txt", "<ENDECEND>", function(err) {

		})
	});
});
