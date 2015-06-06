/** @jsx React.DOM */

var React         = require('react');
var ShowAddButton = require('./ShowAddButton');
var FeedForm      = require('./FeedForm');
var FeedList      = require('./FeedList');

var EarthquakeList = require('./EarthquakeList');

var Feed = React.createClass({

  getInitialState: function() {
    var FEED_ITEMS = [
      { key: '1', title: 'Realtime data!', description: 'Firebase is cool', voteCount: 49 },
      { key: '2', title: 'JavaScript is fun', description: 'Lexical scoping FTW', voteCount: 34},
      { key: '3', title: 'Coffee makes you awake', description: 'Drink responsibly', voteCount: 15},
    ];

    var mockItems = [
      {key: '1', dateTime: '1', region: "America", magnitude: "2", depth: "5"},
      {key: '2', dateTime: '2', region: "Asia", magnitude: "4", depth: "1"},
      {key: '3', dateTime: '3', region: "Australia", magnitude: "5", depth: "6"},
    ];


    return {
      items: FEED_ITEMS,
      earthQuakeItems: mockItems
    }
  },

  render: function() {
    return (
      <div>

        <EarthquakeList earthQuakeItems={this.state.earthQuakeItems} />

      </div>
    );
  }

});

module.exports = Feed;
