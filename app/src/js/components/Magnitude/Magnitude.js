

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

        //ES6 test
        var sum = a => (a + 10);
        console.log(sum(5));

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