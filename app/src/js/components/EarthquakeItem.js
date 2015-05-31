/** @ksx React.DOM */

var React = require('react');

var EarthquakeItem = React.createClass({

    render: function() {
        return (
            <div className="row">
                <div className="col col-md-3">
                    <span>{this.props.dateTime}</span>
                </div>
                <div className="col col-md-3">
                    <span>{this.props.region}</span>
                </div>
                <div className="col col-md-3">
                    <span>{this.props.magnitude}</span>
                </div>
                <div className="col col-md-3">
                    <span>{this.props.depth}</span>
                </div>
            </div>
        );
    }
});


module.exports = EarthquakeItem;