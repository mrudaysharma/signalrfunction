var clientId = Math.floor(Math.random() * 1000000000000) + ''
var apiBaseUrl = 'https://thermometer-function.azurewebsites.net'

var connection = new signalR.HubConnectionBuilder()
  .withUrl(`${apiBaseUrl}/api`)
  .withHubProtocol(new signalR.protocols.msgpack.MessagePackHubProtocol())
  .build()
connection.on('thermometerDataset', recievedData)
connection.start()
  .then(() => console.log('connected'))
  .catch(err => console.error)



function recievedData(simplifyResponseString) {
   var jsondata = JSON.parse(simplifyResponseString)
  
    var temperature = document.getElementById(temperature).value(jsondata[0].temperature);
	var humidity = document.getElementById(temperature).value(jsondata[0].humidity);
  var sensorData = jsondata[0].SensorId
  
}
