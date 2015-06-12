

var React         = require('react');
var Earthquakes   = require('./Earthquakes/Earthquakes');
var EarthquakeList = require('./EarthquakeList');
var restful = require('./restfuljs/restful');

var Feed = React.createClass({
  loadEarthquakesFromServer: function () {
    var self = this;

    //TODO: depth and finish prototype

    //Earthquakes.getEarthquakes()
    //  .get()
    //  .then(function(earthQuakesResponse){
    //    var items = earthQuakesResponse.body();
    //    self.setState({
    //      earthQuakeItems: items.data().features
    //    });
    //  });
    // mock data
    var mockItems = Earthquakes.getMockEarthquakes();
    self.setState({
      earthQuakeItems: mockItems
    });

  },

  getInitialState: function() {
    return {
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
