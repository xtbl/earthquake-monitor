/** @ksx React.DOM */

var React = require('react');

var EarthquakeItem = React.createClass({

    render: function() {
        return (
            <li>Earthquake Item
                <span>{this.props.dateTime}</span>
                <span>{this.props.region}</span>
                <span>{this.props.magnitude}</span>
                <span>{this.props.depth}</span>
            </li>
        );
    }
});


module.exports = EarthquakeItem;