

var React = require('react'),
    ClassNames = require('classnames');

var Magnitude = React.createClass({
    render: function () {
        var classes = ClassNames({
           'magnitude': true,
            'glowing': true
        });
        var colorCode = {
          light: '#ccc'
        };

        return (
            <div className={classes}>
                <div>
                    {this.props.magnitude}
                </div>
            </div>
        );
    }
});

//TODO: use classSet to manage classes https://facebook.github.io/react/docs/class-name-manipulation.html
module.exports = Magnitude;