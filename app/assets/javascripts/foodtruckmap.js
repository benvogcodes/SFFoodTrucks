window.onload = function() {
  var options = {
    center: [37.774929, -122.419416],
    zoom: 12,
    scrollwheel: true
  };

  var vizjson = 'https://bvoglewede.cartodb.com/api/v2/viz/cf0c70b2-3a34-11e6-91c4-0e5db1731f59/viz.json';
  cartodb.createVis('map', vizjson, options);
}
