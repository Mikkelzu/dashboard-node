var tcpPing = require('tcp-ping')

var p = tcpPing;

module.exports = p.probe('127.0.0.1', 3306, function(err, available) {
	if (available) {
		return 'MySQL is running';
	} else {
		return 'MySQL is not running'
	}
})