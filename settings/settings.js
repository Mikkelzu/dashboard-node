var settingsJson = require('../settings/setting')

var fs = require('fs')

var module = module.exports = {}

console.log(settingsJson.test)

var obj = {
	test: "different"
}

var json = JSON.stringify(obj, null, 2);

fs.writeFileSync('setting.json', json, 'utf8')
