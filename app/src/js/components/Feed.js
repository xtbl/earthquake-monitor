

var React         = require('react');
var Earthquakes   = require('./Earthquakes/Earthquakes');
var EarthquakeList = require('./EarthquakeList');
var restful = require('./restfuljs/restful');

var Feed = React.createClass({
  loadEarthquakesFromServer: function () {
    var self = this;

    var api = restful('earthquake.usgs.gov');

    //TODO: move this to own service, fix dates, depth and finish prototype

    api.oneUrl('earthquakes', "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2015-06-06T19:16:31.552Z&endtime=")
    //Earthquakes.getEarthquakes()
                .get()
                .then(function(earthQuakesResponse){
                  //console.log(earthQuakeItems.body());
                  //console.log(earthQuakeItems.data);
                  var items = earthQuakesResponse.body();
                  console.log(items.data());
                  debugger;
                  self.setState({
                    earthQuakeItems: items.data().features
                  });
                });

    //return earthquakesCollection.getAll;


    //Earthquakes.getEarthquakes().then(function(earthQuakeItems){
    //  self.setState({
    //    earthQuakeItems: earthQuakeItems
    //  });
    //});


  },

  getInitialState: function() {
    var mockItems = Earthquakes.getMockEarthquakes();

    console.log(Earthquakes.getMockEarthquakes());

    http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2015-06-06T19:16:31.552Z&endtime=

    return {
      //earthQuakeItems: mockItems
      earthQuakeItems: []

    }
  },

  componentDidMount: function() {
    this.loadEarthquakesFromServer();
  },
  componentDidUpdate: function () {
    console.log("component updated");
  },
  handleClick: function () {
    console.log("handleClick");
    var mockItems = Earthquakes.getMockEarthquakes();
    this.setState({
      earthQuakeItems: mockItems
    });
  },

  render: function() {
    return (
      <div>
        <button onClick={this.handleClick}>Change State</button>
        <EarthquakeList earthQuakeItems={this.state.earthQuakeItems} />
      </div>
    );
  }

});

module.exports = Feed;
