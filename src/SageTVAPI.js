class SageTVAPI {
    constructor(options, fetchOptions) {
        this.baseUrl = options.baseUrl;
        this.apiPath = options.apiPath || '/sagex/api';
        this.debug = options.debug || false;
        this.options = options;
        this.extraArgs = options.extraArgs || {}
        this.fetchOptions = fetchOptions || {}
    }

    /**
     *
     * @param cmd String
     * @param args Object
     * @returns {Promise}
     */
    invoke(cmd, args) {
        let url = (this.baseUrl)?(this.baseUrl+this.apiPath):this.apiPath;
        url += ("?c="+cmd);
        if (args && args.length) {
            for (var i=0;i<args.length;i++) {
               url+=("&" + (i+1) + "=" + encodeURIComponent(args[i]));
            }
        }
        let encoder = this.options.encoder || 'json';
        url += ("&encoder="+encoder);
        Object.keys(this.extraArgs).forEach((k)=>{
            url += ("&"+k+"=" + encodeURIComponent(this.extraArgs[k]));
        });
        if (this.debug) console.log("Calling: " + cmd, args, url);
        let headers = new Headers();
        if (this.options.username) {
            headers.append('Authorization', 'Basic ' + btoa(this.options.username + ":" + this.options.password));
        }
        let reqOpts = {
            method: this.fetchOptions.method || 'GET',
            headers: headers,
            mode: 'cors',
            cache: this.fetchOptions.cache || 'no-store'
        };
        if (this.options.username) {
            reqOpts.credentials = 'include';
        }
        var me=this;
        return fetch(url, reqOpts).then(function(result) {
            if (me.debug) console.log("RESPONSE:", result);
            if (result.ok)
                return result.json();
            else
                throw new Error("Request Failed: " + url)
        });
    };
}

export default SageTVAPI;