

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
  handleClick: function () {
    var mockItems = Earthquakes.getMockEarthquakes();
    this.setState({
      earthQuakeItems: mockItems
    });
  },
  render: function() {
    return (
      <div className="feed">
        <EarthquakeList earthQuakeItems={this.state.earthQuakeItems} />
      </div>
    );
  }

});

module.exports = Feed;
