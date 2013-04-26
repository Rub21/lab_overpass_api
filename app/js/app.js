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

        /*$('#ways').click(function() {
            download('<recurse type="node-way"/>', 'way');
        });*/

        $('#node').click(function(e) {
            download('', 'node');
        });


        $('#json').click(function() {
            var mapzoom = map.getZoom();

              var locations = (map.getExtent() + '').split(','); //date 
                var date_hour = $('#datetimepicker input').attr('value');
                var date = date_hour.substring(0, 10).split("/");
                var hour = date_hour.substring(11, 19).split(":");

            if (mapzoom >= 7) {

                $('#map').addClass('loading');

               
                var query = '[out:json];node(newer:"2013-04-24T13:00:00Z")( 28.745, -84.707,29.691, -72.204);out meta;';
                var url = 'http://overpass.osm.rambler.ru/cgi/interpreter?data=' + query;
                //console.log(url);
                $.getJSON(url, {
                    format: "json"
                }).done(function(data) {
                    //console.log(data);
                    //console.log(data.elements);

                    var geojson = {
                        "type": "FeatureCollection",
                        "features": []
                    };



                    $.each(data.elements, function(i, item) {
                        // console.log(item)
                        var d = {
                            "geometry": {
                                "type": "Point",
                                "coordinates": [item.lon, item.lat]
                            },
                            "type": "Feature",
                            "properties": {

                                "timestamp": moment(item.timestamp.replace('T', ' ').replace('Z', '')).unix(),
                                "version": item.version,
                                "user": item.user
                            }
                        };
                        geojson.features.push(d);

                    });

                    console.log(geojson);
                    $('#map').removeClass('loading');
                    $('#btn-full-with').trigger('click');

                    createfile(geojson);



                });


            } else {

                alert("zoom in a little so we don't have to load a huge area from the API.")
            }


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

        function createfile(d) {


            var Base64 = {

                // private property
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

                // public method for encoding
                encode: function(input) {
                    var output = "";
                    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                    var i = 0;

                    input = Base64._utf8_encode(input);

                    while (i < input.length) {

                        chr1 = input.charCodeAt(i++);
                        chr2 = input.charCodeAt(i++);
                        chr3 = input.charCodeAt(i++);

                        enc1 = chr1 >> 2;
                        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                        enc4 = chr3 & 63;

                        if (isNaN(chr2)) {
                            enc3 = enc4 = 64;
                        } else if (isNaN(chr3)) {
                            enc4 = 64;
                        }

                        output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

                    }

                    return output;
                },

                // public method for decoding
                decode: function(input) {
                    var output = "";
                    var chr1, chr2, chr3;
                    var enc1, enc2, enc3, enc4;
                    var i = 0;

                    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                    while (i < input.length) {

                        enc1 = this._keyStr.indexOf(input.charAt(i++));
                        enc2 = this._keyStr.indexOf(input.charAt(i++));
                        enc3 = this._keyStr.indexOf(input.charAt(i++));
                        enc4 = this._keyStr.indexOf(input.charAt(i++));

                        chr1 = (enc1 << 2) | (enc2 >> 4);
                        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                        chr3 = ((enc3 & 3) << 6) | enc4;

                        output = output + String.fromCharCode(chr1);

                        if (enc3 != 64) {
                            output = output + String.fromCharCode(chr2);
                        }
                        if (enc4 != 64) {
                            output = output + String.fromCharCode(chr3);
                        }

                    }

                    output = Base64._utf8_decode(output);

                    return output;

                },

                // private method for UTF-8 encoding
                _utf8_encode: function(string) {
                    string = string.replace(/\r\n/g, "\n");
                    var utftext = "";

                    for (var n = 0; n < string.length; n++) {

                        var c = string.charCodeAt(n);

                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        } else if ((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        } else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }

                    }

                    return utftext;
                },

                // private method for UTF-8 decoding
                _utf8_decode: function(utftext) {
                    var string = "";
                    var i = 0;
                    var c = c1 = c2 = 0;

                    while (i < utftext.length) {

                        c = utftext.charCodeAt(i);

                        if (c < 128) {
                            string += String.fromCharCode(c);
                            i++;
                        } else if ((c > 191) && (c < 224)) {
                            c2 = utftext.charCodeAt(i + 1);
                            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                            i += 2;
                        } else {
                            c2 = utftext.charCodeAt(i + 1);
                            c3 = utftext.charCodeAt(i + 2);
                            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                            i += 3;
                        }

                    }

                    return string;
                }

            }



            //var btn = document.getElementById("linkButton");
            var axx = document.getElementById("osm");
            axx.download = 'osm.json';

            // I used this online encoder to create the data url.
            // axx.href = 'data:text/csv;base64,MTsyOzQ=';  // This was my first test, not having the encoder. 
            axx.href = 'data:text/json;base64,' + Base64.encode(JSON.stringify(d));
        }

        function getTimestamp(str) {
            var d = str.match(/\d+/g); // extract date parts
            return +new Date(d[0], d[1], d[2], d[3], d[4], d[5]).getTime(); // build Date object
        }

        //getTimestamp("2010-03-09 12:21:00"); // 1268158860000

        //2013-04-24T17:49:48Z


    })();