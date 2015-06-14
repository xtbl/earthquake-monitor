var mockData = require('../mockData');
var restful = require('../restfuljs/restful');

var Earthquakes = (function() {
    http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2015-06-06T19:16:31.552Z&endtime=

    function getEarthquakes() {
        var api = restful('earthquake.usgs.gov');
        return api.oneUrl('earthquakes', "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2015-06-06T19:16:31.552Z&endtime=");
    }

    function getMockEarthquakes() {
        return mockData.features;
    }


    return {
        getEarthquakes: getEarthquakes,
        getMockEarthquakes: getMockEarthquakes
    }

})();


module.exports = Earthquakes;