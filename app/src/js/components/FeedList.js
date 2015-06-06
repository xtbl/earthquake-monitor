

var React = require('react'),
    FeedItem = require('./FeedItem');

var EarthquakeItem = require('./EarthquakeItem');

var FeedList = React.createClass({

  render: function() {

    //TODO: fetch server data, use this http://marmelab.com/blog/2015/03/10/deal-easily-with-your-rest-api-using-restful-js.html

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem title={item.title} desc={item.description} voteCount={item.voteCount} />
    });

    //var earthQuakeItems =

    return (
      <ul className="list-group container">
        <EarthquakeItem />
      </ul>
    );
  }

});

module.exports = FeedList;
