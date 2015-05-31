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
            <div className="eartquake-list container">
                <div className="row">
                    <div className="col col-md-3">
                        <span>Date/Time</span>
                    </div>
                    <div className="col col-md-3">
                        <span>Region</span>
                    </div>
                    <div className="col col-md-3">
                        <span>Magnitude</span>
                    </div>
                    <div className="col col-md-3">
                        <span>Depth</span>
                    </div>
                </div>
                {earthquakeItems}
            </div>
        );
    }
});


module.exports = EarthquakeList;