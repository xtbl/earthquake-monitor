

var React = require('react'),
    EarthquakeItem = require('./EarthquakeItem');

var EarthquakeList = React.createClass({
    render: function() {

        var earthquakeItems = this.props.earthQuakeItems.map(function(item){
            if(item.properties.mag >= 0){
                return <EarthquakeItem dateTime={item.properties.time} region={item.properties.place} magnitude={item.properties.mag} depth={item.properties.code} />
            }
        });
        //{key: '1', dateTime: '1', region: "America", magnitude: "2", depth: "5"}

        return (
            <div className="eartquake-list container">
                <div className="row ">
                    <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <h4>Date/Time</h4>
                    </div>
                    <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <h4>Region</h4>
                    </div>
                    <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3 shake shake-little shake-constant">
                        <h4>Magnitude</h4>
                    </div>
                    <div className="col col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <h4>Depth</h4>
                    </div>
                </div>
                {earthquakeItems}
            </div>
        );
    }
});


module.exports = EarthquakeList;