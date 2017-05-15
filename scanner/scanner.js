var os = require('os')
var ip = require('ip')


var exports = module.exports = {}

exports.GetFreeMemory = function() {
	return Math.round(os.freemem() / 1000000);
	
}

exports.GetTotalMemory = function() {
	return Math.round(os.totalmem() / 1000000);
}

exports.GetUsedMemory = function() {
	var used = os.totalmem() - os.freemem();

	return Math.round(used / 1000000);
}

exports.Cores = function() {
	var cpuCount = os.cpus().length;

	return "Total Cores: " + cpuCount;
}

exports.CpuModel = function() {
	var cpus = os.cpus();

	return cpus[0].model;
}

exports.CpuSpeed = function() {
	var cpus = os.cpus();

	return (cpus[0].speed / 1000).toFixed(2) + " GHz";
}

exports.GetArchitecture = function() {
	return os.arch();
}

exports.GetPlatform = function() {
	return os.platform();
}

exports.GetType = function() {
	return os.type();
}

exports.GetRelease = function() {
	return os.release();
}

exports.GetUptime = function() {
	return Math.round((os.uptime() / 3600));
}

exports.GetHostName = function() {
	return os.hostname();
}

exports.GetNetworkInterfaceIP = function() {
	return ip.address();
}