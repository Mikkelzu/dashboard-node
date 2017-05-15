const express = require('express')
const index = express.Router()
const fs = require('fs')

const io = require('../server')

const scanner = require('../scanner/scanner')
const networkscanner = require('../scanner/networkscanner')
const tcpp = require('tcp-ping')


io.sockets.on('connection', function(socket){
	setInterval(function() {
		socket.emit('new', {
			free: scanner.GetFreeMemory(),
			used: scanner.GetUsedMemory(),
		})

		socket.emit('graph', {
			free: scanner.GetFreeMemory(),
			used: scanner.GetUsedMemory(),
		})		
	}, 100)
});

index.get('/', (req, res) => {

	

	const SystemObject = {
		TotalMemory: scanner.GetTotalMemory(),
		FreeMemory: scanner.GetFreeMemory(),
		UsedMemory: scanner.GetUsedMemory(),
		TotalCPUCores: scanner.Cores(),
		CpuModel: scanner.CpuModel(),
		CpuSpeed: scanner.CpuSpeed(),
		Arch: scanner.GetArchitecture(),
		Platform: scanner.GetPlatform(),
		Release: scanner.GetRelease(),
		Type: scanner.GetType(),
		Uptime: scanner.GetUptime(),
		HostName: scanner.GetHostName(),
		GetIP: scanner.GetNetworkInterfaceIP(),
		MySQL: tcpp.probe('127.0.0.1', 3306, function(err, available) {
			if (available) {
				return 'mysql online'
			} else {
				return 'mysql offline'
			}
		}),
		lol: 'lol'
	}
	res.render('pages/index', SystemObject)
})

index.post('/savetoJson', (req, res) => {

	var obj = { system: [] }

	obj.system.push({
		uptime: scanner.GetUptime(),
		hostname: scanner.GetHostName(),
		ip: scanner.GetNetworkInterfaceIP(),
		model:scanner.CpuModel(),
		cores: scanner.Cores(),
		speed:scanner.CpuSpeed(),
		arch: scanner.GetArchitecture(),
		total: scanner.GetTotalMemory(),
		free: scanner.GetFreeMemory(),
		used: scanner.GetUsedMemory(),
		plat: scanner.GetPlatform(),
		type: scanner.GetType(),
		rel: scanner.GetRelease()
	})

	var json = JSON.stringify(obj, null, 2);

	var filename = "system.json"

	fs.writeFileSync(filename, json ,'utf8');
	res.redirect('/')

})



index.get('/systems',(req, res) => {
	var system = require('../system')

	res.render('pages/systems',{
		Uptime: system['system'][0].uptime,
		HostName:system['system'][0].hostname,
		GetIP: system['system'][0].ip,
		CpuModel: system['system'][0].model,
		TotalCPUCores: system['system'][0].cores,
		CpuSpeed: system['system'][0].speed,
		Arch: system['system'][0].arch,
		TotalMemory: system['system'][0].total,
		FreeMemory: system['system'][0].free,
		UsedMemory:system['system'][0].used,
		Platform: system['system'][0].plat,
		Type: system['system'][0].type,
		Release: system['system'][0].rel
	})
})

index.get('/about', (req,res) => {
	res.render('pages/about')
})

index.get('/settings', (req, res) => {
	res.render('pages/setting')
})

module.exports = index