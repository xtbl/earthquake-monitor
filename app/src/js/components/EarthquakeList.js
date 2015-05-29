/** @jsx React.DOM */

var React = require('react'),
    EarthquakeItem = require('./EarthquakeItem');

var EarthquakeList = React.createClass({
    render: function() {

        var earthquakeItems = this.props.earthQuakeItems.map(function(item){
            return <EarthquakeItem dateTime={item.dateTime} region={item.region} magnitude={item.magnitude} depth={item.depth} />
        });
        //{key: '1', dateTime: '1', region: "America", magnitude: "2", depth: "5"}

        return (
            <ul>
                {earthquakeItems}
            </ul>
        );
    }
});


module.exports = EarthquakeList;