var http = require('http');

var exports = module.exports = {}

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/index.html'
};

http.get(options, function(res) {
  if (res.statusCode == 200) {
    console.log("success");
  }
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

function testPort(port, host, cb) {
  http.get({
    host: host, 
    port: port 
  }, function(res) {
    cb("success", res); 
  }).on("error", function(e) {
    cb("failure", e);
  });
}
