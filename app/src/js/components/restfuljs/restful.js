    !function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? exports.restful = e() : t.restful = e()
    }(this, function () {
        return function (t) {
            function e(r) {
                if (n[r])return n[r].exports;
                var o = n[r] = {exports: {}, id: r, loaded: !1};
                return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
            }

            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function (t, e, n) {
            "use strict";
            function r(t, e) {
                var n = {baseUrl: t, port: e || 80, prefixUrl: "", protocol: "http"}, r = function () {
                    var t = {
                        _http: l(f),
                        headers: {},
                        requestInterceptors: [],
                        responseInterceptors: []
                    }, e = {
                        url: function (t) {
                            var e = function () {
                                return t.apply(this, arguments)
                            };
                            return e.toString = function () {
                                return t.toString()
                            }, e
                        }(function () {
                            var t = n.protocol + "://" + n.baseUrl;
                            return 80 !== n.port && (t += ":" + n.port), "" !== n.prefixUrl && (t += "/" + n.prefixUrl), t
                        })
                    };
                    return i(e, t), u(function () {
                        return t._http
                    }, e)
                }(), o = {
                    _url: null, customUrl: function (t) {
                        return "undefined" == typeof t ? this._url : (this._url = t, this)
                    }, url: function () {
                        return r.url()
                    }, one: function (t, e) {
                        return c(t, e, o)
                    }, oneUrl: function (t, e) {
                        return this.customUrl(e), this.one(t, null)
                    }, all: function (t) {
                        return s(t, o)
                    }, allUrl: function (t, e) {
                        return this.customUrl(e), this.all(t)
                    }
                };
                return o = u(a(r), o), i(o, n), o
            }

            var o = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            t.exports = r;
            var u = o(n(1)), i = o(n(2)), s = o(n(3)), c = o(n(8)), a = o(n(9)), f = o(n(10)), l = o(n(30))
        }, function (t, e, n) {
            "use strict";
            function r(t) {
                if (null == t)throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }

            t.exports = Object.assign || function (t, e) {
                    for (var n, o, u = r(t), i = 1; i < arguments.length; i++) {
                        n = arguments[i], o = Object.keys(Object(n));
                        for (var s = 0; s < o.length; s++)u[o[s]] = n[o[s]]
                    }
                    return u
                }
        }, function (t, e, n) {
            "use strict";
            function r(t, e) {
                for (var n in e)e.hasOwnProperty(n) && !function (n) {
                    t[n] = function (r) {
                        return arguments.length ? (e[n] = r, t) : e[n]
                    }
                }(n)
            }

            t.exports = r
        }, function (t, e, n) {
            "use strict";
            function r(t, e) {
                function n(t) {
                    var n = i(o + "/" + t, e());
                    return n.headers(f.headers()).responseInterceptors(f.responseInterceptors()).requestInterceptors(f.requestInterceptors()), n
                }

                function r(n) {
                    var r = c(t, n, e);
                    return r().headers(f.headers()).responseInterceptors(f.responseInterceptors()).requestInterceptors(f.requestInterceptors()), r
                }

                var o = e.customUrl && e.customUrl() ? e.customUrl() : [e.url(), t].join("/"), f = i(o, e()), l = {
                    get: function (t, e, o) {
                        return n(t).get(e, o).then(function (t) {
                            return s(t, r)
                        })
                    }, getAll: function (t, e) {
                        return f.getAll(t, e).then(function (t) {
                            return s(t, r)
                        })
                    }, post: function (t, e) {
                        return f.post(t, e).then(function (t) {
                            return s(t)
                        })
                    }, put: function (t, e, r) {
                        return n(t).put(e, r).then(function (t) {
                            return s(t)
                        })
                    }, patch: function (t, e, r) {
                        return n(t).patch(e, r).then(function (t) {
                            return s(t)
                        })
                    }, head: function (t, e, r) {
                        return n(t).head(e, r).then(function (t) {
                            return s(t)
                        })
                    }, "delete": function (t, e) {
                        return n(t)["delete"](e).then(function (t) {
                            return s(t)
                        })
                    }, url: function (t) {
                        var e = function () {
                            return t.apply(this, arguments)
                        };
                        return e.toString = function () {
                            return t.toString()
                        }, e
                    }(function () {
                        return o
                    })
                };
                return u(a(f), l)
            }

            var o = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            t.exports = r;
            var u = o(n(1)), i = o(n(4)), s = o(n(6)), c = o(n(8)), a = o(n(9))
        }, function (t, e, n) {
            "use strict";
            function r(t, e) {
                function n() {
                    for (var t = a, e = []; t;)e = e.concat(t.requestInterceptors()), t = t._parent ? t._parent() : null;
                    return e
                }

                function r() {
                    for (var t = a, e = []; t;)e = e.concat(t.responseInterceptors()), t = t._parent ? t._parent() : null;
                    return e
                }

                function o() {
                    for (var t = a, e = {}; t;)u(e, t.headers()), t = t._parent ? t._parent() : null;
                    return e
                }

                function s(t) {
                    var e = void 0 === arguments[1] ? {} : arguments[1], i = void 0 === arguments[2] ? {} : arguments[2], s = void 0 === arguments[3] ? null : arguments[3], c = {
                        url: t,
                        params: e || {},
                        headers: u({}, o(), i || {}),
                        responseInterceptors: r()
                    };
                    return s && (c.data = s, c.requestInterceptors = n()), c
                }

                var c = {
                    _parent: e,
                    headers: {},
                    requestInterceptors: [],
                    responseInterceptors: []
                }, a = {
                    get: function (e, n) {
                        return c._parent().request("get", s(t, e, n))
                    }, getAll: function (e, n) {
                        return c._parent().request("get", s(t, e, n))
                    }, post: function (e, n) {
                        return n = n || {}, n["Content-Type"] || (n["Content-Type"] = "application/json;charset=UTF-8"), c._parent().request("post", s(t, {}, n, e))
                    }, put: function (e, n) {
                        return n = n || {}, n["Content-Type"] || (n["Content-Type"] = "application/json;charset=UTF-8"), c._parent().request("put", s(t, {}, n, e))
                    }, patch: function (e, n) {
                        return n = n || {}, n["Content-Type"] || (n["Content-Type"] = "application/json;charset=UTF-8"), c._parent().request("patch", s(t, {}, n, e))
                    }, "delete": function (e) {
                        return c._parent().request("delete", s(t, {}, e))
                    }, head: function (e) {
                        return c._parent().request("head", s(t, {}, e))
                    }
                };
                return a = u(function () {
                    return c._parent()
                }, a), i(a, c), a
            }

            var o = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            t.exports = r;
            var u = o(n(1)), i = o(n(2));
            o(n(5))
        }, function (t, e, n) {
            "use strict";
            function r(t, e, n) {
                var r = {
                    _url: null, customUrl: function (t) {
                        return "undefined" == typeof t ? this._url : (this._url = t, this)
                    }, one: function (t, e) {
                        return n.one(t, e)
                    }, oneUrl: function (t, e) {
                        return this.customUrl(e), this.one(t, null)
                    }, all: function (t) {
                        return n.all(t)
                    }, allUrl: function (t, e) {
                        return this.customUrl(e), this.all(t)
                    }, save: function (t) {
                        return n.put(e, t)
                    }, remove: function (t) {
                        return n["delete"](t)
                    }, url: function () {
                        return n.url()
                    }, id: function (t) {
                        var e = function () {
                            return t.apply(this, arguments)
                        };
                        return e.toString = function () {
                            return t.toString()
                        }, e
                    }(function () {
                        return t
                    }), data: function (t) {
                        var e = function () {
                            return t.apply(this, arguments)
                        };
                        return e.toString = function () {
                            return t.toString()
                        }, e
                    }(function () {
                        return e
                    })
                };
                return u(function () {
                    return e
                }, r)
            }

            var o = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            t.exports = r;
            var u = o(n(1))
        }, function (t, e, n) {
            "use strict";
            var r = function (t) {
                return t && t.__esModule ? t["default"] : t
            }, o = r(n(7));
            t.exports = function (t, e) {
                return new Promise(function (n, r) {
                    var u = t.status;
                    return u >= 200 && 400 > u ? n(o(t, e)) : void r(o(t))
                })
            }
        }, function (t, e, n) {
            "use strict";
            function r(t, e) {
                var n = {
                    status: function () {
                        return t.status
                    }, body: function () {
                        var n = void 0 === arguments[0] ? !0 : arguments[0];
                        return n && e ? "[object Array]" === Object.prototype.toString.call(t.data) ? t.data.map(function (t) {
                            return i(t.id, t, e(t.id))
                        }) : i(t.data.id, t.data, e(t.data.id)) : t.data
                    }, headers: function () {
                        return t.headers
                    }, config: function () {
                        return t.config
                    }
                };
                return u(function () {
                    return t
                }, n)
            }

            var o = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            t.exports = r;
            var u = o(n(1)), i = o(n(5))
        }, function (t, e, n) {
            "use strict";
            function r(t, e, n) {
                var o = n.customUrl && n.customUrl() ? n.customUrl() : [n.url(), t, e].join("/"), f = s(o, n()), l = {
                    _url: null,
                    customUrl: function (t) {
                        return "undefined" == typeof t ? this._url : (this._url = t, this)
                    },
                    get: function (t, e) {
                        return f.get(t, e).then(function (t) {
                            return c(t, function () {
                                return l
                            })
                        })
                    },
                    put: function (t, e) {
                        return f.put(t, e).then(function (t) {
                            return c(t)
                        })
                    },
                    patch: function (t, e) {
                        return f.patch(t, e).then(function (t) {
                            return c(t)
                        })
                    },
                    head: function (t, e) {
                        return f.head(t, e).then(function (t) {
                            return c(t)
                        })
                    },
                    "delete": function (t) {
                        return f["delete"](t).then(function (t) {
                            return c(t)
                        })
                    },
                    one: function (t, e) {
                        return r(t, e, l)
                    },
                    oneUrl: function (t, e) {
                        return this.customUrl(e), this.one(t, null)
                    },
                    all: function (t) {
                        return i(t, l)
                    },
                    allUrl: function (t, e) {
                        return this.customUrl(e), this.all(t)
                    },
                    url: function (t) {
                        var e = function () {
                            return t.apply(this, arguments)
                        };
                        return e.toString = function () {
                            return t.toString()
                        }, e
                    }(function () {
                        return o
                    })
                };
                return l = u(a(f), l)
            }

            var o = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            t.exports = r;
            var u = o(n(1)), i = o(n(3)), s = o(n(4)), c = o(n(6)), a = o(n(9))
        }, function (t, e, n) {
            "use strict";
            function r(t) {
                function e() {
                    return t
                }

                return e = u(e, {
                    addRequestInterceptor: function (n) {
                        return t.requestInterceptors().push(n), e
                    }, requestInterceptors: function () {
                        return t.requestInterceptors()
                    }, addResponseInterceptor: function (n) {
                        return t.responseInterceptors().push(n), e
                    }, responseInterceptors: function () {
                        return t.responseInterceptors()
                    }, header: function (n, r) {
                        return t.headers()[n] = r, e
                    }, headers: function () {
                        return t.headers()
                    }
                })
            }

            var o = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            t.exports = r;
            var u = o(n(1))
        }, function (t, e, n) {
            t.exports = n(11)
        }, function (t, e, n) {
            "use strict";
            var r = n(12), o = n(13), u = n(14), i = n(15), s = n(23);
            !function () {
                var t = n(24);
                t && "function" == typeof t.polyfill && t.polyfill()
            }();
            var c = t.exports = function a(t) {
                t = o.merge({
                    method: "get",
                    headers: {},
                    transformRequest: r.transformRequest,
                    transformResponse: r.transformResponse
                }, t), t.withCredentials = t.withCredentials || r.withCredentials;
                var e = [i, void 0], n = Promise.resolve(t);
                for (a.interceptors.request.forEach(function (t) {
                    e.unshift(t.fulfilled, t.rejected)
                }), a.interceptors.response.forEach(function (t) {
                    e.push(t.fulfilled, t.rejected)
                }); e.length;)n = n.then(e.shift(), e.shift());
                return n.success = function (t) {
                    return u("success", "then", "https://github.com/mzabriskie/axios/blob/master/README.md#response-api"), n.then(function (e) {
                        t(e.data, e.status, e.headers, e.config)
                    }), n
                }, n.error = function (t) {
                    return u("error", "catch", "https://github.com/mzabriskie/axios/blob/master/README.md#response-api"), n.then(null, function (e) {
                        t(e.data, e.status, e.headers, e.config)
                    }), n
                }, n
            };
            c.defaults = r, c.all = function (t) {
                return Promise.all(t)
            }, c.spread = n(29), c.interceptors = {request: new s, response: new s}, function () {
                function t() {
                    o.forEach(arguments, function (t) {
                        c[t] = function (e, n) {
                            return c(o.merge(n || {}, {method: t, url: e}))
                        }
                    })
                }

                function e() {
                    o.forEach(arguments, function (t) {
                        c[t] = function (e, n, r) {
                            return c(o.merge(r || {}, {method: t, url: e, data: n}))
                        }
                    })
                }

                t("delete", "get", "head"), e("post", "put", "patch")
            }()
        }, function (t, e, n) {
            "use strict";
            var r = n(13), o = /^\)\]\}',?\n/, u = {"Content-Type": "application/x-www-form-urlencoded"};
            t.exports = {
                transformRequest: [function (t, e) {
                    return r.isFormData(t) ? t : r.isArrayBuffer(t) ? t : r.isArrayBufferView(t) ? t.buffer : !r.isObject(t) || r.isFile(t) || r.isBlob(t) ? t : (!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = "application/json;charset=utf-8"), JSON.stringify(t))
                }],
                transformResponse: [function (t) {
                    if ("string" == typeof t) {
                        t = t.replace(o, "");
                        try {
                            t = JSON.parse(t)
                        } catch (e) {
                        }
                    }
                    return t
                }],
                headers: {
                    common: {Accept: "application/json, text/plain, */*"},
                    patch: r.merge(u),
                    post: r.merge(u),
                    put: r.merge(u)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            }
        }, function (t, e, n) {
            "use strict";
            function r(t) {
                return "[object Array]" === y.call(t)
            }

            function o(t) {
                return "[object ArrayBuffer]" === y.call(t)
            }

            function u(t) {
                return "[object FormData]" === y.call(t)
            }

            function i(t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
            }

            function s(t) {
                return "string" == typeof t
            }

            function c(t) {
                return "number" == typeof t
            }

            function a(t) {
                return "undefined" == typeof t
            }

            function f(t) {
                return null !== t && "object" == typeof t
            }

            function l(t) {
                return "[object Date]" === y.call(t)
            }

            function p(t) {
                return "[object File]" === y.call(t)
            }

            function h(t) {
                return "[object Blob]" === y.call(t)
            }

            function d(t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "")
            }

            function m(t, e) {
                if (null !== t && "undefined" != typeof t) {
                    var n = r(t) || "object" == typeof t && !isNaN(t.length);
                    if ("object" == typeof t || n || (t = [t]), n)for (var o = 0, u = t.length; u > o; o++)e.call(null, t[o], o, t); else for (var i in t)t.hasOwnProperty(i) && e.call(null, t[i], i, t)
                }
            }

            function v() {
                var t = {};
                return m(arguments, function (e) {
                    m(e, function (e, n) {
                        t[n] = e
                    })
                }), t
            }

            var y = Object.prototype.toString;
            t.exports = {
                isArray: r,
                isArrayBuffer: o,
                isFormData: u,
                isArrayBufferView: i,
                isString: s,
                isNumber: c,
                isObject: f,
                isUndefined: a,
                isDate: l,
                isFile: p,
                isBlob: h,
                forEach: m,
                merge: v,
                trim: d
            }
        }, function (t, e, n) {
            "use strict";
            t.exports = function (t, e, n) {
                try {
                    console.warn("DEPRECATED method `" + t + "`." + (e ? " Use `" + e + "` instead." : "") + " This method will be removed in a future release."), n && console.warn("For more information about usage see " + n)
                } catch (r) {
                }
            }
        }, function (t, e, n) {
            (function (e) {
                "use strict";
                t.exports = function (t) {
                    return new Promise(function (r, o) {
                        try {
                            "undefined" != typeof window ? n(17)(r, o, t) : "undefined" != typeof e && n(17)(r, o, t)
                        } catch (u) {
                            o(u)
                        }
                    })
                }
            }).call(e, n(16))
        }, function (t, e, n) {
            function r() {
                f = !1, s.length ? a = s.concat(a) : l = -1, a.length && o()
            }

            function o() {
                if (!f) {
                    var t = setTimeout(r);
                    f = !0;
                    for (var e = a.length; e;) {
                        for (s = a, a = []; ++l < e;)s[l].run();
                        l = -1, e = a.length
                    }
                    s = null, f = !1, clearTimeout(t)
                }
            }

            function u(t, e) {
                this.fun = t, this.array = e
            }

            function i() {
            }

            var s, c = t.exports = {}, a = [], f = !1, l = -1;
            c.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
                a.push(new u(t, e)), 1 !== a.length || f || setTimeout(o, 0)
            }, u.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = i, c.addListener = i, c.once = i, c.off = i, c.removeListener = i, c.removeAllListeners = i, c.emit = i, c.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, c.cwd = function () {
                return "/"
            }, c.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, c.umask = function () {
                return 0
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(12), o = n(13), u = n(18), i = n(19), s = n(20), c = n(21), a = n(22);
            t.exports = function (t, e, n) {
                var f = c(n.data, n.headers, n.transformRequest), l = o.merge(r.headers.common, r.headers[n.method] || {}, n.headers || {});
                o.isFormData(f) && delete l["Content-Type"];
                var p = new (XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP");
                p.open(n.method.toUpperCase(), u(n.url, n.params), !0), p.onreadystatechange = function () {
                    if (p && 4 === p.readyState) {
                        var r = s(p.getAllResponseHeaders()), o = -1 !== ["text", ""].indexOf(n.responseType || "") ? p.responseText : p.response, u = {
                            data: c(o, r, n.transformResponse),
                            status: p.status,
                            statusText: p.statusText,
                            headers: r,
                            config: n
                        };
                        (p.status >= 200 && p.status < 300 ? t : e)(u), p = null
                    }
                };
                var h = a(n.url) ? i.read(n.xsrfCookieName || r.xsrfCookieName) : void 0;
                if (h && (l[n.xsrfHeaderName || r.xsrfHeaderName] = h), o.forEach(l, function (t, e) {
                        f || "content-type" !== e.toLowerCase() ? p.setRequestHeader(e, t) : delete l[e]
                    }), n.withCredentials && (p.withCredentials = !0), n.responseType)try {
                    p.responseType = n.responseType
                } catch (d) {
                    if ("json" !== p.responseType)throw d
                }
                o.isArrayBuffer(f) && (f = new DataView(f)), p.send(f)
            }
        }, function (t, e, n) {
            "use strict";
            function r(t) {
                return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
            }

            var o = n(13);
            t.exports = function (t, e) {
                if (!e)return t;
                var n = [];
                return o.forEach(e, function (t, e) {
                    null !== t && "undefined" != typeof t && (o.isArray(t) || (t = [t]), o.forEach(t, function (t) {
                        o.isDate(t) ? t = t.toISOString() : o.isObject(t) && (t = JSON.stringify(t)), n.push(r(e) + "=" + r(t))
                    }))
                }), n.length > 0 && (t += (-1 === t.indexOf("?") ? "?" : "&") + n.join("&")), t
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(13);
            t.exports = {
                write: function (t, e, n, o, u, i) {
                    var s = [];
                    s.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(u) && s.push("domain=" + u), i === !0 && s.push("secure"), document.cookie = s.join("; ")
                }, read: function (t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                }, remove: function (t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(13);
            t.exports = function (t) {
                var e, n, o, u = {};
                return t ? (r.forEach(t.split("\n"), function (t) {
                    o = t.indexOf(":"), e = r.trim(t.substr(0, o)).toLowerCase(), n = r.trim(t.substr(o + 1)), e && (u[e] = u[e] ? u[e] + ", " + n : n)
                }), u) : u
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(13);
            t.exports = function (t, e, n) {
                return r.forEach(n, function (n) {
                    t = n(t, e)
                }), t
            }
        }, function (t, e, n) {
            "use strict";
            function r(t) {
                var e = t;
                return i && (s.setAttribute("href", e), e = s.href), s.setAttribute("href", e), {
                    href: s.href,
                    protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
                    host: s.host,
                    search: s.search ? s.search.replace(/^\?/, "") : "",
                    hash: s.hash ? s.hash.replace(/^#/, "") : "",
                    hostname: s.hostname,
                    port: s.port,
                    pathname: "/" === s.pathname.charAt(0) ? s.pathname : "/" + s.pathname
                }
            }

            var o, u = n(13), i = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
            o = r(window.location.href), t.exports = function (t) {
                var e = u.isString(t) ? r(t) : t;
                return e.protocol === o.protocol && e.host === o.host
            }
        }, function (t, e, n) {
            "use strict";
            function r() {
                this.handlers = []
            }

            var o = n(13);
            r.prototype.use = function (t, e) {
                return this.handlers.push({fulfilled: t, rejected: e}), this.handlers.length - 1
            }, r.prototype.eject = function (t) {
                this.handlers[t] && (this.handlers[t] = null)
            }, r.prototype.forEach = function (t) {
                o.forEach(this.handlers, function (e) {
                    null !== e && t(e)
                })
            }, t.exports = r
        }, function (t, e, n) {
            var r;
            (function (t, o, u, i) {/*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
             * @version   2.1.1
             */
                (function () {
                    "use strict";
                    function s(t) {
                        return "function" == typeof t || "object" == typeof t && null !== t
                    }

                    function c(t) {
                        return "function" == typeof t
                    }

                    function a(t) {
                        return "object" == typeof t && null !== t
                    }

                    function f(t, e) {
                        nt[z] = t, nt[z + 1] = e, z += 2, 2 === z && K()
                    }

                    function l() {
                        var e = t.nextTick, n = t.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                        return Array.isArray(n) && "0" === n[1] && "10" === n[2] && (e = o), function () {
                            e(v)
                        }
                    }

                    function p() {
                        return function () {
                            $(v)
                        }
                    }

                    function h() {
                        var t = 0, e = new Z(v), n = document.createTextNode("");
                        return e.observe(n, {characterData: !0}), function () {
                            n.data = t = ++t % 2
                        }
                    }

                    function d() {
                        var t = new MessageChannel;
                        return t.port1.onmessage = v, function () {
                            t.port2.postMessage(0)
                        }
                    }

                    function m() {
                        return function () {
                            setTimeout(v, 1)
                        }
                    }

                    function v() {
                        for (var t = 0; z > t; t += 2) {
                            var e = nt[t], n = nt[t + 1];
                            e(n), nt[t] = void 0, nt[t + 1] = void 0
                        }
                        z = 0
                    }

                    function y() {
                        try {
                            var t = n(27);
                            return $ = t.runOnLoop || t.runOnContext, p()
                        } catch (e) {
                            return m()
                        }
                    }

                    function g() {
                    }

                    function _() {
                        return new TypeError("You cannot resolve a promise with itself")
                    }

                    function w() {
                        return new TypeError("A promises callback cannot return that same promise.")
                    }

                    function b(t) {
                        try {
                            return t.then
                        } catch (e) {
                            return it.error = e, it
                        }
                    }

                    function x(t, e, n, r) {
                        try {
                            t.call(e, n, r)
                        } catch (o) {
                            return o
                        }
                    }

                    function T(t, e, n) {
                        G(function (t) {
                            var r = !1, o = x(n, e, function (n) {
                                r || (r = !0, e !== n ? I(t, n) : U(t, n))
                            }, function (e) {
                                r || (r = !0, S(t, e))
                            }, "Settle: " + (t._label || " unknown promise"));
                            !r && o && (r = !0, S(t, o))
                        }, t)
                    }

                    function A(t, e) {
                        e._state === ot ? U(t, e._result) : e._state === ut ? S(t, e._result) : C(e, void 0, function (e) {
                            I(t, e)
                        }, function (e) {
                            S(t, e)
                        })
                    }

                    function j(t, e) {
                        if (e.constructor === t.constructor)A(t, e); else {
                            var n = b(e);
                            n === it ? S(t, it.error) : void 0 === n ? U(t, e) : c(n) ? T(t, e, n) : U(t, e)
                        }
                    }

                    function I(t, e) {
                        t === e ? S(t, _()) : s(e) ? j(t, e) : U(t, e)
                    }

                    function E(t) {
                        t._onerror && t._onerror(t._result), q(t)
                    }

                    function U(t, e) {
                        t._state === rt && (t._result = e, t._state = ot, 0 !== t._subscribers.length && G(q, t))
                    }

                    function S(t, e) {
                        t._state === rt && (t._state = ut, t._result = e, G(E, t))
                    }

                    function C(t, e, n, r) {
                        var o = t._subscribers, u = o.length;
                        t._onerror = null, o[u] = e, o[u + ot] = n, o[u + ut] = r, 0 === u && t._state && G(q, t)
                    }

                    function q(t) {
                        var e = t._subscribers, n = t._state;
                        if (0 !== e.length) {
                            for (var r, o, u = t._result, i = 0; i < e.length; i += 3)r = e[i], o = e[i + n], r ? M(n, r, o, u) : o(u);
                            t._subscribers.length = 0
                        }
                    }

                    function O() {
                        this.error = null
                    }

                    function R(t, e) {
                        try {
                            return t(e)
                        } catch (n) {
                            return st.error = n, st
                        }
                    }

                    function M(t, e, n, r) {
                        var o, u, i, s, a = c(n);
                        if (a) {
                            if (o = R(n, r), o === st ? (s = !0, u = o.error, o = null) : i = !0, e === o)return void S(e, w())
                        } else o = r, i = !0;
                        e._state !== rt || (a && i ? I(e, o) : s ? S(e, u) : t === ot ? U(e, o) : t === ut && S(e, o))
                    }

                    function F(t, e) {
                        try {
                            e(function (e) {
                                I(t, e)
                            }, function (e) {
                                S(t, e)
                            })
                        } catch (n) {
                            S(t, n)
                        }
                    }

                    function N(t, e) {
                        var n = this;
                        n._instanceConstructor = t, n.promise = new t(g), n._validateInput(e) ? (n._input = e, n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? U(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && U(n.promise, n._result))) : S(n.promise, n._validationError())
                    }

                    function P(t) {
                        return new ct(this, t).promise
                    }

                    function k(t) {
                        function e(t) {
                            I(o, t)
                        }

                        function n(t) {
                            S(o, t)
                        }

                        var r = this, o = new r(g);
                        if (!Y(t))return S(o, new TypeError("You must pass an array to race.")), o;
                        for (var u = t.length, i = 0; o._state === rt && u > i; i++)C(r.resolve(t[i]), void 0, e, n);
                        return o
                    }

                    function D(t) {
                        var e = this;
                        if (t && "object" == typeof t && t.constructor === e)return t;
                        var n = new e(g);
                        return I(n, t), n
                    }

                    function B(t) {
                        var e = this, n = new e(g);
                        return S(n, t), n
                    }

                    function L() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }

                    function H() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }

                    function X(t) {
                        this._id = ht++, this._state = void 0, this._result = void 0, this._subscribers = [], g !== t && (c(t) || L(), this instanceof X || H(), F(this, t))
                    }

                    function J() {
                        var t;
                        if ("undefined" != typeof u)t = u; else if ("undefined" != typeof self)t = self; else try {
                            t = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var n = t.Promise;
                        (!n || "[object Promise]" !== Object.prototype.toString.call(n.resolve()) || n.cast) && (t.Promise = dt)
                    }

                    var V;
                    V = Array.isArray ? Array.isArray : function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    };
                    var $, K, Y = V, z = 0, G = ({}.toString, f), W = "undefined" != typeof window ? window : void 0, Q = W || {}, Z = Q.MutationObserver || Q.WebKitMutationObserver, tt = "undefined" != typeof t && "[object process]" === {}.toString.call(t), et = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, nt = new Array(1e3);
                    K = tt ? l() : Z ? h() : et ? d() : void 0 === W ? y() : m();
                    var rt = void 0, ot = 1, ut = 2, it = new O, st = new O;
                    N.prototype._validateInput = function (t) {
                        return Y(t)
                    }, N.prototype._validationError = function () {
                        return new Error("Array Methods must be provided an Array")
                    }, N.prototype._init = function () {
                        this._result = new Array(this.length)
                    };
                    var ct = N;
                    N.prototype._enumerate = function () {
                        for (var t = this, e = t.length, n = t.promise, r = t._input, o = 0; n._state === rt && e > o; o++)t._eachEntry(r[o], o)
                    }, N.prototype._eachEntry = function (t, e) {
                        var n = this, r = n._instanceConstructor;
                        a(t) ? t.constructor === r && t._state !== rt ? (t._onerror = null, n._settledAt(t._state, e, t._result)) : n._willSettleAt(r.resolve(t), e) : (n._remaining--, n._result[e] = t)
                    }, N.prototype._settledAt = function (t, e, n) {
                        var r = this, o = r.promise;
                        o._state === rt && (r._remaining--, t === ut ? S(o, n) : r._result[e] = n), 0 === r._remaining && U(o, r._result)
                    }, N.prototype._willSettleAt = function (t, e) {
                        var n = this;
                        C(t, void 0, function (t) {
                            n._settledAt(ot, e, t)
                        }, function (t) {
                            n._settledAt(ut, e, t)
                        })
                    };
                    var at = P, ft = k, lt = D, pt = B, ht = 0, dt = X;
                    X.all = at, X.race = ft, X.resolve = lt, X.reject = pt, X.prototype = {
                        constructor: X,
                        then: function (t, e) {
                            var n = this, r = n._state;
                            if (r === ot && !t || r === ut && !e)return this;
                            var o = new this.constructor(g), u = n._result;
                            if (r) {
                                var i = arguments[r - 1];
                                G(function () {
                                    M(r, o, i, u)
                                })
                            } else C(n, o, t, e);
                            return o
                        },
                        "catch": function (t) {
                            return this.then(null, t)
                        }
                    };
                    var mt = J, vt = {Promise: dt, polyfill: mt};
                    n(28).amd ? (r = function () {
                        return vt
                    }.call(e, n, e, i), !(void 0 !== r && (i.exports = r))) : "undefined" != typeof i && i.exports ? i.exports = vt : "undefined" != typeof this && (this.ES6Promise = vt), mt()
                }).call(this)
            }).call(e, n(16), n(25).setImmediate, function () {
                    return this
                }(), n(26)(t))
        }, function (t, e, n) {
            (function (t, r) {
                function o(t, e) {
                    this._id = t, this._clearFn = e
                }

                var u = n(16).nextTick, i = Function.prototype.apply, s = Array.prototype.slice, c = {}, a = 0;
                e.setTimeout = function () {
                    return new o(i.call(setTimeout, window, arguments), clearTimeout)
                }, e.setInterval = function () {
                    return new o(i.call(setInterval, window, arguments), clearInterval)
                }, e.clearTimeout = e.clearInterval = function (t) {
                    t.close()
                }, o.prototype.unref = o.prototype.ref = function () {
                }, o.prototype.close = function () {
                    this._clearFn.call(window, this._id)
                }, e.enroll = function (t, e) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                }, e.unenroll = function (t) {
                    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                }, e._unrefActive = e.active = function (t) {
                    clearTimeout(t._idleTimeoutId);
                    var e = t._idleTimeout;
                    e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                        t._onTimeout && t._onTimeout()
                    }, e))
                }, e.setImmediate = "function" == typeof t ? t : function (t) {
                    var n = a++, r = arguments.length < 2 ? !1 : s.call(arguments, 1);
                    return c[n] = !0, u(function () {
                        c[n] && (r ? t.apply(null, r) : t.call(null), e.clearImmediate(n))
                    }), n
                }, e.clearImmediate = "function" == typeof r ? r : function (t) {
                    delete c[t]
                }
            }).call(e, n(25).setImmediate, n(25).clearImmediate)
        }, function (t, e, n) {
            t.exports = function (t) {
                return t.webpackPolyfill || (t.deprecate = function () {
                }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
            }
        }, function (t, e, n) {
        }, function (t, e, n) {
            t.exports = function () {
                throw new Error("define cannot be used indirect")
            }
        }, function (t, e, n) {
            "use strict";
            t.exports = function (t) {
                return function (e) {
                    t.apply(null, e)
                }
            }
        }, function (t, e, n) {
            "use strict";
            function r(t, e, n, r) {
                return r = void 0 !== r ? !!r : !1, function (o, u) {
                    if (r)try {
                        o = JSON.parse(o)
                    } catch (i) {
                    }
                    for (var s in t)o = t[s](o, u, e, n);
                    if (!r)try {
                        o = JSON.stringify(o)
                    } catch (i) {
                    }
                    return o
                }
            }

            function o(t) {
                var e = {
                    request: function (e, n) {
                        return n.method = e, -1 !== ["post", "put", "patch"].indexOf(e) && (n.transformRequest = [r(n.requestInterceptors || [], n.method, n.url)], delete n.requestInterceptors), n.transformResponse = [r(n.responseInterceptors || [], n.method, n.url, !0)], delete n.responseInterceptors, t(n)
                    }
                };
                return i(function () {
                    return t
                }, e)
            }

            var u = function (t) {
                return t && t.__esModule ? t["default"] : t
            };
            t.exports = o;
            var i = u(n(1))
        }])
    });