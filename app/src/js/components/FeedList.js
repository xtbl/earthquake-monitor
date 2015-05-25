/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem');

var EarthquakeItem = require('./EarthquakeItem');

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem title={item.title} desc={item.description} voteCount={item.voteCount} />
    });

    return (
      <ul className="list-group container">
        <EarthquakeItem />
      </ul>
    );
  }

});

module.exports = FeedList;
