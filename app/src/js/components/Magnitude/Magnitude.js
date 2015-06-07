

var React = require('react'),
    ClassNames = require('classnames');

var Magnitude = React.createClass({
    render: function () {
        //var classes = ClassNames({
        //   'magnitude': true,
        //    'glowing': true
        //});

        /**
         * Returns set of classes according to the magnitude
         * provided
         * @param {Int} magn
         */
        function getMagnitudeClasses(magn) {
            var magnitudeTypes = {
                "8": 'great',
                "7": 'major',
                "6": 'strong',
                "5": 'moderate',
                "4": 'light',
                "3": 'minor',
                "2": 'micro'
            };
            var magnitudeFloor = Math.floor(magn).toString();
            if(magnitudeTypes[magnitudeFloor]) {
                return magnitudeTypes[magnitudeFloor];
            } else {
                return "";
            }
        }

        var classes = 'magnitude ' + getMagnitudeClasses(this.props.magnitude);
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