class SageTVAPI {
    constructor(baseUrl, clientId) {
        this.clientId=clientId;
        this.baseUrl = (baseUrl)?baseUrl:window.SageTVAPIBaseUrl;
        this.apiPath = '/sage/api'
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
        console.log("Calling: " + cmd, args);
        console.log("Calling: URL: " + url);
        return fetch(url).then(function(result) {
            console.log("RESPONSE:", result);
            return result.json();
        });
    };
}

export default SageTVAPI;