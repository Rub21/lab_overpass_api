function lzw_encode(e) {
	e = unescape(encodeURIComponent(e));
	for (var t, n = {}, i = (e + "").split(""), r = [], a = i[0], o = 256, s = 1; i.length > s; s++) t = i[s], null != n[a + t] ? a += t : (r.push(a.length > 1 ? n[a] : a.charCodeAt(0)), n[a + t] = o, o++, a = t);
	r.push(a.length > 1 ? n[a] : a.charCodeAt(0));
	for (var s = 0; r.length > s; s++) r[s] = String.fromCharCode(r[s]);
	return r.join("")
}
function lzw_decode(e) {
	for (var t, n = {}, i = (e + "").split(""), r = i[0], a = r, o = [r], s = 256, l = 1; i.length > l; l++) {
		var u = i[l].charCodeAt(0);
		t = 256 > u ? i[l] : n[u] ? n[u] : a + r, o.push(t), r = t.charAt(0), n[s] = a + r, s++, a = t
	}
	return decodeURIComponent(escape(o.join("")))
}
function htmlentities(e) {
	return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}
function RGBColor(e) {
	this.ok = !1, "#" == e.charAt(0) && (e = e.substr(1, 6)), e = e.replace(/ /g, ""), e = e.toLowerCase();
	var t = {
		aliceblue: "f0f8ff",
		antiquewhite: "faebd7",
		aqua: "00ffff",
		aquamarine: "7fffd4",
		azure: "f0ffff",
		beige: "f5f5dc",
		bisque: "ffe4c4",
		black: "000000",
		blanchedalmond: "ffebcd",
		blue: "0000ff",
		blueviolet: "8a2be2",
		brown: "a52a2a",
		burlywood: "deb887",
		cadetblue: "5f9ea0",
		chartreuse: "7fff00",
		chocolate: "d2691e",
		coral: "ff7f50",
		cornflowerblue: "6495ed",
		cornsilk: "fff8dc",
		crimson: "dc143c",
		cyan: "00ffff",
		darkblue: "00008b",
		darkcyan: "008b8b",
		darkgoldenrod: "b8860b",
		darkgray: "a9a9a9",
		darkgreen: "006400",
		darkkhaki: "bdb76b",
		darkmagenta: "8b008b",
		darkolivegreen: "556b2f",
		darkorange: "ff8c00",
		darkorchid: "9932cc",
		darkred: "8b0000",
		darksalmon: "e9967a",
		darkseagreen: "8fbc8f",
		darkslateblue: "483d8b",
		darkslategray: "2f4f4f",
		darkturquoise: "00ced1",
		darkviolet: "9400d3",
		deeppink: "ff1493",
		deepskyblue: "00bfff",
		dimgray: "696969",
		dodgerblue: "1e90ff",
		feldspar: "d19275",
		firebrick: "b22222",
		floralwhite: "fffaf0",
		forestgreen: "228b22",
		fuchsia: "ff00ff",
		gainsboro: "dcdcdc",
		ghostwhite: "f8f8ff",
		gold: "ffd700",
		goldenrod: "daa520",
		gray: "808080",
		green: "008000",
		greenyellow: "adff2f",
		honeydew: "f0fff0",
		hotpink: "ff69b4",
		indianred: "cd5c5c",
		indigo: "4b0082",
		ivory: "fffff0",
		khaki: "f0e68c",
		lavender: "e6e6fa",
		lavenderblush: "fff0f5",
		lawngreen: "7cfc00",
		lemonchiffon: "fffacd",
		lightblue: "add8e6",
		lightcoral: "f08080",
		lightcyan: "e0ffff",
		lightgoldenrodyellow: "fafad2",
		lightgrey: "d3d3d3",
		lightgreen: "90ee90",
		lightpink: "ffb6c1",
		lightsalmon: "ffa07a",
		lightseagreen: "20b2aa",
		lightskyblue: "87cefa",
		lightslateblue: "8470ff",
		lightslategray: "778899",
		lightsteelblue: "b0c4de",
		lightyellow: "ffffe0",
		lime: "00ff00",
		limegreen: "32cd32",
		linen: "faf0e6",
		magenta: "ff00ff",
		maroon: "800000",
		mediumaquamarine: "66cdaa",
		mediumblue: "0000cd",
		mediumorchid: "ba55d3",
		mediumpurple: "9370d8",
		mediumseagreen: "3cb371",
		mediumslateblue: "7b68ee",
		mediumspringgreen: "00fa9a",
		mediumturquoise: "48d1cc",
		mediumvioletred: "c71585",
		midnightblue: "191970",
		mintcream: "f5fffa",
		mistyrose: "ffe4e1",
		moccasin: "ffe4b5",
		navajowhite: "ffdead",
		navy: "000080",
		oldlace: "fdf5e6",
		olive: "808000",
		olivedrab: "6b8e23",
		orange: "ffa500",
		orangered: "ff4500",
		orchid: "da70d6",
		palegoldenrod: "eee8aa",
		palegreen: "98fb98",
		paleturquoise: "afeeee",
		palevioletred: "d87093",
		papayawhip: "ffefd5",
		peachpuff: "ffdab9",
		peru: "cd853f",
		pink: "ffc0cb",
		plum: "dda0dd",
		powderblue: "b0e0e6",
		purple: "800080",
		red: "ff0000",
		rosybrown: "bc8f8f",
		royalblue: "4169e1",
		saddlebrown: "8b4513",
		salmon: "fa8072",
		sandybrown: "f4a460",
		seagreen: "2e8b57",
		seashell: "fff5ee",
		sienna: "a0522d",
		silver: "c0c0c0",
		skyblue: "87ceeb",
		slateblue: "6a5acd",
		slategray: "708090",
		snow: "fffafa",
		springgreen: "00ff7f",
		steelblue: "4682b4",
		tan: "d2b48c",
		teal: "008080",
		thistle: "d8bfd8",
		tomato: "ff6347",
		turquoise: "40e0d0",
		violet: "ee82ee",
		violetred: "d02090",
		wheat: "f5deb3",
		white: "ffffff",
		whitesmoke: "f5f5f5",
		yellow: "ffff00",
		yellowgreen: "9acd32"
	};
	for (var n in t) e == n && (e = t[n]);
	for (var i = [{
		re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
		example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
		process: function(e) {
			return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])]
		}
	}, {
		re: /^(\w{2})(\w{2})(\w{2})$/,
		example: ["#00ff00", "336699"],
		process: function(e) {
			return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
		}
	}, {
		re: /^(\w{1})(\w{1})(\w{1})$/,
		example: ["#fb0", "f0f"],
		process: function(e) {
			return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
		}
	}], r = 0; i.length > r; r++) {
		var a = i[r].re,
			o = i[r].process,
			s = a.exec(e);
		s && (channels = o(s), this.r = channels[0], this.g = channels[1], this.b = channels[2], this.ok = !0)
	}
	this.r = 0 > this.r || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = 0 > this.g || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = 0 > this.b || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
		return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
	}, this.toHex = function() {
		var e = this.r.toString(16),
			t = this.g.toString(16),
			n = this.b.toString(16);
		return 1 == e.length && (e = "0" + e), 1 == t.length && (t = "0" + t), 1 == n.length && (n = "0" + n), "#" + e + t + n
	}, this.getHelpXML = function() {
		for (var e = [], n = 0; i.length > n; n++) for (var r = i[n].example, a = 0; r.length > a; a++) e[e.length] = r[a];
		for (var o in t) e[e.length] = o;
		var s = document.createElement("ul");
		s.setAttribute("id", "rgbcolor-examples");
		for (var n = 0; e.length > n; n++) try {
			var l = document.createElement("li"),
				u = new RGBColor(e[n]),
				c = document.createElement("div");
			c.style.cssText = "margin: 3px; border: 1px solid black; background:" + u.toHex() + "; " + "color:" + u.toHex(), c.appendChild(document.createTextNode("test"));
			var h = document.createTextNode(" " + e[n] + " -> " + u.toRGB() + " -> " + u.toHex());
			l.appendChild(c), l.appendChild(h), s.appendChild(l)
		} catch (d) {}
		return s
	}
}
window.CodeMirror = function() {
	"use strict";

	function e(o, u) {
		function c(e) {
			ii.onDragEvent && ii.onDragEvent(or, E(e)) || L(e)
		}
		function m(e) {
			return e >= 0 && Ti.size > e
		}
		function g(e) {
			return w(Ti, e)
		}
		function S(e, t) {
			Ri = !0;
			for (var n = t - e.height, i = e; i; i = i.parent) i.height += n
		}
		function M(e, t) {
			return e.styles || e.highlight(_i, e.stateAfter = Zn(x(e)), ii.tabSize), e.getContent(ii.tabSize, t, ii.lineWrapping)
		}
		function $(e) {
			var t = {
				line: 0,
				ch: 0
			};
			Nt(t, {
				line: Ti.size - 1,
				ch: g(Ti.size - 1).text.length
			}, Et(e), t, t), Oi = !0
		}
		function Q(e) {
			var t = [];
			return Ti.iter(0, Ti.size, function(e) {
				t.push(e.text)
			}), t.join(e || "\n")
		}
		function Y() {
			Math.abs(ui.scrollTop - qi) > 1 && (qi = wi.scrollTop = ui.scrollTop, tn([]))
		}
		function et() {
			ii.fixedGutter && yi.style.left != wi.scrollLeft + "px" && (yi.style.left = wi.scrollLeft + "px"), Math.abs(wi.scrollTop - qi) > 1 && (qi = wi.scrollTop, ui.scrollTop != qi && (ui.scrollTop = qi), tn([])), ii.onScroll && ii.onScroll(or)
		}
		function it(e) {
			function t(t) {
				ht && (wi.draggable = !1), Ni = !1, d(), p(), 10 > Math.abs(e.clientX - t.clientX) + Math.abs(e.clientY - t.clientY) && (T(t), hn(o.line, o.ch, !0), Xt())
			}
			function n(e) {
				if ("single" == l) return ln(pn(o), e), void 0;
				if (f = pn(f), m = pn(m), "double" == l) {
					var t = vn(e);
					q(e, f) ? ln(t.from, m) : ln(f, t.to)
				} else "triple" == l && (q(e, f) ? ln(m, pn({
					line: e.line,
					ch: 0
				})) : ln(f, pn({
					line: e.line + 1,
					ch: 0
				})))
			}
			function i(e) {
				var t = Fn(e, !0);
				if (t && !j(t, h)) {
					Ci || Pt(), h = t, n(t), Oi = !1;
					var r = en();
					(t.line >= r.to || t.line < r.from) && (c = setTimeout(ti(function() {
						i(e)
					}), 150))
				}
			}
			function r(e) {
				clearTimeout(c);
				var t = Fn(e);
				t && n(t), T(e), Xt(), Oi = !0, g(), d()
			}
			sn(N(e, "shiftKey"));
			for (var a = P(e); a != xi; a = a.parentNode) if (a.parentNode == bi && a != vi) return;
			for (var a = P(e); a != xi; a = a.parentNode) if (a.parentNode == gi) return ii.onGutterClick && ii.onGutterClick(or, X(gi.childNodes, a) + Qi, e), T(e);
			var o = Fn(e);
			switch (A(e)) {
				case 3:
					return ot && Gn(e), void 0;
				case 2:
					return o && hn(o.line, o.ch, !0), setTimeout(Xt, 20), T(e), void 0
			}
			if (!o) return P(e) == wi && T(e), void 0;
			Ci || Pt();
			var s = +new Date,
				l = "single";
			if (Ai && Ai.time > s - 400 && j(Ai.pos, o)) l = "triple", T(e), setTimeout(Xt, 20), bn(o.line);
			else if (Pi && Pi.time > s - 400 && j(Pi.pos, o)) {
				l = "double", Ai = {
					time: s,
					pos: o
				}, T(e);
				var u = vn(o);
				ln(u.from, u.to)
			} else Pi = {
				time: s,
				pos: o
			};
			var c, h = o;
			if (ii.dragDrop && kt && !ii.readOnly && !j(ji.from, ji.to) && !q(o, ji.from) && !q(ji.to, o) && "single" == l) {
				ht && (wi.draggable = !0);
				var d = O(document, "mouseup", ti(t), !0),
					p = O(wi, "drop", ti(t), !0);
				return Ni = !0, wi.dragDrop && wi.dragDrop(), void 0
			}
			T(e), "single" == l && hn(o.line, o.ch, !0);
			var f = ji.from,
				m = ji.to,
				g = O(document, "mousemove", ti(function(e) {
					clearTimeout(c), T(e), st || A(e) ? i(e) : r(e)
				}), !0),
				d = O(document, "mouseup", ti(r), !0)
		}
		function dt(e) {
			for (var t = P(e); t != xi; t = t.parentNode) if (t.parentNode == gi) return T(e);
			T(e)
		}
		function pt(e) {
			if (!ii.onDragEvent || !ii.onDragEvent(or, E(e))) {
				T(e);
				var t = Fn(e, !0),
					n = e.dataTransfer.files;
				if (t && !ii.readOnly) if (n && n.length && window.FileReader && window.File) for (var i = n.length, r = Array(i), a = 0, o = function(e, n) {
					var o = new FileReader;
					o.onload = function() {
						r[n] = o.result, ++a == i && (t = pn(t), ti(function() {
							var e = Vt(r.join(""), t, t);
							ln(t, e)
						})())
					}, o.readAsText(e)
				}, s = 0; i > s; ++s) o(n[s], s);
				else {
					if (Ni && !q(t, ji.from) && !q(ji.to, t)) return;
					try {
						var r = e.dataTransfer.getData("Text");
						r && ni(function() {
							var e = ji.from,
								n = ji.to;
							ln(t, t), Ni && Vt("", e, n), jt(r), Xt()
						})
					} catch (e) {}
				}
			}
		}
		function mt(e) {
			var t = Ut();
			e.dataTransfer.setData("Text", t), e.dataTransfer.setDragImage && e.dataTransfer.setDragImage(U("img"), 0, 0)
		}
		function vt(e, t) {
			if ("string" == typeof e && (e = rt[e], !e)) return !1;
			var n = Li;
			try {
				ii.readOnly && (Ui = !0), t && (Li = null), e(or)
			} catch (i) {
				if (i != xt) throw i;
				return !1
			} finally {
				Li = n, Ui = !1
			}
			return !0
		}
		function wt(e) {
			function r() {
				u = !0
			}
			var a = t(ii.keyMap),
				o = a.auto;
			clearTimeout(ar), o && !i(e) && (ar = setTimeout(function() {
				t(ii.keyMap) == a && (ii.keyMap = o.call ? o.call(null, or) : o)
			}, 50));
			var s = Mt[N(e, "keyCode")],
				l = !1;
			if (null == s || e.altGraphKey) return !1;
			N(e, "altKey") && (s = "Alt-" + s), N(e, bt ? "metaKey" : "ctrlKey") && (s = "Ctrl-" + s), N(e, bt ? "ctrlKey" : "metaKey") && (s = "Cmd-" + s);
			var u = !1;
			return l = N(e, "shiftKey") ? n("Shift-" + s, ii.extraKeys, ii.keyMap, function(e) {
				return vt(e, !0)
			}, r) || n(s, ii.extraKeys, ii.keyMap, function(e) {
				return "string" == typeof e && /^go[A-Z]/.test(e) ? vt(e) : void 0
			}, r) : n(s, ii.extraKeys, ii.keyMap, vt, r), u && (l = !1), l && (T(e), Qn(), ut && (e.oldKeyCode = e.keyCode, e.keyCode = 0)), l
		}
		function _t(e, t) {
			var i = n("'" + t + "'", ii.extraKeys, ii.keyMap, function(e) {
				return vt(e, !0)
			});
			return i && (T(e), Qn()), i
		}
		function Ct(e) {
			if (Ci || Pt(), st && 27 == e.keyCode && (e.returnValue = !1), Yi && Qt() && (Yi = !1), !ii.onKeyEvent || !ii.onKeyEvent(or, E(e))) {
				var t = N(e, "keyCode");
				sn(16 == t || N(e, "shiftKey"));
				var n = wt(e);
				ft && (sr = n ? t : null, !n && 88 == t && N(e, K ? "metaKey" : "ctrlKey") && jt(""))
			}
		}
		function St(e) {
			if (Yi && Qt(), !ii.onKeyEvent || !ii.onKeyEvent(or, E(e))) {
				var t = N(e, "keyCode"),
					n = N(e, "charCode");
				if (ft && t == sr) return sr = null, T(e), void 0;
				if (!(ft && (!e.which || 10 > e.which) || gt) || !wt(e)) {
					var i = String.fromCharCode(null == n ? t : n);
					ii.electricChars && _i.electricChars && ii.smartIndent && !ii.readOnly && _i.electricChars.indexOf(i) > -1 && setTimeout(ti(function() {
						xn(ji.to.line, "smart")
					}), 75), _t(e, i) || Gt()
				}
			}
		}
		function Lt(e) {
			ii.onKeyEvent && ii.onKeyEvent(or, E(e)) || 16 == N(e, "keyCode") && (Li = null)
		}
		function Pt() {
			"nocursor" != ii.readOnly && (Ci || (ii.onFocus && ii.onFocus(or), Ci = !0, -1 == wi.className.search(/\bCodeMirror-focused\b/) && (wi.className += " CodeMirror-focused")), Ft(), Qn())
		}
		function At() {
			Ci && (ii.onBlur && ii.onBlur(or), Ci = !1, Vi && ti(function() {
				Vi && (Vi(), Vi = null)
			})(), wi.className = wi.className.replace(" CodeMirror-focused", "")), clearInterval(ki), setTimeout(function() {
				Ci || (Li = null)
			}, 150)
		}
		function Nt(e, t, n, i, r) {
			if (!Ui) {
				var a = [];
				if (Ti.iter(e.line, t.line + 1, function(e) {
					a.push(f(e.text, e.markedSpans))
				}), tr) for (tr.addChange(e.line, n.length, a); tr.done.length > ii.undoDepth;) tr.done.shift();
				var o = h(p(a[0]), p(D(a)), e.ch, t.ch, n);
				It(e, t, o, i, r)
			}
		}
		function Ot(e, t) {
			if (e.length) {
				for (var n = e.pop(), i = [], r = n.length - 1; r >= 0; r -= 1) {
					var a = n[r],
						o = [],
						s = a.start + a.added;
					Ti.iter(a.start, s, function(e) {
						o.push(f(e.text, e.markedSpans))
					}), i.push({
						start: a.start,
						added: a.old.length,
						old: o
					});
					var l = {
						line: a.start + a.old.length - 1,
						ch: H(d(D(o)), d(D(a.old)))
					};
					It({
						line: a.start,
						ch: 0
					}, {
						line: s - 1,
						ch: g(s - 1).text.length
					}, a.old, l, l)
				}
				Oi = !0, t.push(i)
			}
		}
		function Bt() {
			Ot(tr.done, tr.undone)
		}
		function $t() {
			Ot(tr.undone, tr.done)
		}
		function It(e, t, n, i, r) {
			function a(e) {
				return Math.min(t.line, t.line + w) >= e ? e : e + w
			}
			if (!Ui) {
				var o = !1,
					s = Zi.text.length;
				ii.lineWrapping || Ti.iter(e.line, t.line + 1, function(e) {
					return e.hidden || e.text.length != s ? void 0 : (o = !0, !0)
				}), (e.line != t.line || n.length > 1) && (Ri = !0);
				var l = t.line - e.line,
					u = g(e.line),
					c = g(t.line),
					h = D(n);
				if (0 == e.ch && 0 == t.ch && "" == d(h)) {
					for (var f = [], m = 0, v = n.length - 1; v > m; ++m) f.push(new y(d(n[m]), p(n[m])));
					c.update(c.text, p(h)), l && Ti.remove(e.line, l, Di), f.length && Ti.insert(e.line, f)
				} else if (u == c) if (1 == n.length) u.update(u.text.slice(0, e.ch) + d(n[0]) + u.text.slice(t.ch), p(n[0]));
				else {
					for (var f = [], m = 1, v = n.length - 1; v > m; ++m) f.push(new y(d(n[m]), p(n[m])));
					f.push(new y(d(h) + u.text.slice(t.ch), p(h))), u.update(u.text.slice(0, e.ch) + d(n[0]), p(n[0])), Ti.insert(e.line + 1, f)
				} else if (1 == n.length) u.update(u.text.slice(0, e.ch) + d(n[0]) + c.text.slice(t.ch), p(n[0])), Ti.remove(e.line + 1, l, Di);
				else {
					var f = [];
					u.update(u.text.slice(0, e.ch) + d(n[0]), p(n[0])), c.update(d(h) + c.text.slice(t.ch), p(h));
					for (var m = 1, v = n.length - 1; v > m; ++m) f.push(new y(d(n[m]), p(n[m])));
					l > 1 && Ti.remove(e.line + 1, l - 1, Di), Ti.insert(e.line + 1, f)
				}
				if (ii.lineWrapping) {
					var b = Math.max(5, wi.clientWidth / qn() - 3);
					Ti.iter(e.line, e.line + n.length, function(e) {
						if (!e.hidden) {
							var t = Math.ceil(e.text.length / b) || 1;
							t != e.height && S(e, t)
						}
					})
				} else Ti.iter(e.line, e.line + n.length, function(e) {
					var t = e.text;
					!e.hidden && t.length > s && (Zi = e, s = t.length, Ki = !0, o = !1)
				}), o && (Ji = !0);
				Mi = Math.min(Mi, e.line), Kn(400);
				var w = n.length - l - 1;
				if ($i.push({
					from: e.line,
					to: t.line + 1,
					diff: w
				}), ii.onChange) {
					for (var m = 0; n.length > m; ++m) "string" != typeof n[m] && (n[m] = n[m].text);
					var x = {
						from: e,
						to: t,
						text: n
					};
					if (Ii) {
						for (var k = Ii; k.next; k = k.next);
						k.next = x
					} else Ii = x
				}
				un(pn(i), pn(r), a(ji.from.line), a(ji.to.line))
			}
		}
		function zt() {
			var e = Ti.height * jn() + 2 * Wn();
			return .99 * e > wi.offsetHeight ? e : !1
		}
		function Rt(e) {
			var t = zt();
			ui.style.display = t ? "block" : "none", t ? (li.style.height = bi.style.minHeight = t + "px", ui.style.height = wi.clientHeight + "px", null != e && (ui.scrollTop = wi.scrollTop = e, ht && setTimeout(function() {
				ui.scrollTop == e && (ui.scrollTop = e + (e ? -1 : 1), ui.scrollTop = e)
			}, 0))) : bi.style.minHeight = "", vi.style.top = Gi * jn() + "px"
		}
		function Dt() {
			Zi = g(0), Ki = !0;
			var e = Zi.text.length;
			Ti.iter(1, Ti.size, function(t) {
				var n = t.text;
				!t.hidden && n.length > e && (e = n.length, Zi = t)
			}), Ji = !1
		}
		function Vt(e, t, n) {
			function i(i) {
				if (q(i, t)) return i;
				if (!q(n, i)) return r;
				var a = i.line + e.length - (n.line - t.line) - 1,
					o = i.ch;
				return i.line == n.line && (o += D(e).length - (n.ch - (n.line == t.line ? t.ch : 0))), {
					line: a,
					ch: o
				}
			}
			t = pn(t), n = n ? pn(n) : t, e = Et(e);
			var r;
			return qt(e, t, n, function(e) {
				return r = e, {
					from: i(ji.from),
					to: i(ji.to)
				}
			}), r
		}
		function jt(e, t) {
			qt(Et(e), ji.from, ji.to, function(e) {
				return "end" == t ? {
					from: e,
					to: e
				} : "start" == t ? {
					from: ji.from,
					to: ji.from
				} : {
					from: ji.from,
					to: e
				}
			})
		}
		function qt(e, t, n, i) {
			var r = 1 == e.length ? e[0].length + t.ch : D(e).length,
				a = i({
					line: t.line + e.length - 1,
					ch: r
				});
			Nt(t, n, e, a.from, a.to)
		}
		function Wt(e, t, n) {
			var i = e.line,
				r = t.line;
			if (i == r) return g(i).text.slice(e.ch, t.ch);
			var a = [g(i).text.slice(e.ch)];
			return Ti.iter(i + 1, r, function(e) {
				a.push(e.text)
			}), a.push(g(r).text.slice(0, t.ch)), a.join(n || "\n")
		}
		function Ut(e) {
			return Wt(ji.from, ji.to, e)
		}
		function Ft() {
			Yi || Si.set(ii.pollInterval, function() {
				Qt(), Ci && Ft()
			})
		}
		function Gt() {
			function e() {
				var n = Qt();
				n || t ? (Yi = !1, Ft()) : (t = !0, Si.set(60, e))
			}
			var t = !1;
			Yi = !0, Si.set(20, e)
		}
		function Qt() {
			if (!Ci || Tt(oi) || ii.readOnly) return !1;
			var e = oi.value;
			if (e == lr) return !1;
			gr || Yn(), Li = null;
			for (var t = 0, n = Math.min(lr.length, e.length); n > t && lr[t] == e[t];)++t;
			return lr.length > t ? ji.from = {
				line: ji.from.line,
				ch: ji.from.ch - (lr.length - t)
			} : Wi && j(ji.from, ji.to) && !Fi && (ji.to = {
				line: ji.to.line,
				ch: Math.min(g(ji.to.line).text.length, ji.to.ch + (e.length - t))
			}), jt(e.slice(t), "end"), e.length > 1e3 ? oi.value = lr = "" : lr = e, gr || ei(), Fi = !1, !0
		}
		function Ht(e) {
			j(ji.from, ji.to) ? e && (lr = oi.value = "") : (lr = "", oi.value = Ut(), Ci && V(oi))
		}
		function Xt() {
			"nocursor" == ii.readOnly || !ut && document.activeElement == oi || oi.focus()
		}
		function Zt() {
			var e = Jt();
			if (Kt(e.x, e.y, e.x, e.yBot), Ci) {
				var t = bi.getBoundingClientRect(),
					n = null;
				if (0 > e.y + t.top ? n = !0 : e.y + t.top + jn() > (window.innerHeight || document.documentElement.clientHeight) && (n = !1), null != n) {
					var i = "none" == di.style.display;
					i && (di.style.display = "", di.style.left = e.x + "px", di.style.top = e.y - Gi + "px"), di.scrollIntoView(n), i && (di.style.display = "none")
				}
			}
		}
		function Jt() {
			var e = Rn(ji.inverted ? ji.from : ji.to),
				t = ii.lineWrapping ? Math.min(e.x, mi.offsetWidth) : e.x;
			return {
				x: t,
				y: e.y,
				yBot: e.yBot
			}
		}
		function Kt(e, t, n, i) {
			var r = Yt(e, t, n, i);
			null != r.scrollLeft && (wi.scrollLeft = r.scrollLeft), null != r.scrollTop && (ui.scrollTop = wi.scrollTop = r.scrollTop)
		}
		function Yt(e, t, n, i) {
			var r = Un(),
				a = Wn();
			t += a, i += a, e += r, n += r;
			var o = wi.clientHeight,
				s = ui.scrollTop,
				l = {}, u = zt() || 1 / 0,
				c = a + 10 > t,
				h = i + a > u - 10;
			s > t ? l.scrollTop = c ? 0 : Math.max(0, t) : i > s + o && (l.scrollTop = (h ? u : i) - o);
			var d = wi.clientWidth,
				p = wi.scrollLeft,
				f = ii.fixedGutter ? yi.clientWidth : 0,
				m = f + r + 10 > e;
			return p + f > e || m ? (m && (e = 0), l.scrollLeft = Math.max(0, e - 10 - f)) : n > d + p - 3 && (l.scrollLeft = n + 10 - d), l
		}
		function en(e) {
			var t = jn(),
				n = (null != e ? e : ui.scrollTop) - Wn(),
				i = Math.max(0, Math.floor(n / t)),
				r = Math.ceil((n + wi.clientHeight) / t);
			return {
				from: k(Ti, i),
				to: k(Ti, r)
			}
		}
		function tn(e, t, n) {
			function i() {
				var e = ci.firstChild,
					t = !1;
				return Ti.iter(Qi, Hi, function(n) {
					if (e) {
						if (!n.hidden) {
							var i = Math.round(e.offsetHeight / h) || 1;
							n.height != i && (S(n, i), Ri = t = !0)
						}
						e = e.nextSibling
					}
				}), t
			}
			if (!wi.clientWidth) return Qi = Hi = Gi = 0, void 0;
			var r = en(n);
			if (e !== !0 && 0 == e.length && r.from > Qi && Hi > r.to) return Rt(n), void 0;
			var a = Math.max(r.from - 100, 0),
				o = Math.min(Ti.size, r.to + 100);
			a > Qi && 20 > a - Qi && (a = Qi), Hi > o && 20 > Hi - o && (o = Math.min(Ti.size, Hi));
			for (var s = e === !0 ? [] : nn([{
				from: Qi,
				to: Hi,
				domStart: 0
			}], e), l = 0, u = 0; s.length > u; ++u) {
				var c = s[u];
				a > c.from && (c.domStart += a - c.from, c.from = a), c.to > o && (c.to = o), c.from >= c.to ? s.splice(u--, 1) : l += c.to - c.from
			}
			if (l == o - a && a == Qi && o == Hi) return Rt(n), void 0;
			s.sort(function(e, t) {
				return e.domStart - t.domStart
			});
			var h = jn(),
				d = yi.style.display;
			ci.style.display = "none", rn(a, o, s), ci.style.display = yi.style.display = "";
			var p = a != Qi || o != Hi || Xi != wi.clientHeight + h;
			if (p && (Xi = wi.clientHeight + h), (a != Qi || o != Hi && ii.onViewportChange) && setTimeout(function() {
				ii.onViewportChange && ii.onViewportChange(or, a, o)
			}), Qi = a, Hi = o, Gi = _(Ti, a), Kn(100), ci.childNodes.length != Hi - Qi) throw Error("BAD PATCH! " + JSON.stringify(s) + " size=" + (Hi - Qi) + " nodes=" + ci.childNodes.length);
			return ii.lineWrapping && i(), yi.style.display = d, (p || Ri) && an() && ii.lineWrapping && i() && an(), Rt(n), on(), !t && ii.onUpdate && ii.onUpdate(or), !0
		}
		function nn(e, t) {
			for (var n = 0, i = t.length || 0; i > n; ++n) {
				for (var r = t[n], a = [], o = r.diff || 0, s = 0, l = e.length; l > s; ++s) {
					var u = e[s];
					r.to <= u.from && r.diff ? a.push({
						from: u.from + o,
						to: u.to + o,
						domStart: u.domStart
					}) : r.to <= u.from || r.from >= u.to ? a.push(u) : (r.from > u.from && a.push({
						from: u.from,
						to: r.from,
						domStart: u.domStart
					}), r.to < u.to && a.push({
						from: r.to + o,
						to: u.to + o,
						domStart: u.domStart + (r.to - u.from)
					}))
				}
				e = a
			}
			return e
		}
		function rn(e, t, n) {
			function i(e) {
				var t = e.nextSibling;
				return e.parentNode.removeChild(e), t
			}
			if (n.length) {
				for (var r = 0, a = ci.firstChild, o = 0; n.length > o; ++o) {
					for (var s = n[o]; s.domStart > r;) a = i(a), r++;
					for (var l = 0, u = s.to - s.from; u > l; ++l) a = a.nextSibling, r++
				}
				for (; a;) a = i(a)
			} else F(ci);
			var c = n.shift(),
				a = ci.firstChild,
				l = e;
			Ti.iter(e, t, function(e) {
				if (c && c.to == l && (c = n.shift()), !c || c.from > l) {
					if (e.hidden) var t = U("pre");
					else {
						var t = M(e);
						if (e.className && (t.className = e.className), e.bgClassName) {
							var i = U("pre", "Â ", e.bgClassName, "position: absolute; left: 0; right: 0; top: 0; bottom: 0; z-index: -2");
							t = U("div", [i, t], null, "position: relative")
						}
					}
					ci.insertBefore(t, a)
				} else a = a.nextSibling;
				++l
			})
		}
		function an() {
			if (ii.gutter || ii.lineNumbers) {
				var e = vi.offsetHeight,
					t = wi.clientHeight;
				yi.style.height = (2 > e - t ? t : e) + "px";
				var n, i = document.createDocumentFragment(),
					r = Qi;
				if (Ti.iter(Qi, Math.max(Hi, Qi + 1), function(e) {
					if (e.hidden) i.appendChild(U("pre"));
					else {
						var t = e.gutterMarker,
							a = ii.lineNumbers ? ii.lineNumberFormatter(r + ii.firstLineNumber) : null;
						t && t.text ? a = t.text.replace("%N%", null != a ? a : "") : null == a && (a = "Â ");
						var o = i.appendChild(U("pre", null, t && t.style));
						o.innerHTML = a;
						for (var s = 1; e.height > s; ++s) o.appendChild(U("br")), o.appendChild(document.createTextNode("Â "));
						t || (n = r)
					}++r
				}), yi.style.display = "none", G(gi, i), null != n && ii.lineNumbers) {
					for (var a = gi.childNodes[n - Qi], o = (Ti.size + "").length, s = z(a.firstChild), l = ""; o > s.length + l.length;) l += "Â ";
					l && a.insertBefore(document.createTextNode(l), a.firstChild)
				}
				yi.style.display = "";
				var u = Math.abs((parseInt(mi.style.marginLeft) || 0) - yi.offsetWidth) > 2;
				return mi.style.marginLeft = yi.offsetWidth + "px", Ri = !1, u
			}
		}
		function on() {
			var e = j(ji.from, ji.to),
				t = Rn(ji.from, !0),
				n = e ? t : Rn(ji.to, !0),
				i = ji.inverted ? t : n,
				r = jn(),
				a = I(xi),
				o = I(ci);
			if (si.style.top = Math.max(0, Math.min(wi.offsetHeight, i.y + o.top - a.top)) + "px", si.style.left = Math.max(0, Math.min(wi.offsetWidth, i.x + o.left - a.left)) + "px", e || ii.showCursorWhenSelecting ? (di.style.top = i.y + "px", di.style.left = (ii.lineWrapping ? Math.min(i.x, mi.offsetWidth) : i.x) + "px", di.style.display = "") : di.style.display = "none", e) hi.style.display = "none";
			else {
				var s = t.y == n.y,
					l = document.createDocumentFragment(),
					u = mi.clientWidth || mi.offsetWidth,
					c = mi.clientHeight || mi.offsetHeight,
					h = function(e, t, n, i) {
						var r = ct ? "width: " + (n ? u - n - e : u) + "px" : "right: " + (n - 1) + "px";
						l.appendChild(U("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; " + r + "; height: " + i + "px"))
					};
				if (ji.from.ch && t.y >= 0) {
					var d = s ? u - n.x : 0;
					h(t.x, t.y, d, r)
				}
				var p = Math.max(0, t.y + (ji.from.ch ? r : 0)),
					f = Math.min(n.y, c) - p;
				f > .2 * r && h(0, p, 0, f), s && ji.from.ch || !(c - .5 * r > n.y) || h(0, n.y, u - n.x, r), G(hi, l), hi.style.display = ""
			}
		}
		function sn(e) {
			Li = e ? Li || (ji.inverted ? ji.to : ji.from) : null
		}
		function ln(e, t) {
			var n = Li && pn(Li);
			n && (q(n, e) ? e = n : q(t, n) && (t = n)), un(e, t), Bi = !0
		}
		function un(e, t, n, i) {
			if (er = null, null == n && (n = ji.from.line, i = ji.to.line), !j(ji.from, e) || !j(ji.to, t)) {
				if (q(t, e)) {
					var r = t;
					t = e, e = r
				}
				if (e.line != n) {
					var a = cn(e, n, ji.from.ch);
					a ? e = a : $n(e.line, !1)
				}
				if (t.line != i && (t = cn(t, i, ji.to.ch)), j(e, t) ? ji.inverted = !1 : j(e, ji.to) ? ji.inverted = !1 : j(t, ji.from) && (ji.inverted = !0), ii.autoClearEmptyLines && j(ji.from, ji.to)) {
					var o = ji.inverted ? e : t;
					if (o.line != ji.from.line && ji.from.line < Ti.size) {
						var s = g(ji.from.line);
						/^\s+$/.test(s.text) && setTimeout(ti(function() {
							if (s.parent && /^\s+$/.test(s.text)) {
								var e = x(s);
								Vt("", {
									line: e,
									ch: 0
								}, {
									line: e,
									ch: s.text.length
								})
							}
						}, 10))
					}
				}
				ji.from = e, ji.to = t, zi = !0
			}
		}
		function cn(e, t, n) {
			function i(t) {
				for (var i = e.line + t, r = 1 == t ? Ti.size : -1; i != r;) {
					var o = g(i);
					if (!o.hidden) {
						var s = e.ch;
						return (a || s > n || s > o.text.length) && (s = o.text.length), {
							line: i,
							ch: s
						}
					}
					i += t
				}
			}
			var r = g(e.line),
				a = e.ch == r.text.length && e.ch != n;
			return r.hidden ? e.line >= t ? i(1) || i(-1) : i(-1) || i(1) : e
		}
		function hn(e, t, n) {
			var i = pn({
				line: e,
				ch: t || 0
			});
			(n ? ln : un)(i, i)
		}
		function dn(e) {
			return Math.max(0, Math.min(e, Ti.size - 1))
		}
		function pn(e) {
			if (0 > e.line) return {
				line: 0,
				ch: 0
			};
			if (e.line >= Ti.size) return {
				line: Ti.size - 1,
				ch: g(Ti.size - 1).text.length
			};
			var t = e.ch,
				n = g(e.line).text.length;
			return null == t || t > n ? {
				line: e.line,
				ch: n
			} : 0 > t ? {
				line: e.line,
				ch: 0
			} : e
		}
		function fn(e, t) {
			function n() {
				for (var t = a + e, n = 0 > e ? -1 : Ti.size; t != n; t += e) {
					var i = g(t);
					if (!i.hidden) return a = t, s = i, !0
				}
			}
			function i(t) {
				if (o == (0 > e ? 0 : s.text.length)) {
					if (t || !n()) return !1;
					o = 0 > e ? s.text.length : 0
				} else o += e;
				return !0
			}
			var r = ji.inverted ? ji.from : ji.to,
				a = r.line,
				o = r.ch,
				s = g(a);
			if ("char" == t) i();
			else if ("column" == t) i(!0);
			else if ("word" == t) for (var l = !1; !(0 > e) || i();) {
				if (Z(s.text.charAt(o))) l = !0;
				else if (l) {
					0 > e && (e = 1, i());
					break
				}
				if (e > 0 && !i()) break
			}
			return {
				line: a,
				ch: o
			}
		}
		function mn(e, t) {
			var n = 0 > e ? ji.from : ji.to;
			(Li || j(ji.from, ji.to)) && (n = fn(e, t)), hn(n.line, n.ch, !0)
		}
		function gn(e, t) {
			j(ji.from, ji.to) ? 0 > e ? Vt("", fn(e, t), ji.to) : Vt("", ji.from, fn(e, t)) : Vt("", ji.from, ji.to), Bi = !0
		}
		function yn(e, t) {
			var n = Rn(ji.inverted ? ji.from : ji.to, !0);
			if (null != er && (n.x = er), "page" == t) var i = Math.min(wi.clientHeight, window.innerHeight || document.documentElement.clientHeight),
				r = Dn(n.x, n.y + i * e);
			else if ("line" == t) var a = jn(),
				r = Dn(n.x, n.y + .5 * a + e * a);
			"page" == t && (ui.scrollTop += Rn(r, !0).y - n.y), hn(r.line, r.ch, !0), er = n.x
		}
		function vn(e) {
			var t = g(e.line).text,
				n = e.ch,
				i = e.ch;
			if (t) {
				e.after === !1 || i == t.length ? --n : ++i;
				for (var r = t.charAt(n), a = Z(r) ? Z : /\s/.test(r) ? function(e) {
						return /\s/.test(e)
					} : function(e) {
						return !/\s/.test(e) && Z(e)
					}; n > 0 && a(t.charAt(n - 1));)--n;
				for (; t.length > i && a(t.charAt(i));)++i
			}
			return {
				from: {
					line: e.line,
					ch: n
				},
				to: {
					line: e.line,
					ch: i
				}
			}
		}
		function bn(e) {
			ln({
				line: e,
				ch: 0
			}, pn({
				line: e + 1,
				ch: 0
			}))
		}
		function wn(e) {
			if (j(ji.from, ji.to)) return xn(ji.from.line, e);
			for (var t = ji.to.line - (ji.to.ch ? 0 : 1), n = ji.from.line; t >= n; ++n) xn(n, e)
		}
		function xn(e, t) {
			if (t || (t = "add"), "smart" == t) if (_i.indent) var n = Zn(e);
			else t = "prev";
			var i, r = g(e),
				a = r.indentation(ii.tabSize),
				o = r.text.match(/^\s*/)[0];
			"smart" == t && (i = _i.indent(n, r.text.slice(o.length), r.text), i == xt && (t = "prev")), "prev" == t ? i = e ? g(e - 1).indentation(ii.tabSize) : 0 : "add" == t ? i = a + ii.indentUnit : "subtract" == t && (i = a - ii.indentUnit), i = Math.max(0, i);
			var s = "",
				l = 0;
			if (ii.indentWithTabs) for (var u = Math.floor(i / ii.tabSize); u; --u) l += ii.tabSize, s += "	";
			i > l && (s += R(i - l)), s != o && Vt(s, {
				line: e,
				ch: 0
			}, {
				line: e,
				ch: o.length
			}), r.stateAfter = null
		}
		function kn() {
			_i = e.getMode(ii, ii.mode), Ti.iter(0, Ti.size, function(e) {
				e.stateAfter = null
			}), Mi = 0, Kn(100)
		}
		function _n() {
			var e = ii.gutter || ii.lineNumbers;
			yi.style.display = e ? "" : "none", e ? Ri = !0 : ci.parentNode.style.marginLeft = 0
		}
		function Cn() {
			if (ii.lineWrapping) {
				xi.className += " CodeMirror-wrap";
				var e = wi.clientWidth / qn() - 3;
				Ti.iter(0, Ti.size, function(t) {
					if (!t.hidden) {
						var n = Math.ceil(t.text.length / e) || 1;
						1 != n && S(t, n)
					}
				}), mi.style.minWidth = pi.style.left = ""
			} else xi.className = xi.className.replace(" CodeMirror-wrap", ""), Dt(), Ti.iter(0, Ti.size, function(e) {
				1 == e.height || e.hidden || S(e, 1)
			});
			$i.push({
				from: 0,
				to: Ti.size
			})
		}
		function Sn() {
			wi.className = wi.className.replace(/\s*cm-s-\S+/g, "") + ii.theme.replace(/(^|\s)\s*/g, " cm-s-")
		}
		function En() {
			var e = at[ii.keyMap].style;
			xi.className = xi.className.replace(/\s*cm-keymap-\S+/g, "") + (e ? " cm-keymap-" + e : "")
		}
		function Tn(e, t) {
			this.lines = [], this.type = e, t && (this.style = t)
		}
		function Mn(e, t, n, i) {
			e = pn(e), t = pn(t);
			var r = new Tn("range", n);
			if (i) for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a]);
			var o = e.line;
			return Ti.iter(o, t.line + 1, function(n) {
				var i = {
					from: o == e.line ? e.ch : null,
					to: o == t.line ? t.ch : null,
					marker: r
				};
				n.markedSpans = (n.markedSpans || []).concat([i]), r.lines.push(n), ++o
			}), $i.push({
				from: e.line,
				to: t.line + 1
			}), r
		}
		function Ln(e) {
			e = pn(e);
			var t = new Tn("bookmark"),
				n = g(e.line);
			tr.addChange(e.line, 1, [f(n.text, n.markedSpans)], !0);
			var i = {
				from: e.ch,
				to: e.ch,
				marker: t
			};
			return n.markedSpans = (n.markedSpans || []).concat([i]), t.lines.push(n), t
		}
		function Pn(e) {
			e = pn(e);
			var t = [],
				n = g(e.line).markedSpans;
			if (n) for (var i = 0; n.length > i; ++i) {
				var r = n[i];
				(null == r.from || r.from <= e.ch) && (null == r.to || r.to >= e.ch) && t.push(r.marker)
			}
			return t
		}
		function An(e, t, n) {
			return "number" == typeof e && (e = g(dn(e))), e.gutterMarker = {
				text: t,
				style: n
			}, Ri = !0, e
		}
		function Nn(e) {
			"number" == typeof e && (e = g(dn(e))), e.gutterMarker = null, Ri = !0
		}
		function On(e, t) {
			var n = e,
				i = e;
			return "number" == typeof e ? i = g(dn(e)) : n = x(e), null == n ? null : t(i, n) ? ($i.push({
				from: n,
				to: n + 1
			}), i) : null
		}
		function Bn(e, t, n) {
			return On(e, function(e) {
				return e.className != t || e.bgClassName != n ? (e.className = t, e.bgClassName = n, !0) : void 0
			})
		}
		function $n(e, t) {
			return On(e, function(e, n) {
				if (e.hidden != t) {
					e.hidden = t, ii.lineWrapping || (t && e.text.length == Zi.text.length ? Ji = !0 : !t && e.text.length > Zi.text.length && (Zi = e, Ji = !1)), S(e, t ? 0 : 1);
					var i = ji.from.line,
						r = ji.to.line;
					if (t && (i == n || r == n)) {
						var a = i == n ? cn({
							line: i,
							ch: 0
						}, i, 0) : ji.from,
							o = r == n ? cn({
								line: r,
								ch: 0
							}, r, 0) : ji.to;
						if (!o) return;
						un(a, o)
					}
					return Ri = !0
				}
			})
		}
		function In(e) {
			if ("number" == typeof e) {
				if (!m(e)) return null;
				var t = e;
				if (e = g(e), !e) return null
			} else {
				var t = x(e);
				if (null == t) return null
			}
			var n = e.gutterMarker;
			return {
				line: t,
				handle: e,
				text: e.text,
				markerText: n && n.text,
				markerClass: n && n.style,
				lineClass: e.className,
				bgClass: e.bgClassName
			}
		}
		function zn(e, t) {
			if (0 == t) return {
				top: 0,
				left: 0
			};
			var n = M(e, t);
			G(fi, n);
			var i = n.anchor,
				r = i.offsetTop,
				a = i.offsetLeft;
			if (st && 0 == r && 0 == a) {
				var o = U("span", "x");
				i.parentNode.insertBefore(o, i.nextSibling), r = o.offsetTop
			}
			return {
				top: r,
				left: a
			}
		}
		function Rn(e, t) {
			var n, i = jn(),
				r = i * (_(Ti, e.line) - (t ? Gi : 0));
			if (0 == e.ch) n = 0;
			else {
				var a = zn(g(e.line), e.ch);
				n = a.left, ii.lineWrapping && (r += Math.max(0, a.top))
			}
			return {
				x: n,
				y: r,
				yBot: r + i
			}
		}
		function Dn(e, t) {
			function n(e) {
				var t = zn(s, e);
				if (u) {
					var n = Math.round(t.top / i);
					return d = n != c, Math.max(0, t.left + (n - c) * wi.clientWidth)
				}
				return t.left
			}
			var i = jn(),
				r = qn(),
				a = Gi + Math.floor(t / i);
			if (0 > a) return {
				line: 0,
				ch: 0
			};
			var o = k(Ti, a);
			if (o >= Ti.size) return {
				line: Ti.size - 1,
				ch: g(Ti.size - 1).text.length
			};
			var s = g(o),
				l = s.text,
				u = ii.lineWrapping,
				c = u ? a - _(Ti, o) : 0;
			if (0 >= e && 0 == c) return {
				line: o,
				ch: 0
			};
			for (var h, d = !1, p = 0, f = 0, m = l.length, y = Math.min(m, Math.ceil((e + .9 * c * wi.clientWidth) / r));;) {
				var v = n(y);
				if (!(e >= v && m > y)) {
					h = v, m = y;
					break
				}
				y = Math.min(m, Math.ceil(1.2 * y))
			}
			if (e > h) return {
				line: o,
				ch: m
			};
			for (y = Math.floor(.8 * m), v = n(y), e > v && (p = y, f = v);;) {
				if (1 >= m - p) {
					var b = h - e > e - f;
					return {
						line: o,
						ch: b ? p : m,
						after: b
					}
				}
				var w = Math.ceil((p + m) / 2),
					x = n(w);
				x > e ? (m = w, h = x, d && (h += 1e3)) : (p = w, f = x)
			}
		}
		function Vn(e) {
			var t = Rn(e, !0),
				n = I(mi);
			return {
				x: n.left + t.x,
				y: n.top + t.y,
				yBot: n.top + t.yBot
			}
		}
		function jn() {
			if (null == hr) {
				hr = U("pre");
				for (var e = 0; 49 > e; ++e) hr.appendChild(document.createTextNode("x")), hr.appendChild(U("br"));
				hr.appendChild(document.createTextNode("x"))
			}
			var t = ci.clientHeight;
			return t == cr ? ur : (cr = t, G(fi, hr.cloneNode(!0)), ur = fi.firstChild.offsetHeight / 50 || 1, F(fi), ur)
		}
		function qn() {
			if (wi.clientWidth == fr) return dr;
			fr = wi.clientWidth;
			var e = U("span", "x"),
				t = U("pre", [e]);
			return G(fi, t), dr = e.offsetWidth || 10
		}
		function Wn() {
			return mi.offsetTop
		}
		function Un() {
			return mi.offsetLeft
		}
		function Fn(e, t) {
			var n, i, r = I(wi, !0);
			try {
				n = e.clientX, i = e.clientY
			} catch (e) {
				return null
			}
			if (!t && (n - r.left > wi.clientWidth || i - r.top > wi.clientHeight)) return null;
			var a = I(mi, !0);
			return Dn(n - a.left, i - a.top)
		}
		function Gn(e) {
			function t() {
				if (si.style.position = "relative", oi.style.cssText = r, ut && (ui.scrollTop = i), Ft(), null != oi.selectionStart) {
					clearTimeout(pr);
					var e = oi.value = " " + (j(ji.from, ji.to) ? "" : oi.value),
						t = 0;
					lr = " ", oi.selectionStart = 1, oi.selectionEnd = e.length, pr = setTimeout(function n() {
						" " == lr && 0 == oi.selectionStart ? ti(rt.selectAll)(or) : 10 > t++ ? pr = setTimeout(n, 500) : Ht()
					}, 200)
				}
			}
			var n = Fn(e),
				i = ui.scrollTop;
			if (n && !ft) {
				(j(ji.from, ji.to) || q(n, ji.from) || !q(n, ji.to)) && ti(hn)(n.line, n.ch);
				var r = oi.style.cssText;
				if (si.style.position = "absolute", oi.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) + "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: white; " + "border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", Xt(), Ht(!0), j(ji.from, ji.to) && (oi.value = lr = " "), ot) {
					L(e);
					var a = O(window, "mouseup", function() {
						a(), setTimeout(t, 20)
					}, !0)
				} else setTimeout(t, 50)
			}
		}
		function Qn() {
			clearInterval(ki);
			var e = !0;
			di.style.visibility = "", ki = setInterval(function() {
				di.style.visibility = (e = !e) ? "" : "hidden"
			}, ii.cursorBlinkRate)
		}
		function Hn(e) {
			function t(e, t, n) {
				if (e.text) for (var i, r = e.styles, a = o ? 0 : e.text.length - 1, l = o ? 0 : r.length - 2, u = o ? r.length : -2; l != u; l += 2 * s) {
					var c = r[l];
					if (r[l + 1] == d) {
						for (var h = o ? 0 : c.length - 1, m = o ? c.length : -1; h != m; h += s, a += s) if (a >= t && n > a && f.test(i = c.charAt(h))) {
							var g = mr[i];
							if (">" == g.charAt(1) == o) p.push(i);
							else {
								if (p.pop() != g.charAt(0)) return {
									pos: a,
									match: !1
								};
								if (!p.length) return {
									pos: a,
									match: !0
								}
							}
						}
					} else a += s * c.length
				}
			}
			var n = ji.inverted ? ji.from : ji.to,
				i = g(n.line),
				r = n.ch - 1,
				a = r >= 0 && mr[i.text.charAt(r)] || mr[i.text.charAt(++r)];
			if (a) {
				for (var o = (a.charAt(0), ">" == a.charAt(1)), s = o ? 1 : -1, l = i.styles, u = r + 1, c = 0, h = l.length; h > c; c += 2) if (0 >= (u -= l[c].length)) {
					var d = l[c + 1];
					break
				}
				for (var p = [i.text.charAt(r)], f = /[(){}[\]]/, c = n.line, h = o ? Math.min(c + 100, Ti.size) : Math.max(-1, c - 100); c != h; c += s) {
					var i = g(c),
						m = c == n.line,
						y = t(i, m && o ? r + 1 : 0, m && !o ? r : i.text.length);
					if (y) break
				}
				y || (y = {
					pos: null,
					match: !1
				});
				var d = y.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket",
					v = Mn({
						line: n.line,
						ch: r
					}, {
						line: n.line,
						ch: r + 1
					}, d),
					b = null != y.pos && Mn({
						line: c,
						ch: y.pos
					}, {
						line: c,
						ch: y.pos + 1
					}, d),
					w = ti(function() {
						v.clear(), b && b.clear()
					});
				e ? setTimeout(w, 800) : Vi = w
			}
		}
		function Xn(e) {
			for (var t, n, i = e, r = e - 40; i > r; --i) {
				if (0 == i) return 0;
				var a = g(i - 1);
				if (a.stateAfter) return i;
				var o = a.indentation(ii.tabSize);
				(null == n || t > o) && (n = i - 1, t = o)
			}
			return n
		}
		function Zn(e) {
			var t = Xn(e),
				n = t && g(t - 1).stateAfter;
			return n = n ? r(_i, n) : a(_i), Ti.iter(t, e, function(i) {
				i.process(_i, n, ii.tabSize), i.stateAfter = t == e - 1 || 0 == t % 5 ? r(_i, n) : null
			}), n
		}
		function Jn() {
			if (!(Mi >= Hi)) {
				var e = +new Date + ii.workTime,
					t = r(_i, Zn(Mi)),
					n = Mi;
				Ti.iter(Mi, Hi, function(n) {
					return Mi >= Qi ? (n.highlight(_i, t, ii.tabSize), n.stateAfter = r(_i, t)) : (n.process(_i, t, ii.tabSize), n.stateAfter = 0 == Mi % 5 ? r(_i, t) : null), ++Mi, +new Date > e ? (Kn(ii.workDelay), !0) : void 0
				}), Hi > n && Mi >= Qi && ti(function() {
					$i.push({
						from: n,
						to: Mi
					})
				})()
			}
		}
		function Kn(e) {
			Hi > Mi && Ei.set(e, Jn)
		}
		function Yn() {
			Oi = Bi = Ii = null, $i = [], zi = !1, Di = []
		}
		function ei() {
			if (Ji && Dt(), Ki && !ii.lineWrapping) {
				var e = pi.offsetWidth,
					t = zn(Zi, Zi.text.length).left;
				lt || (pi.style.left = t + "px", mi.style.minWidth = t + e + "px"), Ki = !1
			}
			var n, i;
			if (zi) {
				var r = Jt();
				n = Yt(r.x, r.y, r.x, r.yBot)
			}($i.length || n && null != n.scrollTop) && (i = tn($i, !0, n && n.scrollTop)), i || (zi && on(), Ri && an()), n && Zt(), zi && Qn(), Ci && (Oi === !0 || Oi !== !1 && zi) && Ht(Bi), zi && ii.matchBrackets && setTimeout(ti(function() {
				Vi && (Vi(), Vi = null), j(ji.from, ji.to) && Hn(!1)
			}), 20);
			var a = zi,
				o = Di;
			Ii && ii.onChange && or && ii.onChange(or, Ii), a && ii.onCursorActivity && ii.onCursorActivity(or);
			for (var s = 0; o.length > s; ++s) o[s](or);
			i && ii.onUpdate && ii.onUpdate(or)
		}
		function ti(e) {
			return function() {
				gr++ || Yn();
				try {
					var t = e.apply(this, arguments)
				} finally {
					--gr || ei()
				}
				return t
			}
		}
		function ni(e) {
			tr.startCompound();
			try {
				return e()
			} finally {
				tr.endCompound()
			}
		}
		var ii = {}, ri = e.defaults;
		for (var ai in ri) ri.hasOwnProperty(ai) && (ii[ai] = (u && u.hasOwnProperty(ai) ? u : ri)[ai]);
		var oi = U("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em");
		oi.setAttribute("wrap", "off"), oi.setAttribute("autocorrect", "off"), oi.setAttribute("autocapitalize", "off");
		var si = U("div", [oi], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"),
			li = U("div", null, "CodeMirror-scrollbar-inner"),
			ui = U("div", [li], "CodeMirror-scrollbar"),
			ci = U("div"),
			hi = U("div", null, null, "position: relative; z-index: -1"),
			di = U("pre", "Â ", "CodeMirror-cursor"),
			pi = U("pre", "Â ", "CodeMirror-cursor", "visibility: hidden"),
			fi = U("div", null, null, "position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden;"),
			mi = U("div", [fi, di, pi, hi, ci], null, "position: relative; z-index: 0"),
			gi = U("div", null, "CodeMirror-gutter-text"),
			yi = U("div", [gi], "CodeMirror-gutter"),
			vi = U("div", [yi, U("div", [mi], "CodeMirror-lines")], null, "position: relative"),
			bi = U("div", [vi], null, "position: relative"),
			wi = U("div", [bi], "CodeMirror-scroll");
		wi.setAttribute("tabIndex", "-1");
		var xi = U("div", [si, ui, wi], "CodeMirror" + (ii.lineWrapping ? " CodeMirror-wrap" : ""));
		o.appendChild ? o.appendChild(xi) : o(xi), Sn(), En(), J && (oi.style.width = "0px"), ht || (wi.draggable = !0), mi.style.outline = "none", null != ii.tabindex && (oi.tabIndex = ii.tabindex), ii.autofocus && Xt(), ii.gutter || ii.lineNumbers || (yi.style.display = "none"), gt && (si.style.height = "1px", si.style.position = "absolute"), yt ? (ui.style.zIndex = -2, ui.style.visibility = "hidden") : lt && (ui.style.minWidth = "18px");
		var ki, _i, Ci, Si = new B,
			Ei = new B,
			Ti = new b([new v([new y("")])]),
			Mi = 0;
		kn();
		var Li, Pi, Ai, Ni, Oi, Bi, $i, Ii, zi, Ri, Di, Vi, ji = {
			from: {
				line: 0,
				ch: 0
			},
			to: {
				line: 0,
				ch: 0
			},
			inverted: !1
		}, qi = 0,
			Wi = !1,
			Ui = !1,
			Fi = !1,
			Gi = 0,
			Qi = 0,
			Hi = 0,
			Xi = 0,
			Zi = g(0),
			Ji = !1,
			Ki = !0,
			Yi = !1,
			er = null;
		ti(function() {
			$(ii.value || ""), Oi = !1
		})();
		var tr = new C;
		O(wi, "mousedown", ti(it)), O(wi, "dblclick", ti(dt)), O(mi, "selectstart", T), ot || O(wi, "contextmenu", Gn), O(wi, "scroll", et), O(ui, "scroll", Y), O(ui, "mousedown", function() {
			Ci && setTimeout(Xt, 0)
		});
		var nr = O(window, "resize", function() {
			xi.parentNode ? tn(!0) : nr()
		}, !0);
		O(oi, "keyup", ti(Lt)), O(oi, "input", Gt), O(oi, "keydown", ti(Ct)), O(oi, "keypress", ti(St)), O(oi, "focus", Pt), O(oi, "blur", At), ii.dragDrop && (O(wi, "dragstart", mt), O(wi, "dragenter", c), O(wi, "dragover", c), O(wi, "drop", ti(pt))), O(wi, "paste", function() {
			Xt(), Gt()
		}), O(oi, "paste", function() {
			Fi = !0, Gt()
		}), O(oi, "cut", ti(function() {
			ii.readOnly || jt("")
		})), gt && O(bi, "mouseup", function() {
			document.activeElement == oi && oi.blur(), Xt()
		});
		var ir;
		try {
			ir = document.activeElement == oi
		} catch (rr) {}
		ir || ii.autofocus ? setTimeout(Pt, 20) : At();
		var ar, or = xi.CodeMirror = {
			getValue: Q,
			setValue: ti($),
			getSelection: Ut,
			replaceSelection: ti(jt),
			focus: function() {
				window.focus(), Xt(), Pt(), Gt()
			},
			setOption: function(e, t) {
				var n = ii[e];
				ii[e] = t, "mode" == e || "indentUnit" == e ? kn() : "readOnly" == e && "nocursor" == t ? (At(), oi.blur()) : "readOnly" != e || t ? "theme" == e ? Sn() : "lineWrapping" == e && n != t ? ti(Cn)() : "tabSize" == e ? tn(!0) : "keyMap" == e ? En() : "tabindex" == e ? oi.tabIndex = t : "showCursorWhenSelecting" == e && on() : Ht(!0), ("lineNumbers" == e || "gutter" == e || "firstLineNumber" == e || "theme" == e || "lineNumberFormatter" == e) && (_n(), tn(!0))
			},
			getOption: function(e) {
				return ii[e]
			},
			getMode: function() {
				return _i
			},
			undo: ti(Bt),
			redo: ti($t),
			indentLine: ti(function(e, t) {
				"string" != typeof t && (t = null == t ? ii.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), m(e) && xn(e, t)
			}),
			indentSelection: ti(wn),
			historySize: function() {
				return {
					undo: tr.done.length,
					redo: tr.undone.length
				}
			},
			clearHistory: function() {
				tr = new C
			},
			setHistory: function(e) {
				tr = new C, tr.done = e.done, tr.undone = e.undone
			},
			getHistory: function() {
				function e(e) {
					for (var t, n = 0, i = []; e.length > n; ++n) {
						i.push(t = []);
						for (var r = 0, a = e[n]; a.length > r; ++r) {
							var o = [],
								s = a[r];
							t.push({
								start: s.start,
								added: s.added,
								old: o
							});
							for (var l = 0; s.old.length > l; ++l) o.push(d(s.old[l]))
						}
					}
					return i
				}
				return {
					done: e(tr.done),
					undone: e(tr.undone)
				}
			},
			matchBrackets: ti(function() {
				Hn(!0)
			}),
			getTokenAt: ti(function(e) {
				return e = pn(e), g(e.line).getTokenAt(_i, Zn(e.line), ii.tabSize, e.ch)
			}),
			getStateAfter: function(e) {
				return e = dn(null == e ? Ti.size - 1 : e), Zn(e + 1)
			},
			cursorCoords: function(e, t) {
				return null == e && (e = ji.inverted), this.charCoords(e ? ji.from : ji.to, t)
			},
			charCoords: function(e, t) {
				return e = pn(e), "local" == t ? Rn(e, !1) : "div" == t ? Rn(e, !0) : Vn(e)
			},
			coordsChar: function(e) {
				var t = I(mi);
				return Dn(e.x - t.left, e.y - t.top)
			},
			defaultTextHeight: function() {
				return jn()
			},
			markText: ti(Mn),
			setBookmark: Ln,
			findMarksAt: Pn,
			setMarker: ti(An),
			clearMarker: ti(Nn),
			setLineClass: ti(Bn),
			hideLine: ti(function(e) {
				return $n(e, !0)
			}),
			showLine: ti(function(e) {
				return $n(e, !1)
			}),
			onDeleteLine: function(e, t) {
				if ("number" == typeof e) {
					if (!m(e)) return null;
					e = g(e)
				}
				return (e.handlers || (e.handlers = [])).push(t), e
			},
			lineInfo: In,
			getViewport: function() {
				return {
					from: Qi,
					to: Hi
				}
			},
			addWidget: function(e, t, n, i, r) {
				e = Rn(pn(e));
				var a = e.yBot,
					o = e.x;
				if (t.style.position = "absolute", bi.appendChild(t), "over" == i) a = e.y;
				else if ("near" == i) {
					var s = Math.max(wi.offsetHeight, Ti.height * jn()),
						l = Math.max(bi.clientWidth, mi.clientWidth) - Un();
					e.yBot + t.offsetHeight > s && e.y > t.offsetHeight && (a = e.y - t.offsetHeight), o + t.offsetWidth > l && (o = l - t.offsetWidth)
				}
				t.style.top = a + Wn() + "px", t.style.left = t.style.right = "", "right" == r ? (o = bi.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == r ? o = 0 : "middle" == r && (o = (bi.clientWidth - t.offsetWidth) / 2), t.style.left = o + Un() + "px"), n && Kt(o, a, o + t.offsetWidth, a + t.offsetHeight)
			},
			lineCount: function() {
				return Ti.size
			},
			clipPos: pn,
			getCursor: function(e) {
				return (null == e || "head" == e) && (e = ji.inverted), "anchor" == e && (e = !ji.inverted), "end" == e && (e = !1), W(e ? ji.from : ji.to)
			},
			somethingSelected: function() {
				return !j(ji.from, ji.to)
			},
			setCursor: ti(function(e, t, n) {
				null == t && "number" == typeof e.line ? hn(e.line, e.ch, n) : hn(e, t, n)
			}),
			setSelection: ti(function(e, t, n) {
				(n ? ln : un)(pn(e), pn(t || e))
			}),
			getLine: function(e) {
				return m(e) ? g(e).text : void 0
			},
			getLineHandle: function(e) {
				return m(e) ? g(e) : void 0
			},
			setLine: ti(function(e, t) {
				m(e) && Vt(t, {
					line: e,
					ch: 0
				}, {
					line: e,
					ch: g(e).text.length
				})
			}),
			removeLine: ti(function(e) {
				m(e) && Vt("", {
					line: e,
					ch: 0
				}, pn({
					line: e + 1,
					ch: 0
				}))
			}),
			replaceRange: ti(Vt),
			getRange: function(e, t, n) {
				return Wt(pn(e), pn(t), n)
			},
			triggerOnKeyDown: ti(Ct),
			execCommand: function(e) {
				return rt[e](or)
			},
			moveH: ti(mn),
			deleteH: ti(gn),
			moveV: ti(yn),
			toggleOverwrite: function() {
				Wi ? (Wi = !1, di.className = di.className.replace(" CodeMirror-overwrite", "")) : (Wi = !0, di.className += " CodeMirror-overwrite")
			},
			posFromIndex: function(e) {
				var t, n = 0;
				return Ti.iter(0, Ti.size, function(i) {
					var r = i.text.length + 1;
					return r > e ? (t = e, !0) : (e -= r, ++n, void 0)
				}), pn({
					line: n,
					ch: t
				})
			},
			indexFromPos: function(e) {
				if (0 > e.line || 0 > e.ch) return 0;
				var t = e.ch;
				return Ti.iter(0, e.line, function(e) {
					t += e.text.length + 1
				}), t
			},
			scrollTo: function(e, t) {
				null != e && (wi.scrollLeft = e), null != t && (ui.scrollTop = wi.scrollTop = t), tn([])
			},
			getScrollInfo: function() {
				return {
					x: wi.scrollLeft,
					y: ui.scrollTop,
					height: ui.scrollHeight,
					width: wi.scrollWidth
				}
			},
			scrollIntoView: function(e) {
				var t = Rn(e ? pn(e) : ji.inverted ? ji.from : ji.to);
				Kt(t.x, t.y, t.x, t.yBot)
			},
			setSize: function(e, t) {
				function n(e) {
					return e += "", /^\d+$/.test(e) ? e + "px" : e
				}
				null != e && (xi.style.width = n(e)), null != t && (wi.style.height = n(t)), or.refresh()
			},
			operation: function(e) {
				return ti(e)()
			},
			compoundChange: function(e) {
				return ni(e)
			},
			refresh: function() {
				tn(!0, null, qi), ui.scrollHeight > qi && (ui.scrollTop = qi)
			},
			getInputField: function() {
				return oi
			},
			getWrapperElement: function() {
				return xi
			},
			getScrollerElement: function() {
				return wi
			},
			getGutterElement: function() {
				return yi
			}
		}, sr = null,
			lr = "";
		Tn.prototype.clear = ti(function() {
			for (var e, t, n = 0; this.lines.length > n; ++n) {
				var i = this.lines[n],
					r = s(i.markedSpans, this);
				null != r.from && (e = x(i)), null != r.to && (t = x(i)), i.markedSpans = l(i.markedSpans, r)
			}
			null != e && $i.push({
				from: e,
				to: t + 1
			}), this.lines.length = 0, this.explicitlyCleared = !0
		}), Tn.prototype.find = function() {
			for (var e, t, n = 0; this.lines.length > n; ++n) {
				var i = this.lines[n],
					r = s(i.markedSpans, this);
				if (null != r.from || null != r.to) {
					var a = x(i);
					null != r.from && (e = {
						line: a,
						ch: r.from
					}), null != r.to && (t = {
						line: a,
						ch: r.to
					})
				}
			}
			return "bookmark" == this.type ? e : e && {
				from: e,
				to: t
			}
		};
		var ur, cr, hr, dr, pr, fr = 0,
			mr = {
				"(": ")>",
				")": "(<",
				"[": "]>",
				"]": "[<",
				"{": "}>",
				"}": "{<"
			}, gr = 0;
		for (var yr in tt) tt.propertyIsEnumerable(yr) && !or.propertyIsEnumerable(yr) && (or[yr] = tt[yr]);
		for (var vr = 0; nt.length > vr; ++vr) nt[vr](or);
		return or
	}
	function t(e) {
		return "string" == typeof e ? at[e] : e
	}
	function n(e, n, i, r, a) {
		function o(n) {
			n = t(n);
			var i = n[e];
			if (i === !1) return a && a(), !0;
			if (null != i && r(i)) return !0;
			if (n.nofallthrough) return a && a(), !0;
			var s = n.fallthrough;
			if (null == s) return !1;
			if ("[object Array]" != Object.prototype.toString.call(s)) return o(s);
			for (var l = 0, u = s.length; u > l; ++l) if (o(s[l])) return !0;
			return !1
		}
		return n && o(n) ? !0 : o(i)
	}
	function i(e) {
		var t = Mt[N(e, "keyCode")];
		return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
	}
	function r(e, t) {
		if (t === !0) return t;
		if (e.copyState) return e.copyState(t);
		var n = {};
		for (var i in t) {
			var r = t[i];
			r instanceof Array && (r = r.concat([])), n[i] = r
		}
		return n
	}
	function a(e, t, n) {
		return e.startState ? e.startState(t, n) : !0
	}
	function o(e, t) {
		this.pos = this.start = 0, this.string = e, this.tabSize = t || 8
	}
	function s(e, t) {
		if (e) for (var n = 0; e.length > n; ++n) {
			var i = e[n];
			if (i.marker == t) return i
		}
	}
	function l(e, t) {
		for (var n, i = 0; e.length > i; ++i) e[i] != t && (n || (n = [])).push(e[i]);
		return n
	}
	function u(e, t, n) {
		if (e) for (var i, r = 0; e.length > r; ++r) {
			var a = e[r],
				o = a.marker,
				s = null == a.from || (o.inclusiveLeft ? t >= a.from : t > a.from);
			if (s || "bookmark" == o.type && a.from == t && a.from != n) {
				var l = null == a.to || (o.inclusiveRight ? a.to >= t : a.to > t);
				(i || (i = [])).push({
					from: a.from,
					to: l ? null : a.to,
					marker: o
				})
			}
		}
		return i
	}
	function c(e, t) {
		if (e) for (var n, i = 0; e.length > i; ++i) {
			var r = e[i],
				a = r.marker,
				o = null == r.to || (a.inclusiveRight ? r.to >= t : r.to > t);
			if (o || "bookmark" == a.type && r.from == t) {
				var s = null == r.from || (a.inclusiveLeft ? t >= r.from : t > r.from);
				(n || (n = [])).push({
					from: s ? null : r.from - t,
					to: null == r.to ? null : r.to - t,
					marker: a
				})
			}
		}
		return n
	}
	function h(e, t, n, i, r) {
		if (!e && !t) return r;
		var a = u(e, n),
			o = c(t, i),
			l = 1 == r.length,
			h = D(r).length + (l ? n : 0);
		if (a) for (var d = 0; a.length > d; ++d) {
			var p = a[d];
			if (null == p.to) {
				var m = s(o, p.marker);
				m ? l && (p.to = null == m.to ? null : m.to + h) : p.to = n
			}
		}
		if (o) for (var d = 0; o.length > d; ++d) {
			var p = o[d];
			if (null != p.to && (p.to += h), null == p.from) {
				var m = s(a, p.marker);
				m || (p.from = h, l && (a || (a = [])).push(p))
			} else p.from += h, l && (a || (a = [])).push(p)
		}
		var g = [f(r[0], a)];
		if (!l) {
			var y, v = r.length - 2;
			if (v > 0 && a) for (var d = 0; a.length > d; ++d) null == a[d].to && (y || (y = [])).push({
				from: null,
				to: null,
				marker: a[d].marker
			});
			for (var d = 0; v > d; ++d) g.push(f(r[d + 1], y));
			g.push(f(D(r), o))
		}
		return g
	}
	function d(e) {
		return "string" == typeof e ? e : e.text
	}
	function p(e) {
		if ("string" == typeof e) return null;
		for (var t = e.markedSpans, n = null, i = 0; t.length > i; ++i) t[i].marker.explicitlyCleared ? n || (n = t.slice(0, i)) : n && n.push(t[i]);
		return n ? n.length ? n : null : t
	}
	function f(e, t) {
		return t ? {
			text: e,
			markedSpans: t
		} : e
	}
	function m(e) {
		var t = e.markedSpans;
		if (t) {
			for (var n = 0; t.length > n; ++n) {
				var i = t[n].marker.lines,
					r = X(i, e);
				i.splice(r, 1)
			}
			e.markedSpans = null
		}
	}
	function g(e, t) {
		if (t) {
			for (var n = 0; t.length > n; ++n) t[n].marker.lines.push(e);
			e.markedSpans = t
		}
	}
	function y(e, t) {
		this.text = e, this.height = 1, g(this, t)
	}
	function v(e) {
		this.lines = e, this.parent = null;
		for (var t = 0, n = e.length, i = 0; n > t; ++t) e[t].parent = this, i += e[t].height;
		this.height = i
	}
	function b(e) {
		this.children = e;
		for (var t = 0, n = 0, i = 0, r = e.length; r > i; ++i) {
			var a = e[i];
			t += a.chunkSize(), n += a.height, a.parent = this
		}
		this.size = t, this.height = n, this.parent = null
	}
	function w(e, t) {
		for (; !e.lines;) for (var n = 0;; ++n) {
			var i = e.children[n],
				r = i.chunkSize();
			if (r > t) {
				e = i;
				break
			}
			t -= r
		}
		return e.lines[t]
	}
	function x(e) {
		if (null == e.parent) return null;
		for (var t = e.parent, n = X(t.lines, e), i = t.parent; i; t = i, i = i.parent) for (var r = 0; i.children[r] != t; ++r) n += i.children[r].chunkSize();
		return n
	}
	function k(e, t) {
		var n = 0;
		e: do {
			for (var i = 0, r = e.children.length; r > i; ++i) {
				var a = e.children[i],
					o = a.height;
				if (o > t) {
					e = a;
					continue e
				}
				t -= o, n += a.chunkSize()
			}
			return n
		} while (!e.lines);
		for (var i = 0, r = e.lines.length; r > i; ++i) {
			var s = e.lines[i],
				l = s.height;
			if (l > t) break;
			t -= l
		}
		return n + i
	}
	function _(e, t) {
		var n = 0;
		e: do {
			for (var i = 0, r = e.children.length; r > i; ++i) {
				var a = e.children[i],
					o = a.chunkSize();
				if (o > t) {
					e = a;
					continue e
				}
				t -= o, n += a.height
			}
			return n
		} while (!e.lines);
		for (var i = 0; t > i; ++i) n += e.lines[i].height;
		return n
	}
	function C() {
		this.time = 0, this.done = [], this.undone = [], this.compound = 0, this.closed = !1
	}
	function S() {
		L(this)
	}
	function E(e) {
		return e.stop || (e.stop = S), e
	}
	function T(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = !1
	}
	function M(e) {
		e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
	}
	function L(e) {
		T(e), M(e)
	}
	function P(e) {
		return e.target || e.srcElement
	}
	function A(e) {
		var t = e.which;
		return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), K && e.ctrlKey && 1 == t && (t = 3), t
	}
	function N(e, t) {
		var n = e.override && e.override.hasOwnProperty(t);
		return n ? e.override[t] : e[t]
	}
	function O(e, t, n, i) {
		if ("function" == typeof e.addEventListener) {
			if (e.addEventListener(t, n, !1), i) return function() {
				e.removeEventListener(t, n, !1)
			}
		} else {
			var r = function(e) {
				n(e || window.event)
			};
			if (e.attachEvent("on" + t, r), i) return function() {
				e.detachEvent("on" + t, r)
			}
		}
	}
	function B() {
		this.id = null
	}
	function $(e, t, n) {
		null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));
		for (var i = 0, r = 0; t > i; ++i) "	" == e.charAt(i) ? r += n - r % n : ++r;
		return r
	}
	function I(e, t) {
		try {
			var n = e.getBoundingClientRect();
			n = {
				top: n.top,
				left: n.left
			}
		} catch (i) {
			n = {
				top: 0,
				left: 0
			}
		}
		if (!t) if (null == window.pageYOffset) {
			var r = document.documentElement || document.body.parentNode;
			null == r.scrollTop && (r = document.body), n.top += r.scrollTop, n.left += r.scrollLeft
		} else n.top += window.pageYOffset, n.left += window.pageXOffset;
		return n
	}
	function z(e) {
		return e.textContent || e.innerText || e.nodeValue || ""
	}
	function R(e) {
		for (; e >= Ct.length;) Ct.push(D(Ct) + " ");
		return Ct[e]
	}
	function D(e) {
		return e[e.length - 1]
	}
	function V(e) {
		J ? (e.selectionStart = 0, e.selectionEnd = e.value.length) : e.select()
	}
	function j(e, t) {
		return e.line == t.line && e.ch == t.ch
	}
	function q(e, t) {
		return e.line < t.line || e.line == t.line && e.ch < t.ch
	}
	function W(e) {
		return {
			line: e.line,
			ch: e.ch
		}
	}
	function U(e, t, n, i) {
		var r = document.createElement(e);
		if (n && (r.className = n), i && (r.style.cssText = i), "string" == typeof t) Q(r, t);
		else if (t) for (var a = 0; t.length > a; ++a) r.appendChild(t[a]);
		return r
	}
	function F(e) {
		return e.innerHTML = "", e
	}
	function G(e, t) {
		F(e).appendChild(t)
	}
	function Q(e, t) {
		ut ? (e.innerHTML = "", e.appendChild(document.createTextNode(t))) : e.textContent = t
	}
	function H(e, t) {
		if (!t) return 0;
		if (!e) return t.length;
		for (var n = e.length, i = t.length; n >= 0 && i >= 0 && e.charAt(n) == t.charAt(i); --n, --i);
		return i + 1
	}
	function X(e, t) {
		if (e.indexOf) return e.indexOf(t);
		for (var n = 0, i = e.length; i > n; ++n) if (e[n] == t) return n;
		return -1
	}
	function Z(e) {
		return /\w/.test(e) || e > "Â€" && (e.toUpperCase() != e.toLowerCase() || St.test(e))
	}
	e.defaults = {
		value: "",
		mode: null,
		theme: "default",
		indentUnit: 2,
		indentWithTabs: !1,
		smartIndent: !0,
		tabSize: 4,
		keyMap: "default",
		extraKeys: null,
		electricChars: !0,
		autoClearEmptyLines: !1,
		onKeyEvent: null,
		onDragEvent: null,
		lineWrapping: !1,
		lineNumbers: !1,
		gutter: !1,
		fixedGutter: !1,
		firstLineNumber: 1,
		showCursorWhenSelecting: !1,
		readOnly: !1,
		dragDrop: !0,
		onChange: null,
		onCursorActivity: null,
		onViewportChange: null,
		onGutterClick: null,
		onUpdate: null,
		onFocus: null,
		onBlur: null,
		onScroll: null,
		matchBrackets: !1,
		cursorBlinkRate: 530,
		workTime: 100,
		workDelay: 200,
		pollInterval: 100,
		undoDepth: 40,
		tabindex: null,
		autofocus: null,
		lineNumberFormatter: function(e) {
			return e
		}
	};
	var J = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent),
		K = J || /Mac/.test(navigator.platform);
	/Win/.test(navigator.platform);
	var Y = e.modes = {}, et = e.mimeModes = {};
	e.defineMode = function(t, n) {
		if (e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2) {
			n.dependencies = [];
			for (var i = 2; arguments.length > i; ++i) n.dependencies.push(arguments[i])
		}
		Y[t] = n
	}, e.defineMIME = function(e, t) {
		et[e] = t
	}, e.resolveMode = function(t) {
		if ("string" == typeof t && et.hasOwnProperty(t)) t = et[t];
		else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml");
		return "string" == typeof t ? {
			name: t
		} : t || {
			name: "null"
		}
	}, e.getMode = function(t, n) {
		var n = e.resolveMode(n),
			i = Y[n.name];
		if (!i) return e.getMode(t, "text/plain");
		var r = i(t, n);
		if (it.hasOwnProperty(n.name)) {
			var a = it[n.name];
			for (var o in a) a.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = a[o])
		}
		return r.name = n.name, r
	}, e.listModes = function() {
		var e = [];
		for (var t in Y) Y.propertyIsEnumerable(t) && e.push(t);
		return e
	}, e.listMIMEs = function() {
		var e = [];
		for (var t in et) et.propertyIsEnumerable(t) && e.push({
			mime: t,
			mode: et[t]
		});
		return e
	};
	var tt = e.extensions = {};
	e.defineExtension = function(e, t) {
		tt[e] = t
	};
	var nt = [];
	e.defineInitHook = function(e) {
		nt.push(e)
	};
	var it = e.modeExtensions = {};
	e.extendMode = function(e, t) {
		var n = it.hasOwnProperty(e) ? it[e] : it[e] = {};
		for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
	};
	var rt = e.commands = {
		selectAll: function(e) {
			e.setSelection({
				line: 0,
				ch: 0
			}, {
				line: e.lineCount() - 1
			})
		},
		killLine: function(e) {
			var t = e.getCursor(!0),
				n = e.getCursor(!1),
				i = !j(t, n);
			i || e.getLine(t.line).length != t.ch ? e.replaceRange("", t, i ? n : {
				line: t.line
			}) : e.replaceRange("", t, {
				line: t.line + 1,
				ch: 0
			})
		},
		deleteLine: function(e) {
			var t = e.getCursor().line;
			e.replaceRange("", {
				line: t,
				ch: 0
			}, {
				line: t
			})
		},
		undo: function(e) {
			e.undo()
		},
		redo: function(e) {
			e.redo()
		},
		goDocStart: function(e) {
			e.setCursor(0, 0, !0)
		},
		goDocEnd: function(e) {
			e.setSelection({
				line: e.lineCount() - 1
			}, null, !0)
		},
		goLineStart: function(e) {
			e.setCursor(e.getCursor().line, 0, !0)
		},
		goLineStartSmart: function(e) {
			var t = e.getCursor(),
				n = e.getLine(t.line),
				i = Math.max(0, n.search(/\S/));
			e.setCursor(t.line, i >= t.ch && t.ch ? 0 : i, !0)
		},
		goLineEnd: function(e) {
			e.setSelection({
				line: e.getCursor().line
			}, null, !0)
		},
		goLineUp: function(e) {
			e.moveV(-1, "line")
		},
		goLineDown: function(e) {
			e.moveV(1, "line")
		},
		goPageUp: function(e) {
			e.moveV(-1, "page")
		},
		goPageDown: function(e) {
			e.moveV(1, "page")
		},
		goCharLeft: function(e) {
			e.moveH(-1, "char")
		},
		goCharRight: function(e) {
			e.moveH(1, "char")
		},
		goColumnLeft: function(e) {
			e.moveH(-1, "column")
		},
		goColumnRight: function(e) {
			e.moveH(1, "column")
		},
		goWordLeft: function(e) {
			e.moveH(-1, "word")
		},
		goWordRight: function(e) {
			e.moveH(1, "word")
		},
		delCharLeft: function(e) {
			e.deleteH(-1, "char")
		},
		delCharRight: function(e) {
			e.deleteH(1, "char")
		},
		delWordLeft: function(e) {
			e.deleteH(-1, "word")
		},
		delWordRight: function(e) {
			e.deleteH(1, "word")
		},
		indentAuto: function(e) {
			e.indentSelection("smart")
		},
		indentMore: function(e) {
			e.indentSelection("add")
		},
		indentLess: function(e) {
			e.indentSelection("subtract")
		},
		insertTab: function(e) {
			e.replaceSelection("	", "end")
		},
		defaultTab: function(e) {
			e.somethingSelected() ? e.indentSelection("add") : e.replaceSelection("	", "end")
		},
		transposeChars: function(e) {
			var t = e.getCursor(),
				n = e.getLine(t.line);
			t.ch > 0 && t.ch < n.length - 1 && e.replaceRange(n.charAt(t.ch) + n.charAt(t.ch - 1), {
				line: t.line,
				ch: t.ch - 1
			}, {
				line: t.line,
				ch: t.ch + 1
			})
		},
		newlineAndIndent: function(e) {
			e.replaceSelection("\n", "end"), e.indentLine(e.getCursor().line)
		},
		toggleOverwrite: function(e) {
			e.toggleOverwrite()
		}
	}, at = e.keyMap = {};
	at.basic = {
		Left: "goCharLeft",
		Right: "goCharRight",
		Up: "goLineUp",
		Down: "goLineDown",
		End: "goLineEnd",
		Home: "goLineStartSmart",
		PageUp: "goPageUp",
		PageDown: "goPageDown",
		Delete: "delCharRight",
		Backspace: "delCharLeft",
		Tab: "defaultTab",
		"Shift-Tab": "indentAuto",
		Enter: "newlineAndIndent",
		Insert: "toggleOverwrite"
	}, at.pcDefault = {
		"Ctrl-A": "selectAll",
		"Ctrl-D": "deleteLine",
		"Ctrl-Z": "undo",
		"Shift-Ctrl-Z": "redo",
		"Ctrl-Y": "redo",
		"Ctrl-Home": "goDocStart",
		"Alt-Up": "goDocStart",
		"Ctrl-End": "goDocEnd",
		"Ctrl-Down": "goDocEnd",
		"Ctrl-Left": "goWordLeft",
		"Ctrl-Right": "goWordRight",
		"Alt-Left": "goLineStart",
		"Alt-Right": "goLineEnd",
		"Ctrl-Backspace": "delWordLeft",
		"Ctrl-Delete": "delWordRight",
		"Ctrl-S": "save",
		"Ctrl-F": "find",
		"Ctrl-G": "findNext",
		"Shift-Ctrl-G": "findPrev",
		"Shift-Ctrl-F": "replace",
		"Shift-Ctrl-R": "replaceAll",
		"Ctrl-[": "indentLess",
		"Ctrl-]": "indentMore",
		fallthrough: "basic"
	}, at.macDefault = {
		"Cmd-A": "selectAll",
		"Cmd-D": "deleteLine",
		"Cmd-Z": "undo",
		"Shift-Cmd-Z": "redo",
		"Cmd-Y": "redo",
		"Cmd-Up": "goDocStart",
		"Cmd-End": "goDocEnd",
		"Cmd-Down": "goDocEnd",
		"Alt-Left": "goWordLeft",
		"Alt-Right": "goWordRight",
		"Cmd-Left": "goLineStart",
		"Cmd-Right": "goLineEnd",
		"Alt-Backspace": "delWordLeft",
		"Ctrl-Alt-Backspace": "delWordRight",
		"Alt-Delete": "delWordRight",
		"Cmd-S": "save",
		"Cmd-F": "find",
		"Cmd-G": "findNext",
		"Shift-Cmd-G": "findPrev",
		"Cmd-Alt-F": "replace",
		"Shift-Cmd-Alt-F": "replaceAll",
		"Cmd-[": "indentLess",
		"Cmd-]": "indentMore",
		fallthrough: ["basic", "emacsy"]
	}, at["default"] = K ? at.macDefault : at.pcDefault, at.emacsy = {
		"Ctrl-F": "goCharRight",
		"Ctrl-B": "goCharLeft",
		"Ctrl-P": "goLineUp",
		"Ctrl-N": "goLineDown",
		"Alt-F": "goWordRight",
		"Alt-B": "goWordLeft",
		"Ctrl-A": "goLineStart",
		"Ctrl-E": "goLineEnd",
		"Ctrl-V": "goPageDown",
		"Shift-Ctrl-V": "goPageUp",
		"Ctrl-D": "delCharRight",
		"Ctrl-H": "delCharLeft",
		"Alt-D": "delWordRight",
		"Alt-Backspace": "delWordLeft",
		"Ctrl-K": "killLine",
		"Ctrl-T": "transposeChars"
	}, e.isModifierKey = i, e.fromTextArea = function(t, n) {
		function i() {
			t.value = c.getValue()
		}
		if (n || (n = {}), n.value = t.value, !n.tabindex && t.tabindex && (n.tabindex = t.tabindex), null == n.autofocus) {
			var r = document.body;
			try {
				r = document.activeElement
			} catch (a) {}
			n.autofocus = r == t || null != t.getAttribute("autofocus") && r == document.body
		}
		if (t.form) {
			var o = O(t.form, "submit", i, !0),
				s = t.form,
				l = s.submit;
			t.form.submit = function u() {
				i(), s.submit = l, s.submit(), s.submit = u
			}
		}
		t.style.display = "none";
		var c = e(function(e) {
			t.parentNode.insertBefore(e, t.nextSibling)
		}, n);
		return c.save = i, c.getTextArea = function() {
			return t
		}, c.toTextArea = function() {
			i(), t.parentNode.removeChild(c.getWrapperElement()), t.style.display = "", t.form && (o(), "function" == typeof t.form.submit && (t.form.submit = l))
		}, c
	};
	var ot = /gecko\/\d/i.test(navigator.userAgent),
		st = /MSIE \d/.test(navigator.userAgent),
		lt = /MSIE [1-7]\b/.test(navigator.userAgent),
		ut = /MSIE [1-8]\b/.test(navigator.userAgent),
		ct = st && 5 == document.documentMode,
		ht = /WebKit\//.test(navigator.userAgent),
		dt = ht && /Qt\/\d+\.\d+/.test(navigator.userAgent),
		pt = /Chrome\//.test(navigator.userAgent),
		ft = /Opera\//.test(navigator.userAgent),
		mt = /Apple Computer/.test(navigator.vendor),
		gt = /KHTML\//.test(navigator.userAgent),
		yt = /Mac OS X 10\D([7-9]|\d\d)\D/.test(navigator.userAgent),
		vt = ft && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
	vt && (vt = Number(vt[1]));
	var bt = K && (dt || ft && (null == vt || 12.11 > vt));
	e.copyState = r, e.startState = a, e.innerMode = function(e, t) {
		for (; e.innerMode;) {
			var n = e.innerMode(t);
			t = n.state, e = n.mode
		}
		return n || {
			mode: e,
			state: t
		}
	}, o.prototype = {
		eol: function() {
			return this.pos >= this.string.length
		},
		sol: function() {
			return 0 == this.pos
		},
		peek: function() {
			return this.string.charAt(this.pos) || void 0
		},
		next: function() {
			return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
		},
		eat: function(e) {
			var t = this.string.charAt(this.pos);
			if ("string" == typeof e) var n = t == e;
			else var n = t && (e.test ? e.test(t) : e(t));
			return n ? (++this.pos, t) : void 0
		},
		eatWhile: function(e) {
			for (var t = this.pos; this.eat(e););
			return this.pos > t
		},
		eatSpace: function() {
			for (var e = this.pos;
			/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
			return this.pos > e
		},
		skipToEnd: function() {
			this.pos = this.string.length
		},
		skipTo: function(e) {
			var t = this.string.indexOf(e, this.pos);
			return t > -1 ? (this.pos = t, !0) : void 0
		},
		backUp: function(e) {
			this.pos -= e
		},
		column: function() {
			return $(this.string, this.start, this.tabSize)
		},
		indentation: function() {
			return $(this.string, null, this.tabSize)
		},
		match: function(e, t, n) {
			if ("string" != typeof e) {
				var i = this.string.slice(this.pos).match(e);
				return i && i.index > 0 ? null : (i && t !== !1 && (this.pos += i[0].length), i)
			}
			var r = function(e) {
				return n ? e.toLowerCase() : e
			};
			return r(this.string).indexOf(r(e), this.pos) == this.pos ? (t !== !1 && (this.pos += e.length), !0) : void 0
		},
		current: function() {
			return this.string.slice(this.start, this.pos)
		}
	}, e.StringStream = o;
	var wt = " ";
	ot || st && !lt ? wt = "â€‹" : ft && (wt = ""), y.prototype = {
		update: function(e, t) {
			this.text = e, this.stateAfter = this.styles = null, m(this), g(this, t)
		},
		highlight: function(e, t, n) {
			var i = new o(this.text, n),
				r = this.styles || (this.styles = []),
				a = r.length = 0;
			for ("" == this.text && e.blankLine && e.blankLine(t); !i.eol();) {
				var s = e.token(i, t),
					l = i.current();
				if (i.start = i.pos, a && r[a - 1] == s ? r[a - 2] += l : l && (r[a++] = l, r[a++] = s), i.pos > 5e3) {
					r[a++] = this.text.slice(i.pos), r[a++] = null;
					break
				}
			}
		},
		process: function(e, t, n) {
			var i = new o(this.text, n);
			for ("" == this.text && e.blankLine && e.blankLine(t); !i.eol() && 5e3 >= i.pos;) e.token(i, t), i.start = i.pos
		},
		getTokenAt: function(e, t, n, i) {
			for (var r = this.text, a = new o(r, n); i > a.pos && !a.eol();) {
				a.start = a.pos;
				var s = e.token(a, t)
			}
			return {
				start: a.start,
				end: a.pos,
				string: a.current(),
				className: s || null,
				state: t
			}
		},
		indentation: function(e) {
			return $(this.text, null, e)
		},
		getContent: function(e, t, n) {
			function i(t, n, i) {
				if (n) {
					if (a && st && " " == n.charAt(0) && (n = "Â " + n.slice(1)), a = !1, s.test(n)) for (var r = document.createDocumentFragment(), l = 0;;) {
						s.lastIndex = l;
						var u = s.exec(n),
							c = u ? u.index - l : n.length - l;
						if (c && (r.appendChild(document.createTextNode(n.slice(l, l + c))), o += c), !u) break;
						if (l += c + 1, "	" == u[0]) {
							var h = e - o % e;
							r.appendChild(U("span", R(h), "cm-tab")), o += h
						} else {
							var d = U("span", "â€¢", "cm-invalidchar");
							d.title = "\\u" + u[0].charCodeAt(0).toString(16), r.appendChild(d), o += 1
						}
					} else {
						o += n.length;
						var r = document.createTextNode(n)
					}
					i ? t.appendChild(U("span", [r], i)) : t.appendChild(r)
				}
			}
			function r(e) {
				return e ? "cm-" + e.replace(/ +/g, " cm-") : null
			}
			var a = !0,
				o = 0,
				s = /[\t\u0000-\u0019\u200b\u2028\u2029\uFEFF]/g,
				l = U("pre"),
				u = i;
			if (null != t) {
				var c = 0,
					h = l.anchor = U("span");
				u = function(e, r, a) {
					var o = r.length;
					if (t >= c && c + o > t) {
						var s = t - c;
						if (s && (i(e, r.slice(0, s), a), n)) {
							var l = r.slice(s - 1, s + 1);
							_t.test(l) ? e.appendChild(U("wbr")) : !lt && /\w\w/.test(l) && e.appendChild(document.createTextNode("â€"))
						}
						e.appendChild(h), i(h, ft ? r.slice(s, s + 1) : r.slice(s), a), ft && i(e, r.slice(s + 1), a), t--, c += o
					} else c += o, i(e, r, a), c == t && c == m ? (Q(h, wt), e.appendChild(h)) : c > t + 10 && /\s/.test(r) && (u = function() {})
				}
			}
			var d = this.styles,
				p = this.text,
				f = this.markedSpans,
				m = p.length;
			if (p || null != t) if (f && f.length) {
				f.sort(function(e, t) {
					return e.from - t.from
				});
				for (var g, y = 0, v = 0, b = "", w = f[0].from || 0, x = [], k = 0, _ = function() {
					for (var e; f.length > k && ((e = f[k]).from == y || null == e.from);) "range" == e.marker.type && x.push(e), ++k;
					w = f.length > k ? f[k].from : 1 / 0;
					for (var t = 0; x.length > t; ++t) {
						var n = x[t].to;
						null == n && (n = 1 / 0), n == y ? x.splice(t--, 1) : w = Math.min(n, w)
					}
				}; m > y;) {
					w == y && _();
					for (var C = Math.min(m, w);;) {
						if (b) {
							for (var S = y + b.length, E = g, T = 0; x.length > T; ++T) {
								var M = x[T];
								E = (E ? E + " " : "") + M.marker.style, M.marker.endStyle && M.to === Math.min(S, C) && (E += " " + M.marker.endStyle), M.marker.startStyle && M.from === y && (E += " " + M.marker.startStyle)
							}
							if (u(l, S > C ? b.slice(0, C - y) : b, E), S >= C) {
								b = b.slice(C - y), y = C;
								break
							}
							y = S
						}
						b = d[v++], g = r(d[v++])
					}
				}
			} else for (var v = 0, L = 0; m > L; v += 2) {
				var P = d[v],
					g = d[v + 1],
					A = P.length;
				L + A > m && (P = P.slice(0, m - L)), L += A, u(l, P, r(g))
			} else u(l, " ");
			return l
		},
		cleanUp: function() {
			this.parent = null, m(this)
		}
	}, v.prototype = {
		chunkSize: function() {
			return this.lines.length
		},
		remove: function(e, t, n) {
			for (var i = e, r = e + t; r > i; ++i) {
				var a = this.lines[i];
				if (this.height -= a.height, a.cleanUp(), a.handlers) for (var o = 0; a.handlers.length > o; ++o) n.push(a.handlers[o])
			}
			this.lines.splice(e, t)
		},
		collapse: function(e) {
			e.splice.apply(e, [e.length, 0].concat(this.lines))
		},
		insertHeight: function(e, t, n) {
			this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
			for (var i = 0, r = t.length; r > i; ++i) t[i].parent = this
		},
		iterN: function(e, t, n) {
			for (var i = e + t; i > e; ++e) if (n(this.lines[e])) return !0
		}
	}, b.prototype = {
		chunkSize: function() {
			return this.size
		},
		remove: function(e, t, n) {
			this.size -= t;
			for (var i = 0; this.children.length > i; ++i) {
				var r = this.children[i],
					a = r.chunkSize();
				if (a > e) {
					var o = Math.min(t, a - e),
						s = r.height;
					if (r.remove(e, o, n), this.height -= s - r.height, a == o && (this.children.splice(i--, 1), r.parent = null), 0 == (t -= o)) break;
					e = 0
				} else e -= a
			}
			if (25 > this.size - t) {
				var l = [];
				this.collapse(l), this.children = [new v(l)], this.children[0].parent = this
			}
		},
		collapse: function(e) {
			for (var t = 0, n = this.children.length; n > t; ++t) this.children[t].collapse(e)
		},
		insert: function(e, t) {
			for (var n = 0, i = 0, r = t.length; r > i; ++i) n += t[i].height;
			this.insertHeight(e, t, n)
		},
		insertHeight: function(e, t, n) {
			this.size += t.length, this.height += n;
			for (var i = 0, r = this.children.length; r > i; ++i) {
				var a = this.children[i],
					o = a.chunkSize();
				if (o >= e) {
					if (a.insertHeight(e, t, n), a.lines && a.lines.length > 50) {
						for (; a.lines.length > 50;) {
							var s = a.lines.splice(a.lines.length - 25, 25),
								l = new v(s);
							a.height -= l.height, this.children.splice(i + 1, 0, l), l.parent = this
						}
						this.maybeSpill()
					}
					break
				}
				e -= o
			}
		},
		maybeSpill: function() {
			if (!(10 >= this.children.length)) {
				var e = this;
				do {
					var t = e.children.splice(e.children.length - 5, 5),
						n = new b(t);
					if (e.parent) {
						e.size -= n.size, e.height -= n.height;
						var i = X(e.parent.children, e);
						e.parent.children.splice(i + 1, 0, n)
					} else {
						var r = new b(e.children);
						r.parent = e, e.children = [r, n], e = r
					}
					n.parent = e.parent
				} while (e.children.length > 10);
				e.parent.maybeSpill()
			}
		},
		iter: function(e, t, n) {
			this.iterN(e, t - e, n)
		},
		iterN: function(e, t, n) {
			for (var i = 0, r = this.children.length; r > i; ++i) {
				var a = this.children[i],
					o = a.chunkSize();
				if (o > e) {
					var s = Math.min(t, o - e);
					if (a.iterN(e, s, n)) return !0;
					if (0 == (t -= s)) break;
					e = 0
				} else e -= o
			}
		}
	}, C.prototype = {
		addChange: function(e, t, n) {
			this.undone.length = 0;
			var i = +new Date,
				r = D(this.done),
				a = r && D(r),
				o = i - this.time;
			if (r && !this.closed && this.compound) r.push({
				start: e,
				added: t,
				old: n
			});
			else if (o > 400 || !a || this.closed || a.start > e + n.length || e > a.start + a.added) this.done.push([{
				start: e,
				added: t,
				old: n
			}]), this.closed = !1;
			else {
				for (var s = Math.max(0, a.start - e), l = Math.max(0, e + n.length - (a.start + a.added)), u = s; u > 0; --u) a.old.unshift(n[u - 1]);
				for (var u = l; u > 0; --u) a.old.push(n[n.length - u]);
				s && (a.start = e), a.added += t - (n.length - s - l)
			}
			this.time = i
		},
		startCompound: function() {
			this.compound++ || (this.closed = !0)
		},
		endCompound: function() {
			--this.compound || (this.closed = !0)
		}
	}, e.e_stop = L, e.e_preventDefault = T, e.e_stopPropagation = M, e.connect = O, B.prototype = {
		set: function(e, t) {
			clearTimeout(this.id), this.id = setTimeout(t, e)
		}
	};
	var xt = e.Pass = {
		toString: function() {
			return "CodeMirror.Pass"
		}
	}, kt = function() {
		if (ut) return !1;
		var e = U("div");
		return "draggable" in e || "dragDrop" in e
	}();
	(function() {
		var e = U("textarea");
		return e.value = "foo\nbar", e.value.indexOf("\r") > -1 ? "\r\n" : "\n"
	})();
	var _t = /^$/;
	ot ? _t = /$'/ : mt ? _t = /\-[^ \-?]|\?[^ !'\"\),.\-\/:;\?\]\}]/ : pt && (_t = /\-[^ \-\.?]|\?[^ \-\.?\]\}:;!'\"\),\/]|[\.!\"#&%\)*+,:;=>\]|\}~][\(\{\[<]|\$'/);
	var Ct = [""],
		St = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc]/,
		Et = 3 != "\n\nb".split(/\n/).length ? function(e) {
			for (var t = 0, n = [], i = e.length; i >= t;) {
				var r = e.indexOf("\n", t); - 1 == r && (r = e.length);
				var a = e.slice(t, "\r" == e.charAt(r - 1) ? r - 1 : r),
					o = a.indexOf("\r"); - 1 != o ? (n.push(a.slice(0, o)), t += o + 1) : (n.push(a), t = r + 1)
			}
			return n
		} : function(e) {
			return e.split(/\r\n?|\n/)
		};
	e.splitLines = Et;
	var Tt = window.getSelection ? function(e) {
			try {
				return e.selectionStart != e.selectionEnd
			} catch (t) {
				return !1
			}
		} : function(e) {
			try {
				var t = e.ownerDocument.selection.createRange()
			} catch (n) {}
			return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1
		};
	e.defineMode("null", function() {
		return {
			token: function(e) {
				e.skipToEnd()
			}
		}
	}), e.defineMIME("text/plain", "null");
	var Mt = {
		3: "Enter",
		8: "Backspace",
		9: "Tab",
		13: "Enter",
		16: "Shift",
		17: "Ctrl",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Esc",
		32: "Space",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "Left",
		38: "Up",
		39: "Right",
		40: "Down",
		44: "PrintScrn",
		45: "Insert",
		46: "Delete",
		59: ";",
		91: "Mod",
		92: "Mod",
		93: "Mod",
		109: "-",
		107: "=",
		127: "Delete",
		186: ";",
		187: "=",
		188: ",",
		189: "-",
		190: ".",
		191: "/",
		192: "`",
		219: "[",
		220: "\\",
		221: "]",
		222: "'",
		63276: "PageUp",
		63277: "PageDown",
		63275: "End",
		63273: "Home",
		63234: "Left",
		63232: "Up",
		63235: "Right",
		63233: "Down",
		63302: "Insert",
		63272: "Delete"
	};
	return e.keyNames = Mt,
	function() {
		for (var e = 0; 10 > e; e++) Mt[e + 48] = e + "";
		for (var e = 65; 90 >= e; e++) Mt[e] = String.fromCharCode(e);
		for (var e = 1; 12 >= e; e++) Mt[e + 111] = Mt[e + 63235] = "F" + e
	}(), e.version = "2.38", e
}(), CodeMirror.defineMode("javascript", function(e, t) {
	function n(e, t, n) {
		return t.tokenize = n, n(e, t)
	}
	function i(e, t) {
		for (var n, i = !1; null != (n = e.next());) {
			if (n == t && !i) return !1;
			i = !i && "\\" == n
		}
		return i
	}
	function r(e, t, n) {
		return R = e, D = n, t
	}
	function a(e, t) {
		var a = e.next();
		if ('"' == a || "'" == a) return n(e, t, o(a));
		if (/[\[\]{}\(\),;\:\.]/.test(a)) return r(a);
		if ("0" == a && e.eat(/x/i)) return e.eatWhile(/[\da-f]/i), r("number", "number");
		if (/\d/.test(a) || "-" == a && e.eat(/\d/)) return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), r("number", "number");
		if ("/" == a) return e.eat("*") ? n(e, t, s) : e.eat("/") ? (e.skipToEnd(), r("comment", "comment")) : "operator" == t.lastType || "keyword c" == t.lastType || /^[\[{}\(,;:]$/.test(t.lastType) ? (i(e, "/"), e.eatWhile(/[gimy]/), r("regexp", "string-2")) : (e.eatWhile(U), r("operator", null, e.current()));
		if ("#" == a) return e.skipToEnd(), r("error", "error");
		if (U.test(a)) return e.eatWhile(U), r("operator", null, e.current());
		e.eatWhile(/[\w\$_]/);
		var l = e.current(),
			u = W.propertyIsEnumerable(l) && W[l];
		return u && "." != t.lastType ? r(u.type, u.style, l) : r("variable", "variable", l)
	}
	function o(e) {
		return function(t, n) {
			return i(t, e) || (n.tokenize = a), r("string", "string")
		}
	}
	function s(e, t) {
		for (var n, i = !1; n = e.next();) {
			if ("/" == n && i) {
				t.tokenize = a;
				break
			}
			i = "*" == n
		}
		return r("comment", "comment")
	}
	function l(e, t, n, i, r, a) {
		this.indented = e, this.column = t, this.type = n, this.prev = r, this.info = a, null != i && (this.align = i)
	}
	function u(e, t) {
		for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0
	}
	function c(e, t, n, i, r) {
		var a = e.cc;
		for (G.state = e, G.stream = r, G.marked = null, G.cc = a, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);;) {
			var o = a.length ? a.pop() : j ? w : b;
			if (o(n, i)) {
				for (; a.length && a[a.length - 1].lex;) a.pop()();
				return G.marked ? G.marked : "variable" == n && u(e, i) ? "variable-2" : t
			}
		}
	}
	function h() {
		for (var e = arguments.length - 1; e >= 0; e--) G.cc.push(arguments[e])
	}
	function d() {
		return h.apply(null, arguments), !0
	}
	function p(e) {
		function t(t) {
			for (var n = t; n; n = n.next) if (n.name == e) return !0;
			return !1
		}
		var n = G.state;
		if (n.context) {
			if (G.marked = "def", t(n.localVars)) return;
			n.localVars = {
				name: e,
				next: n.localVars
			}
		} else {
			if (t(n.globalVars)) return;
			n.globalVars = {
				name: e,
				next: n.globalVars
			}
		}
	}
	function f() {
		G.state.context = {
			prev: G.state.context,
			vars: G.state.localVars
		}, G.state.localVars = Q
	}
	function m() {
		G.state.localVars = G.state.context.vars, G.state.context = G.state.context.prev
	}
	function g(e, t) {
		var n = function() {
			var n = G.state;
			n.lexical = new l(n.indented, G.stream.column(), e, null, n.lexical, t)
		};
		return n.lex = !0, n
	}
	function y() {
		var e = G.state;
		e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
	}
	function v(e) {
		return function(t) {
			return t == e ? d() : ";" == e ? h() : d(arguments.callee)
		}
	}
	function b(e) {
		return "var" == e ? d(g("vardef"), P, v(";"), y) : "keyword a" == e ? d(g("form"), w, b, y) : "keyword b" == e ? d(g("form"), b, y) : "{" == e ? d(g("}"), T, y) : ";" == e ? d() : "function" == e ? d(I) : "for" == e ? d(g("form"), v("("), g(")"), N, v(")"), y, b, y) : "variable" == e ? d(g("stat"), _) : "switch" == e ? d(g("form"), w, g("}", "switch"), v("{"), T, y, y) : "case" == e ? d(w, v(":")) : "default" == e ? d(v(":")) : "catch" == e ? d(g("form"), f, v("("), z, v(")"), b, y, m) : h(g("stat"), w, v(";"), y)
	}
	function w(e) {
		return F.hasOwnProperty(e) ? d(k) : "function" == e ? d(I) : "keyword c" == e ? d(x) : "(" == e ? d(g(")"), x, v(")"), y, k) : "operator" == e ? d(w) : "[" == e ? d(g("]"), E(w, "]"), y, k) : "{" == e ? d(g("}"), E(S, "}"), y, k) : d()
	}
	function x(e) {
		return e.match(/[;\}\)\],]/) ? h() : h(w)
	}
	function k(e, t) {
		if ("operator" == e && /\+\+|--/.test(t)) return d(k);
		if ("operator" == e && "?" == t) return d(w, v(":"), w);
		if (";" != e) return "(" == e ? d(g(")"), E(w, ")"), y, k) : "." == e ? d(C, k) : "[" == e ? d(g("]"), w, v("]"), y, k) : void 0
	}
	function _(e) {
		return ":" == e ? d(y, b) : h(k, v(";"), y)
	}
	function C(e) {
		return "variable" == e ? (G.marked = "property", d()) : void 0
	}
	function S(e) {
		return "variable" == e && (G.marked = "property"), F.hasOwnProperty(e) ? d(v(":"), w) : void 0
	}
	function E(e, t) {
		function n(i) {
			return "," == i ? d(e, n) : i == t ? d() : d(v(t))
		}
		return function(i) {
			return i == t ? d() : h(e, n)
		}
	}
	function T(e) {
		return "}" == e ? d() : h(b, T)
	}
	function M(e) {
		return ":" == e ? d(L) : h()
	}
	function L(e) {
		return "variable" == e ? (G.marked = "variable-3", d()) : h()
	}
	function P(e, t) {
		return "variable" == e ? (p(t), q ? d(M, A) : d(A)) : h()
	}
	function A(e, t) {
		return "=" == t ? d(w, A) : "," == e ? d(P) : void 0
	}
	function N(e) {
		return "var" == e ? d(P, v(";"), B) : ";" == e ? d(B) : "variable" == e ? d(O) : d(B)
	}
	function O(e, t) {
		return "in" == t ? d(w) : d(k, B)
	}
	function B(e, t) {
		return ";" == e ? d($) : "in" == t ? d(w) : d(w, v(";"), $)
	}
	function $(e) {
		")" != e && d(w)
	}
	function I(e, t) {
		return "variable" == e ? (p(t), d(I)) : "(" == e ? d(g(")"), f, E(z, ")"), y, b, m) : void 0
	}
	function z(e, t) {
		return "variable" == e ? (p(t), q ? d(M) : d()) : void 0
	}
	var R, D, V = e.indentUnit,
		j = t.json,
		q = t.typescript,
		W = function() {
			function e(e) {
				return {
					type: e,
					style: "keyword"
				}
			}
			var t = e("keyword a"),
				n = e("keyword b"),
				i = e("keyword c"),
				r = e("operator"),
				a = {
					type: "atom",
					style: "atom"
				}, o = {
					"if": t,
					"while": t,
					"with": t,
					"else": n,
					"do": n,
					"try": n,
					"finally": n,
					"return": i,
					"break": i,
					"continue": i,
					"new": i,
					"delete": i,
					"throw": i,
					"var": e("var"),
					"const": e("var"),
					let: e("var"),
					"function": e("function"),
					"catch": e("catch"),
					"for": e("for"),
					"switch": e("switch"),
					"case": e("case"),
					"default": e("default"),
					"in": r,
					"typeof": r,
					"instanceof": r,
					"true": a,
					"false": a,
					"null": a,
					undefined: a,
					NaN: a,
					Infinity: a
				};
			if (q) {
				var s = {
					type: "variable",
					style: "variable-3"
				}, l = {
					"interface": e("interface"),
					"class": e("class"),
					"extends": e("extends"),
					constructor: e("constructor"),
					"public": e("public"),
					"private": e("private"),
					"protected": e("protected"),
					"static": e("static"),
					"super": e("super"),
					string: s,
					number: s,
					bool: s,
					any: s
				};
				for (var u in l) o[u] = l[u]
			}
			return o
		}(),
		U = /[+\-*&%=<>!?|]/,
		F = {
			atom: !0,
			number: !0,
			variable: !0,
			string: !0,
			regexp: !0
		}, G = {
			state: null,
			column: null,
			marked: null,
			cc: null
		}, Q = {
			name: "this",
			next: {
				name: "arguments"
			}
		};
	return y.lex = !0, {
		startState: function(e) {
			return {
				tokenize: a,
				lastType: null,
				cc: [],
				lexical: new l((e || 0) - V, 0, "block", !1),
				localVars: t.localVars,
				globalVars: t.globalVars,
				context: t.localVars && {
					vars: t.localVars
				},
				indented: 0
			}
		},
		token: function(e, t) {
			if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation()), e.eatSpace()) return null;
			var n = t.tokenize(e, t);
			return "comment" == R ? n : (t.lastType = R, c(t, n, R, D, e))
		},
		indent: function(e, t) {
			if (e.tokenize == s) return CodeMirror.Pass;
			if (e.tokenize != a) return 0;
			var n = t && t.charAt(0),
				i = e.lexical;
			"stat" == i.type && "}" == n && (i = i.prev);
			var r = i.type,
				o = n == r;
			return "vardef" == r ? i.indented + ("operator" == e.lastType || "," == e.lastType ? 4 : 0) : "form" == r && "{" == n ? i.indented : "form" == r ? i.indented + V : "stat" == r ? i.indented + ("operator" == e.lastType || "," == e.lastType ? V : 0) : "switch" != i.info || o ? i.align ? i.column + (o ? 0 : 1) : i.indented + (o ? 0 : V) : i.indented + (/^(?:case|default)\b/.test(t) ? V : 2 * V)
		},
		electricChars: ":{}",
		jsonMode: j
	}
}), CodeMirror.defineMIME("text/javascript", "javascript"), CodeMirror.defineMIME("text/ecmascript", "javascript"), CodeMirror.defineMIME("application/javascript", "javascript"), CodeMirror.defineMIME("application/ecmascript", "javascript"), CodeMirror.defineMIME("application/json", {
	name: "javascript",
	json: !0
}), CodeMirror.defineMIME("text/typescript", {
	name: "javascript",
	typescript: !0
}), CodeMirror.defineMIME("application/typescript", {
	name: "javascript",
	typescript: !0
}), CodeMirror.defineMode("xml", function(e, t) {
	function n(e, t) {
		function n(n) {
			return t.tokenize = n, n(e, t)
		}
		var r = e.next();
		if ("<" == r) {
			if (e.eat("!")) return e.eat("[") ? e.match("CDATA[") ? n(a("atom", "]]>")) : null : e.match("--") ? n(a("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(o(1))) : null;
			if (e.eat("?")) return e.eatWhile(/[\w\._\-]/), t.tokenize = a("meta", "?>"), "meta";
			var s = e.eat("/");
			b = "";
			for (var l; l = e.eat(/[^\s\u00a0=<>\"\'\/?]/);) b += l;
			return b ? (w = s ? "closeTag" : "openTag", t.tokenize = i, "tag") : "error"
		}
		if ("&" == r) {
			var u;
			return u = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"), u ? "atom" : "error"
		}
		return e.eatWhile(/[^&<]/), null
	}
	function i(e, t) {
		var i = e.next();
		return ">" == i || "/" == i && e.eat(">") ? (t.tokenize = n, w = ">" == i ? "endTag" : "selfcloseTag", "tag") : "=" == i ? (w = "equals", null) : /[\'\"]/.test(i) ? (t.tokenize = r(i), t.tokenize(e, t)) : (e.eatWhile(/[^\s\u00a0=<>\"\']/), "word")
	}
	function r(e) {
		return function(t, n) {
			for (; !t.eol();) if (t.next() == e) {
				n.tokenize = i;
				break
			}
			return "string"
		}
	}
	function a(e, t) {
		return function(i, r) {
			for (; !i.eol();) {
				if (i.match(t)) {
					r.tokenize = n;
					break
				}
				i.next()
			}
			return e
		}
	}
	function o(e) {
		return function(t, i) {
			for (var r; null != (r = t.next());) {
				if ("<" == r) return i.tokenize = o(e + 1), i.tokenize(t, i);
				if (">" == r) {
					if (1 == e) {
						i.tokenize = n;
						break
					}
					return i.tokenize = o(e - 1), i.tokenize(t, i)
				}
			}
			return "meta"
		}
	}
	function s() {
		for (var e = arguments.length - 1; e >= 0; e--) x.cc.push(arguments[e])
	}
	function l() {
		return s.apply(null, arguments), !0
	}
	function u(e, t) {
		var n = C.doNotIndent.hasOwnProperty(e) || x.context && x.context.noIndent;
		x.context = {
			prev: x.context,
			tagName: e,
			indent: x.indented,
			startOfLine: t,
			noIndent: n
		}
	}
	function c() {
		x.context && (x.context = x.context.prev)
	}
	function h(e) {
		if ("openTag" == e) return x.tagName = b, l(m, d(x.startOfLine));
		if ("closeTag" == e) {
			var t = !1;
			return x.context ? x.context.tagName != b && (C.implicitlyClosed.hasOwnProperty(x.context.tagName.toLowerCase()) && c(), t = !x.context || x.context.tagName != b) : t = !0, t && (k = "error"), l(p(t))
		}
		return l()
	}
	function d(e) {
		return function(t) {
			return "selfcloseTag" == t || "endTag" == t && C.autoSelfClosers.hasOwnProperty(x.tagName.toLowerCase()) ? (f(x.tagName.toLowerCase()), l()) : "endTag" == t ? (f(x.tagName.toLowerCase()), u(x.tagName, e), l()) : l()
		}
	}
	function p(e) {
		return function(t) {
			return e && (k = "error"), "endTag" == t ? (c(), l()) : (k = "error", l(arguments.callee))
		}
	}
	function f(e) {
		for (var t;;) {
			if (!x.context) return;
			if (t = x.context.tagName.toLowerCase(), !C.contextGrabbers.hasOwnProperty(t) || !C.contextGrabbers[t].hasOwnProperty(e)) return;
			c()
		}
	}
	function m(e) {
		return "word" == e ? (k = "attribute", l(g, m)) : "endTag" == e || "selfcloseTag" == e ? s() : (k = "error", l(m))
	}
	function g(e) {
		return "equals" == e ? l(y, m) : (C.allowMissing ? "word" == e && (k = "attribute") : k = "error", "endTag" == e || "selfcloseTag" == e ? s() : l())
	}
	function y(e) {
		return "string" == e ? l(v) : "word" == e && C.allowUnquoted ? (k = "string", l()) : (k = "error", "endTag" == e || "selfCloseTag" == e ? s() : l())
	}
	function v(e) {
		return "string" == e ? l(v) : s()
	}
	var b, w, x, k, _ = e.indentUnit,
		C = t.htmlMode ? {
			autoSelfClosers: {
				area: !0,
				base: !0,
				br: !0,
				col: !0,
				command: !0,
				embed: !0,
				frame: !0,
				hr: !0,
				img: !0,
				input: !0,
				keygen: !0,
				link: !0,
				meta: !0,
				param: !0,
				source: !0,
				track: !0,
				wbr: !0
			},
			implicitlyClosed: {
				dd: !0,
				li: !0,
				optgroup: !0,
				option: !0,
				p: !0,
				rp: !0,
				rt: !0,
				tbody: !0,
				td: !0,
				tfoot: !0,
				th: !0,
				tr: !0
			},
			contextGrabbers: {
				dd: {
					dd: !0,
					dt: !0
				},
				dt: {
					dd: !0,
					dt: !0
				},
				li: {
					li: !0
				},
				option: {
					option: !0,
					optgroup: !0
				},
				optgroup: {
					optgroup: !0
				},
				p: {
					address: !0,
					article: !0,
					aside: !0,
					blockquote: !0,
					dir: !0,
					div: !0,
					dl: !0,
					fieldset: !0,
					footer: !0,
					form: !0,
					h1: !0,
					h2: !0,
					h3: !0,
					h4: !0,
					h5: !0,
					h6: !0,
					header: !0,
					hgroup: !0,
					hr: !0,
					menu: !0,
					nav: !0,
					ol: !0,
					p: !0,
					pre: !0,
					section: !0,
					table: !0,
					ul: !0
				},
				rp: {
					rp: !0,
					rt: !0
				},
				rt: {
					rp: !0,
					rt: !0
				},
				tbody: {
					tbody: !0,
					tfoot: !0
				},
				td: {
					td: !0,
					th: !0
				},
				tfoot: {
					tbody: !0
				},
				th: {
					td: !0,
					th: !0
				},
				thead: {
					tbody: !0,
					tfoot: !0
				},
				tr: {
					tr: !0
				}
			},
			doNotIndent: {
				pre: !0
			},
			allowUnquoted: !0,
			allowMissing: !0
		} : {
			autoSelfClosers: {},
			implicitlyClosed: {},
			contextGrabbers: {},
			doNotIndent: {},
			allowUnquoted: !1,
			allowMissing: !1
		}, S = t.alignCDATA;
	return {
		startState: function() {
			return {
				tokenize: n,
				cc: [],
				indented: 0,
				startOfLine: !0,
				tagName: null,
				context: null
			}
		},
		token: function(e, t) {
			if (e.sol() && (t.startOfLine = !0, t.indented = e.indentation()), e.eatSpace()) return null;
			k = w = b = null;
			var n = t.tokenize(e, t);
			if (t.type = w, (n || w) && "comment" != n) for (x = t;;) {
				var i = t.cc.pop() || h;
				if (i(w || n)) break
			}
			return t.startOfLine = !1, k || n
		},
		indent: function(e, t, r) {
			var a = e.context;
			if (e.tokenize != i && e.tokenize != n || a && a.noIndent) return r ? r.match(/^(\s*)/)[0].length : 0;
			if (S && /<!\[CDATA\[/.test(t)) return 0;
			for (a && /^<\//.test(t) && (a = a.prev); a && !a.startOfLine;) a = a.prev;
			return a ? a.indent + _ : 0
		},
		electricChars: "/",
		configuration: t.htmlMode ? "html" : "xml"
	}
}), CodeMirror.defineMIME("text/xml", "xml"), CodeMirror.defineMIME("application/xml", "xml"), CodeMirror.mimeModes.hasOwnProperty("text/html") || CodeMirror.defineMIME("text/html", {
	name: "xml",
	htmlMode: !0
}), CodeMirror.defineMode("clike", function(e, t) {
	function n(e, t) {
		var n = e.next();
		if (g[n]) {
			var a = g[n](e, t);
			if (a !== !1) return a
		}
		if ('"' == n || "'" == n) return t.tokenize = i(n), t.tokenize(e, t);
		if (/[\[\]{}\(\),;\:\.]/.test(n)) return l = n, null;
		if (/\d/.test(n)) return e.eatWhile(/[\w\.]/), "number";
		if ("/" == n) {
			if (e.eat("*")) return t.tokenize = r, r(e, t);
			if (e.eat("/")) return e.skipToEnd(), "comment"
		}
		if (v.test(n)) return e.eatWhile(v), "operator";
		e.eatWhile(/[\w\$_]/);
		var o = e.current();
		return d.propertyIsEnumerable(o) ? (f.propertyIsEnumerable(o) && (l = "newstatement"), "keyword") : p.propertyIsEnumerable(o) ? (f.propertyIsEnumerable(o) && (l = "newstatement"), "builtin") : m.propertyIsEnumerable(o) ? "atom" : "variable"
	}
	function i(e) {
		return function(t, n) {
			for (var i, r = !1, a = !1; null != (i = t.next());) {
				if (i == e && !r) {
					a = !0;
					break
				}
				r = !r && "\\" == i
			}
			return (a || !r && !y) && (n.tokenize = null), "string"
		}
	}
	function r(e, t) {
		for (var n, i = !1; n = e.next();) {
			if ("/" == n && i) {
				t.tokenize = null;
				break
			}
			i = "*" == n
		}
		return "comment"
	}
	function a(e, t, n, i, r) {
		this.indented = e, this.column = t, this.type = n, this.align = i, this.prev = r
	}
	function o(e, t, n) {
		var i = e.indented;
		return e.context && "statement" == e.context.type && (i = e.context.indented), e.context = new a(i, t, n, null, e.context)
	}
	function s(e) {
		var t = e.context.type;
		return (")" == t || "]" == t || "}" == t) && (e.indented = e.context.indented), e.context = e.context.prev
	}
	var l, u = e.indentUnit,
		c = t.statementIndentUnit || u,
		h = t.dontAlignCalls,
		d = t.keywords || {}, p = t.builtin || {}, f = t.blockKeywords || {}, m = t.atoms || {}, g = t.hooks || {}, y = t.multiLineStrings,
		v = /[+\-*&%=<>!?|\/]/;
	return {
		startState: function(e) {
			return {
				tokenize: null,
				context: new a((e || 0) - u, 0, "top", !1),
				indented: 0,
				startOfLine: !0
			}
		},
		token: function(e, t) {
			var i = t.context;
			if (e.sol() && (null == i.align && (i.align = !1), t.indented = e.indentation(), t.startOfLine = !0), e.eatSpace()) return null;
			l = null;
			var r = (t.tokenize || n)(e, t);
			if ("comment" == r || "meta" == r) return r;
			if (null == i.align && (i.align = !0), ";" != l && ":" != l && "," != l || "statement" != i.type) if ("{" == l) o(t, e.column(), "}");
			else if ("[" == l) o(t, e.column(), "]");
			else if ("(" == l) o(t, e.column(), ")");
			else if ("}" == l) {
				for (;
				"statement" == i.type;) i = s(t);
				for ("}" == i.type && (i = s(t));
				"statement" == i.type;) i = s(t)
			} else l == i.type ? s(t) : (("}" == i.type || "top" == i.type) && ";" != l || "statement" == i.type && "newstatement" == l) && o(t, e.column(), "statement");
			else s(t);
			return t.startOfLine = !1, r
		},
		indent: function(e, t) {
			if (e.tokenize == r) return CodeMirror.Pass;
			if (e.tokenize != n && null != e.tokenize) return 0;
			var i = e.context,
				a = t && t.charAt(0);
			"statement" == i.type && "}" == a && (i = i.prev);
			var o = a == i.type;
			return "statement" == i.type ? i.indented + ("{" == a ? 0 : c) : h && ")" == i.type && !o ? i.indented + c : i.align ? i.column + (o ? 0 : 1) : i.indented + (o ? 0 : u)
		},
		electricChars: "{}"
	}
}),
function() {
	function e(e) {
		for (var t = {}, n = e.split(" "), i = 0; n.length > i; ++i) t[n[i]] = !0;
		return t
	}
	function t(e, n) {
		if (!n.startOfLine) return !1;
		for (;;) {
			if (!e.skipTo("\\")) {
				e.skipToEnd(), n.tokenize = null;
				break
			}
			if (e.next(), e.eol()) {
				n.tokenize = t;
				break
			}
		}
		return "meta"
	}
	function n(e, t) {
		for (var n; null != (n = e.next());) if ('"' == n && !e.eat('"')) {
			t.tokenize = null;
			break
		}
		return "string"
	}
	function i(e, t) {
		for (var n = 0; e.length > n; ++n) CodeMirror.defineMIME(e[n], t)
	}
	var r = "auto if break int case long char register continue return default short do sizeof double static else struct entry switch extern typedef float union for unsigned goto while enum void const signed volatile";
	i(["text/x-csrc", "text/x-c", "text/x-chdr"], {
		name: "clike",
		keywords: e(r),
		blockKeywords: e("case do else for if switch while struct"),
		atoms: e("null"),
		hooks: {
			"#": t
		}
	}), i(["text/x-c++src", "text/x-c++hdr"], {
		name: "clike",
		keywords: e(r + " asm dynamic_cast namespace reinterpret_cast try bool explicit new " + "static_cast typeid catch operator template typename class friend private " + "this using const_cast inline public throw virtual delete mutable protected " + "wchar_t"),
		blockKeywords: e("catch class do else finally for if struct switch try while"),
		atoms: e("true false null"),
		hooks: {
			"#": t
		}
	}), CodeMirror.defineMIME("text/x-java", {
		name: "clike",
		keywords: e("abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while"),
		blockKeywords: e("catch class do else finally for if switch try while"),
		atoms: e("true false null"),
		hooks: {
			"@": function(e) {
				return e.eatWhile(/[\w\$_]/), "meta"
			}
		}
	}), CodeMirror.defineMIME("text/x-csharp", {
		name: "clike",
		keywords: e("abstract as base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
		blockKeywords: e("catch class do else finally for foreach if struct switch try while"),
		builtin: e("Boolean Byte Char DateTime DateTimeOffset Decimal Double Guid Int16 Int32 Int64 Object SByte Single String TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
		atoms: e("true false null"),
		hooks: {
			"@": function(e, t) {
				return e.eat('"') ? (t.tokenize = n, n(e, t)) : (e.eatWhile(/[\w\$_]/), "meta")
			}
		}
	}), CodeMirror.defineMIME("text/x-scala", {
		name: "clike",
		keywords: e("abstract case catch class def do else extends false final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try trye type val var while with yield _ : = => <- <: <% >: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector :: #:: Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
		blockKeywords: e("catch class do else finally for forSome if match switch try while"),
		atoms: e("true false null"),
		hooks: {
			"@": function(e) {
				return e.eatWhile(/[\w\$_]/), "meta"
			}
		}
	})
}(), CodeMirror.defineMode("css", function(e) {
	function t(e) {
		for (var t = {}, n = 0; e.length > n; ++n) t[e[n]] = !0;
		return t
	}
	function n(e, t) {
		return l = t, e
	}
	function i(e, t) {
		var i = e.next();
		if ("@" == i) return e.eatWhile(/[\w\\\-]/), n("def", e.current());
		if ("/" == i && e.eat("*")) return t.tokenize = r, r(e, t);
		if ("<" == i && e.eat("!")) return t.tokenize = a, a(e, t);
		if ("=" == i) n(null, "compare");
		else {
			if (("~" == i || "|" == i) && e.eat("=")) return n(null, "compare");
			if ('"' == i || "'" == i) return t.tokenize = o(i), t.tokenize(e, t);
			if ("#" == i) return e.eatWhile(/[\w\\\-]/), n("atom", "hash");
			if ("!" == i) return e.match(/^\s*\w*/), n("keyword", "important");
			if (/\d/.test(i)) return e.eatWhile(/[\w.%]/), n("number", "unit");
			if ("-" !== i) return /[,+>*\/]/.test(i) ? n(null, "select-op") : "." == i && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? n("qualifier", l) : ":" == i ? n("operator", i) : /[;{}\[\]\(\)]/.test(i) ? n(null, i) : "u" == i && e.match("rl(") ? (e.backUp(1), t.tokenize = s, n("property", "variable")) : (e.eatWhile(/[\w\\\-]/), n("property", "variable"));
			if (/\d/.test(e.peek())) return e.eatWhile(/[\w.%]/), n("number", "unit");
			if (e.match(/^[^-]+-/)) return n("meta", l)
		}
	}
	function r(e, t) {
		for (var r, a = !1; null != (r = e.next());) {
			if (a && "/" == r) {
				t.tokenize = i;
				break
			}
			a = "*" == r
		}
		return n("comment", "comment")
	}
	function a(e, t) {
		for (var r, a = 0; null != (r = e.next());) {
			if (a >= 2 && ">" == r) {
				t.tokenize = i;
				break
			}
			a = "-" == r ? a + 1 : 0
		}
		return n("comment", "comment")
	}
	function o(e, t) {
		return function(r, a) {
			for (var o, s = !1; null != (o = r.next()) && (o != e || s);) s = !s && "\\" == o;
			return s || (t && r.backUp(1), a.tokenize = i), n("string", "string")
		}
	}
	function s(e, t) {
		return e.next(), t.tokenize = e.match(/\s*[\"\']/, !1) ? i : o(")", !0), n(null, "(")
	}
	var l, u = e.indentUnit,
		c = t(["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"]),
		h = t(["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid"]),
		d = t(["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid-cell", "grid-column", "grid-column-align", "grid-column-sizing", "grid-column-span", "grid-columns", "grid-flow", "grid-row", "grid-row-align", "grid-row-sizing", "grid-row-span", "grid-rows", "grid-template", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-shadow", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"]),
		p = t(["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"]),
		f = t(["above", "absolute", "activeborder", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "auto", "avoid", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break-all", "break-word", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "disc", "discard", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ew-resize", "expanded", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "justify", "kannada", "katakana", "katakana-iroha", "khmer", "landscape", "lao", "large", "larger", "left", "level", "lighter", "line-through", "linear", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "malayalam", "match", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize", "narrower", "navy", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "overlay", "overline", "padding", "padding-box", "painted", "paused", "persian", "plus-darker", "plus-lighter", "pointer", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radio", "read-only", "read-write", "read-write-plaintext-only", "relative", "repeat", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "round", "row-resize", "rtl", "run-in", "running", "s-resize", "sans-serif", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "single", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "white", "wider", "window", "windowframe", "windowtext", "x-large", "x-small", "xor", "xx-large", "xx-small", "yellow"]);
	return {
		startState: function(e) {
			return {
				tokenize: i,
				baseIndent: e || 0,
				stack: []
			}
		},
		token: function(e, t) {
			if (t.tokenize == i && e.eatSpace()) return null;
			var n = t.tokenize(e, t),
				r = t.stack[t.stack.length - 1];
			return "property" == n ? "propertyValue" == r ? n = f[e.current()] ? "string-2" : p[e.current()] ? "keyword" : "variable-2" : "rule" == r ? d[e.current()] || (n += " error") : r && "@media{" != r ? "@media" == r ? n = c[e.current()] ? "attribute" : /^(only|not)$/i.test(e.current()) ? "keyword" : "and" == e.current().toLowerCase() ? "error" : h[e.current()] ? "error" : "attribute error" : "@mediaType" == r ? n = c[e.current()] ? "attribute" : "and" == e.current().toLowerCase() ? "operator" : /^(only|not)$/i.test(e.current()) ? "error" : h[e.current()] ? "error" : "error" : "@mediaType(" == r ? d[e.current()] || (c[e.current()] ? n = "error" : "and" == e.current().toLowerCase() ? n = "operator" : /^(only|not)$/i.test(e.current()) ? n = "error" : n += " error") : n = "error" : n = "tag" : "atom" == n ? r && "@media{" != r ? "propertyValue" == r ? /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e.current()) || (n += " error") : n = "error" : n = "builtin" : "@media" == r && "{" == l && (n = "error"), "{" == l ? "@media" == r || "@mediaType" == r ? (t.stack.pop(), t.stack[t.stack.length - 1] = "@media{") : t.stack.push("rule") : "}" == l ? (t.stack.pop(), "propertyValue" == r && t.stack.pop()) : "@media" == l ? t.stack.push("@media") : "@media" == r && /\b(keyword|attribute)\b/.test(n) ? t.stack.push("@mediaType") : "@mediaType" == r && "," == e.current() ? t.stack.pop() : "@mediaType" == r && "(" == l ? t.stack.push("@mediaType(") : "@mediaType(" == r && ")" == l ? t.stack.pop() : "rule" == r && ":" == l ? t.stack.push("propertyValue") : "propertyValue" == r && ";" == l && t.stack.pop(), n
		},
		indent: function(e, t) {
			var n = e.stack.length;
			return /^\}/.test(t) && (n -= "propertyValue" == e.stack[e.stack.length - 1] ? 2 : 1), e.baseIndent + n * u
		},
		electricChars: "}"
	}
}), CodeMirror.defineMIME("text/css", "css"), CodeMirror.multiplexingMode = function(e) {
	function t(e, t, n) {
		if ("string" == typeof t) return e.indexOf(t, n);
		var i = t.exec(n ? e.slice(n) : e);
		return i ? i.index + n : -1
	}
	var n = Array.prototype.slice.call(arguments, 1),
		i = n.length;
	return {
		startState: function() {
			return {
				outer: CodeMirror.startState(e),
				innerActive: null,
				inner: null
			}
		},
		copyState: function(t) {
			return {
				outer: CodeMirror.copyState(e, t.outer),
				innerActive: t.innerActive,
				inner: t.innerActive && CodeMirror.copyState(t.innerActive.mode, t.inner)
			}
		},
		token: function(r, a) {
			if (a.innerActive) {
				var o = a.innerActive,
					s = r.string,
					l = t(s, o.close, r.pos);
				if (l == r.pos) return r.match(o.close), a.innerActive = a.inner = null, o.delimStyle;
				l > -1 && (r.string = s.slice(0, l));
				var u = o.mode.token(r, a.inner);
				l > -1 && (r.string = s);
				var c = r.current(),
					l = c.indexOf(o.close);
				return l > -1 && r.backUp(c.length - l), u
			}
			for (var h = 1 / 0, s = r.string, d = 0; i > d; ++d) {
				var p = n[d],
					l = t(s, p.open, r.pos);
				if (l == r.pos) return r.match(p.open), a.innerActive = p, a.inner = CodeMirror.startState(p.mode, e.indent ? e.indent(a.outer, "") : 0), p.delimStyle; - 1 != l && h > l && (h = l)
			}
			1 / 0 != h && (r.string = s.slice(0, h));
			var f = e.token(r, a.outer);
			return 1 / 0 != h && (r.string = s), f
		},
		indent: function(t, n) {
			var i = t.innerActive ? t.innerActive.mode : e;
			return i.indent ? i.indent(t.innerActive ? t.inner : t.outer, n) : CodeMirror.Pass
		},
		blankLine: function(t) {
			var r = t.innerActive ? t.innerActive.mode : e;
			if (r.blankLine && r.blankLine(t.innerActive ? t.inner : t.outer), t.innerActive) "\n" === r.close && (t.innerActive = t.inner = null);
			else for (var a = 0; i > a; ++a) {
				var o = n[a];
				"\n" === o.open && (t.innerActive = o, t.inner = CodeMirror.startState(o.mode, r.indent ? r.indent(t.outer, "") : 0))
			}
		},
		electricChars: e.electricChars,
		innerMode: function(t) {
			return t.inner ? {
				state: t.inner,
				mode: t.innerActive.mode
			} : {
				state: t.outer,
				mode: e
			}
		}
	}
},
function() {
	function e(e, t) {
		var n = CodeMirror.innerMode(e.getMode(), t);
		return "xml" == n.mode.name ? n.state : void 0
	}
	function t(e, t, i, r) {
		n(e, t, r) ? (e.replaceSelection("\n\n</" + r + ">", "end"), e.indentLine(i.line + 1), e.indentLine(i.line + 2), e.setCursor({
			line: i.line + 1,
			ch: e.getLine(i.line + 1).length
		})) : (e.replaceSelection("</" + r + ">"), e.setCursor(i))
	}
	function n(e, t, n) {
		return (t === void 0 || null == t || 1 == t) && (t = e.getOption("closeTagIndent")), t || (t = []), -1 != r(t, n.toLowerCase())
	}
	function i(e, t, n) {
		return "xml" == e.getOption("mode") ? !0 : ((t === void 0 || null == t) && (t = e.getOption("closeTagVoid")), t || (t = []), -1 == r(t, n.toLowerCase()))
	}
	function r(e, t) {
		if (e.indexOf) return e.indexOf(t);
		for (var n = 0, i = e.length; i > n; ++n) if (e[n] == t) return n;
		return -1
	}
	function a(e, t, n) {
		e.replaceSelection("/" + n + ">"), e.setCursor({
			line: t.line,
			ch: t.ch + n.length + 2
		})
	}
	CodeMirror.defaults.closeTagEnabled = !0, CodeMirror.defaults.closeTagIndent = ["applet", "blockquote", "body", "button", "div", "dl", "fieldset", "form", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "html", "iframe", "layer", "legend", "object", "ol", "p", "select", "table", "ul"], CodeMirror.defaults.closeTagVoid = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"], CodeMirror.defineExtension("closeTag", function(n, r, o, s) {
		if (!n.getOption("closeTagEnabled")) throw CodeMirror.Pass;
		var l = n.getCursor(),
			u = n.getTokenAt(l),
			c = e(n, u.state);
		if (c) if (">" == r) {
			var h = c.type;
			if ("tag" == u.className && "closeTag" == h) throw CodeMirror.Pass;
			if (n.replaceSelection(">"), l = {
				line: l.line,
				ch: l.ch + 1
			}, n.setCursor(l), u = n.getTokenAt(n.getCursor()), c = e(n, u.state), !c) throw CodeMirror.Pass;
			var h = c.type;
			if ("tag" == u.className && "selfcloseTag" != h) {
				var d = c.tagName;
				return d.length > 0 && i(n, s, d) && t(n, o, l, d), void 0
			}
			n.setSelection({
				line: l.line,
				ch: l.ch - 1
			}, l), n.replaceSelection("")
		} else if ("/" == r && ("tag" == u.className || "error" == u.className) && "<" == u.string) {
			var p = c.context,
				d = p ? p.tagName : "";
			if (d.length > 0) return a(n, l, d), void 0
		}
		throw CodeMirror.Pass
	})
}(), L.LatLngBounds.prototype.modify = function(e, t) {
	var n = this.getSouthWest(),
		i = this.getNorthEast(),
		r = e.latLngToLayerPoint(n),
		a = e.latLngToLayerPoint(i);
	return n = e.layerPointToLatLng(new L.Point(r.x - t, r.y + t)), i = e.layerPointToLatLng(new L.Point(a.x + t, a.y - t)), new L.LatLngBounds(n, i)
}, L.Control.Button = L.Class.extend({
	initialize: function(e) {
		L.Util.setOptions(this, e)
	},
	addTo: function(e) {
		return e.addButton(this), this
	},
	onAdd: function(e) {
		this._buttonContainer = e, this._button = L.DomUtil.create("a", this.options.className, this._buttonContainer.getContainer()), this._button.href = "#", this.setText(this.options.text);
		var t = this;
		this._onClick = function(e) {
			t.options.onClick.call(t, e)
		}, L.DomEvent.on(this._button, "click", L.DomEvent.stopPropagation).on(this._button, "mousedown", L.DomEvent.stopPropagation).on(this._button, "dblclick", L.DomEvent.stopPropagation).on(this._button, "click", L.DomEvent.preventDefault).on(this._button, "click", this._onClick, this)
	},
	remove: function() {
		L.DomEvent.off(this._button, "click", this._onClick), this._buttonContainer.getContainer().removeChild(this._button)
	},
	setText: function(e) {
		this._button.title = e, this._button.innerHTML = e
	}
}), L.Control.ButtonContainer = L.Control.extend({
	options: {
		position: "topleft"
	},
	getContainer: function() {
		return this._container || (this._container = L.DomUtil.create("div", this.options.className)), this._container
	},
	onAdd: function(e) {
		return this._map = e, this.getContainer()
	},
	addButton: function(e) {
		e.onAdd(this)
	},
	addClass: function(e) {
		L.DomUtil.addClass(this.getContainer(), e)
	},
	removeClass: function(e) {
		L.DomUtil.removeClass(this.getContainer(), e)
	}
}), L.LocationFilter = L.Class.extend({
	includes: L.Mixin.Events,
	options: {
		enableButton: {
			enableText: "Select area",
			disableText: "Remove selection"
		},
		adjustButton: {
			text: "Select area within current zoom"
		}
	},
	initialize: function(e) {
		L.Util.setOptions(this, e)
	},
	addTo: function(e) {
		return e.addLayer(this), this
	},
	onAdd: function(e) {
		this._map = e, this._layer = new L.LayerGroup, (this.options.enableButton || this.options.adjustButton) && this._initializeButtonContainer(), this.options.enable && this.enable()
	},
	onRemove: function(e) {
		this.disable(), this._buttonContainer && this._buttonContainer.removeFrom(e)
	},
	getBounds: function() {
		return new L.LatLngBounds(this._sw, this._ne)
	},
	setBounds: function(e) {
		this._nw = e.getNorthWest(), this._ne = e.getNorthEast(), this._sw = e.getSouthWest(), this._se = e.getSouthEast(), this.isEnabled() && (this._draw(), this.fire("change", {
			bounds: e
		}))
	},
	isEnabled: function() {
		return this._enabled
	},
	_drawRectangle: function(e, t) {
		t = t || {};
		var n = {
			stroke: !1,
			fill: !0,
			fillColor: "black",
			fillOpacity: .3,
			clickable: !1
		};
		t = L.Util.extend(n, t);
		var i = new L.Rectangle(e, t);
		return i.addTo(this._layer), i
	},
	_drawImageMarker: function(e, t) {
		var n = new L.Marker(e, {
			icon: new L.DivIcon({
				iconAnchor: t.anchor,
				iconSize: t.size,
				className: t.className
			}),
			draggable: !0
		});
		return n.addTo(this._layer), n
	},
	_drawMoveMarker: function(e) {
		var t = this;
		return this._moveMarker = this._drawImageMarker(e, {
			className: "location-filter move-marker",
			anchor: [-10, -10],
			size: [13, 13]
		}), this._moveMarker.on("drag", function() {
			var e = t._moveMarker.getLatLng(),
				n = e.lat - t._nw.lat,
				i = e.lng - t._nw.lng;
			t._nw = new L.LatLng(t._nw.lat + n, t._nw.lng + i, !0), t._ne = new L.LatLng(t._ne.lat + n, t._ne.lng + i, !0), t._sw = new L.LatLng(t._sw.lat + n, t._sw.lng + i, !0), t._se = new L.LatLng(t._se.lat + n, t._se.lng + i, !0), t._draw()
		}), this._setupDragendListener(this._moveMarker), this._moveMarker
	},
	_drawResizeMarker: function(e) {
		return this._drawImageMarker(e, {
			className: "location-filter resize-marker",
			anchor: [7, 6],
			size: [13, 12]
		})
	},
	_setupResizeMarkerTracking: function(e, t) {
		var n = this;
		e.on("drag", function() {
			var i = e.getLatLng(),
				r = t.moveAlong.lat,
				a = t.moveAlong.lng;
			r.setLatLng(new L.LatLng(i.lat, r.getLatLng().lng, !0)), a.setLatLng(new L.LatLng(a.getLatLng().lat, i.lng, !0));
			var o = [n._nwMarker.getLatLng(), n._neMarker.getLatLng(), n._swMarker.getLatLng(), n._seMarker.getLatLng()];
			o.sort(function(e, t) {
				return e.lat != t.lat ? t.lat - e.lat : e.lng - t.lng
			}), n._nw = o[0], n._ne = o[1], n._sw = o[2], n._se = o[3], n._draw({
				repositionResizeMarkers: !1
			})
		}), this._setupDragendListener(e)
	},
	_setupDragendListener: function(e) {
		var t = this;
		e.on("dragend", function() {
			t.fire("change", {
				bounds: t.getBounds()
			})
		})
	},
	_calculateBounds: function() {
		var e = this._map.getBounds(),
			t = new L.LatLngBounds(new L.LatLng(e.getSouthWest().lat - .1, e.getSouthWest().lng - .1, !0), new L.LatLng(e.getNorthEast().lat + .1, e.getNorthEast().lng + .1, !0));
		this._osw = t.getSouthWest(), this._one = t.getNorthEast(), this._northBounds = new L.LatLngBounds(new L.LatLng(this._ne.lat, this._osw.lng, !0), this._one), this._westBounds = new L.LatLngBounds(new L.LatLng(this._sw.lat, this._osw.lng, !0), this._nw), this._eastBounds = new L.LatLngBounds(this._se, new L.LatLng(this._ne.lat, this._one.lng, !0)), this._southBounds = new L.LatLngBounds(this._osw, new L.LatLng(this._sw.lat, this._one.lng, !0))
	},
	_initialDraw: function() {
		this._initialDrawCalled || (this._calculateBounds(), this._northRect = this._drawRectangle(this._northBounds), this._westRect = this._drawRectangle(this._westBounds), this._eastRect = this._drawRectangle(this._eastBounds), this._southRect = this._drawRectangle(this._southBounds), this._innerRect = this._drawRectangle(this.getBounds(), {
			fillOpacity: 0,
			stroke: !0,
			color: "white",
			weight: 1,
			opacity: .9
		}), this._nwMarker = this._drawResizeMarker(this._nw), this._neMarker = this._drawResizeMarker(this._ne), this._swMarker = this._drawResizeMarker(this._sw), this._seMarker = this._drawResizeMarker(this._se), this._setupResizeMarkerTracking(this._nwMarker, {
			moveAlong: {
				lat: this._neMarker,
				lng: this._swMarker
			}
		}), this._setupResizeMarkerTracking(this._neMarker, {
			moveAlong: {
				lat: this._nwMarker,
				lng: this._seMarker
			}
		}), this._setupResizeMarkerTracking(this._swMarker, {
			moveAlong: {
				lat: this._seMarker,
				lng: this._nwMarker
			}
		}), this._setupResizeMarkerTracking(this._seMarker, {
			moveAlong: {
				lat: this._swMarker,
				lng: this._neMarker
			}
		}), this._moveMarker = this._drawMoveMarker(this._nw), this._initialDrawCalled = !0)
	},
	_draw: function(e) {
		e = L.Util.extend({
			repositionResizeMarkers: !0
		}, e), this._calculateBounds(), this._northRect.setBounds(this._northBounds), this._westRect.setBounds(this._westBounds), this._eastRect.setBounds(this._eastBounds), this._southRect.setBounds(this._southBounds), this._innerRect.setBounds(this.getBounds()), e.repositionResizeMarkers && (this._nwMarker.setLatLng(this._nw), this._neMarker.setLatLng(this._ne), this._swMarker.setLatLng(this._sw), this._seMarker.setLatLng(this._se)), this._moveMarker.setLatLng(this._nw)
	},
	_adjustToMap: function() {
		this.setBounds(this._map.getBounds()), this._map.zoomOut()
	},
	enable: function() {
		if (!this._enabled) {
			var e;
			e = this._sw && this._ne ? new L.LatLngBounds(this._sw, this._ne) : this.options.bounds ? this.options.bounds : this._map.getBounds(), this._map.invalidateSize(), this._nw = e.getNorthWest(), this._ne = e.getNorthEast(), this._sw = e.getSouthWest(), this._se = e.getSouthEast(), this._buttonContainer && this._buttonContainer.addClass("enabled"), this._enableButton && this._enableButton.setText(this.options.enableButton.disableText), this.options.adjustButton && this._createAdjustButton(), this._initialDraw(), this._draw();
			var t = this;
			this._moveHandler = function() {
				t._draw()
			}, this._map.on("move", this._moveHandler), this._layer.addTo(this._map);
			var n = this._map.getBounds();
			e = new L.LatLngBounds(this._sw, this._ne).modify(this._map, 10), n.contains(e.getSouthWest()) && n.contains(e.getNorthEast()) || this._map.fitBounds(e), this._enabled = !0, this.fire("enabled")
		}
	},
	disable: function() {
		this._enabled && (this._buttonContainer && this._buttonContainer.removeClass("enabled"), this._enableButton && this._enableButton.setText(this.options.enableButton.enableText), this._adjustButton && this._adjustButton.remove(), this._map.off("move", this._moveHandler), this._map.removeLayer(this._layer), this._enabled = !1, this.fire("disabled"))
	},
	_createAdjustButton: function() {
		var e = this;
		this._adjustButton = new L.Control.Button({
			className: "adjust-button",
			text: this.options.adjustButton.text,
			onClick: function() {
				e._adjustToMap(), e.fire("adjustToZoomClick")
			}
		}).addTo(this._buttonContainer)
	},
	_initializeButtonContainer: function() {
		var e = this;
		this._buttonContainer = new L.Control.ButtonContainer({
			className: "location-filter button-container"
		}), this.options.enableButton && (this._enableButton = new L.Control.Button({
			className: "enable-button",
			text: this.options.enableButton.enableText,
			onClick: function() {
				e._enabled ? (e.disable(), e.fire("disableClick")) : (e.enable(), e.fire("enableClick"))
			}
		}).addTo(this._buttonContainer)), this._buttonContainer.addTo(this._map)
	}
}), L.GeoJsonNoVanish = L.GeoJSON.extend({
	initialize: function(e, t) {
		this.options = {
			threshold: 10
		}, L.GeoJSON.prototype.initialize.call(this, e, t)
	},
	onAdd: function(e) {
		this._map = e, this.eachLayer(e.addLayer, e), this._map.addEventListener("zoomend", this._onZoomEnd, this), this._onZoomEnd()
	},
	onRemove: function(e) {
		this._map.removeEventListener("zoomend", this._onZoomEnd, this), this.eachLayer(e.removeLayer, e), this._map = null
	},
	_onZoomEnd: function() {
		var e = this._map.getZoom() == this._map.getMaxZoom();
		this.eachLayer(function(t) {
			if (t.feature && t.feature.geometry && ("Point" != t.feature.geometry.type || t.object)) {
				var n = this._map.options.crs;
				if (t.object) {
					var i = t.object.getBounds(),
						r = n.latLngToPoint(i.getSouthWest(), t._map.getZoom()),
						a = n.latLngToPoint(i.getNorthEast(), t._map.getZoom()),
						o = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2));
					return (o > this.options.threshold || e) && (delete t.object.placeholder, this.addLayer(t.object), this.removeLayer(t)), void 0
				}
				if (!e && (!this.options.compress || this.options.compress(t.feature))) {
					var i = t.getBounds(),
						r = n.latLngToPoint(i.getSouthWest(), t._map.getZoom()),
						a = n.latLngToPoint(i.getNorthEast(), t._map.getZoom()),
						o = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2));
					if (!(o > this.options.threshold)) {
						var s = i.getCenter(),
							l = L.extend({}, t.feature);
						l.is_placeholder = !0, l.geometry = {
							type: "Point",
							coordinates: [s.lng, s.lat]
						};
						var u = L.GeoJSON.geometryToLayer(l, this.options.pointToLayer);
						t.placeholder = u, u.feature = l, this.resetStyle(u), u.object = t, u.on("click", function(e) {
							this.object.fireEvent(e.type, e)
						}), this.addLayer(u), this.removeLayer(t)
					}
				}
			}
		}, this)
	}
}), L.geoJsonNoVanish = function(e, t) {
	return new L.GeoJsonNoVanish(e, t)
}, L.OSM4Leaflet = L.Class.extend({
	initialize: function(e, t) {
		this.options = {
			data_mode: "xml",
			baseLayerClass: L.GeoJSON,
			baseLayerOptions: {}
		}, L.Util.setOptions(this, t), this._baseLayer = new this.options.baseLayerClass(null, this.options.baseLayerOptions), this._resultData = null, e && this.addData(e)
	},
	addData: function(e, t) {
		var n = this;
		setTimeout(function() {
			var i = "xml" == n.options.data_mode ? n._osmXML2geoJSON : n._overpassJSON2geoJSON,
				r = i.call(n, e);
			n._resultData = r, n.options.afterParse && n.options.afterParse(), setTimeout(function() {
				for (var e = 0; r.length > e; e++) n._baseLayer.addData(r[e]);
				t && t()
			}, 1)
		}, 1)
	},
	getGeoJSON: function() {
		return this._resultData
	},
	getBaseLayer: function() {
		return this._baseLayer
	},
	onAdd: function(e) {
		this._baseLayer.addTo(e)
	},
	onRemove: function(e) {
		e.removeLayer(this._baseLayer)
	},
	_overpassJSON2geoJSON: function(e) {
		for (var t = [], n = [], i = [], r = 0; e.elements.length > r; r++) switch (e.elements[r].type) {
			case "node":
				t.push(e.elements[r]);
				break;
			case "way":
				n.push(e.elements[r]);
				break;
			case "relation":
				i.push(e.elements[r]);
				break;
			default:
		}
		return this._convert2geoJSON(t, n, i)
	},
	_osmXML2geoJSON: function(e) {
		var t = [],
			n = [],
			i = [];
		return jQuery("node", e).each(function(e) {
			var n = {};
			jQuery(this).find("tag").each(function() {
				n[jQuery(this).attr("k")] = jQuery(this).attr("v")
			}), t[e] = {
				id: jQuery(this).attr("id"),
				lat: jQuery(this).attr("lat"),
				lon: jQuery(this).attr("lon"),
				version: jQuery(this).attr("version"),
				timestamp: jQuery(this).attr("timestamp"),
				changeset: jQuery(this).attr("changeset"),
				uid: jQuery(this).attr("uid"),
				user: jQuery(this).attr("user"),
				type: "node"
			}, jQuery.isEmptyObject(n) || (t[e].tags = n)
		}), jQuery("way", e).each(function(e) {
			var t = {}, i = [];
			jQuery(this).find("tag").each(function() {
				t[jQuery(this).attr("k")] = jQuery(this).attr("v")
			}), jQuery(this).find("nd").each(function(e) {
				i[e] = jQuery(this).attr("ref")
			}), n[e] = {
				id: jQuery(this).attr("id"),
				version: jQuery(this).attr("version"),
				timestamp: jQuery(this).attr("timestamp"),
				changeset: jQuery(this).attr("changeset"),
				uid: jQuery(this).attr("uid"),
				user: jQuery(this).attr("user"),
				type: "way"
			}, i.length > 0 && (n[e].nodes = i), jQuery.isEmptyObject(t) || (n[e].tags = t)
		}), jQuery("relation", e).each(function(e) {
			var t = {}, n = [];
			jQuery(this).find("tag").each(function() {
				t[jQuery(this).attr("k")] = jQuery(this).attr("v")
			}), jQuery(this).find("member").each(function(e) {
				n[e] = {
					ref: jQuery(this).attr("ref"),
					role: jQuery(this).attr("role"),
					type: jQuery(this).attr("type")
				}
			}), i[e] = {
				id: jQuery(this).attr("id"),
				tags: t,
				version: jQuery(this).attr("version"),
				timestamp: jQuery(this).attr("timestamp"),
				changeset: jQuery(this).attr("changeset"),
				uid: jQuery(this).attr("uid"),
				user: jQuery(this).attr("user"),
				type: "relation"
			}, n.length > 0 && (i[e].members = n), jQuery.isEmptyObject(t) || (i[e].tags = t)
		}), this._convert2geoJSON(t, n, i)
	},
	_convert2geoJSON: function(e, t, n) {
		function i(e) {
			for (var t, n, i, r, a, o, s = function(e) {
				return e[0]
			}, l = function(e) {
				return e[e.length - 1]
			}, u = []; e.length;) for (t = e.pop().nodes.slice(), u.push(t); e.length && s(t) !== l(t);) {
				for (n = s(t), i = l(t), r = 0; e.length > r; r++) {
					if (o = e[r].nodes, i === s(o)) {
						a = t.push, o = o.slice(1);
						break
					}
					if (i === l(o)) {
						a = t.push, o = o.slice(0, -1).reverse();
						break
					}
					if (n == l(o)) {
						a = t.unshift, o = o.slice(0, -1);
						break
					}
					if (n == s(o)) {
						a = t.unshift, o = o.slice(1).reverse();
						break
					}
					o = a = null
				}
				if (!o) break;
				e.splice(r, 1), a.apply(t, o)
			}
			return u
		}
		function r(e) {
			var t, n, i = function(e, t) {
				for (var n = 0; t.length > n; n++) if (a(t[n], e)) return !0;
				return !1
			}, r = function(e) {
				return jQuery.map(e, function(e) {
					return void 0 !== e ? [
						[+e.lat, +e.lon]
					] : void 0
				})
			}, a = function(e, t) {
				for (var n = e[0], i = e[1], r = !1, a = 0, o = t.length - 1; t.length > a; o = a++) {
					var s = t[a][0],
						l = t[a][1],
						u = t[o][0],
						c = t[o][1],
						h = l > i != c > i && (u - s) * (i - l) / (c - l) + s > n;
					h && (r = !r)
				}
				return r
			};
			for (e = r(e), t = 0; L.length > t; t++) if (n = r(L[t]), i(n, e)) return t
		}
		for (var a = {}, o = 0; e.length > o; o++) jQuery.isNumeric(e[o].lat) && (a[e[o].id] = e[o]);
		for (var s = {}, o = 0; e.length > o; o++) e[o].tags !== void 0 && function(e) {
			for (var t in e) if ("created_by" != t && "source" != t) return !0;
			return !1
		}(e[o].tags) && (s[e[o].id] = !0);
		for (var o = 0; n.length > o; o++) if (jQuery.isArray(n[o].members)) for (var l = 0; n[o].members.length > l; l++) "node" == n[o].members[l].type && (s[n[o].members[l].ref] = !0);
		for (var u = {}, c = {}, o = 0; t.length > o; o++) if (jQuery.isArray(t[o].nodes)) {
			u[t[o].id] = t[o];
			for (var l = 0; t[o].nodes.length > l; l++) c[t[o].nodes[l]] = !0, t[o].nodes[l] = a[t[o].nodes[l]]
		}
		for (var h = [], o = 0; e.length > o; o++)(!c[e[o].id] || s[e[o].id]) && h.push(e[o]);
		for (var d = [], o = 0; n.length > o; o++) jQuery.isArray(n[o].members) && (d[n[o].id] = n[o]);
		for (var o = 0; n.length > o; o++) if (jQuery.isArray(n[o].members)) for (var l = 0; n[o].members.length > l; l++) {
			var p;
			switch (n[o].members[l].type) {
				case "node":
					p = a[n[o].members[l].ref];
					break;
				case "way":
					p = u[n[o].members[l].ref];
					break;
				case "relation":
					p = d[n[o].members[l].ref]
			}
			p && (p.relations === void 0 && (p.relations = []), p.relations.push({
				role: n[o].members[l].role,
				rel: n[o].id,
				reltags: n[o].tags
			}))
		}
		var f = [],
			m = {
				type: "FeatureCollection",
				features: []
			};
		for (o = 0; h.length > o; o++) void 0 !== h[o].lon && void 0 !== h[o].lat && m.features.push({
			type: "Feature",
			properties: {
				type: "node",
				id: h[o].id,
				tags: h[o].tags || {},
				relations: h[o].relations || [],
				meta: function(e) {
					var t = {};
					for (S in e) void 0 != e[S] && (t[S] = e[S]);
					return t
				}({
					timestamp: h[o].timestamp,
					version: h[o].version,
					changeset: h[o].changeset,
					user: h[o].user,
					uid: h[o].uid
				})
			},
			geometry: {
				type: "Point",
				coordinates: [+h[o].lon, +h[o].lat]
			}
		});
		for (var g = {
			type: "FeatureCollection",
			features: []
		}, y = {
			type: "FeatureCollection",
			features: []
		}, o = 0; n.length > o; o++) if (n[o].tags !== void 0 && ("multipolygon" == n[o].tags.type || "boundary" == n[o].tags.type)) {
			if (!jQuery.isArray(n[o].members)) continue;
			var v = 0;
			jQuery.each(n[o].members, function(e, t) {
				u[t.ref] && (u[t.ref].is_multipolygon_outline = !0)
			});
			for (var l = 0; n[o].members.length > l; l++) "outer" == n[o].members[l].role && v++;
			if (0 == v) continue;
			var b = !1;
			if (1 != v || function(e) {
				for (var t in e) if ("created_by" != t && "source" != t && "type" != t) return !0;
				return !1
			}(n[o].tags) || (b = !0), b) {
				n[o].tainted = !1;
				for (var w = [], x = [], k = void 0, l = 0; n[o].members.length > l; l++) if ("way" == n[o].members[l].type && -1 != jQuery.inArray(n[o].members[l].role, ["outer", "inner"])) {
					var _ = u[n[o].members[l].ref];
					if (_ === void 0) {
						n[o].tainted = !0;
						continue
					}
					for (var C = [], S = 0; _.nodes.length > S; S++) "object" == typeof _.nodes[S] ? C.push([+_.nodes[S].lon, +_.nodes[S].lat]) : n[o].tainted = !0;
					"outer" == n[o].members[l].role ? (w.push(C), _.is_multipolygon = !0, k = _) : "inner" == n[o].members[l].role && (x.push(C), _.is_multipolygon_inner = !0)
				}
				if (k === void 0) continue;
				if (0 == w[0].length) continue;
				B = "Polygon";
				var E = {
					type: "Feature",
					properties: {
						type: "way",
						id: k.id,
						tags: k.tags || {},
						relations: k.relations || [],
						meta: function(e) {
							var t = {};
							for (S in e) void 0 != e[S] && (t[S] = e[S]);
							return t
						}({
							timestamp: k.timestamp,
							version: k.version,
							changeset: k.changeset,
							user: k.user,
							uid: k.uid
						})
					},
					geometry: {
						type: B,
						coordinates: [].concat(w, x)
					}
				};
				n[o].tainted && (E.properties.tainted = !0), y.features.push(E)
			} else {
				var T, M = !1;
				T = jQuery.grep(n[o].members, function(e) {
					return "way" === e.type
				}), T = jQuery.map(T, function(e) {
					var t = u[e.ref];
					return void 0 === t ? (M = !0, void 0) : {
						id: e.ref,
						role: e.role || "outer",
						way: t,
						nodes: jQuery.grep(t.nodes, function(e) {
							return void 0 !== e ? !0 : (M = !0, !1)
						})
					}
				});
				var L, P;
				L = i(jQuery.grep(T, function(e) {
					return "outer" === e.role
				})), P = i(jQuery.grep(T, function(e) {
					return "inner" === e.role
				}));
				var A;
				A = jQuery.map(L, function(e) {
					return [[e]]
				});
				for (var l = 0; P.length > l; l++) {
					var N = r(P[l]);
					void 0 !== N && A[N].push(P[l])
				}
				var O = [];
				if (O = jQuery.map(A, function(e) {
					var t = jQuery.map(e, function(e) {
						return void 0 === e || 1 >= e.length ? (M = !0, void 0) : [jQuery.map(e, function(e) {
							return void 0 === e || void 0 === e.lat ? (M = !0, void 0) : [
								[+e.lon, +e.lat]
							]
						})]
					});
					return 0 == t.length ? (M = !0, void 0) : [t]
				}), 0 == O.length) continue;
				var E = {
					type: "Feature",
					properties: {
						type: "relation",
						id: n[o].id,
						tags: n[o].tags || {},
						relations: n[o].relations || [],
						meta: function(e) {
							var t = {};
							for (S in e) void 0 != e[S] && (t[S] = e[S]);
							return t
						}({
							timestamp: n[o].timestamp,
							version: n[o].version,
							changeset: n[o].changeset,
							user: n[o].user,
							uid: n[o].uid
						})
					},
					geometry: {
						type: "MultiPolygon",
						coordinates: O
					}
				};
				M && (E.properties.tainted = !0), y.features.push(E)
			}
		}
		for (var o = 0; t.length > o; o++) if (jQuery.isArray(t[o].nodes) && !t[o].is_multipolygon) {
			for (t[o].tainted = !1, t[o].hidden = !1, C = [], l = 0; t[o].nodes.length > l; l++) "object" == typeof t[o].nodes[l] ? C.push([+t[o].nodes[l].lon, +t[o].nodes[l].lat]) : t[o].tainted = !0;
			if (!(1 >= C.length)) {
				var B = "LineString",
					$ = function(e, t, n, i) {
						var r = e[t];
						return !(void 0 === r || "no" === r || n && -1 !== jQuery.inArray(r, n) || i && -1 === jQuery.inArray(r, i))
					};
				t[o].nodes[0] !== void 0 && t[o].nodes[0] == t[o].nodes[t[o].nodes.length - 1] && t[o].tags && "no" !== t[o].tags.area && (t[o].tags !== void 0 && ($(t[o].tags, "building") || $(t[o].tags, "highway", void 0, "services;rest_area;escape".split(";")) || $(t[o].tags, "natural", "coastline;ridge;arete;tree_row".split(";")) || $(t[o].tags, "landuse") || $(t[o].tags, "waterway", void 0, "riverbank;dock;boatyard;dam".split(";")) || $(t[o].tags, "amenity") || $(t[o].tags, "leisure") || $(t[o].tags, "barrier", void 0, "city_wall;ditch;hedge;retaining_wall;wall;spikes".split(";")) || $(t[o].tags, "railway", void 0, "station;turntable;roundhouse;platform".split(";")) || $(t[o].tags, "area") || $(t[o].tags, "boundary") || $(t[o].tags, "man_made", "cutline;embankment;pipeline".split(";")) || $(t[o].tags, "power", void 0, "generator;station;sub_station;transformer".split(";")) || $(t[o].tags, "place") || $(t[o].tags, "shop") || $(t[o].tags, "aeroway", "taxiway".split(";")) || $(t[o].tags, "tourism") || $(t[o].tags, "historic") || $(t[o].tags, "public_transport") || $(t[o].tags, "office") || $(t[o].tags, "building:part") || $(t[o].tags, "military") || $(t[o].tags, "craft")) && (B = "Polygon"), "Polygon" == B && (C = [C]));
				var E = {
					type: "Feature",
					properties: {
						type: "way",
						id: t[o].id,
						tags: t[o].tags || {},
						relations: t[o].relations || [],
						meta: function(e) {
							var t = {};
							for (S in e) void 0 != e[S] && (t[S] = e[S]);
							return t
						}({
							timestamp: t[o].timestamp,
							version: t[o].version,
							changeset: t[o].changeset,
							user: t[o].user,
							uid: t[o].uid
						})
					},
					geometry: {
						type: B,
						coordinates: C
					}
				};
				t[o].tainted && (E.properties.tainted = !0), t[o].is_multipolygon_outline && (E.properties.mp_outline = !0), "LineString" == B ? g.features.push(E) : y.features.push(E)
			}
		}
		return f.push(y), f.push(g), f.push(m), f
	}
}), L.osm4Leaflet = function(e, t) {
	return new L.OSM4Leaflet(e, t)
};
var styleparser = {};
styleparser.Condition = function() {}, styleparser.Condition.prototype = {
	type: "",
	params: [],
	init: function(e) {
		return this.type = e, this.params = Array.prototype.slice.call(arguments, 1), this
	},
	test: function(e) {
		var t = this.params;
		switch (this.type) {
			case "eq":
				return e[t[0]] == t[1];
			case "ne":
				return e[t[0]] != t[1];
			case "regex":
				var n = RegExp(t[1], "i");
				return n.test(e[t[0]]);
			case "true":
				return "true" == e[t[0]] || "yes" == e[t[0]] || "1" == e[t[0]];
			case "false":
				return "false" == e[t[0]] || "no" == e[t[0]] || "0" == e[t[0]];
			case "set":
				return void 0 !== e[t[0]] && "" !== e[t[0]];
			case "unset":
				return void 0 === e[t[0]] || "" === e[t[0]];
			case "<":
				return Number(e[t[0]]) < Number(t[1]);
			case "<=":
				return Number(e[t[0]]) <= Number(t[1]);
			case ">":
				return Number(e[t[0]]) > Number(t[1]);
			case ">=":
				return Number(e[t[0]]) >= Number(t[1])
		}
		return !1
	},
	toString: function() {
		return "[" + this.type + ": " + this.params + "]"
	}
}, styleparser.Rule = function() {}, styleparser.Rule.prototype = {
	conditions: [],
	isAnd: !0,
	minZoom: 0,
	maxZoom: 255,
	subject: "",
	addSubject: function(e) {
		this.subject = e, this.conditions = []
	},
	addCondition: function(e) {
		this.conditions.push(e)
	},
	test: function(e, t, n) {
		if ("" !== this.subject && !e.isSubject(this.subject)) return !1;
		if (this.minZoom > n || n > this.maxZoom) return !1;
		var i = !0,
			r = 0,
			a = this.isAnd;
		return this.conditions.forEach(function(e) {
			var n = e.test(t);
			i = 0 === r ? n : a ? i && n : i || n, r++
		}), i
	},
	toString: function() {
		return this.subject + " z" + this.minZoom + "-" + this.maxZoom + ": " + this.conditions
	}
}, styleparser.RuleChain = function() {
	this.rules = [], this.subpart = "default"
}, styleparser.RuleChain.prototype = {
	addRule: function(e) {
		this.rules.push(new styleparser.Rule), this.rules[this.rules.length - 1].addSubject(e)
	},
	addConditionToLast: function(e) {
		this.rules[this.rules.length - 1].addCondition(e)
	},
	addZoomToLast: function(e, t) {
		this.rules[this.rules.length - 1].minZoom = e, this.rules[this.rules.length - 1].maxZoom = t
	},
	length: function() {
		return this.rules.length
	},
	setSubpart: function(e) {
		this.subpart = e || "default"
	},
	test: function(e, t, n, i) {
		if (0 === this.rules.length) return !0; - 1 == e && (e = this.rules.length - 1);
		var r = this.rules[e];
		if (!r.test(t, n, i)) return !1;
		if (0 === e) return !0;
		for (var a = t.getParentObjects(), o = 0; a.length > o; o++) {
			var s = a[o];
			if (this.test(e - 1, s, s.tags, i)) return !0
		}
		return !1
	}
}, styleparser.Style = function() {
	this.__init__()
}, styleparser.Style.prototype = {
	merged: !1,
	edited: !1,
	properties: [],
	styleType: "Style",
	evals: null,
	__init__: function() {
		this.evals = {}
	},
	drawn: function() {
		return !1
	},
	has: function(e) {
		return this.properties.indexOf(e) > -1
	},
	mergeWith: function(e) {
		for (var t in this.properties) e[t] && (this[t] = e[t]);
		this.merged = !0
	},
	setPropertyFromString: function(e, t, n) {
		return this.edited = !0, n ? (this.evals[e] = t, void 0) : ("boolean" == typeof this[e] ? t = Boolean(t) : "number" == typeof this[e] ? t = Number(t) : this[e] && this[e].constructor == Array && (t = t.split(",").map(function(e) {
			return Number(e)
		})), this[e] = t, !0)
	},
	runEvals: function(tags) {
		var eval_functions = {
			tag: function(e) {
				return tags[e]
			},
			prop: function() {},
			cond: function(e, t, n) {
				return e ? t : n
			},
			any: function() {
				for (var e = 0; arguments.length > e; e++) if (arguments[e]) return arguments[e]
			},
			max: Math.max,
			min: Math.min
		};
		for (var k in this.evals) try {
			this.setPropertyFromString(k, eval("with (tags) with (eval_functions) {" + this.evals[k] + "}"), !1)
		} catch (e) {}
	},
	toString: function() {
		var e = "";
		for (var t in this.properties) this.hasOwnProperty(t) && (e += t + "=" + this[t] + "; ");
		return e
	}
}, styleparser.inherit_from_Style = function(e) {
	for (var t in styleparser.Style.prototype) void 0 === e[t] && (e[t] = styleparser.Style.prototype[t])
}, styleparser.InstructionStyle = function() {
	this.__init__()
}, styleparser.InstructionStyle.prototype = {
	set_tags: null,
	breaker: !1,
	styleType: "InstructionStyle",
	__init__: function() {},
	addSetTag: function(e, t) {
		this.edited = !0, this.set_tags || (this.set_tags = {}), this.set_tags[e] = t
	}
}, styleparser.inherit_from_Style(styleparser.InstructionStyle.prototype), styleparser.PointStyle = function() {
	this.__init__()
}, styleparser.PointStyle.prototype = {
	properties: ["icon_image", "icon_width", "icon_height", "icon_opacity", "rotation"],
	icon_image: null,
	icon_width: 0,
	icon_height: 0 / 0,
	rotation: 0 / 0,
	styleType: "PointStyle",
	drawn: function() {
		return null !== this.icon_image
	},
	maxwidth: function() {
		return this.evals.icon_width ? 0 : this.icon_width
	}
}, styleparser.inherit_from_Style(styleparser.PointStyle.prototype), styleparser.ShapeStyle = function() {
	this.__init__()
}, styleparser.ShapeStyle.prototype = {
	properties: ["width", "color", "opacity", "dashes", "linecap", "linejoin", "line_style", "fill_image", "fill_color", "fill_opacity", "casing_width", "casing_color", "casing_opacity", "casing_dashes", "layer"],
	width: 0,
	color: null,
	opacity: 0 / 0,
	dashes: [],
	linecap: null,
	linejoin: null,
	line_style: null,
	fill_image: null,
	fill_color: null,
	fill_opacity: 0 / 0,
	casing_width: 0 / 0,
	casing_color: null,
	casing_opacity: 0 / 0,
	casing_dashes: [],
	layer: 0 / 0,
	styleType: "ShapeStyle",
	drawn: function() {
		return this.fill_image || !isNaN(this.fill_color) || this.width || this.casing_width
	},
	maxwidth: function() {
		return this.evals.width || this.evals.casing_width ? 0 : this.width + (this.casing_width ? 2 * this.casing_width : 0)
	},
	strokeStyler: function() {
		var e, t;
		switch (this.linecap) {
			case "round":
				e = "round";
				break;
			case "square":
				e = "square";
				break;
			default:
				e = "butt"
		}
		switch (this.linejoin) {
			case "bevel":
				t = "bevel";
				break;
			case "miter":
				t = 4;
				break;
			default:
				t = "round"
		}
		return {
			color: this.dojoColor(this.color ? this.color : 0, this.opacity ? this.opacity : 1),
			style: "Solid",
			width: this.width,
			cap: e,
			join: t
		}
	},
	shapeStrokeStyler: function() {
		return isNaN(this.casing_color) ? {
			width: 0
		} : {
			color: this.dojoColor(this.casing_color, this.casing_opacity ? this.casing_opacity : 1),
			width: this.casing_width ? this.casing_width : 1
		}
	},
	shapeFillStyler: function() {
		return isNaN(this.color) ? null : this.dojoColor(this.color, this.opacity ? this.opacity : 1)
	},
	fillStyler: function() {
		return this.dojoColor(this.fill_color, this.fill_opacity ? this.fill_opacity : 1)
	},
	casingStyler: function() {
		var e, t;
		switch (this.linecap) {
			case "round":
				e = "round";
				break;
			case "square":
				e = "square";
				break;
			default:
				e = "butt"
		}
		switch (this.linejoin) {
			case "bevel":
				t = "bevel";
				break;
			case "miter":
				t = 4;
				break;
			default:
				t = "round"
		}
		return {
			color: this.dojoColor(this.casing_color ? this.casing_color : 0, this.casing_opacity ? this.casing_opacity : 1),
			width: this.width + 2 * this.casing_width,
			style: "Solid",
			cap: e,
			join: t
		}
	}
}, styleparser.inherit_from_Style(styleparser.ShapeStyle.prototype), styleparser.TextStyle = function() {
	this.__init__()
}, styleparser.TextStyle.prototype = {
	properties: ["font_family", "font_bold", "font_italic", "font_caps", "font_underline", "font_size", "text_color", "text_offset", "max_width", "text", "text_halo_color", "text_halo_radius", "text_center", "letter_spacing"],
	font_family: null,
	font_bold: !1,
	font_italic: !1,
	font_underline: !1,
	font_caps: !1,
	font_size: 0 / 0,
	text_color: null,
	text_offset: 0 / 0,
	max_width: 0 / 0,
	text: null,
	text_halo_color: null,
	text_halo_radius: 0,
	text_center: !0,
	letter_spacing: 0,
	styleType: "TextStyle",
	fontStyler: function() {
		return {
			family: this.font_family ? this.font_family : "Arial",
			size: this.font_size ? 2 * this.font_size : "10px",
			weight: this.font_bold ? "bold" : "normal",
			style: this.font_italic ? "italic" : "normal"
		}
	},
	textStyler: function(e) {
		return {
			decoration: this.font_underline ? "underline" : "none",
			align: "middle",
			text: e
		}
	},
	fillStyler: function() {
		return this.dojoColor(0, 1)
	}
}, styleparser.inherit_from_Style(styleparser.TextStyle.prototype), styleparser.ShieldStyle = function() {
	this.__init__()
}, styleparser.ShieldStyle.prototype = {
	has: function(e) {
		return this.properties.indexOf(e) > -1
	},
	properties: ["shield_image", "shield_width", "shield_height"],
	shield_image: null,
	shield_width: 0 / 0,
	shield_height: 0 / 0,
	styleType: "ShieldStyle"
}, styleparser.inherit_from_Style(styleparser.ShieldStyle.prototype), styleparser.StyleChooser = function() {
	this.ruleChains = [new styleparser.RuleChain], this.styles = []
}, styleparser.StyleChooser.prototype = {
	ruleChains: [],
	styles: [],
	zoomSpecific: !1,
	rcpos: 0,
	stylepos: 0,
	constructor: function() {},
	currentChain: function() {
		return this.ruleChains[this.ruleChains.length - 1]
	},
	newRuleChain: function() {
		this.ruleChains[this.ruleChains.length - 1].length() > 0 && this.ruleChains.push(new styleparser.RuleChain)
	},
	addStyles: function(e) {
		this.styles = this.styles.concat(e)
	},
	updateStyles: function(e, t, n, i) {
		function r(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
			return e
		}
		this.zoomSpecific && (n.validAt = i);
		for (var a in this.ruleChains) {
			var o = this.ruleChains[a];
			if (o.test(-1, e, t, i)) {
				n.addSubpart(o.subpart);
				for (var s in this.styles) {
					var l, u = this.styles[s];
					switch (u.styleType) {
						case "ShapeStyle":
							n.maxwidth = Math.max(n.maxwidth, u.maxwidth()), l = n.shapeStyles;
							break;
						case "ShieldStyle":
							l = n.shieldStyles;
							break;
						case "TextStyle":
							l = n.textStyles;
							break;
						case "PointStyle":
							n.maxwidth = Math.max(n.maxwidth, u.maxwidth()), l = n.pointStyles;
							break;
						case "InstructionStyle":
							if (u.breaker) return;
							for (var c in u.set_tags) t[c] = u.set_tags[c];
							l = {}
					}
					u.drawn() && (t[":drawn"] = "yes"), t._width = n.maxwidth, u.runEvals(t), l[o.subpart] ? r(l[o.subpart], u) : l[o.subpart] = r({}, u)
				}
			}
		}
	}
}, styleparser.StyleList = function() {
	this.shapeStyles = {}, this.textStyles = {}, this.pointStyles = {}, this.shieldStyles = {}
}, styleparser.StyleList.prototype = {
	maxwidth: 0,
	subparts: [],
	validAt: -1,
	hasStyles: function() {
		return this.hasShapeStyles() || this.hasTextStyles() || this.hasPointStyles() || this.hasShieldStyles()
	},
	hasFills: function() {
		for (var e in this.shapeStyles) if (!isNaN(this.shapeStyles(e).fill_color) || this.shapeStyles(e).fill_image) return !0;
		return !1
	},
	layerOverride: function() {
		for (var e in this.shapeStyles) if (!isNaN(this.shapeStyles[e].layer)) return this.shapeStyles[e].layer;
		return 0 / 0
	},
	addSubpart: function(e) {
		-1 == this.subparts.indexOf(e) && this.subparts.push(e)
	},
	isValidAt: function(e) {
		return -1 == this.validAt || this.validAt == e
	},
	toString: function() {
		var e, t = "";
		for (e in this.shapeStyles) t += "- SS " + e + "=" + this.shapeStyles[e] + "\n";
		for (e in this.textStyles) t += "- TS " + e + "=" + this.textStyles[e] + "\n";
		for (e in this.pointStyles) t += "- PS " + e + "=" + this.pointStyles[e] + "\n";
		for (e in this.shieldStyles) t += "- sS " + e + "=" + this.shieldStyles[e] + "\n";
		return t
	},
	hasShapeStyles: function() {
		for (var e in shapeStyles) return !0;
		return !1
	},
	hasTextStyles: function() {
		for (var e in textStyles) return !0;
		return !1
	},
	hasPointStyles: function() {
		for (var e in pointStyles) return !0;
		return !1
	},
	hasShieldStyles: function() {
		for (var e in shieldStyles) return !0;
		return !1
	}
}, styleparser.RuleSet = function() {}, styleparser.RuleSet.prototype = {
	choosers: [],
	getStyles: function(e, t, n) {
		var i = new styleparser.StyleList;
		for (var r in this.choosers) this.choosers[r].updateStyles(e, t, i, n);
		return i
	},
	parseCSS: function(e) {
		var t = 0,
			n = new styleparser.StyleChooser;
		this.choosers = [], e = e.replace(/[\r\n]/g, "");
		for (var i = {}; e.length > 0;) if (i = this.COMMENT.exec(e)) e = e.replace(this.COMMENT, "");
		else if (i = this.WHITESPACE.exec(e)) e = e.replace(this.WHITESPACE, "");
		else if (i = this.CLASS.exec(e)) t == this.oDECLARATION && (this.saveChooser(n), n = new styleparser.StyleChooser), e = e.replace(this.CLASS, ""), n.currentChain().addConditionToLast((new styleparser.Condition).init("set", i[1])), t = this.oCONDITION;
		else if (i = this.NOT_CLASS.exec(e)) t == this.oDECLARATION && (this.saveChooser(n), n = new styleparser.StyleChooser), e = e.replace(this.NOT_CLASS, ""), n.currentChain().addConditionToLast((new styleparser.Condition).init("unset", i[1])), t = this.oCONDITION;
		else if (i = this.ZOOM.exec(e)) {
			t != this.oOBJECT && t != this.oCONDITION && n.currentChain().addRule(), e = e.replace(this.ZOOM, "");
			var r = this.parseZoom(i[1]);
			n.currentChain().addZoomToLast(r[0], r[1]), n.zoomSpecific = !0, t = this.oZOOM
		} else if (i = this.GROUP.exec(e)) e = e.replace(this.GROUP, ""), n.newRuleChain(), t = this.oGROUP;
		else if (i = this.CONDITION.exec(e)) t == this.oDECLARATION && (this.saveChooser(n), n = new styleparser.StyleChooser), t != this.oOBJECT && t != this.oZOOM && t != this.oCONDITION && n.currentChain().addRule(), e = e.replace(this.CONDITION, ""), n.currentChain().addConditionToLast(this.parseCondition(i[1])), t = this.oCONDITION;
		else if (i = this.OBJECT.exec(e)) t == this.oDECLARATION && (this.saveChooser(n), n = new styleparser.StyleChooser), e = e.replace(this.OBJECT, ""), n.currentChain().addRule(i[1]), t = this.oOBJECT;
		else if (i = this.SUBPART.exec(e)) t == this.oDECLARATION && (this.saveChooser(n), n = new styleparser.StyleChooser), e = e.replace(this.SUBPART, ""), n.currentChain().setSubpart(i[1]), t = this.oSUBPART;
		else {
			if (!(i = this.DECLARATION.exec(e))) throw (i = this.UNKNOWN.exec(e)) ? (e = e.replace(this.UNKNOWN, ""), Error('Error while parsing MapCSS at "' + i[1] + (e.length > 38 ? e.substr(0, 36) + "..." : e) + '"')) : Error("MapCSS parsing choked on " + e);
			e = e.replace(this.DECLARATION, ""), n.addStyles(this.parseDeclaration(i[1])), t = this.oDECLARATION
		}
		t == this.oDECLARATION && (this.saveChooser(n), n = new styleparser.StyleChooser), this.callback && this.callback()
	},
	saveChooser: function(e) {
		this.choosers.push(e)
	},
	parseDeclaration: function(e) {
		var t, n, i = [],
			r = {}, a = {}, o = new styleparser.ShapeStyle,
			s = new styleparser.PointStyle,
			l = new styleparser.TextStyle,
			u = new styleparser.ShieldStyle,
			c = new styleparser.InstructionStyle,
			h = e.split(";"),
			d = {};
		for (var p in h) {
			var f = h[p];
			(a = this.ASSIGNMENT_EVAL.exec(f)) ? (t = a[1].replace(this.DASH, "_"), r[t] = a[2], d[t] = !0) : (a = this.ASSIGNMENT.exec(f)) ? (t = a[1].replace(this.DASH, "_"), r[t] = a[2]) : (a = this.SET_TAG_EVAL.exec(f)) || ((a = this.SET_TAG.exec(f)) ? c.addSetTag(a[1], a[2]) : (a = this.SET_TAG_TRUE.exec(f)) ? c.addSetTag(a[1], !0) : (a = this.EXIT.exec(f)) && c.setPropertyFromString("breaker", !0))
		}
		r.font_weight && (r.font_bold = r.font_weight.match(this.BOLD) ? !0 : !1, delete r.font_weight), r.font_style && (r.font_italic = r.font_style.match(this.ITALIC) ? !0 : !1, delete r.font_style), r.text_decoration && (r.font_underline = r.text_decoration.match(this.UNDERLINE) ? !0 : !1, delete r.text_decoration), r.text_position && (r.text_center = r.text_position.match(this.CENTER) ? !0 : !1, delete r.text_position), r.text_transform && (r.font_caps = r.text_transform.match(this.CAPS) ? !0 : !1, delete r.text_transform);
		for (f in r) n = r[f], o.has(f) ? o.setPropertyFromString(f, n, d[f]) : s.has(f) ? s.setPropertyFromString(f, n, d[f]) : l.has(f) ? l.setPropertyFromString(f, n, d[f]) : u.has(f) && u.setPropertyFromString(f, n, d[f]);
		return o.edited && i.push(o), s.edited && i.push(s), l.edited && i.push(l), u.edited && i.push(u), c.edited && i.push(c), i
	},
	parseZoom: function(e) {
		var t = {}, n = 999,
			i = -999;
		return (t = this.ZOOM_MINMAX.exec(e)) ? [t[1], t[2]] : (t = this.ZOOM_MIN.exec(e)) ? [t[1], n] : (t = this.ZOOM_MAX.exec(e)) ? [i, t[1]] : (t = this.ZOOM_SINGLE.exec(e)) ? [t[1], t[1]] : null
	},
	parseCondition: function(e) {
		var t = {};
		return (t = this.CONDITION_TRUE.exec(e)) ? (new styleparser.Condition).init("true", t[1]) : (t = this.CONDITION_FALSE.exec(e)) ? (new styleparser.Condition).init("false", t[1]) : (t = this.CONDITION_SET.exec(e)) ? (new styleparser.Condition).init("set", t[1]) : (t = this.CONDITION_UNSET.exec(e)) ? (new styleparser.Condition).init("unset", t[1]) : (t = this.CONDITION_NE.exec(e)) ? (new styleparser.Condition).init("ne", t[1], t[2]) : (t = this.CONDITION_GT.exec(e)) ? (new styleparser.Condition).init(">", t[1], t[2]) : (t = this.CONDITION_GE.exec(e)) ? (new styleparser.Condition).init(">=", t[1], t[2]) : (t = this.CONDITION_LT.exec(e)) ? (new styleparser.Condition).init("<", t[1], t[2]) : (t = this.CONDITION_LE.exec(e)) ? (new styleparser.Condition).init("<=", t[1], t[2]) : (t = this.CONDITION_REGEX.exec(e)) ? (new styleparser.Condition).init("regex", t[1], t[2]) : (t = this.CONDITION_EQ.exec(e)) ? (new styleparser.Condition).init("eq", t[1], t[2]) : null
	},
	parseCSSColor: function(e) {
		if (e = e.toLowerCase(), this.CSSCOLORS[e]) return this.CSSCOLORS[e];
		var t = this.HEX.exec(e);
		return t ? 3 == t[1].length ? Number("0x" + t[1].charAt(0) + t[1].charAt(0) + t[1].charAt(1) + t[1].charAt(1) + t[1].charAt(2) + t[1].charAt(2)) : 6 == t[1].length ? Number("0x" + t[1]) : Number("0x000000") : 0
	},
	WHITESPACE: /^\s+/,
	COMMENT: /^\/\*.+?\*\/\s*/,
	CLASS: /^([\.:]\w+)\s*/,
	NOT_CLASS: /^!([\.:]\w+)\s*/,
	ZOOM: /^\|\s*z([\d\-]+)\s*/i,
	GROUP: /^,\s*/i,
	CONDITION: /^\[(.+?)\]\s*/,
	OBJECT: /^(\w+)\s*/,
	DECLARATION: /^\{(.+?)\}\s*/,
	SUBPART: /^::(\w+)\s*/,
	UNKNOWN: /^(\S+)\s*/,
	ZOOM_MINMAX: /^(\d+)\-(\d+)$/,
	ZOOM_MIN: /^(\d+)\-$/,
	ZOOM_MAX: /^\-(\d+)$/,
	ZOOM_SINGLE: /^(\d+)$/,
	CONDITION_TRUE: /^\s*([:\w]+)\s*=\s*yes\s*$/i,
	CONDITION_FALSE: /^\s*([:\w]+)\s*=\s*no\s*$/i,
	CONDITION_SET: /^\s*([:\w]+)\s*$/,
	CONDITION_UNSET: /^\s*!([:\w]+)\s*$/,
	CONDITION_EQ: /^\s*([:\w]+)\s*=\s*(.+)\s*$/,
	CONDITION_NE: /^\s*([:\w]+)\s*!=\s*(.+)\s*$/,
	CONDITION_GT: /^\s*([:\w]+)\s*>\s*(.+)\s*$/,
	CONDITION_GE: /^\s*([:\w]+)\s*>=\s*(.+)\s*$/,
	CONDITION_LT: /^\s*([:\w]+)\s*<\s*(.+)\s*$/,
	CONDITION_LE: /^\s*([:\w]+)\s*<=\s*(.+)\s*$/,
	CONDITION_REGEX: /^\s*([:\w]+)\s*=~\/\s*(.+)\/\s*$/,
	ASSIGNMENT_EVAL: /^\s*(\S+)\s*\:\s*eval\s*\(\s*['"](.+?)['"]\s*\)\s*$/i,
	ASSIGNMENT: /^\s*(\S+)\s*\:\s*(.+?)\s*$/,
	SET_TAG_EVAL: /^\s*set\s+(\S+)\s*=\s*eval\s*\(\s*'(.+?)'\s*\)\s*$/i,
	SET_TAG: /^\s*set\s+(\S+)\s*=\s*(.+?)\s*$/i,
	SET_TAG_TRUE: /^\s*set\s+(\S+)\s*$/i,
	EXIT: /^\s*exit\s*$/i,
	oZOOM: 2,
	oGROUP: 3,
	oCONDITION: 4,
	oOBJECT: 5,
	oDECLARATION: 6,
	oSUBPART: 7,
	DASH: /\-/g,
	COLOR: /color$/,
	BOLD: /^bold$/i,
	ITALIC: /^italic|oblique$/i,
	UNDERLINE: /^underline$/i,
	CAPS: /^uppercase$/i,
	CENTER: /^center$/i,
	FALSE: /^(no|false|0)$/i,
	HEX: /^#([0-9a-f]+)$/i,
	CSSCOLORS: {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgrey: 13882323,
		lightgreen: 9498256,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662680,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14184595,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	}
};
var Base64 = {
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode: function(e, t) {
		var n = "";
		if (e = unescape(encodeURIComponent(e)), "function" == typeof window.btoa) n = window.btoa(e);
		else for (var i, r, a, o, s, l, u, c = 0; e.length > c;) i = e.charCodeAt(c++), r = e.charCodeAt(c++), a = e.charCodeAt(c++), o = i >> 2, s = (3 & i) << 4 | r >> 4, l = (15 & r) << 2 | a >> 6, u = 63 & a, isNaN(r) ? l = u = 64 : isNaN(a) && (u = 64), n = n + this._keyStr.charAt(o) + this._keyStr.charAt(s) + this._keyStr.charAt(l) + this._keyStr.charAt(u);
		return t ? n : this._convert_to_base64url(n)
	},
	decode: function(e) {
		var t = "";
		if (e = this._convert_to_base64nopad(e), e = e.replace(/[^A-Za-z0-9\+\/]/g, ""), e += "==".substring(0, (4 - e.length % 4) % 4), "function" == typeof window.btoa) t = window.atob(e);
		else for (var n, i, r, a, o, s, l, u = 0; e.length > u;) a = this._keyStr.indexOf(e.charAt(u++)), o = this._keyStr.indexOf(e.charAt(u++)), s = this._keyStr.indexOf(e.charAt(u++)), l = this._keyStr.indexOf(e.charAt(u++)), n = a << 2 | o >> 4, i = (15 & o) << 4 | s >> 2, r = (3 & s) << 6 | l, t += String.fromCharCode(n), 64 != s && (t += String.fromCharCode(i)), 64 != l && (t += String.fromCharCode(r));
		return t = decodeURIComponent(escape(t))
	},
	encodeNum: function(e, t) {
		var n = "";
		if (0 == e) return this._keyStr.charAt(0);
		var i = !1;
		for (0 > e && (i = !0, e = Math.abs(e)); e > 0;) n = this._keyStr.charAt(e % 64) + n, e -= e % 64, e /= 64;
		return i && (n = "~" + n), t ? n : this._convert_to_base64url(n)
	},
	decodeNum: function(e) {
		e = this._convert_to_base64nopad(e), e = e.replace(/[^A-Za-z0-9\+\/.]/g, "");
		var t = 0,
			n = !1;
		"." == e.charAt(0) && (n = !0, e = e.substr(1));
		for (var i = 0; e.length > i; i++) t += this._keyStr.indexOf(e.charAt(e.length - 1 - i)) * Math.pow(64, i);
		return (n ? -1 : 1) * t
	},
	_convert_to_base64url: function(e) {
		return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
	},
	_convert_to_base64nopad: function(e) {
		return e.replace(/\-/g, "+").replace(/_/g, "/")
	},
	_utf8_encode: function(e) {
		e = e.replace(/\r\n/g, "\n");
		for (var t = "", n = 0; e.length > n; n++) {
			var i = e.charCodeAt(n);
			128 > i ? t += String.fromCharCode(i) : i > 127 && 2048 > i ? (t += String.fromCharCode(192 | i >> 6), t += String.fromCharCode(128 | 63 & i)) : (t += String.fromCharCode(224 | i >> 12), t += String.fromCharCode(128 | 63 & i >> 6), t += String.fromCharCode(128 | 63 & i))
		}
		return t
	},
	_utf8_decode: function(e) {
		for (var t = "", n = 0, i = c1 = c2 = 0; e.length > n;) i = e.charCodeAt(n), 128 > i ? (t += String.fromCharCode(i), n++) : i > 191 && 224 > i ? (c2 = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & c2), n += 2) : (c2 = e.charCodeAt(n + 1), c3 = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);
		return t
	}
}, JXON = new function() {
		function e(e) {
			return u.test(e) ? null : c.test(e) ? "true" === e.toLowerCase() : isFinite(e) ? parseFloat(e) : isFinite(Date.parse(e)) ? new Date(e) : e
		}
		function t() {}
		function n(e) {
			return null === e ? new t : e instanceof Object ? e : new e.constructor(e)
		}
		function i(t, r, u, c) {
			var h, d, p = l.length,
				f = t.hasChildNodes(),
				m = t.hasAttributes(),
				g = Boolean(2 & r),
				y = 0,
				v = "",
				b = g ? {} : !0;
			if (f) for (var w, x = 0; t.childNodes.length > x; x++) w = t.childNodes.item(x), 4 === w.nodeType ? v += w.nodeValue : 3 === w.nodeType ? v += w.nodeValue.trim() : 1 !== w.nodeType || w.prefix || l.push(w);
			var k = l.length,
				_ = e(v);
			g || !f && !m || (b = 0 === r ? n(_) : {});
			for (var C = p; k > C; C++) h = l[C].nodeName.toLowerCase(), d = i(l[C], r, u, c), b.hasOwnProperty(h) ? (b[h].constructor !== Array && (b[h] = [b[h]]), b[h].push(d)) : (b[h] = d, y++);
			if (m) {
				for (var S, E = t.attributes.length, T = c ? "" : s, M = c ? {} : b, L = 0; E > L; y++, L++) S = t.attributes.item(L), M[T + S.name.toLowerCase()] = e(S.value.trim());
				c && (u && Object.freeze(M), b[o] = M, y -= E - 1)
			}
			return 3 === r || (2 === r || 1 === r && y > 0) && v ? b[a] = _ : !g && 0 === y && v && (b = _), u && (g || y > 0) && Object.freeze(b), l.length = p, b
		}
		function r(e, t, n) {
			var i, l;
			n instanceof String || n instanceof Number || n instanceof Boolean ? t.appendChild(e.createTextNode("" + n)) : n.constructor === Date && t.appendChild(e.createTextNode(n.toGMTString()));
			for (var u in n) if (i = n[u], !(isFinite(u) || i instanceof Function)) if (u === a) null !== i && i !== !0 && t.appendChild(e.createTextNode(i.constructor === Date ? i.toGMTString() : i + ""));
			else if (u === o) for (var c in i) t.setAttribute(c, i[c]);
			else if (u.charAt(0) === s) t.setAttribute(u.slice(1), i);
			else if (i.constructor === Array) for (var h = 0; i.length > h; h++) l = e.createElement(u), r(e, l, i[h]), t.appendChild(l);
			else l = e.createElement(u), i instanceof Object ? r(e, l, i) : null !== i && i !== !0 && l.appendChild(e.createTextNode("" + i)), t.appendChild(l)
		}
		var a = "keyValue",
			o = "keyAttributes",
			s = "@",
			l = [],
			u = /^\s*$/,
			c = /^(?:true|false)$/i;
		t.prototype.toString = function() {
			return "null"
		}, t.prototype.valueOf = function() {
			return null
		}, this.build = function(e, t, n, r) {
			var a = arguments.length > 1 && "number" == typeof t ? 3 & t : 1;
			return i(e, a, n || !1, arguments.length > 3 ? r : 3 === a)
		}, this.unbuild = function(e) {
			var t = document.implementation.createDocument("", "", null);
			return r(t, t, e), t
		}, this.stringify = function(e) {
			return (new XMLSerializer).serializeToString(JXON.unbuild(e))
		}
	};
(function(e, t, n) {
	"use strict";

	function i(t) {
		u.logging && e.console && e.console.log && e.console.log(t)
	}
	function r(e) {
		return {
			zindex: e,
			children: []
		}
	}
	function a(e, t) {
		var n = [];
		return {
			storage: n,
			width: e,
			height: t,
			fillRect: function() {
				n.push({
					type: "function",
					name: "fillRect",
					arguments: arguments
				})
			},
			drawShape: function() {
				var e = [];
				return n.push({
					type: "function",
					name: "drawShape",
					arguments: e
				}), {
					moveTo: function() {
						e.push({
							name: "moveTo",
							arguments: arguments
						})
					},
					lineTo: function() {
						e.push({
							name: "lineTo",
							arguments: arguments
						})
					},
					bezierCurveTo: function() {
						e.push({
							name: "bezierCurveTo",
							arguments: arguments
						})
					},
					quadraticCurveTo: function() {
						e.push({
							name: "quadraticCurveTo",
							arguments: arguments
						})
					}
				}
			},
			drawImage: function() {
				n.push({
					type: "function",
					name: "drawImage",
					arguments: arguments
				})
			},
			fillText: function() {
				n.push({
					type: "function",
					name: "fillText",
					arguments: arguments
				})
			},
			setVariable: function(e, t) {
				n.push({
					type: "variable",
					name: e,
					arguments: t
				})
			}
		}
	}
	var o, s, l, u = {};
	u.Util = {}, u.Util.backgroundImage = function(e) {
		return /data:image\/.*;base64,/i.test(e) || /^(-webkit|-moz|linear-gradient|-o-)/.test(e) ? e : ('url("' === e.toLowerCase().substr(0, 5) ? (e = e.substr(5), e = e.substr(0, e.length - 2)) : (e = e.substr(4), e = e.substr(0, e.length - 1)), e)
	}, u.Util.Bounds = function(e) {
		var t, i = {};
		return e.getBoundingClientRect ? (t = e.getBoundingClientRect(), i.top = t.top, i.bottom = t.bottom || t.top + t.height, i.left = t.left, i.width = t.width || t.right - t.left, i.height = t.height || t.bottom - t.top, i) : n
	}, u.Util.getCSS = function(i, r) {
		function a(e, t) {
			var n, r = i.runtimeStyle && i.runtimeStyle[e],
				a = i.style;
			return !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(t) && /^-?\d/.test(t) && (n = a.left, r && (i.runtimeStyle.left = i.currentStyle.left), a.left = "fontSize" === e ? "1em" : t || 0, t = a.pixelLeft + "px", a.left = n, r && (i.runtimeStyle.left = r)), /^(thin|medium|thick)$/i.test(t) ? t : Math.round(parseFloat(t)) + "px"
		}
		var l;
		if (e.getComputedStyle) {
			if (o !== i && (s = t.defaultView.getComputedStyle(i, null)), l = s[r], "backgroundPosition" === r) l = (l.split(",")[0] || "0 0").split(" "), l[0] = -1 === l[0].indexOf("%") ? a(r + "X", l[0]) : l[0], l[1] = l[1] === n ? l[0] : l[1], l[1] = -1 === l[1].indexOf("%") ? a(r + "Y", l[1]) : l[1];
			else if (/border(Top|Bottom)(Left|Right)Radius/.test(r)) {
				var u = l.split(" ");
				1 >= u.length && (u[1] = u[0]), u[0] = parseInt(u[0], 10), u[1] = parseInt(u[1], 10), l = u
			}
		} else if (i.currentStyle) if ("backgroundPosition" === r) l = [a(r + "X", i.currentStyle[r + "X"]), a(r + "Y", i.currentStyle[r + "Y"])];
		else if (l = a(r, i.currentStyle[r]), /^(border)/i.test(r) && /^(medium|thin|thick)$/i.test(l)) switch (l) {
			case "thin":
				l = "1px";
				break;
			case "medium":
				l = "0px";
				break;
			case "thick":
				l = "5px"
		}
		return l
	}, u.Util.BackgroundPosition = function(e, t, n) {
		var i, r, a, o, s = u.Util.getCSS(e, "backgroundPosition");
		return 1 === s.length && (o = s, s = [], s[0] = o, s[1] = o), -1 !== ("" + s[0]).indexOf("%") ? (a = parseFloat(s[0]) / 100, r = t.width * a - n.width * a) : r = parseInt(s[0], 10), -1 !== ("" + s[1]).indexOf("%") ? (a = parseFloat(s[1]) / 100, i = t.height * a - n.height * a) : i = parseInt(s[1], 10), {
			top: i,
			left: r
		}
	}, u.Util.Extend = function(e, t) {
		for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		return t
	}, u.Util.Children = function(e) {
		var t;
		try {
			t = e.nodeName && "IFRAME" === e.nodeName.toUpperCase() ? e.contentDocument || e.contentWindow.document : function(e) {
				var t = [];
				return null !== e && function(e, t) {
					var i = e.length,
						r = 0;
					if ("number" == typeof t.length) for (var a = t.length; a > r; r++) e[i++] = t[r];
					else for (; t[r] !== n;) e[i++] = t[r++];
					return e.length = i, e
				}(t, e), t
			}(e.childNodes)
		} catch (r) {
			i("html2canvas.Util.Children failed with exception: " + r.message), t = []
		}
		return t
	},
	function() {
		u.Generate = {};
		var e = [/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)-]+)\)$/, /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/, /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z-]+)([\w\d\.\s,%\(\)]+)\)$/, /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z-]*)([\w\d\.\s,%\(\)]+)\)$/, /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z-]+)([\w\d\.\s,%\(\)]+)\)$/];
		u.Generate.parseGradient = function(t, n) {
			var i, r, a, o, s, l, u, c, h = e.length;
			for (r = 0; h > r && !(a = t.match(e[r])); r += 1);
			if (a) switch (a[1]) {
				case "-webkit-linear-gradient":
				case "-o-linear-gradient":
					if (i = {
						type: "linear",
						x0: null,
						y0: null,
						x1: null,
						y1: null,
						colorStops: []
					}, s = a[2].match(/\w+/g)) for (l = s.length, r = 0; l > r; r += 1) switch (s[r]) {
						case "top":
							i.y0 = 0, i.y1 = n.height;
							break;
						case "right":
							i.x0 = n.width, i.x1 = 0;
							break;
						case "bottom":
							i.y0 = n.height, i.y1 = 0;
							break;
						case "left":
							i.x0 = 0, i.x1 = n.width
					}
					if (null === i.x0 && null === i.x1 && (i.x0 = i.x1 = n.width / 2), null === i.y0 && null === i.y1 && (i.y0 = i.y1 = n.height / 2), s = a[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) for (l = s.length, u = 1 / Math.max(l - 1, 1), r = 0; l > r; r += 1) c = s[r].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/), c[2] ? (o = parseFloat(c[2]), o /= "%" === c[3] ? 100 : n.width) : o = r * u, i.colorStops.push({
						color: c[1],
						stop: o
					});
					break;
				case "-webkit-gradient":
					if (i = {
						type: "radial" === a[2] ? "circle" : a[2],
						x0: 0,
						y0: 0,
						x1: 0,
						y1: 0,
						colorStops: []
					}, s = a[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/), s && (i.x0 = s[1] * n.width / 100, i.y0 = s[2] * n.height / 100, i.x1 = s[3] * n.width / 100, i.y1 = s[4] * n.height / 100), s = a[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g)) for (l = s.length, r = 0; l > r; r += 1) c = s[r].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/), o = parseFloat(c[2]), "from" === c[1] && (o = 0), "to" === c[1] && (o = 1), i.colorStops.push({
						color: c[3],
						stop: o
					});
					break;
				case "-moz-linear-gradient":
					if (i = {
						type: "linear",
						x0: 0,
						y0: 0,
						x1: 0,
						y1: 0,
						colorStops: []
					}, s = a[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), s && (i.x0 = s[1] * n.width / 100, i.y0 = s[2] * n.height / 100, i.x1 = n.width - i.x0, i.y1 = n.height - i.y0), s = a[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g)) for (l = s.length, u = 1 / Math.max(l - 1, 1), r = 0; l > r; r += 1) c = s[r].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/), c[2] ? (o = parseFloat(c[2]), c[3] && (o /= 100)) : o = r * u, i.colorStops.push({
						color: c[1],
						stop: o
					});
					break;
				case "-webkit-radial-gradient":
				case "-moz-radial-gradient":
				case "-o-radial-gradient":
					if (i = {
						type: "circle",
						x0: 0,
						y0: 0,
						x1: n.width,
						y1: n.height,
						cx: 0,
						cy: 0,
						rx: 0,
						ry: 0,
						colorStops: []
					}, s = a[2].match(/(\d{1,3})%?\s(\d{1,3})%?/), s && (i.cx = s[1] * n.width / 100, i.cy = s[2] * n.height / 100), s = a[3].match(/\w+/), c = a[4].match(/[a-z-]*/), s && c) switch (c[0]) {
						case "farthest-corner":
						case "cover":
						case "":
							var d = Math.sqrt(Math.pow(i.cx, 2) + Math.pow(i.cy, 2)),
								p = Math.sqrt(Math.pow(i.cx, 2) + Math.pow(i.y1 - i.cy, 2)),
								f = Math.sqrt(Math.pow(i.x1 - i.cx, 2) + Math.pow(i.y1 - i.cy, 2)),
								m = Math.sqrt(Math.pow(i.x1 - i.cx, 2) + Math.pow(i.cy, 2));
							i.rx = i.ry = Math.max(d, p, f, m);
							break;
						case "closest-corner":
							var d = Math.sqrt(Math.pow(i.cx, 2) + Math.pow(i.cy, 2)),
								p = Math.sqrt(Math.pow(i.cx, 2) + Math.pow(i.y1 - i.cy, 2)),
								f = Math.sqrt(Math.pow(i.x1 - i.cx, 2) + Math.pow(i.y1 - i.cy, 2)),
								m = Math.sqrt(Math.pow(i.x1 - i.cx, 2) + Math.pow(i.cy, 2));
							i.rx = i.ry = Math.min(d, p, f, m);
							break;
						case "farthest-side":
							"circle" === s[0] ? i.rx = i.ry = Math.max(i.cx, i.cy, i.x1 - i.cx, i.y1 - i.cy) : (i.type = s[0], i.rx = Math.max(i.cx, i.x1 - i.cx), i.ry = Math.max(i.cy, i.y1 - i.cy));
							break;
						case "closest-side":
						case "contain":
							"circle" === s[0] ? i.rx = i.ry = Math.min(i.cx, i.cy, i.x1 - i.cx, i.y1 - i.cy) : (i.type = s[0], i.rx = Math.min(i.cx, i.x1 - i.cx), i.ry = Math.min(i.cy, i.y1 - i.cy))
					}
					if (s = a[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g)) for (l = s.length, u = 1 / Math.max(l - 1, 1), r = 0; l > r; r += 1) c = s[r].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/), c[2] ? (o = parseFloat(c[2]), o /= "%" === c[3] ? 100 : n.width) : o = r * u, i.colorStops.push({
						color: c[1],
						stop: o
					})
			}
			return i
		}, u.Generate.Gradient = function(e, n) {
			var r, a, o, s, l, c = t.createElement("canvas"),
				h = c.getContext("2d");
			if (c.width = n.width, c.height = n.height, r = u.Generate.parseGradient(e, n), l = new Image, r) if ("linear" === r.type) {
				for (a = h.createLinearGradient(r.x0, r.y0, r.x1, r.y1), o = 0, s = r.colorStops.length; s > o; o += 1) try {
					a.addColorStop(r.colorStops[o].stop, r.colorStops[o].color)
				} catch (d) {
					i(["failed to add color stop: ", d, "; tried to add: ", r.colorStops[o], "; stop: ", o, "; in: ", e])
				}
				h.fillStyle = a, h.fillRect(0, 0, n.width, n.height), l.src = c.toDataURL()
			} else if ("circle" === r.type) {
				for (a = h.createRadialGradient(r.cx, r.cy, 0, r.cx, r.cy, r.rx), o = 0, s = r.colorStops.length; s > o; o += 1) try {
					a.addColorStop(r.colorStops[o].stop, r.colorStops[o].color)
				} catch (d) {
					i(["failed to add color stop: ", d, "; tried to add: ", r.colorStops[o], "; stop: ", o, "; in: ", e])
				}
				h.fillStyle = a, h.fillRect(0, 0, n.width, n.height), l.src = c.toDataURL()
			} else if ("ellipse" === r.type) {
				var p, f = t.createElement("canvas"),
					m = f.getContext("2d"),
					g = Math.max(r.rx, r.ry),
					y = 2 * g;
				for (f.width = f.height = y, a = m.createRadialGradient(r.rx, r.ry, 0, r.rx, r.ry, g), o = 0, s = r.colorStops.length; s > o; o += 1) try {
					a.addColorStop(r.colorStops[o].stop, r.colorStops[o].color)
				} catch (d) {
					i(["failed to add color stop: ", d, "; tried to add: ", r.colorStops[o], "; stop: ", o, "; in: ", e])
				}
				m.fillStyle = a, m.fillRect(0, 0, y, y), h.fillStyle = r.colorStops[o - 1].color, h.fillRect(0, 0, c.width, c.height), p = new Image, p.onload = function() {
					h.drawImage(p, r.cx - r.rx, r.cy - r.ry, 2 * r.rx, 2 * r.ry), l.src = c.toDataURL()
				}, p.src = f.toDataURL()
			}
			return l
		}, u.Generate.ListAlpha = function(e) {
			var t, n = "";
			do t = e % 26, n = String.fromCharCode(t + 64) + n, e /= 26;
			while (26 * e > 26);
			return n
		}, u.Generate.ListRoman = function(e) {
			var t, n = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
				i = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
				r = "",
				a = n.length;
			if (0 >= e || e >= 4e3) return e;
			for (t = 0; a > t; t += 1) for (; e >= i[t];) e -= i[t], r += n[t];
			return r
		}
	}(), u.Parse = function(o, s) {
		function l() {
			return {
				width: Math.max(Math.max(Q.body.scrollWidth, Q.documentElement.scrollWidth), Math.max(Q.body.offsetWidth, Q.documentElement.offsetWidth), Math.max(Q.body.clientWidth, Q.documentElement.clientWidth)),
				height: Math.max(Math.max(Q.body.scrollHeight, Q.documentElement.scrollHeight), Math.max(Q.body.offsetHeight, Q.documentElement.offsetHeight), Math.max(Q.body.clientHeight, Q.documentElement.clientHeight))
			}
		}
		function c(e, t) {
			var n = parseInt(Z(e, t), 10);
			return isNaN(n) ? 0 : n
		}
		function h(e, t, n, i, r, a) {
			"transparent" !== a && (e.setVariable("fillStyle", a), e.fillRect(t, n, i, r), F += 1)
		}
		function d(e, t) {
			switch (t) {
				case "lowercase":
					return e.toLowerCase();
				case "capitalize":
					return e.replace(/(^|\s|:|-|\(|\))([a-z])/g, function(e, t, i) {
						return e.length > 0 ? t + i.toUpperCase() : n
					});
				case "uppercase":
					return e.toUpperCase();
				default:
					return e
			}
		}
		function p(e) {
			return e.replace(/^\s*/g, "").replace(/\s*$/g, "")
		}
		function f(e, t) {
			if (G[e + "-" + t] !== n) return G[e + "-" + t];
			var i, r, a, o = Q.createElement("div"),
				s = Q.createElement("img"),
				l = Q.createElement("span");
			return o.style.visibility = "hidden", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = 0, o.style.padding = 0, X.appendChild(o), s.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=", s.width = 1, s.height = 1, s.style.margin = 0, s.style.padding = 0, s.style.verticalAlign = "baseline", l.style.fontFamily = e, l.style.fontSize = t, l.style.margin = 0, l.style.padding = 0, l.appendChild(Q.createTextNode("Hidden Text")), o.appendChild(l), o.appendChild(s), i = s.offsetTop - l.offsetTop + 1, o.removeChild(l), o.appendChild(Q.createTextNode("Hidden Text")), o.style.lineHeight = "normal", s.style.verticalAlign = "super", r = s.offsetTop - o.offsetTop + 1, a = {
				baseline: i,
				lineWidth: 1,
				middle: r
			}, G[e + "-" + t] = a, X.removeChild(o), a
		}
		function m(e, t, n, i) {
			p(e).length > 0 && (i.fillText(e, t, n), F += 1)
		}
		function g(e, t, n) {
			var i, r, a, o, l, c, g, y, v, b, w, x, k, _ = n.ctx,
				C = Z(e, "fontFamily"),
				S = Z(e, "fontSize"),
				E = Z(e, "color"),
				T = Z(e, "textDecoration"),
				M = Z(e, "textAlign"),
				L = Z(e, "letterSpacing"),
				P = Z(e, "fontWeight"),
				A = Z(e, "fontStyle"),
				N = Z(e, "fontVariant"),
				O = !1,
				B = 0;
			if (t.nodeValue = d(t.nodeValue, Z(e, "textTransform")), r = p(t.nodeValue), r.length > 0) {
				switch ("none" !== T && (a = f(C, S)), M = M.replace(["-webkit-auto"], ["auto"]), o = s.letterRendering === !1 && /^(left|right|justify|auto)$/.test(M) && /^(normal|none|0px)$/.test(L) ? t.nodeValue.split(/(\b| )/) : t.nodeValue.split(""), parseInt(P, 10)) {
					case 401:
						P = "bold";
						break;
					case 400:
						P = "normal"
				}
				for (_.setVariable("fillStyle", E), _.setVariable("font", A + " " + N + " " + P + " " + S + " " + C), O ? _.setVariable("textAlign", "right") : _.setVariable("textAlign", "left"), y = t, v = 0, l = o.length; l > v; v += 1) {
					if (g = null, q.rangeBounds)("none" !== T || 0 !== p(o[v]).length) && (g = o[v], Q.createRange ? (b = Q.createRange(), b.setStart(t, B), b.setEnd(t, B + g.length)) : b = X.createTextRange(), i = b.getBoundingClientRect() ? b.getBoundingClientRect() : {});
					else {
						if ("string" != typeof y.nodeValue) continue;
						c = l - 1 > D ? y.splitText(o[v].length) : null, w = y.parentNode, x = Q.createElement("wrapper"), k = y.cloneNode(!0), x.appendChild(y.cloneNode(!0)), w.replaceChild(x, y), i = u.Util.Bounds(x), g = y.nodeValue, y = c, w.replaceChild(k, x)
					}
					switch (null !== g && m(g, i.left, i.bottom, _), T) {
						case "underline":
							h(_, i.left, Math.round(i.top + a.baseline + a.lineWidth), i.width, 1, E);
							break;
						case "overline":
							h(_, i.left, i.top, i.width, 1, E);
							break;
						case "line-through":
							h(_, i.left, Math.ceil(i.top + a.middle + a.lineWidth), i.width, 1, E)
					}
					B += o[v].length
				}
			}
		}
		function y(e, t) {
			var n, i, r = Q.createElement("boundelement");
			return r.style.display = "inline", n = e.style.listStyleType, e.style.listStyleType = "none", r.appendChild(Q.createTextNode(t)), e.insertBefore(r, e.firstChild), i = u.Util.Bounds(r), e.removeChild(r), e.style.listStyleType = n, i
		}
		function v(e) {
			var t = -1,
				n = 1,
				i = e.parentNode.childNodes;
			if (e.parentNode) {
				for (; i[++t] !== e;) 1 === i[t].nodeType && n++;
				return n
			}
			return -1
		}
		function b(e, t, n) {
			var i, r, a, o, s, l = Z(e, "listStylePosition"),
				c = Z(e, "listStyleType"),
				h = Z(e, "fontWeight");
			if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(c)) {
				switch (a = v(e), c) {
					case "decimal":
						o = a;
						break;
					case "decimal-leading-zero":
						o = 1 === ("" + a).length ? a = "0" + ("" + a) : "" + a;
						break;
					case "upper-roman":
						o = u.Generate.ListRoman(a);
						break;
					case "lower-roman":
						o = u.Generate.ListRoman(a).toLowerCase();
						break;
					case "lower-alpha":
						o = u.Generate.ListAlpha(a).toLowerCase();
						break;
					case "upper-alpha":
						o = u.Generate.ListAlpha(a)
				}
				switch (o += ". ", s = y(e, o), h) {
					case 401:
						h = "bold";
						break;
					case 400:
						h = "normal"
				}
				if (z.setVariable("fillStyle", Z(e, "color")), z.setVariable("font", Z(e, "fontVariant") + " " + h + " " + Z(e, "fontStyle") + " " + Z(e, "fontSize") + " " + Z(e, "fontFamily")), "inside" !== l) return;
				z.setVariable("textAlign", "left"), i = n.left, r = s.bottom, m(o, i, r, z)
			}
		}
		function w(e) {
			var t = o[e];
			return t && t.succeeded === !0 ? t.img : !1
		}
		function x(e, t) {
			var n = Math.max(e.left, t.left),
				i = Math.max(e.top, t.top),
				r = Math.min(e.left + e.width, t.left + t.width),
				a = Math.min(e.top + e.height, t.top + t.height);
			return {
				left: n,
				top: i,
				width: r - n,
				height: a - i
			}
		}
		function k(e, t) {
			var n;
			return t ? "auto" !== e ? (U = !0, n = r(e), t.children.push(n), n) : t : n = r(0)
		}
		function _(e, t, n, i) {
			var r, a, o, s, l, u, h, d, p, f = n.left,
				m = n.top,
				g = n.width,
				y = n.height,
				v = function(e) {
					var t, n = [],
						i = ["Top", "Right", "Bottom", "Left"];
					for (t = 0; 4 > t; t += 1) n.push({
						width: c(e, "border" + i[t] + "Width"),
						color: Z(e, "border" + i[t] + "Color")
					});
					return n
				}(e);
			for (function(e) {
				var t, n = [],
					i = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"];
				for (t = 0; 4 > t; t += 1) n.push(Z(e, "border" + i[t] + "Radius"));
				return n
			}(e), r = 0; 4 > r; r += 1) if (a = v[r], d = [], a.width > 0) {
				switch (o = f, s = m, l = g, u = y - v[2].width, r) {
					case 0:
						u = v[0].width, h = 0, d[h++] = ["line", o, s], d[h++] = ["line", o + l, s], d[h++] = ["line", o + l - v[1].width, s + u], d[h++] = ["line", o + v[3].width, s + u];
						break;
					case 1:
						o = f + g - v[1].width, l = v[1].width, h = 0, d[h++] = ["line", o, s + v[0].width], d[h++] = ["line", o + l, s], d[h++] = ["line", o + l, s + u + v[2].width], d[h++] = ["line", o, s + u];
						break;
					case 2:
						s = s + y - v[2].width, u = v[2].width, h = 0, d[h++] = ["line", o + v[3].width, s], d[h++] = ["line", o + l - v[2].width, s], d[h++] = ["line", o + l, s + u], d[h++] = ["line", o, s + u];
						break;
					case 3:
						l = v[3].width, h = 0, d[h++] = ["line", o, s], d[h++] = ["line", o + l, s + v[0].width], d[h++] = ["line", o + l, s + u], d[h++] = ["line", o, s + u + v[2].width]
				}
				if (p = {
					left: o,
					top: s,
					width: l,
					height: u
				}, i && (p = x(p, i)), p.width > 0 && p.height > 0 && "transparent" !== a.color) {
					t.setVariable("fillStyle", a.color);
					var b = t.drawShape(),
						w = d.length;
					for (h = 0; w > h; h++) b[0 === h ? "moveTo" : d[h][0] + "To"].apply(null, d[h].slice(1));
					F += 1
				}
			}
			return v
		}
		function C(e, t, n) {
			var r, a, o, s, l, u = Q.createElement("valuewrap"),
				c = ["lineHeight", "textAlign", "fontFamily", "color", "fontSize", "paddingLeft", "paddingTop", "width", "height", "border", "borderLeftWidth", "borderTopWidth"];
			for (r = 0, s = c.length; s > r; r += 1) {
				l = c[r];
				try {
					u.style[l] = Z(e, l)
				} catch (h) {
					i("html2canvas: Parse: Exception caught in renderFormValue: " + h.message)
				}
			}
			u.style.borderColor = "black", u.style.borderStyle = "solid", u.style.display = "block", u.style.position = "absolute", (/^(submit|reset|button|text|password)$/.test(e.type) || "SELECT" === e.nodeName) && (u.style.lineHeight = Z(e, "height")), u.style.top = t.top + "px", u.style.left = t.left + "px", a = "SELECT" === e.nodeName ? e.options[e.selectedIndex].text : e.value, o = Q.createTextNode(a), u.appendChild(o), X.appendChild(u), g(e, o, n), X.removeChild(u)
		}
		function S(e, t, n, i, r, a, o, s, l, u) {
			e.drawImage(t, n, i, r, a, o, s, l, u), F += 1
		}
		function E(e, t, n, i, r, a, o, s) {
			var l = 0,
				u = 0;
			o - n > 0 && (l = o - n), s - i > 0 && (u = s - i), S(e, t, l, u, r - l, a - u, n + l, i + u, r - l, a - u)
		}
		function T(e, t, n, i, r, a, o) {
			var s, l, u = Math.min(t.width, a);
			for (n.top = n.top - Math.ceil(n.top / t.height) * t.height, l = r + n.top; o + r > l;) s = Math.floor(l + t.height) > o + r ? o + r - l : t.height, E(e, t, i + n.left, l, u, s, i, r), l = Math.floor(l + t.height)
		}
		function M(e, t, n, i, r, a, o) {
			var s, l, u = Math.min(t.height, o);
			for (n.left = n.left - Math.ceil(n.left / t.width) * t.width, l = i + n.left; a + i > l;) s = Math.floor(l + t.width) > a + i ? a + i - l : t.width, E(e, t, l, r + n.top, s, u, i, r), l = Math.floor(l + t.width)
		}
		function L(e, t, r) {
			var a, o, s, l, c, h, d, p, f, m, g, y, v = Z(e, "backgroundImage"),
				b = Z(e, "backgroundRepeat").split(",")[0];
			if (/data:image\/.*;base64,/i.test(v) || /^(-webkit|-moz|linear-gradient|-o-)/.test(v) || (v = v.split(",")[0]), v !== n && /^(1|none)$/.test(v) === !1) if (v = u.Util.backgroundImage(v), a = w(v), o = u.Util.BackgroundPosition(e, t, a), a) switch (b) {
				case "repeat-x":
					M(r, a, o, t.left, t.top, t.width, t.height);
					break;
				case "repeat-y":
					T(r, a, o, t.left, t.top, t.width, t.height);
					break;
				case "no-repeat":
					l = t.width - o.left, f = t.height - o.top, c = o.left, h = o.top, d = o.left + t.left, p = o.top + t.top, 0 > c ? (c = Math.abs(c), d += c, l = Math.min(t.width, a.width - c)) : (l = Math.min(l, a.width), c = 0), 0 > h ? (h = Math.abs(h), p += h, f = Math.min(t.height, a.height - h)) : (f = Math.min(f, a.height), h = 0), f > 0 && l > 0 && S(r, a, c, h, l, f, d, p, l, f);
					break;
				default:
					for (o.top = o.top - Math.ceil(o.top / a.height) * a.height, s = t.top + o.top; t.height + t.top > s;) m = Math.min(a.height, t.height + t.top - s), g = Math.floor(s + a.height) > m + s ? m + s - s : a.height, t.top > s ? (y = t.top - s, s = t.top) : y = 0, M(r, a, o, t.left, s, t.width, g), y > 0 && (o.top += y), s = Math.floor(s + a.height) - y
			} else i("html2canvas: Error loading background:" + v)
		}
		function P(e, t) {
			var n, r, o, d, p, f, m, g, y, v, E, T, M = u.Util.Bounds(e),
				P = M.left,
				A = M.top,
				N = M.width,
				O = M.height,
				B = Z(e, "backgroundColor"),
				$ = Z(e, "position"),
				I = Z(e, "opacity");
			switch (t ? R = {} : (R = l(), t = {
				opacity: 1
			}), r = k(Z(e, "zIndex"), t.zIndex), o = {
				ctx: a(R.width || N, R.height || O),
				zIndex: r,
				opacity: I * t.opacity,
				cssPosition: $
			}, t.clip && (o.clip = u.Util.Extend({}, t.clip)), s.useOverflow === !0 && /(hidden|scroll|auto)/.test(Z(e, "overflow")) === !0 && /(BODY)/i.test(e.nodeName) === !1 && (o.clip = o.clip ? x(o.clip, M) : M), d = r.children.push(o), f = r.children[d - 1].ctx, f.setVariable("globalAlpha", o.opacity), p = _(e, f, M, !1), o.borders = p, H.test(e.nodeName) && "transparent" !== s.iframeDefault && (B = "default" === s.iframeDefault ? "#efefef" : s.iframeDefault), m = {
				left: P + p[3].width,
				top: A + p[0].width,
				width: N - (p[1].width + p[3].width),
				height: O - (p[0].width + p[2].width)
			}, o.clip && (m = x(m, o.clip)), m.height > 0 && m.width > 0 && (h(f, m.left, m.top, m.width, m.height, B), L(e, m, f)), e.nodeName) {
				case "IMG":
					g = e.getAttribute("src"), n = w(g), n ? (y = c(e, "paddingLeft"), v = c(e, "paddingTop"), E = c(e, "paddingRight"), T = c(e, "paddingBottom"), S(f, n, 0, 0, n.width, n.height, P + y + p[3].width, A + v + p[0].width, M.width - (p[1].width + p[3].width + y + E), M.height - (p[0].width + p[2].width + v + T))) : i("html2canvas: Error loading <img>:" + g);
					break;
				case "INPUT":
					/^(text|url|email|submit|button|reset)$/.test(e.type) && e.value.length > 0 && C(e, M, o);
					break;
				case "TEXTAREA":
					e.value.length > 0 && C(e, M, o);
					break;
				case "SELECT":
					e.options.length > 0 && C(e, M, o);
					break;
				case "LI":
					b(e, o, m);
					break;
				case "CANVAS":
					y = c(e, "paddingLeft"), v = c(e, "paddingTop"), E = c(e, "paddingRight"), T = c(e, "paddingBottom"), S(f, e, 0, 0, e.width, e.height, P + y + p[3].width, A + v + p[0].width, M.width - (p[1].width + p[3].width + y + E), M.height - (p[0].width + p[2].width + v + T))
			}
			return r.children[d - 1]
		}
		function A(e, t) {
			if ("none" !== Z(e, "display") && "hidden" !== Z(e, "visibility") && (t = P(e, t) || t, z = t.ctx, !H.test(e.nodeName))) {
				var n, i, r, a = u.Util.Children(e);
				for (n = 0, r = a.length; r > n; n += 1) i = a[n], 1 === i.nodeType ? A(i, t) : 3 === i.nodeType && g(e, i, t)
			}
		}
		e.scroll(0, 0);
		var N, O, B, $, I, z, R, D, V, j, q = {
			rangeBounds: !1,
			svgRendering: s.svgRendering && function() {
				var e = new Image,
					r = t.createElement("canvas"),
					a = r.getContext === n ? !1 : r.getContext("2d");
				if (a === !1) return !1;
				r.width = r.height = 10, e.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>", "<foreignObject width='10' height='10'>", "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>", "sup", "</div>", "</foreignObject>", "</svg>"].join("");
				try {
					a.drawImage(e, 0, 0), r.toDataURL()
				} catch (o) {
					return !1
				}
				return i("html2canvas: Parse: SVG powered rendering available"), !0
			}()
		}, W = s.elements === n ? t.body : s.elements[0],
			U = !1,
			F = 0,
			G = {}, Q = W.ownerDocument,
			H = RegExp("(" + s.ignoreElements + ")"),
			X = Q.body;
		o = o || {}, Q.createRange && (N = Q.createRange(), N.getBoundingClientRect && (O = Q.createElement("boundtest"), O.style.height = "123px", O.style.display = "block", X.appendChild(O), N.selectNode(O), B = N.getBoundingClientRect(), $ = B.height, 123 === $ && (q.rangeBounds = !0), X.removeChild(O)));
		var Z = u.Util.getCSS;
		for (I = P(W, null), q.svgRendering && function(e) {
			function t(e) {
				var n, i, a, o, s, l = u.Util.Children(e),
					c = l.length;
				for (s = 0; c > s; s += 1) if (o = l[s], 3 === o.nodeType) r += o.nodeValue.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
				else if (1 === o.nodeType && !/^(script|meta|title)$/.test(o.nodeName.toLowerCase())) {
					if (r += "<" + o.nodeName.toLowerCase(), o.hasAttributes()) for (n = o.attributes, a = n.length, i = 0; a > i; i += 1) r += " " + n[i].name + '="' + n[i].value + '"';
					r += ">", t(o), r += "</" + o.nodeName.toLowerCase() + ">"
				}
			}
			var n = new Image,
				i = l(),
				r = "";
			t(e), n.src = ["data:image/svg+xml,", "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='" + i.width + "' height='" + i.height + "'>", "<foreignObject width='" + i.width + "' height='" + i.height + "'>", "<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>", r.replace(/\#/g, "%23"), "</html>", "</foreignObject>", "</svg>"].join(""), n.onload = function() {
				I.svgRender = n
			}
		}(t.documentElement), D = 0, V = W.children, j = V.length; j > D; D += 1) A(V[D], I);
		return I.backgroundColor = Z(t.documentElement, "backgroundColor"), I
	}, u.Preload = function(r) {
		function a(e) {
			x.href = e, x.href = x.href;
			var t = x.protocol + x.host;
			return t === h
		}
		function o() {
			i("html2canvas: start: images: " + m.numLoaded + " / " + m.numTotal + " (failed: " + m.numFailed + ")"), !m.firstRun && m.numLoaded >= m.numTotal && (i("Finished loading images: # " + m.numTotal + " (failed: " + m.numFailed + ")"), "function" == typeof r.complete && r.complete(m))
		}
		function s(t, i, a) {
			var s, l, u = r.proxy;
			x.href = t, t = x.href, s = "html2canvas_" + g++, a.callbackname = s, u += u.indexOf("?") > -1 ? "&" : "?", u += "url=" + encodeURIComponent(t) + "&callback=" + s, l = v.createElement("script"), e[s] = function(t) {
				"error:" === t.substring(0, 6) ? (a.succeeded = !1, m.numLoaded++, m.numFailed++, o()) : (c(i, a), i.src = t), e[s] = n;
				try {
					delete e[s]
				} catch (r) {}
				l.parentNode.removeChild(l), l = null, delete a.script, delete a.callbackname
			}, l.setAttribute("type", "text/javascript"), l.setAttribute("src", u), a.script = l, e.document.body.appendChild(l)
		}
		function l(e) {
			var t, r, a, s, c = u.Util.Children(e),
				h = !1;
			try {
				var p = c.length;
				for (t = 0; p > t; t += 1) l(c[t])
			} catch (f) {}
			try {
				h = e.nodeType
			} catch (g) {
				h = !1, i("html2canvas: failed to access some element's nodeType - Exception: " + g.message)
			}
			if (1 === h || h === n) {
				try {
					r = u.Util.getCSS(e, "backgroundImage")
				} catch (f) {
					i("html2canvas: failed to get background-image - Exception: " + f.message)
				}
				r && "1" !== r && "none" !== r && (/^(-webkit|-o|-moz|-ms|linear)-/.test(r) ? (s = u.Generate.Gradient(r, u.Util.Bounds(e)), s !== n && (m[r] = {
					img: s,
					succeeded: !0
				}, m.numTotal++, m.numLoaded++, o())) : (a = u.Util.backgroundImage(r.match(/data:image\/.*;base64,/i) ? r : r.split(",")[0]), d.loadImage(a)))
			}
		}
		function c(t, i) {
			t.onload = function() {
				i.timer !== n && e.clearTimeout(i.timer), m.numLoaded++, i.succeeded = !0, t.onerror = t.onload = null, o()
			}, t.onerror = function() {
				if ("anonymous" === t.crossOrigin && (e.clearTimeout(i.timer), r.proxy)) {
					var a = t.src;
					return t = new Image, i.img = t, t.src = a, s(t.src, t, i), n
				}
				m.numLoaded++, m.numFailed++, i.succeeded = !1, t.onerror = t.onload = null, o()
			}
		}
		var h, d, p, f, m = {
			numLoaded: 0,
			numFailed: 0,
			numTotal: 0,
			cleanupDone: !1
		}, g = 0,
			y = r.elements[0] || t.body,
			v = y.ownerDocument,
			b = v.images,
			w = b.length,
			x = v.createElement("a"),
			k = function(e) {
				return e.crossOrigin !== n
			}(new Image);
		for (x.href = e.location.href, h = x.protocol + x.host, d = {
			loadImage: function(e) {
				var t, i;
				e && m[e] === n && (t = new Image, e.match(/data:image\/.*;base64,/i) ? (t.src = e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi, ""), i = m[e] = {
					img: t
				}, m.numTotal++, c(t, i)) : a(e) || r.allowTaint === !0 ? (i = m[e] = {
					img: t
				}, m.numTotal++, c(t, i), t.src = e) : k && !r.allowTaint && r.useCORS ? (t.crossOrigin = "anonymous", i = m[e] = {
					img: t
				}, m.numTotal++, c(t, i), t.src = e + "?") : r.proxy && (i = m[e] = {
					img: t
				}, m.numTotal++, s(e, t, i)))
			},
			cleanupDOM: function(a) {
				var s, l;
				if (!m.cleanupDone) {
					a && "string" == typeof a ? i("html2canvas: Cleanup because: " + a) : i("html2canvas: Cleanup after timeout: " + r.timeout + " ms.");
					for (l in m) if (m.hasOwnProperty(l) && (s = m[l], "object" == typeof s && s.callbackname && s.succeeded === n)) {
						e[s.callbackname] = n;
						try {
							delete e[s.callbackname]
						} catch (u) {}
						s.script && s.script.parentNode && (s.script.setAttribute("src", "about:blank"), s.script.parentNode.removeChild(s.script)), m.numLoaded++, m.numFailed++, i("html2canvas: Cleaned up failed img: '" + l + "' Steps: " + m.numLoaded + " / " + m.numTotal)
					}
					e.stop !== n ? e.stop() : t.execCommand !== n && t.execCommand("Stop", !1), t.close !== n && t.close(), m.cleanupDone = !0, a && "string" == typeof a || o()
				}
			},
			renderingDone: function() {
				f && e.clearTimeout(f)
			}
		}, r.timeout > 0 && (f = e.setTimeout(d.cleanupDOM, r.timeout)), i("html2canvas: Preload starts: finding background-images"), m.firstRun = !0, l(y), i("html2canvas: Preload: Finding images"), p = 0; w > p; p += 1) d.loadImage(b[p].getAttribute("src"));
		return m.firstRun = !1, i("html2canvas: Preload: Done."), m.numTotal === m.numLoaded && o(), d
	}, u.Renderer = function(e, n) {
		function i(e) {
			var t, n, a, o, s, l, u, c, h = [],
				d = [],
				p = e.children;
			for (t = 0, s = p.length; s > t; t += 1) l = p[t], l.children && l.children.length > 0 ? (h.push(l), d.push(l.zindex)) : r.push(l);
			for (d.sort(function(e, t) {
				return e - t
			}), n = 0, a = d.length; a > n; n += 1) for (o = d[n], u = 0, c = h.length; c >= u; u += 1) if (h[u].zindex === o) {
				l = h.splice(u, 1), i(l[0]);
				break
			}
		}
		var r = [];
		if (i(e.zIndex), "function" != typeof n._renderer._create) throw Error("Invalid renderer defined");
		return n._renderer._create(e, n, t, r, u)
	}, l = function(t, r) {
		var a, o, s = {
			logging: !1,
			elements: t,
			proxy: "http://html2canvas.appspot.com/",
			timeout: 0,
			useCORS: !1,
			allowTaint: !1,
			svgRendering: !1,
			iframeDefault: "default",
			ignoreElements: "IFRAME|OBJECT|PARAM",
			useOverflow: !0,
			letterRendering: !1,
			flashcanvas: n,
			width: null,
			height: null,
			taintTest: !0,
			renderer: "Canvas"
		};
		if (s = u.Util.Extend(r, s), "string" == typeof s.renderer && u.Renderer[s.renderer] !== n) s._renderer = u.Renderer[s.renderer](s);
		else {
			if ("function" != typeof s.renderer) throw "Unknown renderer";
			s._renderer = s.renderer(s)
		}
		return u.logging = s.logging, s.complete = function(e) {
			("function" != typeof s.onpreloaded || s.onpreloaded(e) !== !1) && (a = u.Parse(e, s), ("function" != typeof s.onparsed || s.onparsed(a) !== !1) && (o = u.Renderer(a, s), "function" == typeof s.onrendered && s.onrendered(o)))
		}, e.setTimeout(function() {
			u.Preload(s)
		}, 0), {
			render: function(e, t) {
				return u.Renderer(e, u.Util.Extend(t, s))
			},
			parse: function(e, t) {
				return u.Parse(e, u.Util.Extend(t, s))
			},
			preload: function(e) {
				return u.Preload(u.Util.Extend(e, s))
			},
			log: i
		}
	}, l.log = i, l.Renderer = {
		Canvas: n
	}, u.Renderer.Canvas = function(r) {
		r = r || {};
		var a, o = t,
			s = r.canvas || o.createElement("canvas"),
			l = !1,
			u = !1,
			c = !1,
			h = 2880;
		if (s.getContext) i("html2canvas: Renderer: using canvas renderer"), c = !0;
		else if (r.flashcanvas !== n) {
			l = !0, i("html2canvas: Renderer: canvas not available, using flashcanvas");
			var d = o.createElement("script");
			d.src = r.flashcanvas, d.onload = function(t, r) {
				var a;
				return t.onload !== n ? r : (t.onreadystatechange !== n ? (a = function() {
					"loaded" !== t.readyState && "complete" !== t.readyState ? e.setTimeout(a, 250) : r()
				}, e.setTimeout(a, 250)) : i("html2canvas: Renderer: Can't track when flashcanvas is loaded"), n)
			}(d, function() {
				e.FlashCanvas !== n && (i("html2canvas: Renderer: Flashcanvas initialized"), e.FlashCanvas.initElement(s), c = !0, u !== !1 && a._create.apply(null, u))
			}), o.body.appendChild(d)
		}
		return a = {
			_create: function(e, r, a, o, d) {
				if (!c) return u = arguments, s;
				var p, f, m, g, y, v, b, w, x, k = s.getContext("2d"),
					_ = t.createElement("canvas"),
					C = _.getContext !== n,
					S = C ? _.getContext("2d") : {}, E = [];
				if (s.width = s.style.width = l ? Math.min(h, r.width || e.ctx.width) : r.width || e.ctx.width, s.height = s.style.height = l ? Math.min(h, r.height || e.ctx.height) : r.height || e.ctx.height, x = k.fillStyle, k.fillStyle = e.backgroundColor, k.fillRect(0, 0, s.width, s.height), k.fillStyle = x, r.svgRendering && e.svgRender !== n) k.drawImage(e.svgRender, 0, 0);
				else for (f = 0, m = o.length; m > f; f += 1) {
					if (p = o.splice(0, 1)[0], p.canvasPosition = p.canvasPosition || {}, k.textBaseline = "bottom", p.clip && (k.save(), k.beginPath(), k.rect(p.clip.left, p.clip.top, p.clip.width, p.clip.height), k.clip()), p.ctx.storage) for (g = 0, b = p.ctx.storage.length; b > g; g += 1) switch (w = p.ctx.storage[g], w.type) {
						case "variable":
							k[w.name] = w.arguments;
							break;
						case "function":
							if ("fillRect" === w.name)(!l || h > w.arguments[0] + w.arguments[2] && h > w.arguments[1] + w.arguments[3]) && k.fillRect.apply(k, w.arguments);
							else if ("drawShape" === w.name)(function(e) {
								var t, n = e.length;
								for (k.beginPath(), t = 0; n > t; t++) k[e[t].name].apply(k, e[t].arguments);
								k.closePath(), k.fill()
							})(w.arguments);
							else if ("fillText" === w.name)(!l || h > w.arguments[1] && h > w.arguments[2]) && k.fillText.apply(k, w.arguments);
							else if ("drawImage" === w.name && w.arguments[8] > 0 && w.arguments[7]) {
								if (C && r.taintTest && -1 === E.indexOf(w.arguments[0].src)) {
									S.drawImage(w.arguments[0], 0, 0);
									try {
										S.getImageData(0, 0, 1, 1)
									} catch (T) {
										_ = a.createElement("canvas"), S = _.getContext("2d");
										continue
									}
									E.push(w.arguments[0].src)
								}
								k.drawImage.apply(k, w.arguments)
							}
							break;
						default:
					}
					p.clip && k.restore()
				}
				return i("html2canvas: Renderer: Canvas renderer done - returning canvas obj"), m = r.elements.length, 1 === m && "object" == typeof r.elements[0] && "BODY" !== r.elements[0].nodeName && l === !1 ? (v = d.Util.Bounds(r.elements[0]), y = a.createElement("canvas"), y.width = v.width, y.height = v.height, k = y.getContext("2d"), k.drawImage(s, v.left, v.top, v.width, v.height, 0, 0, v.width, v.height), s = null, y) : s
			}
		}
	}, e.html2canvas = l
})(window, document),
function(e) {
	e.fn.html2canvas = function(t) {
		function n(t, n) {
			window.clearTimeout(o), o = window.setTimeout(function() {
				a.fadeOut(function() {
					a.remove(), a = null
				})
			}, n || 2e3), a && a.remove(), a = e("<div />").html(t).css({
				margin: 0,
				padding: 10,
				background: "#000",
				opacity: .7,
				position: "fixed",
				top: 10,
				right: 10,
				fontFamily: "Tahoma",
				color: "#fff",
				fontSize: 12,
				borderRadius: 12,
				width: "auto",
				height: "auto",
				textAlign: "center",
				textDecoration: "none",
				display: "none"
			}).appendTo(document.body).fadeIn(), i.log(t)
		}
		t && t.profile && window.console && window.console.profile && console.profile();
		var i, r = new Date,
			a = null,
			o = !1,
			s = r.getTime();
		t = t || {}, t.onrendered = t.onrendered || function(i) {
			var r = e(i),
				a = new Date;
			t && t.profile && window.console && window.console.profileEnd && console.profileEnd(), r.css({
				position: "absolute",
				left: 0,
				top: 0
			}).appendTo(document.body), r.siblings().toggle(), e(window).click(function() {
				r.toggle().siblings().toggle(), n("Canvas Render " + (r.is(":visible") ? "visible" : "hidden"))
			}), n("Screenshot created in " + (a.getTime() - s) + " ms<br />", 4e3);
			try {
				r[0].toDataURL()
			} catch (o) {
				"canvas" === r[0].nodeName.toLowerCase() && alert("Canvas is tainted, unable to read data")
			}
		}, i = html2canvas(this, t)
	}
}(jQuery),
function() {
	function e() {
		var e = {};
		return e.FRAMERATE = 30, e.MAX_VIRTUAL_PIXELS = 3e4, e.init = function(t) {
			e.Definitions = {}, e.Styles = {}, e.Animations = [], e.Images = [], e.ctx = t, e.ViewPort = new function() {
				this.viewPorts = [], this.Clear = function() {
					this.viewPorts = []
				}, this.SetCurrent = function(e, t) {
					this.viewPorts.push({
						width: e,
						height: t
					})
				}, this.RemoveCurrent = function() {
					this.viewPorts.pop()
				}, this.Current = function() {
					return this.viewPorts[this.viewPorts.length - 1]
				}, this.width = function() {
					return this.Current().width
				}, this.height = function() {
					return this.Current().height
				}, this.ComputeSize = function(e) {
					return null != e && "number" == typeof e ? e : "x" == e ? this.width() : "y" == e ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2)
				}
			}
		}, e.init(), e.ImagesLoaded = function() {
			for (var t = 0; e.Images.length > t; t++) if (!e.Images[t].loaded) return !1;
			return !0
		}, e.trim = function(e) {
			return e.replace(/^\s+|\s+$/g, "")
		}, e.compressSpaces = function(e) {
			return e.replace(/[\s\r\t\n]+/gm, " ")
		}, e.ajax = function(e) {
			var t;
			return t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), t ? (t.open("GET", e, !1), t.send(null), t.responseText) : null
		}, e.parseXml = function(e) {
			if (window.DOMParser) {
				var t = new DOMParser;
				return t.parseFromString(e, "text/xml")
			}
			e = e.replace(/<!DOCTYPE svg[^>]*>/, "");
			var n = new ActiveXObject("Microsoft.XMLDOM");
			return n.async = "false", n.loadXML(e), n
		}, e.Property = function(e, t) {
			this.name = e, this.value = t
		}, e.Property.prototype.getValue = function() {
			return this.value
		}, e.Property.prototype.hasValue = function() {
			return null != this.value && "" !== this.value
		}, e.Property.prototype.numValue = function() {
			if (!this.hasValue()) return 0;
			var e = parseFloat(this.value);
			return (this.value + "").match(/%$/) && (e /= 100), e
		}, e.Property.prototype.valueOrDefault = function(e) {
			return this.hasValue() ? this.value : e
		}, e.Property.prototype.numValueOrDefault = function(e) {
			return this.hasValue() ? this.numValue() : e
		}, e.Property.prototype.addOpacity = function(t) {
			var n = this.value;
			if (null != t && "" != t && "string" == typeof this.value) {
				var i = new RGBColor(this.value);
				i.ok && (n = "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + t + ")")
			}
			return new e.Property(this.name, n)
		}, e.Property.prototype.getDefinition = function() {
			var t = this.value.replace(/^(url\()?#([^\)]+)\)?$/, "$2");
			return e.Definitions[t]
		}, e.Property.prototype.isUrlDefinition = function() {
			return 0 == this.value.indexOf("url(")
		}, e.Property.prototype.getFillStyleDefinition = function(t) {
			var n = this.getDefinition();
			return null != n && n.createGradient ? n.createGradient(e.ctx, t) : null != n && n.createPattern ? n.createPattern(e.ctx, t) : null
		}, e.Property.prototype.getDPI = function() {
			return 96
		}, e.Property.prototype.getEM = function(t) {
			var n = 12,
				i = new e.Property("fontSize", e.Font.Parse(e.ctx.font).fontSize);
			return i.hasValue() && (n = i.toPixels(t)), n
		}, e.Property.prototype.getUnits = function() {
			var e = this.value + "";
			return e.replace(/[0-9\.\-]/g, "")
		}, e.Property.prototype.toPixels = function(t) {
			if (!this.hasValue()) return 0;
			var n = this.value + "";
			return n.match(/em$/) ? this.numValue() * this.getEM(t) : n.match(/ex$/) ? this.numValue() * this.getEM(t) / 2 : n.match(/px$/) ? this.numValue() : n.match(/pt$/) ? this.numValue() * this.getDPI(t) * (1 / 72) : n.match(/pc$/) ? 15 * this.numValue() : n.match(/cm$/) ? this.numValue() * this.getDPI(t) / 2.54 : n.match(/mm$/) ? this.numValue() * this.getDPI(t) / 25.4 : n.match(/in$/) ? this.numValue() * this.getDPI(t) : n.match(/%$/) ? this.numValue() * e.ViewPort.ComputeSize(t) : this.numValue()
		}, e.Property.prototype.toMilliseconds = function() {
			if (!this.hasValue()) return 0;
			var e = this.value + "";
			return e.match(/s$/) ? 1e3 * this.numValue() : e.match(/ms$/) ? this.numValue() : this.numValue()
		}, e.Property.prototype.toRadians = function() {
			if (!this.hasValue()) return 0;
			var e = this.value + "";
			return e.match(/deg$/) ? this.numValue() * (Math.PI / 180) : e.match(/grad$/) ? this.numValue() * (Math.PI / 200) : e.match(/rad$/) ? this.numValue() : this.numValue() * (Math.PI / 180)
		}, e.Font = new function() {
			this.Styles = "normal|italic|oblique|inherit", this.Variants = "normal|small-caps|inherit", this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit", this.CreateFont = function(t, n, i, r, a, o) {
				var s = null != o ? this.Parse(o) : this.CreateFont("", "", "", "", "", e.ctx.font);
				return {
					fontFamily: a || s.fontFamily,
					fontSize: r || s.fontSize,
					fontStyle: t || s.fontStyle,
					fontWeight: i || s.fontWeight,
					fontVariant: n || s.fontVariant,
					toString: function() {
						return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ")
					}
				}
			};
			var t = this;
			this.Parse = function(n) {
				for (var i = {}, r = e.trim(e.compressSpaces(n || "")).split(" "), a = {
					fontSize: !1,
					fontStyle: !1,
					fontWeight: !1,
					fontVariant: !1
				}, o = "", s = 0; r.length > s; s++) a.fontStyle || -1 == t.Styles.indexOf(r[s]) ? a.fontVariant || -1 == t.Variants.indexOf(r[s]) ? a.fontWeight || -1 == t.Weights.indexOf(r[s]) ? a.fontSize ? "inherit" != r[s] && (o += r[s]) : ("inherit" != r[s] && (i.fontSize = r[s].split("/")[0]), a.fontStyle = a.fontVariant = a.fontWeight = a.fontSize = !0) : ("inherit" != r[s] && (i.fontWeight = r[s]), a.fontStyle = a.fontVariant = a.fontWeight = !0) : ("inherit" != r[s] && (i.fontVariant = r[s]), a.fontStyle = a.fontVariant = !0) : ("inherit" != r[s] && (i.fontStyle = r[s]), a.fontStyle = !0);
				return "" != o && (i.fontFamily = o), i
			}
		}, e.ToNumberArray = function(t) {
			for (var n = e.trim(e.compressSpaces((t || "").replace(/,/g, " "))).split(" "), i = 0; n.length > i; i++) n[i] = parseFloat(n[i]);
			return n
		}, e.Point = function(e, t) {
			this.x = e, this.y = t
		}, e.Point.prototype.angleTo = function(e) {
			return Math.atan2(e.y - this.y, e.x - this.x)
		}, e.Point.prototype.applyTransform = function(e) {
			var t = this.x * e[0] + this.y * e[2] + e[4],
				n = this.x * e[1] + this.y * e[3] + e[5];
			this.x = t, this.y = n
		}, e.CreatePoint = function(t) {
			var n = e.ToNumberArray(t);
			return new e.Point(n[0], n[1])
		}, e.CreatePath = function(t) {
			for (var n = e.ToNumberArray(t), i = [], r = 0; n.length > r; r += 2) i.push(new e.Point(n[r], n[r + 1]));
			return i
		}, e.BoundingBox = function(e, t, n, r) {
			this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN, this.x = function() {
				return this.x1
			}, this.y = function() {
				return this.y1
			}, this.width = function() {
				return this.x2 - this.x1
			}, this.height = function() {
				return this.y2 - this.y1
			}, this.addPoint = function(e, t) {
				null != e && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), this.x1 > e && (this.x1 = e), e > this.x2 && (this.x2 = e)), null != t && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), this.y1 > t && (this.y1 = t), t > this.y2 && (this.y2 = t))
			}, this.addX = function(e) {
				this.addPoint(e, null)
			}, this.addY = function(e) {
				this.addPoint(null, e)
			}, this.addBoundingBox = function(e) {
				this.addPoint(e.x1, e.y1), this.addPoint(e.x2, e.y2)
			}, this.addQuadraticCurve = function(e, t, n, i, r, a) {
				var o = e + 2 / 3 * (n - e),
					s = t + 2 / 3 * (i - t),
					l = o + 1 / 3 * (r - e),
					u = s + 1 / 3 * (a - t);
				this.addBezierCurve(e, t, o, l, s, u, r, a)
			}, this.addBezierCurve = function(e, t, n, r, a, o, s, l) {
				var u = [e, t],
					c = [n, r],
					h = [a, o],
					d = [s, l];
				for (this.addPoint(u[0], u[1]), this.addPoint(d[0], d[1]), i = 0; 1 >= i; i++) {
					var p = function(e) {
						return Math.pow(1 - e, 3) * u[i] + 3 * Math.pow(1 - e, 2) * e * c[i] + 3 * (1 - e) * Math.pow(e, 2) * h[i] + Math.pow(e, 3) * d[i]
					}, f = 6 * u[i] - 12 * c[i] + 6 * h[i],
						m = -3 * u[i] + 9 * c[i] - 9 * h[i] + 3 * d[i],
						g = 3 * c[i] - 3 * u[i];
					if (0 != m) {
						var y = Math.pow(f, 2) - 4 * g * m;
						if (!(0 > y)) {
							var v = (-f + Math.sqrt(y)) / (2 * m);
							v > 0 && 1 > v && (0 == i && this.addX(p(v)), 1 == i && this.addY(p(v)));
							var b = (-f - Math.sqrt(y)) / (2 * m);
							b > 0 && 1 > b && (0 == i && this.addX(p(b)), 1 == i && this.addY(p(b)))
						}
					} else {
						if (0 == f) continue;
						var w = -g / f;
						w > 0 && 1 > w && (0 == i && this.addX(p(w)), 1 == i && this.addY(p(w)))
					}
				}
			}, this.isPointInBox = function(e, t) {
				return e >= this.x1 && this.x2 >= e && t >= this.y1 && this.y2 >= t
			}, this.addPoint(e, t), this.addPoint(n, r)
		}, e.Transform = function(t) {
			var n = this;
			this.Type = {}, this.Type.translate = function(t) {
				this.p = e.CreatePoint(t), this.apply = function(e) {
					e.translate(this.p.x || 0, this.p.y || 0)
				}, this.applyToPoint = function(e) {
					e.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0])
				}
			}, this.Type.rotate = function(t) {
				var n = e.ToNumberArray(t);
				this.angle = new e.Property("angle", n[0]), this.cx = n[1] || 0, this.cy = n[2] || 0, this.apply = function(e) {
					e.translate(this.cx, this.cy), e.rotate(this.angle.toRadians()), e.translate(-this.cx, -this.cy)
				}, this.applyToPoint = function(e) {
					var t = this.angle.toRadians();
					e.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]), e.applyTransform([Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0]), e.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0])
				}
			}, this.Type.scale = function(t) {
				this.p = e.CreatePoint(t), this.apply = function(e) {
					e.scale(this.p.x || 1, this.p.y || this.p.x || 1)
				}, this.applyToPoint = function(e) {
					e.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0])
				}
			}, this.Type.matrix = function(t) {
				this.m = e.ToNumberArray(t), this.apply = function(e) {
					e.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5])
				}, this.applyToPoint = function(e) {
					e.applyTransform(this.m)
				}
			}, this.Type.SkewBase = function(t) {
				this.base = n.Type.matrix, this.base(t), this.angle = new e.Property("angle", t)
			}, this.Type.SkewBase.prototype = new this.Type.matrix, this.Type.skewX = function(e) {
				this.base = n.Type.SkewBase, this.base(e), this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]
			}, this.Type.skewX.prototype = new this.Type.SkewBase, this.Type.skewY = function(e) {
				this.base = n.Type.SkewBase, this.base(e), this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]
			}, this.Type.skewY.prototype = new this.Type.SkewBase, this.transforms = [], this.apply = function(e) {
				for (var t = 0; this.transforms.length > t; t++) this.transforms[t].apply(e)
			}, this.applyToPoint = function(e) {
				for (var t = 0; this.transforms.length > t; t++) this.transforms[t].applyToPoint(e)
			};
			for (var i = e.trim(e.compressSpaces(t)).split(/\s(?=[a-z])/), r = 0; i.length > r; r++) {
				var a = i[r].split("(")[0],
					o = i[r].split("(")[1].replace(")", ""),
					s = new this.Type[a](o);
				this.transforms.push(s)
			}
		}, e.AspectRatio = function(t, n, i, r, a, o, s, l, u, c) {
			n = e.compressSpaces(n), n = n.replace(/^defer\s/, "");
			var h = n.split(" ")[0] || "xMidYMid",
				d = n.split(" ")[1] || "meet",
				p = i / r,
				f = a / o,
				m = Math.min(p, f),
				g = Math.max(p, f);
			"meet" == d && (r *= m, o *= m), "slice" == d && (r *= g, o *= g), u = new e.Property("refX", u), c = new e.Property("refY", c), u.hasValue() && c.hasValue() ? t.translate(-m * u.toPixels("x"), -m * c.toPixels("y")) : (h.match(/^xMid/) && ("meet" == d && m == f || "slice" == d && g == f) && t.translate(i / 2 - r / 2, 0), h.match(/YMid$/) && ("meet" == d && m == p || "slice" == d && g == p) && t.translate(0, a / 2 - o / 2), h.match(/^xMax/) && ("meet" == d && m == f || "slice" == d && g == f) && t.translate(i - r, 0), h.match(/YMax$/) && ("meet" == d && m == p || "slice" == d && g == p) && t.translate(0, a - o)), "none" == h ? t.scale(p, f) : "meet" == d ? t.scale(m, m) : "slice" == d && t.scale(g, g), t.translate(null == s ? 0 : -s, null == l ? 0 : -l)
		}, e.Element = {}, e.EmptyProperty = new e.Property("EMPTY", ""), e.Element.ElementBase = function(t) {
			if (this.attributes = {}, this.styles = {}, this.children = [], this.attribute = function(t, n) {
				var i = this.attributes[t];
				return null != i ? i : (1 == n && (i = new e.Property(t, ""), this.attributes[t] = i), i || e.EmptyProperty)
			}, this.style = function(t, n) {
				var i = this.styles[t];
				if (null != i) return i;
				var r = this.attribute(t);
				if (null != r && r.hasValue()) return this.styles[t] = r, r;
				var a = this.parent;
				if (null != a) {
					var o = a.style(t);
					if (null != o && o.hasValue()) return o
				}
				return 1 == n && (i = new e.Property(t, ""), this.styles[t] = i), i || e.EmptyProperty
			}, this.render = function(e) {
				if ("none" != this.style("display").value && "hidden" != this.attribute("visibility").value) {
					if (e.save(), this.setContext(e), this.attribute("mask").hasValue()) {
						var t = this.attribute("mask").getDefinition();
						null != t && t.apply(e, this)
					} else if (this.style("filter").hasValue()) {
						var n = this.style("filter").getDefinition();
						null != n && n.apply(e, this)
					} else this.renderChildren(e);
					this.clearContext(e), e.restore()
				}
			}, this.setContext = function() {}, this.clearContext = function() {}, this.renderChildren = function(e) {
				for (var t = 0; this.children.length > t; t++) this.children[t].render(e)
			}, this.addChild = function(t, n) {
				var i = t;
				n && (i = e.CreateElement(t)), i.parent = this, this.children.push(i)
			}, null != t && 1 == t.nodeType) {
				for (var n = 0; t.childNodes.length > n; n++) {
					var i = t.childNodes[n];
					1 == i.nodeType && this.addChild(i, !0)
				}
				for (var n = 0; t.attributes.length > n; n++) {
					var r = t.attributes[n];
					this.attributes[r.nodeName] = new e.Property(r.nodeName, r.nodeValue)
				}
				var a = e.Styles[t.nodeName];
				if (null != a) for (var o in a) this.styles[o] = a[o];
				if (this.attribute("class").hasValue()) for (var s = e.compressSpaces(this.attribute("class").value).split(" "), l = 0; s.length > l; l++) {
					if (a = e.Styles["." + s[l]], null != a) for (var o in a) this.styles[o] = a[o];
					if (a = e.Styles[t.nodeName + "." + s[l]], null != a) for (var o in a) this.styles[o] = a[o]
				}
				if (this.attribute("id").hasValue()) {
					var a = e.Styles["#" + this.attribute("id").value];
					if (null != a) for (var o in a) this.styles[o] = a[o]
				}
				if (this.attribute("style").hasValue()) for (var a = this.attribute("style").value.split(";"), n = 0; a.length > n; n++) if ("" != e.trim(a[n])) {
					var u = a[n].split(":"),
						o = e.trim(u[0]),
						c = e.trim(u[1]);
					this.styles[o] = new e.Property(o, c)
				}
				this.attribute("id").hasValue() && null == e.Definitions[this.attribute("id").value] && (e.Definitions[this.attribute("id").value] = this)
			}
		}, e.Element.RenderedElementBase = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.setContext = function(t) {
				if (this.style("fill").isUrlDefinition()) {
					var n = this.style("fill").getFillStyleDefinition(this);
					null != n && (t.fillStyle = n)
				} else if (this.style("fill").hasValue()) {
					var i = this.style("fill");
					"currentColor" == i.value && (i.value = this.style("color").value), t.fillStyle = "none" == i.value ? "rgba(0,0,0,0)" : i.value
				}
				if (this.style("fill-opacity").hasValue()) {
					var i = new e.Property("fill", t.fillStyle);
					i = i.addOpacity(this.style("fill-opacity").value), t.fillStyle = i.value
				}
				if (this.style("stroke").isUrlDefinition()) {
					var n = this.style("stroke").getFillStyleDefinition(this);
					null != n && (t.strokeStyle = n)
				} else if (this.style("stroke").hasValue()) {
					var r = this.style("stroke");
					"currentColor" == r.value && (r.value = this.style("color").value), t.strokeStyle = "none" == r.value ? "rgba(0,0,0,0)" : r.value
				}
				if (this.style("stroke-opacity").hasValue()) {
					var r = new e.Property("stroke", t.strokeStyle);
					r = r.addOpacity(this.style("stroke-opacity").value), t.strokeStyle = r.value
				}
				if (this.style("stroke-width").hasValue() && (t.lineWidth = this.style("stroke-width").toPixels()), this.style("stroke-linecap").hasValue() && (t.lineCap = this.style("stroke-linecap").value), this.style("stroke-linejoin").hasValue() && (t.lineJoin = this.style("stroke-linejoin").value), this.style("stroke-miterlimit").hasValue() && (t.miterLimit = this.style("stroke-miterlimit").value), t.font !== void 0 && (t.font = "" + e.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value)), this.attribute("transform").hasValue()) {
					var a = new e.Transform(this.attribute("transform").value);
					a.apply(t)
				}
				if (this.attribute("clip-path").hasValue()) {
					var o = this.attribute("clip-path").getDefinition();
					null != o && o.apply(t)
				}
				this.style("opacity").hasValue() && (t.globalAlpha = this.style("opacity").numValue())
			}
		}, e.Element.RenderedElementBase.prototype = new e.Element.ElementBase, e.Element.PathElementBase = function(t) {
			this.base = e.Element.RenderedElementBase, this.base(t), this.path = function(t) {
				return null != t && t.beginPath(), new e.BoundingBox
			}, this.renderChildren = function(t) {
				this.path(t), e.Mouse.checkPath(this, t), "" != t.fillStyle && t.fill(), "" != t.strokeStyle && t.stroke();
				var n = this.getMarkers();
				if (null != n) {
					if (this.style("marker-start").isUrlDefinition()) {
						var i = this.style("marker-start").getDefinition();
						i.render(t, n[0][0], n[0][1])
					}
					if (this.style("marker-mid").isUrlDefinition()) for (var i = this.style("marker-mid").getDefinition(), r = 1; n.length - 1 > r; r++) i.render(t, n[r][0], n[r][1]);
					if (this.style("marker-end").isUrlDefinition()) {
						var i = this.style("marker-end").getDefinition();
						i.render(t, n[n.length - 1][0], n[n.length - 1][1])
					}
				}
			}, this.getBoundingBox = function() {
				return this.path()
			}, this.getMarkers = function() {
				return null
			}
		}, e.Element.PathElementBase.prototype = new e.Element.RenderedElementBase, e.Element.svg = function(t) {
			this.base = e.Element.RenderedElementBase, this.base(t), this.baseClearContext = this.clearContext, this.clearContext = function(t) {
				this.baseClearContext(t), e.ViewPort.RemoveCurrent()
			}, this.baseSetContext = this.setContext, this.setContext = function(t) {
				t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4, this.baseSetContext(t), this.attribute("x").hasValue() || (this.attribute("x", !0).value = 0), this.attribute("y").hasValue() || (this.attribute("y", !0).value = 0), t.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
				var n = e.ViewPort.width(),
					i = e.ViewPort.height();
				if (this.attribute("width").hasValue() || (this.attribute("width", !0).value = "100%"), this.attribute("height").hasValue() || (this.attribute("height", !0).value = "100%"), this.root === void 0) {
					n = this.attribute("width").toPixels("x"), i = this.attribute("height").toPixels("y");
					var r = 0,
						a = 0;
					this.attribute("refX").hasValue() && this.attribute("refY").hasValue() && (r = -this.attribute("refX").toPixels("x"), a = -this.attribute("refY").toPixels("y")), t.beginPath(), t.moveTo(r, a), t.lineTo(n, a), t.lineTo(n, i), t.lineTo(r, i), t.closePath(), t.clip()
				}
				if (e.ViewPort.SetCurrent(n, i), this.attribute("viewBox").hasValue()) {
					var o = e.ToNumberArray(this.attribute("viewBox").value),
						s = o[0],
						l = o[1];
					n = o[2], i = o[3], e.AspectRatio(t, this.attribute("preserveAspectRatio").value, e.ViewPort.width(), n, e.ViewPort.height(), i, s, l, this.attribute("refX").value, this.attribute("refY").value), e.ViewPort.RemoveCurrent(), e.ViewPort.SetCurrent(o[2], o[3])
				}
			}
		}, e.Element.svg.prototype = new e.Element.RenderedElementBase, e.Element.rect = function(t) {
			this.base = e.Element.PathElementBase, this.base(t), this.path = function(t) {
				var n = this.attribute("x").toPixels("x"),
					i = this.attribute("y").toPixels("y"),
					r = this.attribute("width").toPixels("x"),
					a = this.attribute("height").toPixels("y"),
					o = this.attribute("rx").toPixels("x"),
					s = this.attribute("ry").toPixels("y");
				return this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (s = o), this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (o = s), null != t && (t.beginPath(), t.moveTo(n + o, i), t.lineTo(n + r - o, i), t.quadraticCurveTo(n + r, i, n + r, i + s), t.lineTo(n + r, i + a - s), t.quadraticCurveTo(n + r, i + a, n + r - o, i + a), t.lineTo(n + o, i + a), t.quadraticCurveTo(n, i + a, n, i + a - s), t.lineTo(n, i + s), t.quadraticCurveTo(n, i, n + o, i), t.closePath()), new e.BoundingBox(n, i, n + r, i + a)
			}
		}, e.Element.rect.prototype = new e.Element.PathElementBase, e.Element.circle = function(t) {
			this.base = e.Element.PathElementBase, this.base(t), this.path = function(t) {
				var n = this.attribute("cx").toPixels("x"),
					i = this.attribute("cy").toPixels("y"),
					r = this.attribute("r").toPixels();
				return null != t && (t.beginPath(), t.arc(n, i, r, 0, 2 * Math.PI, !0), t.closePath()), new e.BoundingBox(n - r, i - r, n + r, i + r)
			}
		}, e.Element.circle.prototype = new e.Element.PathElementBase, e.Element.ellipse = function(t) {
			this.base = e.Element.PathElementBase, this.base(t), this.path = function(t) {
				var n = 4 * ((Math.sqrt(2) - 1) / 3),
					i = this.attribute("rx").toPixels("x"),
					r = this.attribute("ry").toPixels("y"),
					a = this.attribute("cx").toPixels("x"),
					o = this.attribute("cy").toPixels("y");
				return null != t && (t.beginPath(), t.moveTo(a, o - r), t.bezierCurveTo(a + n * i, o - r, a + i, o - n * r, a + i, o), t.bezierCurveTo(a + i, o + n * r, a + n * i, o + r, a, o + r), t.bezierCurveTo(a - n * i, o + r, a - i, o + n * r, a - i, o), t.bezierCurveTo(a - i, o - n * r, a - n * i, o - r, a, o - r), t.closePath()), new e.BoundingBox(a - i, o - r, a + i, o + r)
			}
		}, e.Element.ellipse.prototype = new e.Element.PathElementBase, e.Element.line = function(t) {
			this.base = e.Element.PathElementBase, this.base(t), this.getPoints = function() {
				return [new e.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new e.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))]
			}, this.path = function(t) {
				var n = this.getPoints();
				return null != t && (t.beginPath(), t.moveTo(n[0].x, n[0].y), t.lineTo(n[1].x, n[1].y)), new e.BoundingBox(n[0].x, n[0].y, n[1].x, n[1].y)
			}, this.getMarkers = function() {
				var e = this.getPoints(),
					t = e[0].angleTo(e[1]);
				return [[e[0], t], [e[1], t]]
			}
		}, e.Element.line.prototype = new e.Element.PathElementBase, e.Element.polyline = function(t) {
			this.base = e.Element.PathElementBase, this.base(t), this.points = e.CreatePath(this.attribute("points").value), this.path = function(t) {
				var n = new e.BoundingBox(this.points[0].x, this.points[0].y);
				null != t && (t.beginPath(), t.moveTo(this.points[0].x, this.points[0].y));
				for (var i = 1; this.points.length > i; i++) n.addPoint(this.points[i].x, this.points[i].y), null != t && t.lineTo(this.points[i].x, this.points[i].y);
				return n
			}, this.getMarkers = function() {
				for (var e = [], t = 0; this.points.length - 1 > t; t++) e.push([this.points[t], this.points[t].angleTo(this.points[t + 1])]);
				return e.push([this.points[this.points.length - 1], e[e.length - 1][1]]), e
			}
		}, e.Element.polyline.prototype = new e.Element.PathElementBase, e.Element.polygon = function(t) {
			this.base = e.Element.polyline, this.base(t), this.basePath = this.path, this.path = function(e) {
				var t = this.basePath(e);
				return null != e && (e.lineTo(this.points[0].x, this.points[0].y), e.closePath()), t
			}
		}, e.Element.polygon.prototype = new e.Element.polyline, e.Element.path = function(t) {
			this.base = e.Element.PathElementBase, this.base(t);
			var n = this.attribute("d").value;
			n = n.replace(/,/gm, " "), n = n.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), n = n.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), n = n.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2"), n = n.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), n = n.replace(/([0-9])([+\-])/gm, "$1 $2"), n = n.replace(/(\.[0-9]*)(\.)/gm, "$1 $2"), n = n.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "), n = e.compressSpaces(n), n = e.trim(n), this.PathParser = new function(t) {
				this.tokens = t.split(" "), this.reset = function() {
					this.i = -1, this.command = "", this.previousCommand = "", this.start = new e.Point(0, 0), this.control = new e.Point(0, 0), this.current = new e.Point(0, 0), this.points = [], this.angles = []
				}, this.isEnd = function() {
					return this.i >= this.tokens.length - 1
				}, this.isCommandOrEnd = function() {
					return this.isEnd() ? !0 : null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
				}, this.isRelativeCommand = function() {
					switch (this.command) {
						case "m":
						case "l":
						case "h":
						case "v":
						case "c":
						case "s":
						case "q":
						case "t":
						case "a":
						case "z":
							return !0
					}
					return !1
				}, this.getToken = function() {
					return this.i++, this.tokens[this.i]
				}, this.getScalar = function() {
					return parseFloat(this.getToken())
				}, this.nextCommand = function() {
					this.previousCommand = this.command, this.command = this.getToken()
				}, this.getPoint = function() {
					var t = new e.Point(this.getScalar(), this.getScalar());
					return this.makeAbsolute(t)
				}, this.getAsControlPoint = function() {
					var e = this.getPoint();
					return this.control = e, e
				}, this.getAsCurrentPoint = function() {
					var e = this.getPoint();
					return this.current = e, e
				}, this.getReflectedControlPoint = function() {
					if ("c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase()) return this.current;
					var t = new e.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
					return t
				}, this.makeAbsolute = function(e) {
					return this.isRelativeCommand() && (e.x += this.current.x, e.y += this.current.y), e
				}, this.addMarker = function(e, t, n) {
					null != n && this.angles.length > 0 && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(n)), this.addMarkerAngle(e, null == t ? null : t.angleTo(e))
				}, this.addMarkerAngle = function(e, t) {
					this.points.push(e), this.angles.push(t)
				}, this.getMarkerPoints = function() {
					return this.points
				}, this.getMarkerAngles = function() {
					for (var e = 0; this.angles.length > e; e++) if (null == this.angles[e]) for (var t = e + 1; this.angles.length > t; t++) if (null != this.angles[t]) {
						this.angles[e] = this.angles[t];
						break
					}
					return this.angles
				}
			}(n), this.path = function(t) {
				var n = this.PathParser;
				n.reset();
				var i = new e.BoundingBox;
				for (null != t && t.beginPath(); !n.isEnd();) switch (n.nextCommand(), n.command) {
					case "M":
					case "m":
						var r = n.getAsCurrentPoint();
						for (n.addMarker(r), i.addPoint(r.x, r.y), null != t && t.moveTo(r.x, r.y), n.start = n.current; !n.isCommandOrEnd();) {
							var r = n.getAsCurrentPoint();
							n.addMarker(r, n.start), i.addPoint(r.x, r.y), null != t && t.lineTo(r.x, r.y)
						}
						break;
					case "L":
					case "l":
						for (; !n.isCommandOrEnd();) {
							var a = n.current,
								r = n.getAsCurrentPoint();
							n.addMarker(r, a), i.addPoint(r.x, r.y), null != t && t.lineTo(r.x, r.y)
						}
						break;
					case "H":
					case "h":
						for (; !n.isCommandOrEnd();) {
							var o = new e.Point((n.isRelativeCommand() ? n.current.x : 0) + n.getScalar(), n.current.y);
							n.addMarker(o, n.current), n.current = o, i.addPoint(n.current.x, n.current.y), null != t && t.lineTo(n.current.x, n.current.y)
						}
						break;
					case "V":
					case "v":
						for (; !n.isCommandOrEnd();) {
							var o = new e.Point(n.current.x, (n.isRelativeCommand() ? n.current.y : 0) + n.getScalar());
							n.addMarker(o, n.current), n.current = o, i.addPoint(n.current.x, n.current.y), null != t && t.lineTo(n.current.x, n.current.y)
						}
						break;
					case "C":
					case "c":
						for (; !n.isCommandOrEnd();) {
							var s = n.current,
								l = n.getPoint(),
								u = n.getAsControlPoint(),
								c = n.getAsCurrentPoint();
							n.addMarker(c, u, l), i.addBezierCurve(s.x, s.y, l.x, l.y, u.x, u.y, c.x, c.y), null != t && t.bezierCurveTo(l.x, l.y, u.x, u.y, c.x, c.y)
						}
						break;
					case "S":
					case "s":
						for (; !n.isCommandOrEnd();) {
							var s = n.current,
								l = n.getReflectedControlPoint(),
								u = n.getAsControlPoint(),
								c = n.getAsCurrentPoint();
							n.addMarker(c, u, l), i.addBezierCurve(s.x, s.y, l.x, l.y, u.x, u.y, c.x, c.y), null != t && t.bezierCurveTo(l.x, l.y, u.x, u.y, c.x, c.y)
						}
						break;
					case "Q":
					case "q":
						for (; !n.isCommandOrEnd();) {
							var s = n.current,
								u = n.getAsControlPoint(),
								c = n.getAsCurrentPoint();
							n.addMarker(c, u, u), i.addQuadraticCurve(s.x, s.y, u.x, u.y, c.x, c.y), null != t && t.quadraticCurveTo(u.x, u.y, c.x, c.y)
						}
						break;
					case "T":
					case "t":
						for (; !n.isCommandOrEnd();) {
							var s = n.current,
								u = n.getReflectedControlPoint();
							n.control = u;
							var c = n.getAsCurrentPoint();
							n.addMarker(c, u, u), i.addQuadraticCurve(s.x, s.y, u.x, u.y, c.x, c.y), null != t && t.quadraticCurveTo(u.x, u.y, c.x, c.y)
						}
						break;
					case "A":
					case "a":
						for (; !n.isCommandOrEnd();) {
							var s = n.current,
								h = n.getScalar(),
								d = n.getScalar(),
								p = n.getScalar() * (Math.PI / 180),
								f = n.getScalar(),
								m = n.getScalar(),
								c = n.getAsCurrentPoint(),
								g = new e.Point(Math.cos(p) * (s.x - c.x) / 2 + Math.sin(p) * (s.y - c.y) / 2, -Math.sin(p) * (s.x - c.x) / 2 + Math.cos(p) * (s.y - c.y) / 2),
								y = Math.pow(g.x, 2) / Math.pow(h, 2) + Math.pow(g.y, 2) / Math.pow(d, 2);
							y > 1 && (h *= Math.sqrt(y), d *= Math.sqrt(y));
							var v = (f == m ? -1 : 1) * Math.sqrt((Math.pow(h, 2) * Math.pow(d, 2) - Math.pow(h, 2) * Math.pow(g.y, 2) - Math.pow(d, 2) * Math.pow(g.x, 2)) / (Math.pow(h, 2) * Math.pow(g.y, 2) + Math.pow(d, 2) * Math.pow(g.x, 2)));
							isNaN(v) && (v = 0);
							var b = new e.Point(v * h * g.y / d, v * -d * g.x / h),
								w = new e.Point((s.x + c.x) / 2 + Math.cos(p) * b.x - Math.sin(p) * b.y, (s.y + c.y) / 2 + Math.sin(p) * b.x + Math.cos(p) * b.y),
								x = function(e) {
									return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2))
								}, k = function(e, t) {
									return (e[0] * t[0] + e[1] * t[1]) / (x(e) * x(t))
								}, _ = function(e, t) {
									return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(k(e, t))
								}, C = _([1, 0], [(g.x - b.x) / h, (g.y - b.y) / d]),
								S = [(g.x - b.x) / h, (g.y - b.y) / d],
								E = [(-g.x - b.x) / h, (-g.y - b.y) / d],
								T = _(S, E); - 1 >= k(S, E) && (T = Math.PI), k(S, E) >= 1 && (T = 0), 0 == m && T > 0 && (T -= 2 * Math.PI), 1 == m && 0 > T && (T += 2 * Math.PI);
							var M = new e.Point(w.x + h * Math.cos((C + (C + T)) / 2), w.y + d * Math.sin((C + (C + T)) / 2));
							if (n.addMarkerAngle(M, (C + (C + T)) / 2 + (0 == m ? -1 : 1) * Math.PI / 2), n.addMarkerAngle(c, C + T + (0 == m ? -1 : 1) * Math.PI / 2), i.addPoint(c.x, c.y), null != t) {
								var k = h > d ? h : d,
									L = h > d ? 1 : h / d,
									P = h > d ? d / h : 1;
								t.translate(w.x, w.y), t.rotate(p), t.scale(L, P), t.arc(0, 0, k, C, C + T, 1 - m), t.scale(1 / L, 1 / P), t.rotate(-p), t.translate(-w.x, -w.y)
							}
						}
						break;
					case "Z":
					case "z":
						null != t && t.closePath(), n.current = n.start
				}
				return i
			}, this.getMarkers = function() {
				for (var e = this.PathParser.getMarkerPoints(), t = this.PathParser.getMarkerAngles(), n = [], i = 0; e.length > i; i++) n.push([e[i], t[i]]);
				return n
			}
		}, e.Element.path.prototype = new e.Element.PathElementBase, e.Element.pattern = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.createPattern = function(t) {
				var n = new e.Element.svg;
				n.attributes.viewBox = new e.Property("viewBox", this.attribute("viewBox").value), n.attributes.x = new e.Property("x", this.attribute("x").value), n.attributes.y = new e.Property("y", this.attribute("y").value), n.attributes.width = new e.Property("width", this.attribute("width").value), n.attributes.height = new e.Property("height", this.attribute("height").value), n.children = this.children;
				var i = document.createElement("canvas");
				return document.body.appendChild(i), i.width = this.attribute("width").toPixels("x") + this.attribute("x").toPixels("x"), i.height = this.attribute("height").toPixels("y") + this.attribute("y").toPixels("y"), n.render(i.getContext("2d")), t.createPattern(i, "repeat")
			}
		}, e.Element.pattern.prototype = new e.Element.ElementBase, e.Element.marker = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.baseRender = this.render, this.render = function(t, n, i) {
				t.translate(n.x, n.y), "auto" == this.attribute("orient").valueOrDefault("auto") && t.rotate(i), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && t.scale(t.lineWidth, t.lineWidth), t.save();
				var r = new e.Element.svg;
				r.attributes.viewBox = new e.Property("viewBox", this.attribute("viewBox").value), r.attributes.refX = new e.Property("refX", this.attribute("refX").value), r.attributes.refY = new e.Property("refY", this.attribute("refY").value), r.attributes.width = new e.Property("width", this.attribute("markerWidth").value), r.attributes.height = new e.Property("height", this.attribute("markerHeight").value), r.attributes.fill = new e.Property("fill", this.attribute("fill").valueOrDefault("black")), r.attributes.stroke = new e.Property("stroke", this.attribute("stroke").valueOrDefault("none")), r.children = this.children, r.render(t), t.restore(), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && t.scale(1 / t.lineWidth, 1 / t.lineWidth), "auto" == this.attribute("orient").valueOrDefault("auto") && t.rotate(-i), t.translate(-n.x, -n.y)
			}
		}, e.Element.marker.prototype = new e.Element.ElementBase, e.Element.defs = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.render = function() {}
		}, e.Element.defs.prototype = new e.Element.ElementBase, e.Element.GradientBase = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.gradientUnits = this.attribute("gradientUnits").valueOrDefault("objectBoundingBox"), this.stops = [];
			for (var n = 0; this.children.length > n; n++) {
				var i = this.children[n];
				this.stops.push(i)
			}
			this.getGradient = function() {}, this.createGradient = function(t, n) {
				var i = this;
				this.attribute("xlink:href").hasValue() && (i = this.attribute("xlink:href").getDefinition());
				var r = this.getGradient(t, n);
				if (null == r) return i.stops[i.stops.length - 1].color;
				for (var a = 0; i.stops.length > a; a++) r.addColorStop(i.stops[a].offset, i.stops[a].color);
				if (this.attribute("gradientTransform").hasValue()) {
					var o = e.ViewPort.viewPorts[0],
						s = new e.Element.rect;
					s.attributes.x = new e.Property("x", -e.MAX_VIRTUAL_PIXELS / 3), s.attributes.y = new e.Property("y", -e.MAX_VIRTUAL_PIXELS / 3), s.attributes.width = new e.Property("width", e.MAX_VIRTUAL_PIXELS), s.attributes.height = new e.Property("height", e.MAX_VIRTUAL_PIXELS);
					var l = new e.Element.g;
					l.attributes.transform = new e.Property("transform", this.attribute("gradientTransform").value), l.children = [s];
					var u = new e.Element.svg;
					u.attributes.x = new e.Property("x", 0), u.attributes.y = new e.Property("y", 0), u.attributes.width = new e.Property("width", o.width), u.attributes.height = new e.Property("height", o.height), u.children = [l];
					var c = document.createElement("canvas");
					c.width = o.width, c.height = o.height;
					var h = c.getContext("2d");
					return h.fillStyle = r, u.render(h), h.createPattern(c, "no-repeat")
				}
				return r
			}
		}, e.Element.GradientBase.prototype = new e.Element.ElementBase, e.Element.linearGradient = function(t) {
			this.base = e.Element.GradientBase, this.base(t), this.getGradient = function(e, t) {
				var n = t.getBoundingBox(),
					i = "objectBoundingBox" == this.gradientUnits ? n.x() + n.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x"),
					r = "objectBoundingBox" == this.gradientUnits ? n.y() + n.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y"),
					a = "objectBoundingBox" == this.gradientUnits ? n.x() + n.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x"),
					o = "objectBoundingBox" == this.gradientUnits ? n.y() + n.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
				return i == a && r == o ? null : e.createLinearGradient(i, r, a, o)
			}
		}, e.Element.linearGradient.prototype = new e.Element.GradientBase, e.Element.radialGradient = function(t) {
			this.base = e.Element.GradientBase, this.base(t), this.getGradient = function(e, t) {
				var n = t.getBoundingBox();
				this.attribute("cx").hasValue() || (this.attribute("cx", !0).value = "50%"), this.attribute("cy").hasValue() || (this.attribute("cy", !0).value = "50%"), this.attribute("r").hasValue() || (this.attribute("r", !0).value = "50%");
				var i = "objectBoundingBox" == this.gradientUnits ? n.x() + n.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x"),
					r = "objectBoundingBox" == this.gradientUnits ? n.y() + n.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y"),
					a = i,
					o = r;
				this.attribute("fx").hasValue() && (a = "objectBoundingBox" == this.gradientUnits ? n.x() + n.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x")), this.attribute("fy").hasValue() && (o = "objectBoundingBox" == this.gradientUnits ? n.y() + n.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y"));
				var s = "objectBoundingBox" == this.gradientUnits ? (n.width() + n.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels();
				return e.createRadialGradient(a, o, 0, i, r, s)
			}
		}, e.Element.radialGradient.prototype = new e.Element.GradientBase, e.Element.stop = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.offset = this.attribute("offset").numValue();
			var n = this.style("stop-color");
			this.style("stop-opacity").hasValue() && (n = n.addOpacity(this.style("stop-opacity").value)), this.color = n.value
		}, e.Element.stop.prototype = new e.Element.ElementBase, e.Element.AnimateBase = function(t) {
			this.base = e.Element.ElementBase, this.base(t), e.Animations.push(this), this.duration = 0, this.begin = this.attribute("begin").toMilliseconds(), this.maxDuration = this.begin + this.attribute("dur").toMilliseconds(), this.getProperty = function() {
				var e = this.attribute("attributeType").value,
					t = this.attribute("attributeName").value;
				return "CSS" == e ? this.parent.style(t, !0) : this.parent.attribute(t, !0)
			}, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.calcValue = function() {
				return ""
			}, this.update = function(e) {
				if (null == this.initialValue && (this.initialValue = this.getProperty().value, this.initialUnits = this.getProperty().getUnits()), this.duration > this.maxDuration) {
					if ("indefinite" != this.attribute("repeatCount").value) return "remove" != this.attribute("fill").valueOrDefault("remove") || this.removed ? !1 : (this.removed = !0, this.getProperty().value = this.initialValue, !0);
					this.duration = 0
				}
				this.duration = this.duration + e;
				var t = !1;
				if (this.begin < this.duration) {
					var n = this.calcValue();
					if (this.attribute("type").hasValue()) {
						var i = this.attribute("type").value;
						n = i + "(" + n + ")"
					}
					this.getProperty().value = n, t = !0
				}
				return t
			}, this.from = this.attribute("from"), this.to = this.attribute("to"), this.values = this.attribute("values"), this.values.hasValue() && (this.values.value = this.values.value.split(";")), this.progress = function() {
				var t = {
					progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
				};
				if (this.values.hasValue()) {
					var n = t.progress * (this.values.value.length - 1),
						i = Math.floor(n),
						r = Math.ceil(n);
					t.from = new e.Property("from", parseFloat(this.values.value[i])), t.to = new e.Property("to", parseFloat(this.values.value[r])), t.progress = (n - i) / (r - i)
				} else t.from = this.from, t.to = this.to;
				return t
			}
		}, e.Element.AnimateBase.prototype = new e.Element.ElementBase, e.Element.animate = function(t) {
			this.base = e.Element.AnimateBase, this.base(t), this.calcValue = function() {
				var e = this.progress(),
					t = e.from.numValue() + (e.to.numValue() - e.from.numValue()) * e.progress;
				return t + this.initialUnits
			}
		}, e.Element.animate.prototype = new e.Element.AnimateBase, e.Element.animateColor = function(t) {
			this.base = e.Element.AnimateBase, this.base(t), this.calcValue = function() {
				var e = this.progress(),
					t = new RGBColor(e.from.value),
					n = new RGBColor(e.to.value);
				if (t.ok && n.ok) {
					var i = t.r + (n.r - t.r) * e.progress,
						r = t.g + (n.g - t.g) * e.progress,
						a = t.b + (n.b - t.b) * e.progress;
					return "rgb(" + parseInt(i, 10) + "," + parseInt(r, 10) + "," + parseInt(a, 10) + ")"
				}
				return this.attribute("from").value
			}
		}, e.Element.animateColor.prototype = new e.Element.AnimateBase, e.Element.animateTransform = function(t) {
			this.base = e.Element.animate, this.base(t)
		}, e.Element.animateTransform.prototype = new e.Element.animate, e.Element.font = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.isRTL = !1, this.isArabic = !1, this.fontFace = null, this.missingGlyph = null, this.glyphs = [];
			for (var n = 0; this.children.length > n; n++) {
				var i = this.children[n];
				"font-face" == i.type ? (this.fontFace = i, i.style("font-family").hasValue() && (e.Definitions[i.style("font-family").value] = this)) : "missing-glyph" == i.type ? this.missingGlyph = i : "glyph" == i.type && ("" != i.arabicForm ? (this.isRTL = !0, this.isArabic = !0, this.glyphs[i.unicode] === void 0 && (this.glyphs[i.unicode] = []), this.glyphs[i.unicode][i.arabicForm] = i) : this.glyphs[i.unicode] = i)
			}
		}, e.Element.font.prototype = new e.Element.ElementBase, e.Element.fontface = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.ascent = this.attribute("ascent").value, this.descent = this.attribute("descent").value, this.unitsPerEm = this.attribute("units-per-em").numValue()
		}, e.Element.fontface.prototype = new e.Element.ElementBase, e.Element.missingglyph = function(t) {
			this.base = e.Element.path, this.base(t), this.horizAdvX = 0
		}, e.Element.missingglyph.prototype = new e.Element.path, e.Element.glyph = function(t) {
			this.base = e.Element.path, this.base(t), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.unicode = this.attribute("unicode").value, this.arabicForm = this.attribute("arabic-form").value
		}, e.Element.glyph.prototype = new e.Element.path, e.Element.text = function(t) {
			if (this.base = e.Element.RenderedElementBase, this.base(t), null != t) {
				this.children = [];
				for (var n = 0; t.childNodes.length > n; n++) {
					var i = t.childNodes[n];
					1 == i.nodeType ? this.addChild(i, !0) : 3 == i.nodeType && this.addChild(new e.Element.tspan(i), !1)
				}
			}
			this.baseSetContext = this.setContext, this.setContext = function(e) {
				this.baseSetContext(e), this.style("dominant-baseline").hasValue() && (e.textBaseline = this.style("dominant-baseline").value), this.style("alignment-baseline").hasValue() && (e.textBaseline = this.style("alignment-baseline").value)
			}, this.renderChildren = function(e) {
				for (var t = this.style("text-anchor").valueOrDefault("start"), n = this.attribute("x").toPixels("x"), i = this.attribute("y").toPixels("y"), r = 0; this.children.length > r; r++) {
					var a = this.children[r];
					a.attribute("x").hasValue() ? a.x = a.attribute("x").toPixels("x") : (this.attribute("dx").hasValue() && (i += this.attribute("dx").toPixels("x")), a.attribute("dx").hasValue() && (n += a.attribute("dx").toPixels("x")), a.x = n);
					var o = a.measureText(e);
					if ("start" != t && (0 == r || a.attribute("x").hasValue())) {
						for (var s = o, l = r + 1; this.children.length > l; l++) {
							var u = this.children[l];
							if (u.attribute("x").hasValue()) break;
							s += u.measureText(e)
						}
						a.x -= "end" == t ? s : s / 2
					}
					n = a.x + o, a.attribute("y").hasValue() ? a.y = a.attribute("y").toPixels("y") : (this.attribute("dy").hasValue() && (i += this.attribute("dy").toPixels("y")), a.attribute("dy").hasValue() && (i += a.attribute("dy").toPixels("y")), a.y = i), i = a.y, a.render(e)
				}
			}
		}, e.Element.text.prototype = new e.Element.RenderedElementBase, e.Element.TextElementBase = function(t) {
			this.base = e.Element.RenderedElementBase, this.base(t), this.getGlyph = function(e, t, n) {
				var i = t[n],
					r = null;
				if (e.isArabic) {
					var a = "isolated";
					(0 == n || " " == t[n - 1]) && t.length - 2 > n && " " != t[n + 1] && (a = "terminal"), n > 0 && " " != t[n - 1] && t.length - 2 > n && " " != t[n + 1] && (a = "medial"), n > 0 && " " != t[n - 1] && (n == t.length - 1 || " " == t[n + 1]) && (a = "initial"), e.glyphs[i] !== void 0 && (r = e.glyphs[i][a], null == r && "glyph" == e.glyphs[i].type && (r = e.glyphs[i]))
				} else r = e.glyphs[i];
				return null == r && (r = e.missingGlyph), r
			}, this.renderChildren = function(t) {
				var n = this.parent.style("font-family").getDefinition();
				if (null == n) "" != t.strokeStyle && t.strokeText(e.compressSpaces(this.getText()), this.x, this.y), "" != t.fillStyle && t.fillText(e.compressSpaces(this.getText()), this.x, this.y);
				else {
					var i = this.parent.style("font-size").numValueOrDefault(e.Font.Parse(e.ctx.font).fontSize),
						r = this.parent.style("font-style").valueOrDefault(e.Font.Parse(e.ctx.font).fontStyle),
						a = this.getText();
					n.isRTL && (a = a.split("").reverse().join(""));
					for (var o = e.ToNumberArray(this.parent.attribute("dx").value), s = 0; a.length > s; s++) {
						var l = this.getGlyph(n, a, s),
							u = i / n.fontFace.unitsPerEm;
						t.translate(this.x, this.y), t.scale(u, -u);
						var c = t.lineWidth;
						t.lineWidth = t.lineWidth * n.fontFace.unitsPerEm / i, "italic" == r && t.transform(1, 0, .4, 1, 0, 0), l.render(t), "italic" == r && t.transform(1, 0, -.4, 1, 0, 0), t.lineWidth = c, t.scale(1 / u, -1 / u), t.translate(-this.x, -this.y), this.x += i * (l.horizAdvX || n.horizAdvX) / n.fontFace.unitsPerEm, void 0 === o[s] || isNaN(o[s]) || (this.x += o[s])
					}
				}
			}, this.getText = function() {}, this.measureText = function(t) {
				var n = this.parent.style("font-family").getDefinition();
				if (null != n) {
					var i = this.parent.style("font-size").numValueOrDefault(e.Font.Parse(e.ctx.font).fontSize),
						r = 0,
						a = this.getText();
					n.isRTL && (a = a.split("").reverse().join(""));
					for (var o = e.ToNumberArray(this.parent.attribute("dx").value), s = 0; a.length > s; s++) {
						var l = this.getGlyph(n, a, s);
						r += (l.horizAdvX || n.horizAdvX) * i / n.fontFace.unitsPerEm, void 0 === o[s] || isNaN(o[s]) || (r += o[s])
					}
					return r
				}
				var u = e.compressSpaces(this.getText());
				if (!t.measureText) return 10 * u.length;
				t.save(), this.setContext(t);
				var c = t.measureText(u).width;
				return t.restore(), c
			}
		}, e.Element.TextElementBase.prototype = new e.Element.RenderedElementBase, e.Element.tspan = function(t) {
			this.base = e.Element.TextElementBase, this.base(t), this.text = 3 == t.nodeType ? t.nodeValue : t.childNodes.length > 0 ? t.childNodes[0].nodeValue : t.text, this.getText = function() {
				return this.text
			}
		}, e.Element.tspan.prototype = new e.Element.TextElementBase, e.Element.tref = function(t) {
			this.base = e.Element.TextElementBase, this.base(t), this.getText = function() {
				var e = this.attribute("xlink:href").getDefinition();
				return null != e ? e.children[0].getText() : void 0
			}
		}, e.Element.tref.prototype = new e.Element.TextElementBase, e.Element.a = function(t) {
			this.base = e.Element.TextElementBase, this.base(t), this.hasText = !0;
			for (var n = 0; t.childNodes.length > n; n++) 3 != t.childNodes[n].nodeType && (this.hasText = !1);
			this.text = this.hasText ? t.childNodes[0].nodeValue : "", this.getText = function() {
				return this.text
			}, this.baseRenderChildren = this.renderChildren, this.renderChildren = function(t) {
				if (this.hasText) {
					this.baseRenderChildren(t);
					var n = new e.Property("fontSize", e.Font.Parse(e.ctx.font).fontSize);
					e.Mouse.checkBoundingBox(this, new e.BoundingBox(this.x, this.y - n.toPixels("y"), this.x + this.measureText(t), this.y))
				} else {
					var i = new e.Element.g;
					i.children = this.children, i.parent = this, i.render(t)
				}
			}, this.onclick = function() {
				window.open(this.attribute("xlink:href").value)
			}, this.onmousemove = function() {
				e.ctx.canvas.style.cursor = "pointer"
			}
		}, e.Element.a.prototype = new e.Element.TextElementBase, e.Element.image = function(t) {
			this.base = e.Element.RenderedElementBase, this.base(t);
			var n = this.attribute("xlink:href").value,
				i = n.match(/\.svg$/);
			if (e.Images.push(this), this.loaded = !1, i) this.img = e.ajax(n), this.loaded = !0;
			else {
				this.img = document.createElement("img");
				var r = this;
				this.img.onload = function() {
					r.loaded = !0
				}, this.img.onerror = function() {
					console && console.log('ERROR: image "' + n + '" not found'), r.loaded = !0
				}, this.img.src = n
			}
			this.renderChildren = function(t) {
				var n = this.attribute("x").toPixels("x"),
					r = this.attribute("y").toPixels("y"),
					a = this.attribute("width").toPixels("x"),
					o = this.attribute("height").toPixels("y");
				0 != a && 0 != o && (t.save(), i ? t.drawSvg(this.img, n, r, a, o) : (t.translate(n, r), e.AspectRatio(t, this.attribute("preserveAspectRatio").value, a, this.img.width, o, this.img.height, 0, 0), t.drawImage(this.img, 0, 0)), t.restore())
			}
		}, e.Element.image.prototype = new e.Element.RenderedElementBase, e.Element.g = function(t) {
			this.base = e.Element.RenderedElementBase, this.base(t), this.getBoundingBox = function() {
				for (var t = new e.BoundingBox, n = 0; this.children.length > n; n++) t.addBoundingBox(this.children[n].getBoundingBox());
				return t
			}
		}, e.Element.g.prototype = new e.Element.RenderedElementBase, e.Element.symbol = function(t) {
			this.base = e.Element.RenderedElementBase, this.base(t), this.baseSetContext = this.setContext, this.setContext = function(t) {
				if (this.baseSetContext(t), this.attribute("viewBox").hasValue()) {
					var n = e.ToNumberArray(this.attribute("viewBox").value),
						i = n[0],
						r = n[1];
					width = n[2], height = n[3], e.AspectRatio(t, this.attribute("preserveAspectRatio").value, this.attribute("width").toPixels("x"), width, this.attribute("height").toPixels("y"), height, i, r), e.ViewPort.SetCurrent(n[2], n[3])
				}
			}
		}, e.Element.symbol.prototype = new e.Element.RenderedElementBase, e.Element.style = function(t) {
			this.base = e.Element.ElementBase, this.base(t);
			var n = t.childNodes[0].nodeValue + (t.childNodes.length > 1 ? t.childNodes[1].nodeValue : "");
			n = n.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ""), n = e.compressSpaces(n);
			for (var i = n.split("}"), r = 0; i.length > r; r++) if ("" != e.trim(i[r])) for (var a = i[r].split("{"), o = a[0].split(","), s = a[1].split(";"), l = 0; o.length > l; l++) {
				var u = e.trim(o[l]);
				if ("" != u) {
					for (var c = {}, h = 0; s.length > h; h++) {
						var d = s[h].indexOf(":"),
							p = s[h].substr(0, d),
							f = s[h].substr(d + 1, s[h].length - d);
						null != p && null != f && (c[e.trim(p)] = new e.Property(e.trim(p), e.trim(f)))
					}
					if (e.Styles[u] = c, "@font-face" == u) for (var m = c["font-family"].value.replace(/"/g, ""), g = c.src.value.split(","), y = 0; g.length > y; y++) if (g[y].indexOf('format("svg")') > 0) for (var v = g[y].indexOf("url"), b = g[y].indexOf(")", v), w = g[y].substr(v + 5, b - v - 6), x = e.parseXml(e.ajax(w)), k = x.getElementsByTagName("font"), _ = 0; k.length > _; _++) {
						var C = e.CreateElement(k[_]);
						e.Definitions[m] = C
					}
				}
			}
		}, e.Element.style.prototype = new e.Element.ElementBase, e.Element.use = function(t) {
			this.base = e.Element.RenderedElementBase, this.base(t), this.baseSetContext = this.setContext, this.setContext = function(e) {
				this.baseSetContext(e), this.attribute("x").hasValue() && e.translate(this.attribute("x").toPixels("x"), 0), this.attribute("y").hasValue() && e.translate(0, this.attribute("y").toPixels("y"))
			}, this.getDefinition = function() {
				var e = this.attribute("xlink:href").getDefinition();
				return this.attribute("width").hasValue() && (e.attribute("width", !0).value = this.attribute("width").value), this.attribute("height").hasValue() && (e.attribute("height", !0).value = this.attribute("height").value), e
			}, this.path = function(e) {
				var t = this.getDefinition();
				null != t && t.path(e)
			}, this.renderChildren = function(e) {
				var t = this.getDefinition();
				if (null != t) {
					var n = t.parent;
					t.parent = null, t.render(e), t.parent = n
				}
			}
		}, e.Element.use.prototype = new e.Element.RenderedElementBase, e.Element.mask = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.apply = function(e, t) {
				var n = this.attribute("x").toPixels("x"),
					i = this.attribute("y").toPixels("y"),
					r = this.attribute("width").toPixels("x"),
					a = this.attribute("height").toPixels("y"),
					o = t.attribute("mask").value;
				t.attribute("mask").value = "";
				var s = document.createElement("canvas");
				s.width = n + r, s.height = i + a;
				var l = s.getContext("2d");
				this.renderChildren(l);
				var u = document.createElement("canvas");
				u.width = n + r, u.height = i + a;
				var c = u.getContext("2d");
				t.render(c), c.globalCompositeOperation = "destination-in", c.fillStyle = l.createPattern(s, "no-repeat"), c.fillRect(0, 0, n + r, i + a), e.fillStyle = c.createPattern(u, "no-repeat"), e.fillRect(0, 0, n + r, i + a), t.attribute("mask").value = o
			}, this.render = function() {}
		}, e.Element.mask.prototype = new e.Element.ElementBase, e.Element.clipPath = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.apply = function(e) {
				for (var t = 0; this.children.length > t; t++) this.children[t].path && (this.children[t].path(e), e.clip())
			}, this.render = function() {}
		}, e.Element.clipPath.prototype = new e.Element.ElementBase, e.Element.filter = function(t) {
			this.base = e.Element.ElementBase, this.base(t), this.apply = function(e, t) {
				var n = t.getBoundingBox(),
					i = this.attribute("x").toPixels("x"),
					r = this.attribute("y").toPixels("y");
				(0 == i || 0 == r) && (i = n.x1, r = n.y1);
				var a = this.attribute("width").toPixels("x"),
					o = this.attribute("height").toPixels("y");
				(0 == a || 0 == o) && (a = n.width(), o = n.height());
				var s = t.style("filter").value;
				t.style("filter").value = "";
				var l = .2,
					u = l * a,
					c = l * o,
					h = document.createElement("canvas");
				h.width = a + 2 * u, h.height = o + 2 * c;
				var d = h.getContext("2d");
				d.translate(-i + u, -r + c), t.render(d);
				for (var p = 0; this.children.length > p; p++) this.children[p].apply(d, 0, 0, a + 2 * u, o + 2 * c);
				e.drawImage(h, 0, 0, a + 2 * u, o + 2 * c, i - u, r - c, a + 2 * u, o + 2 * c), t.style("filter", !0).value = s
			}, this.render = function() {}
		}, e.Element.filter.prototype = new e.Element.ElementBase, e.Element.feGaussianBlur = function(t) {
			function n(e) {
				e = Math.max(e, .01);
				var t = Math.ceil(4 * e) + 1;
				mask = [];
				for (var n = 0; t > n; n++) mask[n] = Math.exp(-.5 * (n / e) * (n / e));
				return mask
			}
			function i(e) {
				for (var t = 0, n = 1; e.length > n; n++) t += Math.abs(e[n]);
				t = 2 * t + Math.abs(e[0]);
				for (var n = 0; e.length > n; n++) e[n] /= t;
				return e
			}
			function r(e, t, n, i, r) {
				for (var s = 0; r > s; s++) for (var l = 0; i > l; l++) for (var u = a(e, l, s, i, r, 3) / 255, c = 0; 4 > c; c++) {
					for (var h = n[0] * (0 == u ? 255 : a(e, l, s, i, r, c)) * (0 == u || 3 == c ? 1 : u), d = 1; n.length > d; d++) {
						var p = a(e, Math.max(l - d, 0), s, i, r, 3) / 255,
							f = a(e, Math.min(l + d, i - 1), s, i, r, 3) / 255;
						h += n[d] * ((0 == p ? 255 : a(e, Math.max(l - d, 0), s, i, r, c)) * (0 == p || 3 == c ? 1 : p) + (0 == f ? 255 : a(e, Math.min(l + d, i - 1), s, i, r, c)) * (0 == f || 3 == c ? 1 : f))
					}
					o(t, s, l, r, i, c, h)
				}
			}
			function a(e, t, n, i, r, a) {
				return e[4 * n * i + 4 * t + a]
			}
			function o(e, t, n, i, r, a, o) {
				e[4 * n * i + 4 * t + a] = o
			}
			function s(e, t, a, o) {
				var s = e.getImageData(0, 0, t, a),
					l = n(o);
				l = i(l), tmp = [], r(s.data, tmp, l, t, a), r(tmp, s.data, l, a, t), e.clearRect(0, 0, t, a), e.putImageData(s, 0, 0)
			}
			this.base = e.Element.ElementBase, this.base(t), this.apply = function(e, t, n, i, r) {
				s(e, i, r, this.attribute("stdDeviation").numValue())
			}
		}, e.Element.filter.prototype = new e.Element.feGaussianBlur, e.Element.title = function() {}, e.Element.title.prototype = new e.Element.ElementBase, e.Element.desc = function() {}, e.Element.desc.prototype = new e.Element.ElementBase, e.Element.MISSING = function(e) {
			console && console.log("ERROR: Element '" + e.nodeName + "' not yet implemented.")
		}, e.Element.MISSING.prototype = new e.Element.ElementBase, e.CreateElement = function(t) {
			var n = t.nodeName.replace(/^[^:]+:/, "");
			n = n.replace(/\-/g, "");
			var i = null;
			return i = e.Element[n] !== void 0 ? new e.Element[n](t) : new e.Element.MISSING(t), i.type = t.nodeName, i
		}, e.load = function(t, n) {
			e.loadXml(t, e.ajax(n))
		}, e.loadXml = function(t, n) {
			e.loadXmlDoc(t, e.parseXml(n))
		}, e.loadXmlDoc = function(t, n) {
			e.init(t);
			var i = function(e) {
				for (var n = t.canvas; n;) e.x -= n.offsetLeft, e.y -= n.offsetTop, n = n.offsetParent;
				return window.scrollX && (e.x += window.scrollX), window.scrollY && (e.y += window.scrollY), e
			};
			1 != e.opts.ignoreMouse && (t.canvas.onclick = function(t) {
				var n = i(new e.Point(null != t ? t.clientX : event.clientX, null != t ? t.clientY : event.clientY));
				e.Mouse.onclick(n.x, n.y)
			}, t.canvas.onmousemove = function(t) {
				var n = i(new e.Point(null != t ? t.clientX : event.clientX, null != t ? t.clientY : event.clientY));
				e.Mouse.onmousemove(n.x, n.y)
			});
			var r = e.CreateElement(n.documentElement);
			r.root = !0;
			var a = !0,
				o = function() {
					e.ViewPort.Clear(), t.canvas.parentNode && e.ViewPort.SetCurrent(t.canvas.parentNode.clientWidth, t.canvas.parentNode.clientHeight), 1 != e.opts.ignoreDimensions && (r.style("width").hasValue() && (t.canvas.width = r.style("width").toPixels("x"), t.canvas.style.width = t.canvas.width + "px"), r.style("height").hasValue() && (t.canvas.height = r.style("height").toPixels("y"), t.canvas.style.height = t.canvas.height + "px"));
					var n = t.canvas.clientWidth || t.canvas.width,
						i = t.canvas.clientHeight || t.canvas.height;
					if (1 == e.opts.ignoreDimensions && r.style("width").hasValue() && r.style("height").hasValue() && (n = r.style("width").toPixels("x"), i = r.style("height").toPixels("y")), e.ViewPort.SetCurrent(n, i), null != e.opts.offsetX && (r.attribute("x", !0).value = e.opts.offsetX), null != e.opts.offsetY && (r.attribute("y", !0).value = e.opts.offsetY), null != e.opts.scaleWidth && null != e.opts.scaleHeight) {
						var o = 1,
							s = 1,
							l = e.ToNumberArray(r.attribute("viewBox").value);
						r.attribute("width").hasValue() ? o = r.attribute("width").toPixels("x") / e.opts.scaleWidth : isNaN(l[2]) || (o = l[2] / e.opts.scaleWidth), r.attribute("height").hasValue() ? s = r.attribute("height").toPixels("y") / e.opts.scaleHeight : isNaN(l[3]) || (s = l[3] / e.opts.scaleHeight), r.attribute("width", !0).value = e.opts.scaleWidth, r.attribute("height", !0).value = e.opts.scaleHeight, r.attribute("viewBox", !0).value = "0 0 " + n * o + " " + i * s, r.attribute("preserveAspectRatio", !0).value = "none"
					}
					1 != e.opts.ignoreClear && t.clearRect(0, 0, n, i), r.render(t), a && (a = !1, "function" == typeof e.opts.renderCallback && e.opts.renderCallback())
				}, s = !0;
			e.ImagesLoaded() && (s = !1, o()), e.intervalID = setInterval(function() {
				var t = !1;
				if (s && e.ImagesLoaded() && (s = !1, t = !0), 1 != e.opts.ignoreMouse && (t |= e.Mouse.hasEvents()), 1 != e.opts.ignoreAnimation) for (var n = 0; e.Animations.length > n; n++) t |= e.Animations[n].update(1e3 / e.FRAMERATE);
				"function" == typeof e.opts.forceRedraw && 1 == e.opts.forceRedraw() && (t = !0), t && (o(), e.Mouse.runEvents())
			}, 1e3 / e.FRAMERATE)
		}, e.stop = function() {
			e.intervalID && clearInterval(e.intervalID)
		}, e.Mouse = new function() {
			this.events = [], this.hasEvents = function() {
				return 0 != this.events.length
			}, this.onclick = function(e, t) {
				this.events.push({
					type: "onclick",
					x: e,
					y: t,
					run: function(e) {
						e.onclick && e.onclick()
					}
				})
			}, this.onmousemove = function(e, t) {
				this.events.push({
					type: "onmousemove",
					x: e,
					y: t,
					run: function(e) {
						e.onmousemove && e.onmousemove()
					}
				})
			}, this.eventElements = [], this.checkPath = function(e, t) {
				for (var n = 0; this.events.length > n; n++) {
					var i = this.events[n];
					t.isPointInPath && t.isPointInPath(i.x, i.y) && (this.eventElements[n] = e)
				}
			}, this.checkBoundingBox = function(e, t) {
				for (var n = 0; this.events.length > n; n++) {
					var i = this.events[n];
					t.isPointInBox(i.x, i.y) && (this.eventElements[n] = e)
				}
			}, this.runEvents = function() {
				e.ctx.canvas.style.cursor = "";
				for (var t = 0; this.events.length > t; t++) for (var n = this.events[t], i = this.eventElements[t]; i;) n.run(i), i = i.parent;
				this.events = [], this.eventElements = []
			}
		}, e
	}
	this.canvg = function(t, n, i) {
		if (null != t || null != n || null != i) {
			i = i || {}, "string" == typeof t && (t = document.getElementById(t)), null != t.svg && t.svg.stop(), t.svg = svg = e(), svg.opts = i;
			var r = t.getContext("2d");
			n.documentElement !== void 0 ? svg.loadXmlDoc(r, n) : "<" == n.substr(0, 1) ? svg.loadXml(r, n) : svg.load(r, n)
		} else for (var a = document.getElementsByTagName("svg"), o = 0; a.length > o; o++) {
			var s = a[o],
				l = document.createElement("canvas");
			l.width = s.clientWidth, l.height = s.clientHeight, s.parentNode.insertBefore(l, s), s.parentNode.removeChild(s);
			var u = document.createElement("div");
			u.appendChild(s), canvg(l, u.innerHTML)
		}
	}
}();
var canvasrenderingcontext2d = null;
try {
	canvasrenderingcontext2d = CanvasRenderingContext2D
} catch (e) {}
canvasrenderingcontext2d && (CanvasRenderingContext2D.prototype.drawSvg = function(e, t, n, i, r) {
	canvg(this.canvas, e, {
		ignoreMouse: !0,
		ignoreAnimation: !0,
		ignoreDimensions: !0,
		ignoreClear: !0,
		offsetX: t,
		offsetY: n,
		scaleWidth: i,
		scaleHeight: r
	})
});
var configs = {
	appname: "overpass-turbo",
	short_url_service: "/s/create?"
}, Settings = function(e, t) {
	var n = e + "_",
		i = {
			setItem: function(e, t) {
				this[e] = t
			},
			getItem: function(e) {
				return void 0 !== this[e] ? this[e] : null
			}
		};
	try {
		localStorage.setItem(n + "test", 123), localStorage.removeItem(n + "test"), i = localStorage
	} catch (r) {}
	var a = t,
		t = +i.getItem(n + "version"),
		o = {}, s = [];
	this.define_setting = function(e, t, n, i) {
		o[e] = {
			type: t,
			preset: n,
			version: i
		}
	}, this.define_upgrade_callback = function(e, t) {
		s[e] = t
	}, this.set = function(e, t) {
		void 0 === t && (t = o[e].preset), "String" != o[e].type && (t = JSON.stringify(t)), i.setItem(n + e, t)
	}, this.get = function(e) {
		o[e].version > t && this.set(e, void 0);
		var r = i.getItem(n + e);
		return "String" != o[e].type && (r = JSON.parse(r)), r
	}, this.load = function() {
		for (var e in o) this[e] = this.get(e);
		if (0 == t && (this.first_time_visit = !0), a > t) {
			for (var r = t + 1; a >= r; r++) "function" == typeof s[r] && s[r](this);
			t = a, i.setItem(n + "version", t)
		}
	}, this.save = function() {
		for (var e in o) this.set(e, this[e])
	}
};
examples = {
	"Drinking Water": {
		overpass: '<!--\nThis is an example Overpass query.\nTry it out by pressing the Run button above!\nYou can find more examples with the Load tool.\n-->\n<query type="node">\n  <has-kv k="amenity" v="drinking_water"/>\n  <bbox-query/><!--this is auto-completed with the\n                   current map view coordinates.-->\n</query>\n<print/>'
	},
	"Drinking Water (Overpass QL)": {
		overpass: '/*\nThis is the drinking water example in OverpassQL.\n*/\n(\n  node\n    ["amenity"="drinking_water"]\n    (bbox) /* this is auto-completed with the\n              current map view coordinates. */\n);\nout;'
	},
	"Cycle Network": {
		overpass: '<!--\nThis shows the whole cycleway and cycleroute network.\n-->\n<osm-script output="json">\n  <!-- get cycle route relations -->\n  <query type="relation" into="cr">\n    <bbox-query/>\n    <has-kv k="route" v="bicycle"/>\n  </query>\n  <!-- get cycleways (tagging scheme 1) -->\n  <query type="way" into="cw1">\n    <bbox-query/>\n    <has-kv k="highway" v="cycleway"/>\n  </query>\n  <!-- get cycleways (tagging scheme 2) -->\n  <query type="way" into="cw2">\n    <bbox-query/>\n    <has-kv k="highway" v="path"/>\n    <has-kv k="bicycle" v="designated"/>\n  </query>\n  <!-- combine all found cycleways -->\n  <union into="cw">\n    <item set="cw1"/>\n    <item set="cw2"/>\n  </union>\n  <!-- combine with the cycle routes and use recurse to get to underlying geometry (ways and nodes): -->\n  <union>\n    <item set="cr"/>\n    <recurse from="cr" type="down"/>\n    <item set="cw"/>\n    <recurse from="cw" type="down"/>\n  </union>\n  <!-- show the result -->\n  <print mode="body" order="quadtile"/>\n</osm-script>'
	},
	"List Areas": {
		overpass: '<!--\nThis lists all areas which include the map center point.\n-->\n<osm-script output="json">\n  <coord-query/><!--this this is auto-completed with the\n                    current map center coordinates.-->\n  <print/>\n</osm-script>'
	},
	"Mountains in Area": {
		overpass: '<!--\nThis shows all mountains (peaks) in the Dolomites.\nYou may want to use the "zoom onto data" button. =>\n-->\n<osm-script output="json">\n  <!-- search the area of the Dolmites -->\n  <query type="area">\n    <has-kv k="place" v="region"/>\n    <has-kv k="region:type" v="mountain_area"/>\n    <has-kv k="name:en" v="Dolomites"/>\n  </query>\n  <print mode="body" order="quadtile"/>\n  <!-- get all peaks in the area -->\n  <query type="node">\n    <area-query/>\n    <has-kv k="natural" v="peak"/>\n  </query>\n  <print mode="body" order="quadtile"/>\n  <!-- additionally, show the outline of the area -->\n  <query type="relation">\n    <has-kv k="place" v="region"/>\n    <has-kv k="region:type" v="mountain_area"/>\n    <has-kv k="name:en" v="Dolomites"/>\n  </query>\n  <print mode="body" order="quadtile"/>\n  <recurse type="down"/>\n  <print mode="skeleton" order="quadtile"/>\n</osm-script>'
	},
	"Map Call": {
		overpass: '<!--\nThis is a simple map call.\nIt returns all data in the bounding box.\n-->\n<osm-script output="xml">\n  <union into="_">\n    <bbox-query/>\n    <recurse type="up"/>\n  </union>\n  <print mode="meta" order="quadtile"/>\n</osm-script>'
	}
}, examples_initial_example = "Drinking Water";
var settings = new Settings("overpass-ide", 27);
settings.define_setting("use_html5_coords", "Boolean", !0, 1), settings.define_setting("coords_lat", "Float", 41.89, 1), settings.define_setting("coords_lon", "Float", 12.492, 1), settings.define_setting("coords_zoom", "Integer", 16, 1), settings.define_setting("code", "Object", examples[examples_initial_example], 1), settings.define_setting("saves", "Object", examples, 1), settings.define_setting("server", "String", "http://overpass-api.de/api/", 1), settings.define_setting("share_compression", "String", "auto", 1), settings.define_setting("share_include_pos", "Boolean", !1, 1), settings.define_setting("use_rich_editor", "Boolean", !0, 1), settings.define_setting("tile_server", "String", "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 1), settings.define_setting("enable_crosshairs", "Boolean", !1, 1), settings.define_setting("export_image_scale", "Boolean", !0, 1), settings.define_setting("export_image_attribution", "Boolean", !0, 1), settings.define_setting("force_simple_cors_request", "Boolean", !1, 11), settings.define_setting("background_opacity", "Float", 1, 13), settings.define_setting("no_autorepair", "Boolean", !1, 16), settings.define_setting("editor_width", "String", "", 17), settings.define_setting("ui_language", "String", "auto", 19), settings.define_setting("disable_poiomatic", "boolean", !1, 21), settings.define_setting("show_data_stats", "boolean", !0, 21), settings.define_upgrade_callback(12, function(e) {
	var t = function(e) {
		return e.overpass = e.overpass.replace(/\(bbox\)/g, "({{bbox}})"), e.overpass = e.overpass.replace(/<bbox-query\/>/g, "<bbox-query {{bbox}}/>"), e.overpass = e.overpass.replace(/<coord-query\/>/g, "<coord-query {{center}}/>"), e
	};
	e.code = t(e.code);
	for (var n in e.saves) e.saves[n] = t(e.saves[n]);
	e.save()
}), settings.define_upgrade_callback(14, function(e) {
	e.use_html5_coords = !1, e.save()
}), settings.define_upgrade_callback(18, function(e) {
	e.share_include_pos = !0, e.save()
}), settings.define_upgrade_callback(20, function(e) {
	e.saves["Mountains in Area"] = examples["Mountains in Area"], e.save()
}), settings.define_upgrade_callback(22, function(e) {
	for (var t in e.saves) e.saves[t].type = examples[t] ? "example" : "saved_query";
	e.saves.key = {
		type: "template",
		parameters: ["key"],
		overpass: '<!--\nthis query looks for nodes, ways and relations \nwith the given key.\n-->\n{{key=???}}\n<osm-script output="json">\n  <union>\n    <query type="node">\n      <has-kv k="{{key}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n    <query type="way">\n      <has-kv k="{{key}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n    <query type="relation">\n      <has-kv k="{{key}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n  </union>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
	}, e.saves["key-type"] = {
		type: "template",
		parameters: ["key", "type"],
		overpass: '<!--\nthis query looks for nodes, ways or relations \nwith the given key.\n-->\n{{key=???}}\n{{type=???}}\n<osm-script output="json">\n  <query type="{{type}}">\n    <has-kv k="{{key}}"/>\n    <bbox-query {{bbox}}/>\n  </query>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
	}, e.saves["key-value"] = {
		type: "template",
		parameters: ["key", "value"],
		overpass: '<!--\nthis query looks for nodes, ways and relations \nwith the given key/value combination.\n-->\n{{key=???}}\n{{value=???}}\n<osm-script output="json">\n  <union>\n    <query type="node">\n      <has-kv k="{{key}}" v="{{value}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n    <query type="way">\n      <has-kv k="{{key}}" v="{{value}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n    <query type="relation">\n      <has-kv k="{{key}}" v="{{value}}"/>\n      <bbox-query {{bbox}}/>\n    </query>\n  </union>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
	}, e.saves["key-value-type"] = {
		type: "template",
		parameters: ["key", "value", "type"],
		overpass: '<!--\nthis query looks for nodes, ways or relations \nwith the given key/value combination.\n-->\n{{key=???}}\n{{value=???}}\n{{type=???}}\n<osm-script output="json">\n  <query type="{{type}}">\n    <has-kv k="{{key}}" v="{{value}}"/>\n    <bbox-query {{bbox}}/>\n  </query>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
	}, e.save()
}), settings.define_upgrade_callback(23, function(e) {
	e.saves["type-id"] = {
		type: "template",
		parameters: ["type", "id"],
		overpass: '<!--\nthis query looks for a node, way or relation \nwith the given id.\n-->\n{{type=???}}\n{{id=???}}\n<osm-script output="json">\n  <id-query type="{{type}}" ref="{{id}}"/>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>'
	}, e.save()
}), settings.define_upgrade_callback(24, function(e) {
	for (var t in e.saves) e.saves[t].type || (e.saves[t].type = "saved_query");
	e.save()
}), settings.define_upgrade_callback(25, function(e) {
	for (var t in e.saves) "template" == e.saves[t].type && (e.saves[t].overpass = e.saves[t].overpass.replace("<!--\nt", "<!--\nT"), e.saves[t].overpass = e.saves[t].overpass.replace("\n-->", "\nChoose your region and hit the Run button above!\n-->"));
	e.save()
}), settings.define_upgrade_callback(27, function(e) {
	e.saves["Where am I?"] = e.saves["List Areas"], delete e.saves["List Areas"], e.saves["MapCSS styling"] = {
		type: "example",
		overpass: '<!--\nThis example shows how the data can be styled.\nHere, some common amenities are displayed in \ndifferent colors.\n\nRead more: http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS\n-->\n<osm-script output="json">\n  <query type="node">\n    <has-kv k="amenity"/>\n    <bbox-query {{bbox}}/>\n  </query>\n  <print mode="body"/>\n  <query type="way">\n    <has-kv k="amenity"/>\n    <bbox-query {{bbox}}/>\n  </query>\n  <print mode="body"/>\n  <recurse type="down"/>\n  <print mode="skeleton"/>\n</osm-script>\n\n{{style: /* this is the MapCSS stylesheet */\nnode, area\n{ color:gray; fill-color:gray; }\n\nnode[amenity=drinking_water],\nnode[amenity=fountain]\n{ color:blue; fill-color:blue; }\n\nnode[amenity=place_of_worship],\narea[amenity=place_of_worship]\n{ color:grey; fill-color:grey; }\n\nnode[amenity=~/(restaurant|hotel|cafe)/],\narea[amenity=~/(restaurant|hotel|cafe)/]\n{ color:red; fill-color:red; }\n\nnode[amenity=parking],\narea[amenity=parking]\n{ color:yellow; fill-color:yellow; }\n\nnode[amenity=bench]\n{ color:brown; fill-color:brown; }\n\nnode[amenity=~/(kindergarten|school|university)/],\narea[amenity=~/(kindergarten|school|university)/]\n{ color:green; fill-color:green; }\n}}'
	}, e.save()
});
var i18n = new function() {
		var e = "en",
			t = [e, "de"];
		this.translate = function() {
			var i = settings.ui_language;
			if ("auto" == i) {
				try {
					i = navigator.language.replace(/-.*/, "").toLowerCase()
				} catch (r) {}
				if (-1 == $.inArray(i, t)) return i = e, !1
			}
			if (i == e) return !0;
			var a = "locales/" + i + ".js";
			$.ajax(a, {
				async: !1,
				dataType: "json"
			}).success(function(e) {
				n = $.extend(n, e), i18n.translate_ui()
			}).error(function() {
				console.log("failed to load language file: " + a)
			})
		}, this.translate_ui = function() {
			$(".t").each(function(e, t) {
				var i = $(t).attr("t");
				i = i.split(";");
				for (var r = 0; i.length > r; r++) {
					var a = i[r],
						o = a.match(/^(\[(.*)\])?(.*)$/),
						s = o[2],
						l = o[3],
						u = n[l];
					"html" === s ? $(t).html(u) : void 0 !== s ? $(t).attr(s, u) : $(t).text(u)
				}
			})
		}, this.t = function(e) {
			return n[e]
		};
		var n = {
			"map_controlls.zoom_to_data": "zoom to data",
			"map_controlls.localize_user": "locate me!",
			"map_controlls.select_bbox": "manually select bbox",
			"map_controlls.toggle_wide_map": "toggle wide map",
			"map_controlls.clear_data": "clear data overlay",
			"dialog.dismiss": "dismiss",
			"dialog.cancel": "cancel",
			"dialog.save": "save",
			"dialog.delete": "delete",
			"dialog.close": "close",
			"dialog.done": "done",
			"dialog.abort": "abort",
			"dialog.repair_query": "repair query",
			"dialog.continue_anyway": "continue anyway",
			"dialog.show_data": "show data",
			"dialog.delete_query.title": "Delete Query?",
			"dialog.delete_query.expl": "Do you really want to delete the following query",
			"load.delete_query": "delete this query",
			"load.no_saved_query": "no saved query yet",
			"error.query.title": "Query Error",
			"error.query.expl": "An error occured during the execution of the overpass query! This is what overpass API returned:",
			"error.ajax.title": "Ajax Error",
			"error.ajax.expl": "An error occured during the execution of the overpass query!",
			"error.mapcss.title": "MapCSS Error",
			"error.mapcss.expl": "Invalid MapCSS stylesheet:",
			"error.remote.title": "Remote Control Error",
			"error.remote.incompat": "Error: incompatible JOSM remote control version",
			"error.remote.not_found": "Remote control not found. :( Make sure JOSM is already running and properly configured.",
			"warning.browser.title": "Your browser is not supported :(",
			"warning.browser.expl.1": '<p>The browser you are currently using, is (most likely) not capable of running (significant parts of) this Application. <small>It must support <a href="http://en.wikipedia.org/wiki/Web_storage#localStorage">Web Storage API</a> and <a href="http://en.wikipedia.org/wiki/Cross-origin_resource_sharing">cross origin resource sharing (CORS)</a>.</small></p>',
			"warning.browser.expl.2": '<p>Note that you may have to enable cookies and/or "local Data" for this site on some browsers (such as Firefox and Chrome).</p>',
			"warning.browser.expl.3": '<p>Please upgrade to a more up-to-date version of your browser or switch to a more capable one! Recent versions of <a href="http://www.opera.com">Opera</a>, <a href="http://www.google.com/intl/de/chrome/browser/">Chrome</a> and <a href="http://www.mozilla.org/de/firefox/">Firefox</a> have been tested to work. Alternatively, you can still use the <a href="http://overpass-api.de/query_form.html">Overpass_API query form</a>.</p>',
			"warning.incomplete.title": "Incomplete Data",
			"warning.incomplete.expl": '<p>This query returned no nodes. In OSM, only nodes contain coordinates. For example, a way cannot be displayed without its nodes.</p><p>If this is not what you meant to get, <i>overpass tubo</i> can help you to repair (auto-complete) the query by choosing "repair query" below. Otherwise you can continue to the data.</p>',
			"warning.incomplete.not_again": "do not show this message again.",
			"warning.incomplete.remote": '<p>It looks like if this query will not return OSM data in XML format with metadata. Editors like JOSM require the data to be in that format, though.</p><p><i>overpass turbo</i> can help you to correct the query by choosing "repair query" below.</p>',
			"warning.share.long": "Warning: This share-link is quite long. It may not work under certain circumstances",
			"warning.share.very_long": "Warning: This share-link is very long. It is likely to fail under normal circumstances (browsers, webservers). Use with caution!",
			"warning.huge_data.title": "Large amounts of data",
			"warning.huge_data.expl": "<p>This query returned quite a lot of data (approx. {{amount_txt}}).</p><p>Your browser may have a hard time trying to render this. Do you really want to continue?</p>",
			"waiter.processing_query": "processing query...",
			"waiter.export_as_image": "exporting as image...",
			"export.map_view.title": "Current Map View",
			"export.map_view.permalink_osm": "<h4>Permalink</h4> to",
			"export.map_view.center": "Center",
			"export.map_view.center_expl": "lat/lon",
			"export.map_view.bounds": "Bounds",
			"export.map_view.bounds_selection": "Bounds (manually selected bbox)",
			"export.map_view.bounds_expl": "south/west north/east",
			"export.map_view.zoom": "Zoom",
			"export.geoJSON.no_data": "No GeoJSON data available! Please run a query first.",
			"export.GPX.no_data": "No GPX data available! Please run a query first.",
			"export.image.title": "Export - Image",
			"export.image.alt": "the exported map",
			"export.image.download": "Download",
			"export.image.attribution_missing": "Make sure to include proper attributions when distributing this image!",
			"data_stats.loaded": "Loaded",
			"data_stats.displayed": "Displayed",
			"data_stats.nodes": "nodes",
			"data_stats.ways": "ways",
			"data_stats.relations": "relations",
			"data_stats.areas": "areas",
			"data_stats.pois": "pois",
			"data_stats.lines": "lines",
			"data_stats.polygons": "polygons",
			"map.intentianally_blank": "This map intentionally left blank.",
			"the end": ""
		}
	}, overpass = new function() {
		this.handlers = {};
		var e = function() {
			var t = e.arguments,
				n = t[0];
			if ("function" != typeof overpass.handlers[n]) return void 0;
			for (var i = [], r = 1; t.length > r; r++) i.push(t[r]);
			return overpass.handlers[n].apply({}, i)
		};
		this.run_query = function(t, n) {
			e("onProgress", "building query"), "xml" == n && (t.match(/^<\?xml/) || (t.match(/<osm-script/) || (t = "<osm-script>" + t + "</osm-script>"), t = '<?xml version="1.0" encoding="UTF-8"?>' + t)), e("onProgress", "calling Overpass API interpreter", function() {
				overpass.ajax_request.abort(), $.get(settings.server + "kill_my_queries")
			});
			var i = {}, r = "";
			settings.force_simple_cors_request ? r = "?X-Requested-With=" + configs.appname : i["X-Requested-With"] = configs.appname, overpass.ajax_request = $.ajax(settings.server + "interpreter" + r, {
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
													e = htmlentities(e), t = htmlentities(t), t = t.replace(/\b((?:(https?|ftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€â€˜â€™]))/gi, '<a href="$1" target="_blank">$1</a>'), t = t.replace(/(([^\s()<>]+)@([^\s()<>]+[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€â€˜â€™]))/g, '<a href="mailto:$1" target="_blank">$1</a>');
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
										n = overpass.osmLayer.getGeoJSON(), overpass.geojson = n, overpass.data = t, a.geojson = {
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
						if (e("onProgress", "error during ajax call"), 400 == t.status || 504 == t.status || 429 == t.status) return this.success(t.responseText, n, t), void 0;
						overpass.resultText = t.resultText;
						var i = "";
						"rejected" == t.state() && (i += "<p>Request rejected. (e.g. server not found, redirection, internal server errors, etc.)</p>"), "parsererror" == n ? i += "<p>Error while parsing the data (parsererror).</p>" : "error" != n && n != t.statusText && (i += "<p>Error-Code: " + n + "</p>"), (0 != t.status && 200 != t.status || "OK" != t.statusText) && (i += "<p>Error-Code: " + t.statusText + " (" + t.status + ")</p>"), e("onAjaxError", i), e("onDone")
					}
				}
			})
		}
	}, ide = new function() {
		var e = null,
			t = null,
			n = null;
		this.dataViewer = null, this.map = null;
		var i = function(e, t) {
			if (e[0].is_combobox) return e.autocomplete("option", {
				source: t
			}), void 0;
			var n = e.wrap("<span>").parent().addClass("ui-combobox");
			e.autocomplete({
				source: t,
				minLength: 0
			}).addClass("ui-widget ui-widget-content ui-corner-left ui-state-default"), $("<a>").attr("tabIndex", -1).attr("title", "show all items").appendTo(n).button({
				icons: {
					primary: "ui-icon-triangle-1-s"
				},
				text: !1
			}).removeClass("ui-corner-all").addClass("ui-corner-right ui-combobox-toggle").click(function() {
				return e.autocomplete("widget").is(":visible") ? (e.autocomplete("close"), void 0) : (e.autocomplete("search", ""), e.focus(), void 0)
			}), e[0].is_combobox = !0
		};
		this.waiter = {
			opened: !1,
			open: function(e) {
				e ? ($(".modal .wait-info h4").text(e), $(".wait-info").show()) : $(".wait-info").hide(), $("body").addClass("loading"), ide.waiter.opened = !0
			},
			close: function() {
				$("body").removeClass("loading"), $(".wait-info ul li").remove(), delete ide.waiter.onAbort, ide.waiter.opened = !1
			},
			addInfo: function(e, t) {
				$("#aborter").remove(), $(".wait-info ul li:nth-child(n+1)").css("opacity", .5), $(".wait-info ul li span.ui-icon").addClass("ui-icon-check"), $(".wait-info ul li:nth-child(n+4)").hide();
				var n = $('<li><span class="ui-icon ui-icon-arrowthick-1-e" style="display:inline-block; margin-bottom:-2px; margin-right:3px;"></span>' + e + "</li>");
				"function" == typeof t && (ide.waiter.onAbort = t, n.append('<span id="aborter">&nbsp;(<a href="#" onclick="ide.waiter.abort(); return false;">abort</a>)</span>')), $(".wait-info ul").prepend(n)
			},
			abort: function() {
				"function" == typeof ide.waiter.onAbort && ide.waiter.onAbort(), ide.waiter.close()
			}
		}, this.init = function() {
			ide.waiter.addInfo("ide starting up"), (1 != jQuery.support.cors || "object" != typeof
			function() {
				var e = void 0;
				try {
					localStorage.setItem("startup_localstorage_quota_test", 123), localStorage.removeItem("startup_localstorage_quota_test"), e = localStorage
				} catch (t) {}
				return e
			}()) && (ide.not_supported = !0, $('<div title="' + i18n.t("warning.browser.title") + '">' + i18n.t("warning.browser.expl.1") + i18n.t("warning.browser.expl.2") + i18n.t("warning.browser.expl.3") + "</div>").dialog({
				modal: !0
			})), settings.load(), ide.waiter.addInfo("settings loaded"), i18n.translate(), ide.waiter.addInfo("i18n ready");
			var i = !1;
			if ("" != location.search) {
				for (var r = location.search.substring(1).split("&"), a = {}, o = 0; r.length > o; o++) {
					var s = r[o].split("=");
					a[s[0]] = s[1] || !0
				}
				if (a.q && (settings.code.overpass = lzw_decode(Base64.decode(decodeURIComponent(a.q)))), a.Q && (settings.code.overpass = decodeURIComponent(a.Q.replace(/\+/g, "%20"))), a.c) {
					var l = a.c.match(/([A-Za-z0-9\-_]+)([A-Za-z0-9\-_])/),
						u = function(e) {
							var t = Base64.decodeNum(e),
								n = {};
							return n.lat = t % 18e6 / 1e5 - 90, n.lng = Math.floor(t / 18e6) / 1e5 - 180, n
						}, c = u(l[1]);
					settings.coords_zoom = Base64.decodeNum(l[2]), settings.coords_lat = c.lat, settings.coords_lon = c.lng, i = !0
				}
				if (a.C) {
					var l = a.C.match(/(-?[\d.]+);(-?[\d.]+);(\d+)/);
					settings.coords_lat = +l[1], settings.coords_lon = +l[2], settings.coords_zoom = +l[3], i = !0
				}
				if (a.lat && a.lon && (settings.coords_lat = +a.lat, settings.coords_lon = +a.lon, i = !0), a.zoom && (settings.coords_zoom = +a.zoom), a.R && (ide.run_query_on_startup = !0), a.template) {
					var h = settings.saves[a.template];
					if (h && "template" == h.type) {
						for (var d = h.overpass, p = h.parameters, o = 0; p.length > o; o++) {
							var f = p[o];
							if (a[f]) {
								var m = decodeURIComponent(a[f].replace(/\+/g, "%20"));
								m = m.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"), m = m.replace(/\}/g, "&#125;").replace(/\{/g, "&#123;"), d = d.replace("{{" + f + "=???}}", "{{" + f + "=" + m + "}}")
							}
						}
						settings.code.overpass = d
					}
				}
				settings.save()
			}
			"" != settings.editor_width && ($("#editor").css("width", settings.editor_width), $("#dataviewer").css("left", settings.editor_width)), $("#editor").resizable({
				handles: "e",
				minWidth: "200",
				resize: function() {
					$(this).next().css("left", $(this).outerWidth() + "px"), ide.map.invalidateSize(!1)
				},
				stop: function() {
					settings.editor_width = $("#editor").css("width"), settings.save()
				}
			}), $("#editor").prepend("<span class='ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se'/>"), $("#editor textarea")[0].value = settings.code.overpass, settings.use_rich_editor ? (pending = 0, CodeMirror.defineMIME("text/x-overpassQL", {
				name: "clike",
				keywords: function(e) {
					for (var t = {}, n = e.split(" "), i = 0; n.length > i; i++) t[n[i]] = !0;
					return t
				}("out json xml custom popup timeout maxsize relation way node is_in area around user uid newer poly out meta quirks body skel ids qt asc bbox")
			}), CodeMirror.defineMIME("text/x-overpassXML", "xml"), CodeMirror.defineMode("xml+mustache", function(e) {
				return CodeMirror.multiplexingMode(CodeMirror.multiplexingMode(CodeMirror.getMode(e, "xml"), {
					open: "{{",
					close: "}}",
					mode: CodeMirror.getMode(e, "text/plain"),
					delimStyle: "mustache"
				}), {
					open: "{{style:",
					close: "}}",
					mode: CodeMirror.getMode(e, "text/css"),
					delimStyle: "mustache"
				})
			}), CodeMirror.defineMode("ql+mustache", function(e) {
				return CodeMirror.multiplexingMode(CodeMirror.multiplexingMode(CodeMirror.getMode(e, "text/x-overpassQL"), {
					open: "{{",
					close: "}}",
					mode: CodeMirror.getMode(e, "text/plain"),
					delimStyle: "mustache"
				}), {
					open: "{{style:",
					close: "}}",
					mode: CodeMirror.getMode(e, "text/css"),
					delimStyle: "mustache"
				})
			}), e = CodeMirror.fromTextArea($("#editor textarea")[0], {
				lineNumbers: !0,
				lineWrapping: !0,
				mode: "text/plain",
				onChange: function(e) {
					clearTimeout(pending), pending = setTimeout(function() {
						"xml" == ide.getQueryLang() ? "xml+mustache" != e.getOption("mode") && (e.closeTagEnabled = !0, e.setOption("matchBrackets", !1), e.setOption("mode", "xml+mustache")) : "ql+mustache" != e.getOption("mode") && (e.closeTagEnabled = !1, e.setOption("matchBrackets", !0), e.setOption("mode", "ql+mustache"));
						var t = $(".leaflet-control-buttons-bboxfilter");
						ide.getQuery().match(/\{\{bbox\}\}/) ? t.hasClass("disabled") && (t.removeClass("disabled"), $("span", t).css("opacity", 1), t.css("pointer-events", ""), t.css("cursor", ""), t.tooltip("enable")) : t.hasClass("disabled") || (t.addClass("disabled"), $("span", t).css("opacity", .5), t.css("pointer-events", "none"), t.css("cursor", "default"), t.tooltip("disable"))
					}, 500), settings.code.overpass = e.getValue(), settings.save()
				},
				closeTagEnabled: !0,
				closeTagIndent: ["osm-script", "query", "union", "foreach"],
				extraKeys: {
					"'>'": function(e) {
						e.closeTag(e, ">")
					},
					"'/'": function(e) {
						e.closeTag(e, "/")
					}
				}
			}), e.getOption("onChange")(e)) : (e = $("#editor textarea")[0], e.getValue = function() {
				return this.value
			}, e.setValue = function(e) {
				this.value = e
			}, e.lineCount = function() {
				return this.value.split(/\r\n|\r|\n/).length
			}, e.setLineClass = function() {}, $("#editor textarea").bind("input change", function(e) {
				settings.code.overpass = e.target.getValue(), settings.save()
			})), ide.dataViewer = CodeMirror($("#data")[0], {
				value: "no data loaded yet",
				lineNumbers: !0,
				readOnly: !0,
				mode: "javascript"
			}), ide.map = new L.Map("map", {
				attributionControl: !1,
				minZoom: 0,
				maxZoom: 18,
				worldCopyJump: !1
			});
			var g = settings.tile_server,
				y = "&copy; OpenStreetMap.org contributors&ensp;<small>Data:ODbL, Map:cc-by-sa</small>",
				v = new L.TileLayer(g, {
					attribution: y,
					noWrap: !0
				});
			t = new L.Control.Attribution({
				prefix: ""
			}), t.addAttribution(y);
			var b = new L.LatLng(settings.coords_lat, settings.coords_lon);
			if (ide.map.setView(b, settings.coords_zoom).addLayer(v), ide.map.tile_layer = v, ide.map.inv_opacity_layer = L.tileLayer("data:image/gif;base64,R0lGODlhAQABAIAAAP7//wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==").setOpacity(1 - settings.background_opacity), 1 != settings.background_opacity && ide.map.inv_opacity_layer.addTo(ide.map), n = new L.Control.Scale({
				metric: !0,
				imperial: !1
			}), n.addTo(ide.map), settings.use_html5_coords && !i) try {
				navigator.geolocation.getCurrentPosition(function(e) {
					var t = new L.LatLng(e.coords.latitude, e.coords.longitude);
					ide.map.setView(t, settings.coords_zoom)
				})
			} catch (w) {}
			ide.map.on("moveend", function() {
				settings.coords_lat = ide.map.getCenter().lat, settings.coords_lon = ide.map.getCenter().lng, settings.coords_zoom = ide.map.getZoom(), settings.save()
			}), $("#dataviewer > div#data")[0].style.zIndex = -1001, $(".tabs a.button").bind("click", function(e) {
				$(e.target).hasClass("active") || ($("#dataviewer > div#data")[0].style.zIndex = -1 * $("#dataviewer > div#data")[0].style.zIndex, $(".tabs a.button").toggleClass("active"))
			}), $(document).on({
				ajaxStart: function() {
					ide.waiter.opened || (ide.waiter.open(), ide.waiter.ajaxAutoOpened = !0)
				},
				ajaxStop: function() {
					ide.waiter.ajaxAutoOpened && (ide.waiter.close(), delete ide.waiter.AjaxAutoOpened)
				}
			}), $("body").keypress(ide.onKeyPress);
			var x = L.Control.extend({
				options: {
					position: "topleft"
				},
				onAdd: function() {
					var e = L.DomUtil.create("div", "leaflet-control-buttons leaflet-bar"),
						t = L.DomUtil.create("a", "leaflet-control-buttons-fitdata leaflet-bar-part leaflet-bar-part-top", e);
					return $('<span class="ui-icon ui-icon-search"/>').appendTo($(t)), t.href = "javascript:return false;", t.title = i18n.t("map_controlls.zoom_to_data"), L.DomEvent.addListener(t, "click", function() {
						try {
							ide.map.fitBounds(overpass.osmLayer.getBaseLayer().getBounds())
						} catch (e) {}
					}, ide.map), t = L.DomUtil.create("a", "leaflet-control-buttons-myloc leaflet-bar-part", e), $('<span class="ui-icon ui-icon-radio-off"/>').appendTo($(t)), t.href = "javascript:return false;", t.title = i18n.t("map_controlls.localize_user"), L.DomEvent.addListener(t, "click", function() {
						try {
							navigator.geolocation.getCurrentPosition(function(e) {
								var t = new L.LatLng(e.coords.latitude, e.coords.longitude);
								ide.map.setView(t, settings.coords_zoom)
							})
						} catch (e) {}
					}, ide.map), t = L.DomUtil.create("a", "leaflet-control-buttons-bboxfilter leaflet-bar-part", e), $('<span class="ui-icon ui-icon-image"/>').appendTo($(t)), t.href = "javascript:return false;", t.title = i18n.t("map_controlls.select_bbox"), L.DomEvent.addListener(t, "click", function(e) {
						$(e.target).parent().hasClass("disabled") || (ide.map.bboxfilter.isEnabled() ? ide.map.bboxfilter.disable() : (ide.map.bboxfilter.setBounds(ide.map.getBounds()), ide.map.bboxfilter.enable()), $(e.target).toggleClass("ui-icon-circlesmall-close").toggleClass("ui-icon-image"))
					}, ide.map), t = L.DomUtil.create("a", "leaflet-control-buttons-fullscreen leaflet-bar-part", e), $('<span class="ui-icon ui-icon-arrowthickstop-1-w"/>').appendTo($(t)), t.href = "javascript:return false;", t.title = i18n.t("map_controlls.toggle_wide_map"), L.DomEvent.addListener(t, "click", function(e) {
						$("#dataviewer").toggleClass("fullscreen"), ide.map.invalidateSize(), $(e.target).toggleClass("ui-icon-arrowthickstop-1-e").toggleClass("ui-icon-arrowthickstop-1-w"), $("#editor").toggleClass("hidden"), $("#editor").resizable("option", "disabled") ? $("#editor").resizable("enable") : $("#editor").resizable("disable")
					}, ide.map), t = L.DomUtil.create("a", "leaflet-control-buttons-clearoverlay leaflet-bar-part leaflet-bar-part-bottom", e), $('<span class="ui-icon ui-icon-cancel"/>').appendTo($(t)), t.href = "javascript:return false;", t.title = i18n.t("map_controlls.clear_data"), L.DomEvent.addListener(t, "click", function() {
						ide.map.removeLayer(overpass.osmLayer), $("#map_blank").remove(), $("#data_stats").remove()
					}, ide.map), e
				}
			});
			ide.map.addControl(new x), $(".leaflet-control-buttons > a").tooltip({
				items: "a[title]",
				hide: {
					effect: "fadeOut",
					duration: 100
				},
				position: {
					my: "left+5 center",
					at: "right center"
				}
			});
			var k = L.Control.extend({
				options: {
					position: "topleft"
				},
				onAdd: function() {
					var e = L.DomUtil.create("div", "leaflet-control-search ui-widget");
					e.style.position = "absolute", e.style.left = "40px";
					var t = L.DomUtil.create("input", "", e);
					return $('<span class="ui-icon ui-icon-search" style="position:absolute; right:3px; top:3px; opacity:0.5;"/>').click(function() {
						$(this).prev().autocomplete("search")
					}).insertAfter(t), t.id = "search", t.onclick = function() {
						this.focus()
					}, $(t).autocomplete({
						source: function(e, t) {
							$.ajax("http://nominatim.openstreetmap.org/search?X-Requested-With=" + configs.appname, {
								data: {
									format: "json",
									q: e.term
								},
								success: function(e) {
									if ("string" == typeof e) try {
										e = $.parseJSON(e)
									} catch (n) {}
									t($.map(e, function(e) {
										return {
											label: e.display_name,
											value: e.display_name,
											lat: e.lat,
											lon: e.lon
										}
									}))
								},
								error: function() {
									alert("An error occured while contacting the osm search server nominatim.openstreetmap.org :(")
								}
							})
						},
						minLength: 2,
						select: function(e, t) {
							return ide.map.panTo(new L.LatLng(t.item.lat, t.item.lon)), this.value = "", !1
						},
						open: function() {
							$(this).removeClass("ui-corner-all").addClass("ui-corner-top")
						},
						close: function() {
							$(this).addClass("ui-corner-all").removeClass("ui-corner-top")
						}
					}), $(t).autocomplete("option", "delay", 2e9), $(t).autocomplete().keypress(function(e) {
						13 == e.which && $(this).autocomplete("search")
					}), e
				}
			});
			if (ide.map.addControl(new k), $('<span class="ui-icon ui-icon-plus" />').addClass("crosshairs").hide().appendTo("#map"), settings.enable_crosshairs && $(".crosshairs").show(), ide.map.bboxfilter = new L.LocationFilter({
				enable: !! 0,
				adjustButton: !1,
				enableButton: !1
			}).addTo(ide.map), ide.map.on("popupopen popupclose", function(e) {
				if (e.popup.layer !== void 0) {
					var t = e.popup.layer.placeholder || e.popup.layer,
						n = overpass.osmLayer._baseLayer.options.style(t.feature, "popupopen" == e.type);
					"function" != typeof t.eachLayer ? "function" == typeof t.setStyle && t.setStyle(n) : t.eachLayer(function(e) {
						e.setStyle(n)
					})
				}
			}), overpass.handlers.onProgress = function(e, t) {
				ide.waiter.addInfo(e, t)
			}, overpass.handlers.onDone = function() {
				ide.waiter.close();
				var e = ide.map.getBounds(),
					t = overpass.osmLayer.getBaseLayer().getBounds();
				if (t.isValid() && !e.intersects(t)) {
					var n = $(".leaflet-control-buttons-fitdata").tooltip("option", "content");
					$(".leaflet-control-buttons-fitdata").tooltip("option", "content", "â† click here to show the data"), $(".leaflet-control-buttons-fitdata").tooltip("open"), $(".leaflet-control-buttons-fitdata").tooltip("option", "hide", {
						effect: "fadeOut",
						duration: 1e3
					}), setTimeout(function() {
						$(".leaflet-control-buttons-fitdata").tooltip("option", "content", n), $(".leaflet-control-buttons-fitdata").tooltip("close"), $(".leaflet-control-buttons-fitdata").tooltip("option", "hide", {
							effect: "fadeOut",
							duration: 100
						})
					}, 2600)
				}
			}, overpass.handlers.onEmptyMap = function(e, t) {
				if ("no visible data" == e && !settings.no_autorepair) {
					var n = {};
					n[i18n.t("dialog.repair_query")] = function() {
						ide.repairQuery("no visible data"), $(this).dialog("close")
					}, n[i18n.t("dialog.show_data")] = function() {
						$("input[name=hide_incomplete_data_warning]", this)[0].checked && (settings.no_autorepair = !0, settings.save()), ide.switchTab("Data"), $(this).dialog("close")
					}, $('<div title="' + i18n.t("warning.incomplete.title") + '">' + i18n.t("warning.incomplete.expl") + '<p><input type="checkbox" name="hide_incomplete_data_warning"/>&nbsp;' + i18n.t("warning.incomplete.not_again") + "</p></div>").dialog({
						modal: !0,
						buttons: n
					})
				}
				"only areas returned" == e && ide.switchTab("Data"), "no coordinates returned" == e && ide.switchTab("Data"), "unknown" == t && ide.switchTab("Data"), $('<div id="map_blank" style="z-index:5; display:block; position:relative; top:42px; width:100%; text-align:center; background-color:#eee; opacity: 0.8;">' + i18n.t("map.intentianally_blank") + " <small>(" + e + ")</small></div>").appendTo("#map")
			}, overpass.handlers.onDataRecieved = function(e, t, n, i) {
				if (e > 1e6) {
					var r = {};
					r[i18n.t("dialog.abort")] = function() {
						$(this).dialog("close"), n()
					}, r[i18n.t("dialog.continue_anyway")] = function() {
						$(this).dialog("close"), i()
					}, $('<div title="' + i18n.t("warning.huge_data.title") + '">' + i18n.t("warning.huge_data.expl").replace("{{amount_txt}}", t) + "</div>").dialog({
						modal: !0,
						buttons: r
					})
				} else i()
			}, overpass.handlers.onAbort = function() {
				ide.waiter.close()
			}, overpass.handlers.onAjaxError = function(e) {
				var t = {};
				t[i18n.t("dialog.dismiss")] = function() {
					$(this).dialog("close")
				}, $('<div title="' + i18n.t("error.ajax.title") + '"><p style="color:red;">' + i18n.t("error.ajax.expl") + "</p>" + e + "</div>").dialog({
					modal: !0,
					buttons: t
				}), overpass.resultText && ide.dataViewer.setValue(overpass.resultText)
			}, overpass.handlers.onQueryError = function(e) {
				var t = {};
				t[i18n.t("dialog.dismiss")] = function() {
					$(this).dialog("close")
				}, $('<div title="' + i18n.t("error.query.title") + '"><p style="color:red;">' + i18n.t("error.query.expl") + "</p>" + e + "</div>").dialog({
					modal: !0,
					buttons: t
				})
			}, overpass.handlers.onStyleError = function(e) {
				var t = {};
				t[i18n.t("dialog.dismiss")] = function() {
					$(this).dialog("close")
				}, $('<div title="' + i18n.t("error.mapcss.title") + '"><p style="color:red;">' + i18n.t("error.mapcss.expl") + "</p>" + e + "</div>").dialog({
					modal: !0,
					buttons: t
				})
			}, overpass.handlers.onQueryErrorLine = function(e) {
				ide.highlightError(e)
			}, overpass.handlers.onRawDataPresent = function() {
				ide.dataViewer.setOption("mode", overpass.resultType), ide.dataViewer.setValue(overpass.resultText)
			}, overpass.handlers.onGeoJsonReady = function() {
				if (ide.map.addLayer(overpass.osmLayer), settings.show_data_stats) {
					var e = overpass.stats,
						t = "<small>" + i18n.t("data_stats.loaded") + "</small>&nbsp;&ndash;&nbsp;" + i18n.t("data_stats.nodes") + ":&nbsp;" + e.data.nodes + ", " + i18n.t("data_stats.ways") + ":&nbsp;" + e.data.ways + ", " + i18n.t("data_stats.relations") + ":&nbsp;" + e.data.relations + (e.data.areas > 0 ? ", " + i18n.t("data_stats.areas") + ":&nbsp;" + e.data.areas : "") + "<br/>" + "<small>" + i18n.t("data_stats.displayed") + "</small>&nbsp;&ndash;&nbsp;" + i18n.t("data_stats.pois") + ":&nbsp;" + e.geojson.pois + ", " + i18n.t("data_stats.lines") + ":&nbsp;" + e.geojson.lines + ", " + i18n.t("data_stats.polygons") + ":&nbsp;" + e.geojson.polys + "</small>";
					$('<div id="data_stats" style="z-index:5; display:block; position:absolute; bottom:0px; right:0; width:auto; text-align:right; padding: 0 0.5em; background-color:#eee; opacity: 0.8;">' + t + "</div>").appendTo("#map")
				}
			}, overpass.handlers.onPopupReady = function(e) {
				e.openOn(ide.map)
			}, ide.waiter.close(), settings.first_time_visit === !0 && ide.not_supported !== !0 && ide.run_query_on_startup !== !0) {
				var _ = {};
				_[i18n.t("dialog.close")] = function() {
					$(this).dialog("close")
				}, $("#welcome-dialog").dialog({
					modal: !0,
					buttons: _
				})
			}
			ide.run_query_on_startup === !0 && ide.update_map()
		}, this.map2bbox = function(e) {
			var t;
			t = ide.map.bboxfilter.isEnabled() ? ide.map.bboxfilter.getBounds() : this.map.getBounds();
			var n = Math.min(Math.max(t.getSouthWest().lat, -90), 90),
				i = Math.min(Math.max(t.getNorthEast().lat, -90), 90),
				r = Math.min(Math.max(t.getSouthWest().lng, -180), 180),
				a = Math.min(Math.max(t.getNorthEast().lng, -180), 180);
			return "OverpassQL" == e ? n + "," + r + "," + i + "," + a : "xml" == e ? 's="' + n + '" w="' + r + '" n="' + i + '" e="' + a + '"' : void 0
		}, this.map2coord = function(e) {
			var t = this.map.getCenter();
			return "OverpassQL" == e ? t.lat + "," + t.lng : "xml" == e ? 'lat="' + t.lat + '" lon="' + t.lng + '"' : void 0
		}, this.getQuery = function(t, n) {
			var i = e.getValue();
			if (t) {
				var r = i.match(/{{[a-zA-Z0-9_]+=.+?}}/gm);
				if ($.isArray(r)) for (var a = 0; r.length > a; a++) {
					var o = r[a].match(/{{([^:=]+?)=(.+?)}}/);
					i = i.replace(r[a], ""), i = i.replace(RegExp("{{" + o[1] + "}}", "g"), o[2])
				}
				i = i.replace(/{{bbox}}/g, ide.map2bbox(this.getQueryLang())), i = i.replace(/{{center}}/g, ide.map2coord(this.getQueryLang()));
				var s = i.match(/{{style:[\S\s]*?}}/gm) || [];
				s.forEach(function(e, t) {
					s[t] = e.match(/{{style:([\S\s]*?)}}/m)[1]
				}), s = s.join("\n"), ide.mapcss = s, (i.match(/{{[\S\s]*?}}/gm) || []).forEach(function(e) {
					var t = e.split(/\r?\n|\r/).length;
					i = i.replace(e, Array(t).join("\n"))
				}), (n === void 0 || n) && (i = i.replace(/(\n|\r)/g, " "), i = i.replace(/\s+/g, " "))
			}
			return i
		}, this.setQuery = function(t) {
			e.setValue(t)
		}, this.getQueryLang = function() {
			return $.trim(e.getValue().replace(/{{.*?}}/g, "")).match(/^</) ? "xml" : "OverpassQL"
		}, this.repairQuery = function(e) {
			if ("no visible data" == e) {
				var t = ide.getQuery(!1, !1);
				if ("xml" == ide.getQueryLang()) {
					for (var n = t.match(/(\n?[^\S\n]*<print[\s\S]*?(\/>|<\/print>))/g), i = 0; n.length > i; i++) {
						var r, a, o, s = n[i].match(/^\n?(\s*)/)[1],
							l = $("print", $.parseXML(n[i])).attr("from");
						l ? (r = ' into="' + l + '"', a = ' set="' + l + '"', o = ' from="' + l + '"') : (r = "", a = "", o = ""), t = t.replace(n[i], "\n" + s + "<!-- added by auto repair -->\n" + s + "<union" + r + ">\n" + s + "  <item" + a + "/>\n" + s + "  <recurse" + o + ' type="down"/>\n' + s + "</union>\n" + s + "<!-- end of auto repair --><autorepair>" + i + "</autorepair>")
					}
					for (var i = 0; n.length > i; i++) t = t.replace("<autorepair>" + i + "</autorepair>", n[i])
				} else {
					for (var u = t.match(/(\n?[^\S\n]*(\.[^.;]+)?out[^:;"\]]*;)/g), i = 0; u.length > i; i++) {
						var c, s = u[i].match(/^\n?(\s*)/)[0],
							l = u[i].match(/\.([^;.]+?)\s+?out/);
						c = l ? "(." + l[1] + ";." + l[1] + " >;)->." + l[1] + ";" : "(._;>;);", t = t.replace(u[i], s + "/*added by auto repair*/" + s + c + s + "/*end of auto repair*/<autorepair>" + i + "</autorepair>")
					}
					for (var i = 0; u.length > i; i++) t = t.replace("<autorepair>" + i + "</autorepair>", u[i])
				}
				ide.setQuery(t)
			} else if ("xml+metadata" == e) {
				var t = ide.getQuery(!1, !1);
				if ("xml" == ide.getQueryLang()) {
					var h = t.match(/<osm-script([^>]*)>/);
					if (h) {
						var d = $("osm-script", $.parseXML(h[0] + "</osm-script>")).attr("output");
						if (d && "xml" != d) {
							var p = h[0].replace(d, "xml");
							t = t.replace(h[0], p + "<!-- fixed by auto repair -->")
						}
					}
					for (var n = t.match(/(<print[\s\S]*?(\/>|<\/print>))/g), i = 0; n.length > i; i++) {
						var f = $("print", $.parseXML(n[i])).attr("mode");
						if ("meta" != f) {
							var m = n[i];
							m = f ? m.replace(f, "meta") : m.replace("<print", '<print mode="meta"'), t = t.replace(n[i], m + "<!-- fixed by auto repair -->")
						}
					}
				} else {
					var g = t.match(/\[\s*out\s*:\s*([^\]\s]+)\s*\]\s*;/);
					g && "xml" != g[1] && (t = t.replace(/(\[\s*out\s*:\s*)([^\]\s]+)(\s*\]\s*;)/, "$1xml$3/*fixed by auto repair*/"));
					for (var n = t.match(/out[^:;]*;/g), i = 0; n.length > i; i++) if (!n[i].match(/\s(meta)/)) {
						var m = n[i].replace(/\s(body|skel|ids)/, "").replace("out", "out meta");
						t = t.replace(n[i], m + "/*fixed by auto repair*/")
					}
				}
				ide.setQuery(t)
			}
		}, this.highlightError = function(t) {
			e.setLineClass(t - 1, null, "errorline")
		}, this.resetErrors = function() {
			for (var t = 0; e.lineCount() > t; t++) e.setLineClass(t, null, null)
		}, this.switchTab = function(e) {
			$("#navs .tabs a:contains('" + e + "')").click()
		}, this.loadExample = function(e) {
			settings.saves[e] !== void 0 && ide.setQuery(settings.saves[e].overpass)
		}, this.removeExample = function(e, t) {
			var n = {};
			n[i18n.t("dialog.delete")] = function() {
				delete settings.saves[e], settings.save(), $(t).parent().remove(), $(this).dialog("close")
			}, n[i18n.t("dialog.cancel")] = function() {
				$(this).dialog("close")
			}, $('<div title="' + i18n.t("dialog.delete_query.title") + '"><p><span class="ui-icon ui-icon-alert" style="float:left; margin:1px 7px 20px 0;"></span>' + i18n.t("dialog.delete_query.expl") + ": &quot;<i>" + e + "</i>&quot;?</p></div>").dialog({
				modal: !0,
				buttons: n
			})
		}, this.onLoadClick = function() {
			$("#load-dialog ul").html("");
			var e = !1;
			for (var t in settings.saves) {
				var n = settings.saves[t].type;
				$('<li><a href="" onclick="ide.loadExample(\'' + htmlentities(t) + "'); $(this).parents('.ui-dialog-content').dialog('close'); return false;\">" + t + "</a>" + ("template" != n ? '<a href="" onclick="ide.removeExample(\'' + htmlentities(t) + '\',this); return false;" title="' + i18n.t("load.delete_query") + '" class="delete-query"><span class="ui-icon ui-icon-close" style="display:inline-block;"/></a>' : "") + "</li>").appendTo("#load-dialog ul." + n), "saved_query" == n && (e = !0)
			}
			e || $("<li>" + i18n.t("load.no_saved_query") + "</li>").appendTo("#load-dialog ul.saved_query");
			var i = {};
			i[i18n.t("dialog.cancel")] = function() {
				$(this).dialog("close")
			}, $("#load-dialog").dialog({
				modal: !0,
				buttons: i
			}), $("#load-dialog").accordion({
				active: e ? 0 : 1
			})
		}, this.onSaveClick = function() {
			var e = [];
			for (var t in settings.saves) e.push(t);
			i($("#save-dialog input[name=save]"), e);
			var n = {};
			n[i18n.t("dialog.save")] = function() {
				var e = $("input[name=save]", this)[0].value;
				settings.saves[htmlentities(e)] = {
					overpass: ide.getQuery(),
					type: "saved_query"
				}, settings.save(), $(this).dialog("close")
			}, n[i18n.t("dialog.cancel")] = function() {
				$(this).dialog("close")
			}, $("#save-dialog").dialog({
				modal: !0,
				buttons: n
			})
		}, this.onRunClick = function() {
			ide.update_map()
		}, this.compose_share_link = function(e, t, n, i) {
			var r = "";
			if (t) {
				if (r += "?q=" + encodeURIComponent(Base64.encode(lzw_encode(e))), n) {
					var a = function(e, t) {
						var n = Base64.encodeNum(Math.round(1e5 * (e + 90)) + 1e5 * 180 * Math.round(1e5 * (t + 180)));
						return "AAAAAAAA".substring(0, 9 - n.length) + n
					};
					r += "&c=" + a(ide.map.getCenter().lat, ide.map.getCenter().lng) + Base64.encodeNum(ide.map.getZoom())
				}
				i && (r += "&R")
			} else r += "?Q=" + encodeURIComponent(e), n && (r += "&C=" + L.Util.formatNum(ide.map.getCenter().lat) + ";" + L.Util.formatNum(ide.map.getCenter().lng) + ";" + ide.map.getZoom()), i && (r += "&R");
			return r
		}, this.updateShareLink = function() {
			var t = location.protocol + "//" + location.host + location.pathname,
				n = e.getValue(),
				i = "auto" == settings.share_compression && n.length > 300 || "on" == settings.share_compression,
				r = $("div#share-dialog input[name=include_coords]")[0].checked,
				a = $("div#share-dialog input[name=run_immediately]")[0].checked,
				o = ide.compose_share_link(n, i, r, a),
				s = t + o,
				l = "";
			s.length >= 2e3 && (l = '<p style="color:orange">' + i18n.t("warning.share.long") + "</p>"), s.length >= 8e3 && (l = '<p style="color:red">' + i18n.t("warning.share.very_long") + "</p>"), $("div#share-dialog #share_link_warning").html(l), $("div#share-dialog #share_link_a")[0].href = s, $("div#share-dialog #share_link_textarea")[0].value = s, "" != configs.short_url_service && $.get(configs.short_url_service + o, function(e) {
				$("div#share-dialog #share_link_a")[0].href = e, $("div#share-dialog #share_link_textarea")[0].value = e
			})
		}, this.onShareClick = function() {
			$("div#share-dialog input[name=include_coords]")[0].checked = settings.share_include_pos, ide.updateShareLink();
			var e = {};
			e[i18n.t("dialog.done")] = function() {
				$(this).dialog("close")
			}, $("div#share-dialog").dialog({
				modal: !0,
				buttons: e
			})
		}, this.onExportClick = function() {

			var e = ide.getQuery(!0),
				t = location.protocol + "//" + location.host + location.pathname.match(/.*\//)[0];
			$("#export-dialog a#export-interactive-map")[0].href = t + "map.html?Q=" + encodeURIComponent(e), $("#export-dialog a#export-overpass-openlayers")[0].href = settings.server + "convert?data=" + encodeURIComponent(e) + "&target=openlayers", $("#export-dialog a#export-overpass-api")[0].href = settings.server + "interpreter?data=" + encodeURIComponent(e), $("#export-dialog a#export-text")[0].href = 'data:text/plain;charset="' + (document.characterSet || document.charset) + '";base64,' + Base64.encode(ide.getQuery(!0, !1), !0);
			var n = {};
			n[i18n.t("dialog.done")] = function() {


				$(this).dialog("close")


			}, $("#export-dialog a#export-map-state").unbind("click").bind("click", function() {
				return $('<div title="' + i18n.t("export.map_view.title") + '">' + i18n.t("export.map_view.permalink_osm") + '&nbsp;<a href="http://www.openstreetmap.org/?lat=' + L.Util.formatNum(ide.map.getCenter().lat) + "&lon=" + L.Util.formatNum(ide.map.getCenter().lng) + "&zoom=" + ide.map.getZoom() + '">osm.org</a></p>' + "<h4>" + i18n.t("export.map_view.center") + "</h4><p>" + L.Util.formatNum(ide.map.getCenter().lat) + " / " + L.Util.formatNum(ide.map.getCenter().lng) + " <small>(" + i18n.t("export.map_view.center_expl") + ")</small></p>" + "<h4>" + i18n.t("export.map_view.bounds") + "</h4><p>" + L.Util.formatNum(ide.map.getBounds().getSouthWest().lat) + " / " + L.Util.formatNum(ide.map.getBounds().getSouthWest().lng) + "<br />" + L.Util.formatNum(ide.map.getBounds().getNorthEast().lat) + " / " + L.Util.formatNum(ide.map.getBounds().getNorthEast().lng) + "<br /><small>(" + i18n.t("export.map_view.bounds_expl") + ")</small></p>" + (ide.map.bboxfilter.isEnabled() ? "<h4>" + i18n.t("export.map_view.bounds_selection") + "</h4><p>" + L.Util.formatNum(ide.map.bboxfilter.getBounds().getSouthWest().lat) + " / " + L.Util.formatNum(ide.map.bboxfilter.getBounds().getSouthWest().lng) + "<br />" + L.Util.formatNum(ide.map.bboxfilter.getBounds().getNorthEast().lat) + " / " + L.Util.formatNum(ide.map.bboxfilter.getBounds().getNorthEast().lng) + "<br /><small>(" + i18n.t("export.map_view.bounds_expl") + ")</small></p>" : "") + "<h4>" + i18n.t("export.map_view.zoom") + "</h4><p>" + ide.map.getZoom() + "</p>" + "</div>").dialog({
					modal: !0,
					buttons: n
				}), !1
			}), $("#export-dialog a#export-geoJSON").on("click", function() {
				var e, t = overpass.geojson;
				if (t) {
					var n = [];
					$.each(t, function(e, t) {
						n = n.concat(t.features)
					}), n = {
						type: "FeatureCollection",
						generator: configs.appname,
						copyright: overpass.copyright,
						timestamp: overpass.timestamp,
						features: n
					}, e = JSON.stringify(n, void 0, 2)
				} else e = i18n.t("export.geoJSON.no_data");
				var i = $("#export-geojson");
				$("textarea", i)[0].value = e;
				var r = {};
				return r[i18n.t("dialog.done")] = function() {
					$(this).dialog("close")
				}, i.dialog({
					modal: !0,
					width: 500,
					buttons: r
				}), !1
			}), $("#export-dialog a#export-GPX").on("click", function() {
				function e(e) {
					if (e && e.tags) {
						if (e.tags.name) return e.tags.name;
						if (e.tags.ref) return e.tags.ref;
						if (e.tags["addr:housenumber"] && e.tags["addr:street"]) return e.tags["addr:street"] + " " + e.tags["addr:housenumber"]
					}
					return e.type + " " + e.id
				}
				var t, n = overpass.geojson;
				if (n) {
					var i = {
						gpx: {
							"@xmlns": "http://www.topografix.com/GPX/1/1",
							"@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
							"@xsi:schemaLocation": "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd",
							"@version": "1.1",
							"@creator": "overpass turbo",
							metadata: {
								copyright: "Data (c) OpenStreetMap contributors (ODbL)",
								desc: "Filtered OSM data converted to GPX by overpass turbo"
							},
							wpt: [],
							trk: []
						}
					};
					n[2].features.forEach(function(t) {
						o = {
							"@lat": t.geometry.coordinates[1],
							"@lon": t.geometry.coordinates[0],
							link: "http://osm.org/browse/" + t.properties.type + "/" + t.properties.id,
							name: e(t.properties)
						}, i.gpx.wpt.push(o)
					}), n[1].features.forEach(function(t) {
						o = {
							link: "http://osm.org/browse/" + t.properties.type + "/" + t.properties.id,
							name: e(t.properties)
						}, o.trkseg = {
							trkpt: []
						}, t.geometry.coordinates.forEach(function(e) {
							o.trkseg.trkpt.push({
								"@lat": e[1],
								"@lon": e[0]
							})
						}), i.gpx.trk.push(o)
					}), n[0].features.forEach(function(t) {
						o = {
							link: "http://osm.org/browse/" + t.properties.type + "/" + t.properties.id,
							name: e(t.properties)
						}, o.trkseg = [];
						var n = t.geometry.coordinates;
						"Polygon" == t.geometry.type && (n = [n]), n.forEach(function(e) {
							e.forEach(function(e) {
								var t = {
									trkpt: []
								};
								e.forEach(function(e) {
									t.trkpt.push({
										"@lat": e[1],
										"@lon": e[0]
									})
								}), o.trkseg.push(t)
							})
						}), i.gpx.trk.push(o)
					}), t = JXON.stringify(i)
				} else t = i18n.t("export.GPX.no_data");
				var r = $("#export-gpx");
				$("textarea", r)[0].value = t;
				var a = {};
				return a[i18n.t("dialog.done")] = function() {
					$(this).dialog("close")
				}, r.dialog({
					modal: !0,
					width: 500,
					buttons: a
				}), !1
			}), $("#export-dialog a#export-convert-xml")[0].href = settings.server + "convert?data=" + encodeURIComponent(e) + "&target=xml", $("#export-dialog a#export-convert-ql")[0].href = settings.server + "convert?data=" + encodeURIComponent(e) + "&target=mapql", $("#export-dialog a#export-convert-compact")[0].href = settings.server + "convert?data=" + encodeURIComponent(e) + "&target=compact", $("#export-dialog a#export-josm").unbind("click"), $("#export-dialog a#export-josm").click(function() {

				var e = $(this).parents("div.ui-dialog-content").first(),
					t = function() {
						var t = "http://127.0.0.1:8111/";
						$.getJSON(t + "version").success(function(n) {
							if (1 == n.protocolversion.major) $.get(t + "import", {
								url: settings.server + "interpreter?data=" + ide.getQuery(!0, !0)
								
							}).error(function() {
								alert("Error: Unexpected JOSM remote control error.")
							}).success(function() {
								e.dialog("close")
							});
							else {
								var i = {};
								i[i18n.t("dialog.dismiss")] = function() {
									$(this).dialog("close")
								}, $('<div title="' + i18n.t("error.remote.title") + '"><p>' + i18n.t("error.remote.incompat") + ": " + n.protocolversion.major + "." + n.protocolversion.minor + " :(</p></div>").dialog({
									modal: !0,
									width: 350,
									buttons: i
								})
							}
						}).error(function() {
							var e = {};
							e[i18n.t("dialog.dismiss")] = function() {
								$(this).dialog("close")
							}, $('<div title="' + i18n.t("error.remote.title") + '"><p>' + i18n.t("error.remote.not_found") + "</p></div>").dialog({
								modal: !0,
								width: 350,
								buttons: e
							})
						})
					}, n = ide.getQuery(!0, !1),
					i = {};
				if ("xml" == ide.getQueryLang()) {
					try {
						var r = $.parseXML("<x>" + n + "</x>")
					} catch (a) {
						i.xml = !0
					}
					if (!i.xml) {
						$("print", r).each(function(e, t) {
							"meta" !== $(t).attr("mode") && (i.meta = !0)
						});
						var o = $("osm-script", r).attr("output");
						void 0 !== o && "xml" !== o && (i.output = !0)
					}
				} else {
					var o = n.match(/\[\s*out\s*:\s*([^\]\s]+)\s*\]\s*;/);
					o && "xml" != o[1] && (i.output = !0);
					var s = n.match(/out([^:;]*);/g);
					$(s).each(function(e, t) {
						(t.match(/(body|skel|ids)/) || !t.match(/meta/)) && (i.meta = !0)
					})
				}
				if (!$.isEmptyObject(i)) {
					var l = {};
					return l[i18n.t("dialog.repair_query")] = function() {
						ide.repairQuery("xml+metadata"), $(this).dialog("close"), e.dialog("close")
					}, l[i18n.t("dialog.continue_anyway")] = function() {
						$(this).dialog("close"), t()
					}, $('<div title="' + i18n.t("warning.incomplete.title") + '">' + i18n.t("warning.incomplete.remote") + "</div>").dialog({
						modal: !0,
						buttons: l
					}), !1
				}
				return t(), !1
			});
			var n = {};
			n[i18n.t("dialog.done")] = function() {
				$(this).dialog("close")
			}, $("#export-dialog").dialog({
				modal: !0,
				width: 350,
				buttons: n
			})
		}, this.onExportImageClick = function() {
			ide.waiter.open(i18n.t("waiter.export_as_image")), ide.waiter.addInfo("prepare map"), $("#map .leaflet-control-container .leaflet-top").hide(), $("#data_stats").hide(), settings.export_image_attribution && t.addTo(ide.map), settings.export_image_scale || n.removeFrom(ide.map), ide.waiter.addInfo("rendering map tiles"), $("#map").html2canvas({
				useCORS: !0,
				allowTaint: !1,
				proxy: "/html2canvas_proxy/",
				onrendered: function(e) {
					settings.export_image_attribution && t.removeFrom(ide.map), settings.export_image_scale || n.addTo(ide.map), $("#data_stats").show(), $("#map .leaflet-control-container .leaflet-top").show(), ide.waiter.addInfo("rendering map data"), e.id = "render_canvas";
					var i = e.getContext("2d"),
						r = $("#map .leaflet-overlay-pane svg").height(),
						a = $("#map .leaflet-overlay-pane svg").width(),
						o = $("#map .leaflet-map-pane")[0].style.cssText.match(/.*?(-?\d+)px.*?(-?\d+)px.*/),
						s = +o[1],
						l = +o[2];
					$("#map .leaflet-overlay-pane").html().length > 0 && i.drawSvg($("#map .leaflet-overlay-pane").html(), s, l, a, r), ide.waiter.addInfo("converting to png image");
					var u = e.toDataURL("image/png"),
						c = "";
					settings.export_image_attribution || (c = '<p style="font-size:smaller; color:orange;">Make sure to include proper attributions when distributing this image!</p>');
					var h = {};
					h[i18n.t("dialog.done")] = function() {
						$(this).dialog("close"), $("#export_image_dialog").remove()
					}, $('<div title="' + i18n.t("export.image.title") + '" id="export_image_dialog"><p><img src="' + u + '" alt="' + i18n.t("export.image.alt") + '" width="480px"/><a href="' + u + '" download="export.png" target="_blank">' + i18n.t("export.image.download") + "</a></p>" + c + "</div>").dialog({
						modal: !0,
						width: 500,
						position: ["center", 60],
						open: function() {
							ide.waiter.close()
						},
						buttons: h
					})
				}
			})
		}, this.onSettingsClick = function() {
			$("#settings-dialog input[name=ui_language]")[0].value = settings.ui_language, i($("#settings-dialog input[name=ui_language]"), ["auto", "en", "de"]), $("#settings-dialog input[name=server]")[0].value = settings.server, i($("#settings-dialog input[name=server]"), ["http://www.overpass-api.de/api/", "http://overpass.osm.rambler.ru/cgi/"]), $("#settings-dialog input[name=force_simple_cors_request]")[0].checked = settings.force_simple_cors_request, $("#settings-dialog input[name=use_html5_coords]")[0].checked = settings.use_html5_coords, $("#settings-dialog input[name=no_autorepair]")[0].checked = settings.no_autorepair, $("#settings-dialog input[name=use_rich_editor]")[0].checked = settings.use_rich_editor, $("#settings-dialog input[name=editor_width]")[0].value = settings.editor_width, $("#settings-dialog input[name=share_include_pos]")[0].checked = settings.share_include_pos, $("#settings-dialog input[name=share_compression]")[0].value = settings.share_compression, i($("#settings-dialog input[name=share_compression]"), ["auto", "on", "off"]), $("#settings-dialog input[name=tile_server]")[0].value = settings.tile_server, i($("#settings-dialog input[name=tile_server]"), ["http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"]), $("#settings-dialog input[name=background_opacity]")[0].value = settings.background_opacity, $("#settings-dialog input[name=enable_crosshairs]")[0].checked = settings.enable_crosshairs, $("#settings-dialog input[name=disable_poiomatic]")[0].checked = settings.disable_poiomatic, $("#settings-dialog input[name=show_data_stats]")[0].checked = settings.show_data_stats, $("#settings-dialog input[name=export_image_scale]")[0].checked = settings.export_image_scale, $("#settings-dialog input[name=export_image_attribution]")[0].checked = settings.export_image_attribution;
			var e = {};
			e[i18n.t("dialog.save")] = function() {
				settings.ui_language = $("#settings-dialog input[name=ui_language]")[0].value, settings.server = $("#settings-dialog input[name=server]")[0].value, settings.force_simple_cors_request = $("#settings-dialog input[name=force_simple_cors_request]")[0].checked, settings.use_html5_coords = $("#settings-dialog input[name=use_html5_coords]")[0].checked, settings.no_autorepair = $("#settings-dialog input[name=no_autorepair]")[0].checked, settings.use_rich_editor = $("#settings-dialog input[name=use_rich_editor]")[0].checked;
				var e = settings.editor_width;
				settings.editor_width = $("#settings-dialog input[name=editor_width]")[0].value, e != settings.editor_width && ($("#editor").css("width", settings.editor_width), $("#dataviewer").css("left", settings.editor_width)), settings.share_include_pos = $("#settings-dialog input[name=share_include_pos]")[0].checked, settings.share_compression = $("#settings-dialog input[name=share_compression]")[0].value;
				var t = settings.tile_server;
				settings.tile_server = $("#settings-dialog input[name=tile_server]")[0].value, t != settings.tile_server && ide.map.tile_layer.setUrl(settings.tile_server);
				var n = settings.background_opacity;
				settings.background_opacity = +$("#settings-dialog input[name=background_opacity]")[0].value, settings.background_opacity != n && (1 == settings.background_opacity ? ide.map.removeLayer(ide.map.inv_opacity_layer) : ide.map.inv_opacity_layer.setOpacity(1 - settings.background_opacity).addTo(ide.map)), settings.enable_crosshairs = $("#settings-dialog input[name=enable_crosshairs]")[0].checked, settings.disable_poiomatic = $("#settings-dialog input[name=disable_poiomatic]")[0].checked, settings.show_data_stats = $("#settings-dialog input[name=show_data_stats]")[0].checked, $(".crosshairs").toggle(settings.enable_crosshairs), settings.export_image_scale = $("#settings-dialog input[name=export_image_scale]")[0].checked, settings.export_image_attribution = $("#settings-dialog input[name=export_image_attribution]")[0].checked, settings.save(), $(this).dialog("close")
			}, $("#settings-dialog").dialog({
				modal: !0,
				width: 400,
				buttons: e
			}), $("#settings-dialog").accordion()
		}, this.onHelpClick = function() {
			var e = {};
			e[i18n.t("dialog.close")] = function() {
				$(this).dialog("close")
			}, $("#help-dialog").dialog({
				modal: !1,
				width: 450,
				buttons: e
			}), $("#help-dialog").accordion()
		}, this.onKeyPress = function(e) {
			(120 == e.keyCode && 0 == e.which || (13 == e.which || 10 == e.which) && (e.ctrlKey || e.metaKey)) && (ide.onRunClick(), e.preventDefault()), "s" == String.fromCharCode(e.which).toLowerCase() && (e.ctrlKey || e.metaKey) && (ide.onSaveClick(), e.preventDefault()), "o" == String.fromCharCode(e.which).toLowerCase() && (e.ctrlKey || e.metaKey) && (ide.onLoadClick(), e.preventDefault()), "h" == String.fromCharCode(e.which).toLowerCase() && (e.ctrlKey || e.metaKey) && (ide.onHelpClick(), e.preventDefault())
		}, this.update_map = function() {
			ide.waiter.open(i18n.t("waiter.processing_query")), ide.waiter.addInfo("resetting map"), $("#data_stats").remove(), this.resetErrors(), ide.dataViewer.setValue(""), overpass.osmLayer !== void 0 && ide.map.removeLayer(overpass.osmLayer), $("#map_blank").remove();
			var e = ide.getQuery(!0, !1),
				t = ide.getQueryLang();
			overpass.run_query(e, t)
		}
	};