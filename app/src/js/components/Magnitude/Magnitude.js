

var React = require('react'),
    ClassNames = require('classnames');

var Magnitude = React.createClass({
    render: function () {

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
                "2": 'micro-minor',
                "1": 'micro',
                "0": 'micro-minimal'
            };
            var magnitudeFloor = Math.floor(magn).toString();

            return (magnitudeTypes[magnitudeFloor]) ? magnitudeTypes[magnitudeFloor] : "";
        }

        var classes = 'magnitude ' + getMagnitudeClasses(this.props.magnitude);
        return (
            <div className={classes}>
                <div>

                </div>
                <span>{this.props.magnitude}</span>
            </div>
        );
    }
});

module.exports = Magnitude;