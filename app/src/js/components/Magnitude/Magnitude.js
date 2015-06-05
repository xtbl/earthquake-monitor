/** @jsx React.DOM */

var React = require('react');

var Magnitude = React.createClass({
    render: function () {
        var colorCode = {
          light: '#ccc'
        };
        var magnitudeClass = 'magnitude glowing';

        return (
            <div className={magnitudeClass}>
                <div>
                    {this.props.magnitude}
                </div>
            </div>
        );
    }
});

//TODO: use classSet to manage classes https://facebook.github.io/react/docs/class-name-manipulation.html
module.exports = Magnitude;