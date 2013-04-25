    // Set up map
    var map = mapbox.map('map');
    map.addLayer(mapbox.layer().id('ruben.map-hly0tebv'));

    map.setZoomRange(3, 18);
    map.centerzoom({
        lat: 41.474,
        lon: -101.034
    }, 4);
    map.ui.zoomer.add();
    map.ui.zoombox.add();
    map.ui.hash.add();
    map.ui.attribution.add().content('<a href="http://www.openstreetmap.org/copyright">(c) OpenStreetMap contributors</a>');

    /*
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    $('#datetimepicker input').attr('value',now);*/


    (function() {
        $('#datetimepicker').datetimepicker({
            format: 'MM/dd/yyyy hh:mm:ss',
            pick12HourFormat: true
        });



        $('#ways').click(function() {
            download('<recurse type="node-way"/>', 'way');
        });

        $('#node').click(function(e) {
            download('', 'node');
        });

        function download(a, type) {

            var mapzoom = map.getZoom();

            if (mapzoom >= 7) {
                var dir = "http://127.0.0.1:8111/";
                var locations = (map.getExtent() + '').split(','); //date 
                var date_hour = $('#datetimepicker input').attr('value');
                var date = date_hour.substring(0, 10).split("/");
                var hour = date_hour.substring(11, 19).split(":");
                //console.log(date);
                //console.log(hour);
                //<newer than="' + date[2] + '-' + date[0] + '-' + date[1] + 'T' + hour[0] + ':' + hour[1] + ':' + hour[2] + 'Z"/>'
                var query = a + '<query type="' + type + '"> <newer than="' + date[2] + '-' + date[0] + '-' + date[1] + 'T' + hour[0] + ':' + hour[1] + ':' + hour[2] + 'Z"/>' + //2013-04-21T00:00:00Z
                '<bbox-query s="' + locations[2] + '" n="' + locations[0] + '" w="' + locations[1] + '" e="' + locations[3] + '"/>' +
                    '</query> <print mode="meta"/>';
                console.log(query);
                $.get(dir + "import", {
                    url: 'http://overpass-api.de/api/interpreter?data=' + query
                }).error(function() {
                    alert("Error: Enable JOSM remote!")
                }).success(function() {
                    e.dialog("close")
                });
            } else {

                alert("zoom in a little so we don't have to load a huge area from the API.")
            }
        };


        $('#json').click(function() {


            var query = '[out:json];node(newer:"2013-04-24T13:00:00Z")( 27.745, -84.707,29.691, -77.204);out meta;';
            var url = 'http://overpass.osm.rambler.ru/cgi/interpreter?data=' + query;
            //console.log(url);
            window.open(url, 'JSON');
            return false;

        });


        function getdata() {


        }


    })();