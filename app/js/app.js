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
                console.log(date);
                console.log(hour);
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


            var query = '<osm-script output="json">' +
                '<query type="node">' +
                ' <has-kv k="name" v="Gielgen"/>' +
                ' </query>' +
                '<print/>' +
                '</osm-script>' ;

            var url = 'http://overpass-api.de/api/interpreter?data=' + query;

            console.log(url);





        });


        function getdata(){
                         overpass.ajax_request = $.ajax(settings.server + "interpreter" + r, {
                type: "POST",
                data: {
                    data: t
                },
                headers: i,
                success: function(t, n, i) {
                    var r, a = i.responseText.length,
                        o = Math.floor(Math.log(a) / Math.log(10));
                    a = Math.round(a / Math.pow(10, o)) * Math.pow(10, o), r = 1e3 > a ? a + " bytes" : 1e6 > a ? a / 1e3 + " kB" : a / 1e6 + " MB", e("onProgress", "recieved about " + r + " of data"), e("onDataRecieved", a, r, function() {
                        e("onAbort")
                    }, function() {
                        var n, r = null,
                            a = {};
                        e("onProgress", "parsing data"), setTimeout(function() {
                            if ("string" == typeof t && "{" == t[0]) try {
                                t = $.parseJSON(t)
                            } catch (o) {}
                            if ("string" == typeof t || "object" == typeof t && i.responseXML && $("remark", t).length > 0 || "object" == typeof t && t.remark && t.remark.length > 0) {
                                r = "unknown";
                                var s = !1;
                                if (s = s || "string" == typeof t && -1 != t.indexOf("Error") && -1 == t.indexOf("<script") && -1 == t.indexOf("<h2>Public Transport Stops</h2>"), s = s || "object" == typeof t && i.responseXML && $("remark", t).length > 0, s = s || "object" == typeof t && t.remark && t.remark.length > 0) {
                                    var l = "?";
                                    "string" == typeof t && (l = t.replace(/((.|\n)*<body>|<\/body>(.|\n)*)/g, "")), "object" == typeof t && i.responseXML && (l = "<p>" + $.trim($("remark", t).text()) + "</p>"), "object" == typeof t && t.remark && (l = "<p>" + $.trim(t.remark) + "</p>"), e("onQueryError", l), r = "error";
                                    for (var u = l.match(/line \d+:/g) || [], c = 0; u.length > c; c++) e("onQueryErrorLine", 1 * u[c].match(/\d+/)[0])
                                }
                                overpass.resultType = "error", t = {
                                    elements: []
                                }, overpass.timestamp = void 0, overpass.copyright = void 0, a.data = {
                                    nodes: 0,
                                    ways: 0,
                                    relations: 0,
                                    areas: 0
                                }
                            } else "object" == typeof t && i.responseXML ? (overpass.resultType = "xml", r = "xml", overpass.timestamp = $("osm > meta:first-of-type", t).attr("osm_base"), overpass.copyright = $("osm > note:first-of-type", t).text(), a.data = {
                                nodes: $("osm > node", t).length,
                                ways: $("osm > way", t).length,
                                relations: $("osm > relation", t).length,
                                areas: $("osm > area", t).length
                            }) : (overpass.resultType = "javascript", r = "json", overpass.timestamp = t.osm3s.timestamp_osm_base, overpass.copyright = t.osm3s.copyright, a.data = {
                                nodes: $.grep(t.elements, function(e) {
                                    return "node" == e.type
                                }).length,
                                ways: $.grep(t.elements, function(e) {
                                    return "way" == e.type
                                }).length,
                                relations: $.grep(t.elements, function(e) {
                                    return "relation" == e.type
                                }).length,
                                areas: $.grep(t.elements, function(e) {
                                    return "area" == e.type
                                }).length
                            });
                            e("onProgress", "applying styles"), setTimeout(function() {
                                void 0 === styleparser.PointStyle.prototype.properties.symbol_shape && (styleparser.PointStyle.prototype.properties.push("symbol_shape", "symbol_size", "symbol_stroke_width", "symbol_stroke_color", "symbol_stroke_opacity", "symbol_fill_color", "symbol_fill_opacity"), styleparser.PointStyle.prototype.symbol_shape = "", styleparser.PointStyle.prototype.symbol_size = 0 / 0, styleparser.PointStyle.prototype.symbol_stroke_width = 0 / 0, styleparser.PointStyle.prototype.symbol_stroke_color = null, styleparser.PointStyle.prototype.symbol_stroke_opacity = 0 / 0, styleparser.PointStyle.prototype.symbol_fill_color = null, styleparser.PointStyle.prototype.symbol_fill_opacity = 0 / 0);
                                var o = ide.mapcss;
                                try {
                                    var s = new styleparser.RuleSet;
                                    s.parseCSS(o);
                                    try {
                                        s.getStyles({
                                            isSubject: function() {
                                                return !0
                                            },
                                            getParentObjects: function() {
                                                return []
                                            }
                                        }, [], 18)
                                    } catch (l) {
                                        throw Error("MapCSS runtime error.")
                                    }
                                } catch (l) {
                                    o = "", e("onStyleError", "<p>" + l.message + "</p>")
                                }
                                var u = new styleparser.RuleSet;
                                u.parseCSS("node, way, relation {color:black; fill-color:black; opacity:1; fill-opacity: 1; width:10;} \nnode {color:#03f; width:2; opacity:0.7; fill-color:#fc0; fill-opacity:0.3;} \nline {color:#03f; width:5; opacity:0.6;} \narea {color:#03f; width:2; opacity:0.7; fill-color:#fc0; fill-opacity:0.3;} \nrelation node, relation way, relation relation {color:#d0f;} \nway:tainted, relation:tainted {dashes:5,8;} \nway:mp_outline:untagged {width:2; opacity:0.7;} \nway:placeholder, relation:placeholder {fill-color:red;} \nnode:active, way:active, relation:active {color:#f50; fill-color:#f50;} \n" + o);
                                var c = function(e, t) {
                                    function n(e) {
                                        return e && e.tags && function(e) {
                                            for (var t in e) if ("created_by" != t && "source" != t) return !0;
                                            return !1
                                        }(e.tags)
                                    }
                                    var i = u.getStyles({
                                        isSubject: function(t) {
                                            switch (t) {
                                                case "node":
                                                    return "node" == e.properties.type || "Point" == e.geometry.type;
                                                case "area":
                                                    return "Polygon" == e.geometry.type || "MultiPolygon" == e.geometry.type;
                                                case "line":
                                                    return "LineString" == e.geometry.type;
                                                case "way":
                                                    return "way" == e.properties.type;
                                                case "relation":
                                                    return "relation" == e.properties.type
                                            }
                                            return !1
                                        },
                                        getParentObjects: function() {
                                            return 0 == e.properties.relations.length ? [] : e.properties.relations.map(function(e) {
                                                return {
                                                    tags: e.reltags,
                                                    isSubject: function(t) {
                                                        return "relation" == t || "area" == t && "multipolyon" == e.reltags.type
                                                    },
                                                    getParentObjects: function() {
                                                        return []
                                                    }
                                                }
                                            })
                                        }
                                    }, $.extend(e.properties && e.properties.tainted ? {
                                        ":tainted": !0
                                    } : {}, e.properties && e.properties.mp_outline ? {
                                        ":mp_outline": !0
                                    } : {}, e.is_placeholder ? {
                                        ":placeholder": !0
                                    } : {}, n(e.properties) ? {
                                        ":tagged": !0
                                    } : {
                                        ":untagged": !0
                                    }, t ? {
                                        ":active": !0
                                    } : {}, e.properties.tags), 18);
                                    return i
                                };
                                overpass.osmLayer = new L.OSM4Leaflet(null, {
                                    data_mode: r,
                                    afterParse: function() {
                                        e("onProgress", "rendering geoJSON")
                                    },
                                    baseLayerClass: settings.disable_poiomatic ? L.GeoJSON : L.GeoJsonNoVanish,
                                    baseLayerOptions: {
                                        threshold: 2 * 9 * Math.sqrt(2),
                                        compress: function(e) {
                                            return !(e.properties.mp_outline && $.isEmptyObject(e.properties.tags))
                                        },
                                        style: function(e, t) {
                                            function n(e, t) {
                                                for (var n = t.length - 1; n >= 0; n--) if (void 0 !== e[t[n]]) return e[t[n]];
                                                return void 0
                                            }
                                            var i = {}, r = c(e, t);
                                            switch (e.geometry.type) {
                                                case "Point":
                                                    var a = $.extend({}, r.shapeStyles["default"], r.pointStyles["default"]),
                                                        o = n(a, ["color", "symbol_stroke_color"]);
                                                    void 0 !== o && (i.color = o);
                                                    var o = n(a, ["opacity", "symbol_stroke_opacity"]);
                                                    void 0 !== o && (i.opacity = o);
                                                    var o = n(a, ["width", "symbol_stroke_width"]);
                                                    void 0 !== o && (i.weight = o);
                                                    var o = n(a, ["fill_color", "symbol_fill_color"]);
                                                    void 0 !== o && (i.fillColor = o);
                                                    var o = n(a, ["fill_opacity", "symbol_fill_opacity"]);
                                                    void 0 !== o && (i.fillOpacity = o);
                                                    var o = n(a, ["dashes"]);
                                                    void 0 !== o && (i.dashArray = o.join(","));
                                                    break;
                                                case "LineString":
                                                    var a = r.shapeStyles["default"],
                                                        o = n(a, ["color"]);
                                                    void 0 !== o && (i.color = o);
                                                    var o = n(a, ["opacity"]);
                                                    void 0 !== o && (i.opacity = o);
                                                    var o = n(a, ["width"]);
                                                    void 0 !== o && (i.weight = o);
                                                    var o = n(a, ["dashes"]);
                                                    void 0 !== o && (i.dashArray = o.join(","));
                                                    break;
                                                case "Polygon":
                                                case "MultiPolygon":
                                                    var a = r.shapeStyles["default"],
                                                        o = n(a, ["color", "casing_color"]);
                                                    void 0 !== o && (i.color = o);
                                                    var o = n(a, ["opacity", "casing_opacity"]);
                                                    void 0 !== o && (i.opacity = o);
                                                    var o = n(a, ["width", "casing_width"]);
                                                    void 0 !== o && (i.weight = o);
                                                    var o = n(a, ["fill_color"]);
                                                    void 0 !== o && (i.fillColor = o);
                                                    var o = n(a, ["fill_opacity"]);
                                                    void 0 !== o && (i.fillOpacity = o);
                                                    var o = n(a, ["dashes"]);
                                                    void 0 !== o && (i.dashArray = o.join(","))
                                            }
                                            return i
                                        },
                                        pointToLayer: function(e, t) {
                                            var n = c(e),
                                                i = n.pointStyles && n.pointStyles["default"] ? n.pointStyles["default"] : {};
                                            if (i.icon_image) {
                                                var r, a = i.icon_image.match(/^url\(['"](.*)['"]\)$/)[1];
                                                i.icon_width && (r = [i.icon_width, i.icon_width]), i.icon_height && r && (r[1] = i.icon_height);
                                                var o = new L.Icon({
                                                    iconUrl: a,
                                                    iconSize: r
                                                });
                                                return new L.Marker(t, {
                                                    icon: o
                                                })
                                            }
                                            var s = i.symbol_size || 9;
                                            return new L.CircleMarker(t, {
                                                radius: s
                                            })
                                        },
                                        onEachFeature: function(t, n) {
                                            n.on("click", function(i) {
                                                var r = "";
                                                r += "node" == t.properties.type ? "<h2>Node <a href='http://www.openstreetmap.org/browse/node/" + t.properties.id + "' target='_blank'>" + t.properties.id + "</a></h2>" : "way" == t.properties.type ? "<h2>Way <a href='http://www.openstreetmap.org/browse/way/" + t.properties.id + "' target='_blank'>" + t.properties.id + "</a></h2>" : "relation" == t.properties.type ? "<h2>Relation <a href='http://www.openstreetmap.org/browse/relation/" + t.properties.id + "' target='_blank'>" + t.properties.id + "</a></h2>" : "<h2>" + t.properties.type + " #" + t.properties.id + "</h2>", t.properties && t.properties.tags && !$.isEmptyObject(t.properties.tags) && (r += '<h3>Tags:</h3><ul class="plain">', $.each(t.properties.tags, function(e, t) {
                                                    e = htmlentities(e), t = htmlentities(t), t = t.replace(/\b((?:(https?|ftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi, '<a href="$1" target="_blank">$1</a>'), t = t.replace(/(([^\s()<>]+)@([^\s()<>]+[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/g, '<a href="mailto:$1" target="_blank">$1</a>');
                                                    var n, i;
                                                    ((n = e.match(/^wikipedia\:(.*)$/)) && (i = t) || "wikipedia" == e && (n = t.match(/^([a-zA-Z]+)\:(.*)$/)) && (i = n[2])) && (t = '<a href="http://' + n[1] + ".wikipedia.org/wiki/" + encodeURIComponent(i) + '" target="_blank">' + t + "</a>"), r += "<li>" + e + "=" + t + "</li>"
                                                }), r += "</ul>"), t.properties && t.properties.relations && !$.isEmptyObject(t.properties.relations) && (r += '<h3>Relations:</h3><ul class="plain">', $.each(t.properties.relations, function(e, t) {
                                                    r += "<li><a href='http://www.openstreetmap.org/browse/relation/" + t.rel + "' target='_blank'>" + t.rel + "</a>", t.reltags && (t.reltags.name || t.reltags.ref || t.reltags.type) && (r += " <i>" + $.trim((t.reltags.type ? htmlentities(t.reltags.type) + " " : "") + (t.reltags.ref ? htmlentities(t.reltags.ref) + " " : "") + (t.reltags.name ? htmlentities(t.reltags.name) + " " : "")) + "</i>"), t.role && (r += " as <i>" + htmlentities(t.role) + "</i>"), r += "</li>"
                                                }), r += "</ul>"), t.properties && t.properties.meta && !$.isEmptyObject(t.properties.meta) && (r += '<h3>Meta:</h3><ul class="plain">', $.each(t.properties.meta, function(e, t) {
                                                    e = htmlentities(e), t = htmlentities(t), r += "<li>" + e + "=" + t + "</li>"
                                                }), r += "</ul>"), "Point" == t.geometry.type && (r += "<h3>Coordinates:</h3><p>" + t.geometry.coordinates[1] + " / " + t.geometry.coordinates[0] + " <small>(lat/lon)</small></p>"), -1 != $.inArray(t.geometry.type, ["LineString", "Polygon", "MultiPolygon"]) && t.properties && 1 == t.properties.tainted && (r += "<p><strong>Attention: incomplete geometry (e.g. some nodes missing)</strong></p>");
                                                var a;
                                                a = "function" == typeof i.target.getLatLng ? i.target.getLatLng() : i.latlng;
                                                var o = L.popup({}, this).setLatLng(a).setContent(r);
                                                o.layer = n, e("onPopupReady", o)
                                            })
                                        }
                                    }
                                }), setTimeout(function() {

                                    overpass.osmLayer.addData(t, function() {

                                        console.log(overpass.osmLayer.getGeoJSON());

                                        n = overpass.osmLayer.getGeoJSON(),
                                         overpass.geojson = n,
                                          overpass.data = t
                                          , a.geojson = {
                                            polys: n[0].features.length,
                                            lines: n[1].features.length,
                                            pois: n[2].features.length
                                        }, overpass.stats = a, e("onGeoJsonReady"), e("onProgress", "printing raw data"), setTimeout(function() {
                                            overpass.resultText = i.responseText, e("onRawDataPresent"), 0 == n[0].features.length && 0 == n[1].features.length && 0 == n[2].features.length && (empty_msg = "json" == r && t.elements.length > 0 || "xml" == r && $("osm", t).children().not("note,meta").length > 0 ? "json" == r && function(e) {
                                                for (var t = 0; e.length > t; e++) if ("area" != e[t].type) return !1;
                                                return !0
                                            }(t.elements) || "xml" == r && 0 == $("osm", t).children().not("note,meta,area").length ? "only areas returned" : "json" == r && function(e) {
                                                for (var t = 0; e.length > t; e++) if ("node" == e[t].type) return !0;
                                                return !1
                                            }(t.elements) || "xml" == r && 0 != $("osm", t).children().filter("node").length ? "no coordinates returned" : "no visible data" : "error" == r ? "an error occured" : "unknown" == r ? "unstructured data returned" : "recieved empty dataset", e("onEmptyMap", empty_msg, r)), e("onDone")
                                        }, 1)
                                    })
                                }, 1)
                            }, 1)
                        }, 1)
                    })
                },
                error: function(t, n) {
                    if ("abort" != n) {
                        if (e("onProgress", "error during ajax call"), 
                            400 == t.status || 504 == t.status || 429 == t.status) return this.success(t.responseText, n, t), 
                            void 0;
                        overpass.resultText = t.resultText;
                        var i = "";
                        "rejected" == t.state() && (i += "<p>Request rejected. (e.g. server not found, redirection, internal server errors, etc.)</p>"), "parsererror" == n ? i += "<p>Error while parsing the data (parsererror).</p>" : "error" != n && n != t.statusText && (i += "<p>Error-Code: " + n + "</p>"), (0 != t.status && 200 != t.status || "OK" != t.statusText) && (i += "<p>Error-Code: " + t.statusText + " (" + t.status + ")</p>"), e("onAjaxError", i), e("onDone")
                    }
                }
            })
        }


    })();