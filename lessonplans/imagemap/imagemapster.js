var xref = {
    car: "Car, hey.", // the href on the area overrides this!
    gm: "GM sign, super prominent?",
    wall: "Those are windows"
};
$('#carsphoto').mapster({
    fillOpacity: 0.4,
    fillColor: "d42e16",
    stroke: true,
    strokeColor: "CCCCCC",
    strokeOpacity: 0.8,
    strokeWidth: 2,
    singleSelect: true,
    mapKey: 'name',
    listKey: 'name',
    clickNavigate: true,
    showToolTip: true,
    toolTipClose: ["tooltip-click", "area-mouseout"],
    areas: [{
        key: "gm",
        toolTip: "Special GM Cars",
    }, {
        key: "wall",
        toolTip: "No Ball playing!"
    }, {
        key: "car",
        toolTip: "My parents had this car."
    }],
    onClick: function (e) {
        // update the text of "box thing" depending on area selected
        $('#box_thing').html(xref[e.key]);
    }
});
