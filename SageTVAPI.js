class SageTVAPI {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.apiPath = options.apiPath || '/sagex/api'
        this.options = options;
    }

    /**
     *
     * @param cmd String
     * @param args Object
     * @returns {Promise}
     */
    invoke(cmd, args) {
        let url = (this.baseUrl)?(this.baseUrl+this.apiPath):this.apiPath;
        url += ("/"+cmd);
        if (Object.keys(args).length) {
            url += "?";
            for (var property in args) {
                if (!url.endsWith("?")) {
                    url+="&";
                }
                if (args.hasOwnProperty(property)) {
                    url+=(property + "=" + encodeURIComponent(args[property]));
                }
            }
        }
        console.log("Calling: " + cmd, args, url);
        let headers = new Headers();
        if (this.options.username) {
            headers.append('Authorization', 'Basic ' + btoa(this.options.username + ":" + this.options.password));
        }
        let reqOpts = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'none',
            credentials: 'include'
        };
        return fetch(url, reqOpts).then(function(result) {
            console.log("RESPONSE:", result);
            if (result.ok)
                return result.json();
            else
                throw new Error("Request Failed: " + url)
        });
    };
}

export default SageTVAPI;