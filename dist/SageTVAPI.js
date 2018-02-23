(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.SageTVAPI = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var SageTVAPI = function () {
        function SageTVAPI(options, fetchOptions) {
            _classCallCheck(this, SageTVAPI);

            this.baseUrl = options.baseUrl;
            this.apiPath = options.apiPath || '/sagex/api';
            this.debug = options.debug || false;
            this.options = options;
            this.extraArgs = options.extraArgs || {};
            this.fetchOptions = fetchOptions || {};
        }

        /**
         *
         * @param cmd String
         * @param args Object
         * @returns {Promise}
         */


        _createClass(SageTVAPI, [{
            key: "invoke",
            value: function invoke(cmd, args) {
                var _this = this;

                var url = this.baseUrl ? this.baseUrl + this.apiPath : this.apiPath;
                url += "?c=" + cmd;
                if (args && args.length) {
                    for (var i = 0; i < args.length; i++) {
                        url += "&" + (i + 1) + "=" + encodeURIComponent(args[i]);
                    }
                }
                var encoder = this.options.encoder || 'json';
                url += "&encoder=" + encoder;
                Object.keys(this.extraArgs).forEach(function (k) {
                    url += "&" + k + "=" + encodeURIComponent(_this.extraArgs[k]);
                });
                if (this.debug) console.log("Calling: " + cmd, args, url);
                var headers = new Headers();
                if (this.options.username) {
                    headers.append('Authorization', 'Basic ' + btoa(this.options.username + ":" + this.options.password));
                }
                var reqOpts = {
                    method: this.fetchOptions.method || 'GET',
                    headers: headers,
                    mode: 'cors',
                    cache: this.fetchOptions.cache || 'no-store'
                };
                if (this.options.username) {
                    reqOpts.credentials = 'include';
                }
                var me = this;
                return fetch(url, reqOpts).then(function (result) {
                    if (me.debug) console.log("RESPONSE:", result);
                    if (result.ok) return result.json();else throw new Error("Request Failed: " + url);
                });
            }
        }]);

        return SageTVAPI;
    }();

    exports.default = SageTVAPI;
});