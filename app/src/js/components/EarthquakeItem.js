

var React = require('react'),
    Magnitude = require('./Magnitude/Magnitude')

var EarthquakeItem = React.createClass({

    render: function() {
        return (
            <div className="row">
                <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <span>{this.props.dateTime}</span>
                </div>
                <div className="col col-xs-3 col col-sm-3 col-md-3 col-lg-3">
                    <span>{this.props.region}</span>
                </div>
                <div className="col col-xs-3 col col-sm-3 col-md-3 col-lg-3">
                    <Magnitude magnitude={this.props.magnitude}/>
                </div>
                <div className="col col-xs-3 col col-sm-3 col-md-3 col-lg-3">
                    <span>{this.props.depth}</span>
                </div>
            </div>
        );
    }
});


module.exports = EarthquakeItem;