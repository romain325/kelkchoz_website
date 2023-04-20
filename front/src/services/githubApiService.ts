import {github_endpoint, user as ghuser, repo as ghRepo} from "@/config/ghApiConf";

const getFolder = async (path: string) => {
    /// t'as rien vu
    return fetch(github_endpoint + "/repos/" + ghuser + "/" + ghRepo + "/contents" + path, {headers: {"Authorization":"toekn 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"}});
};

const mdToHtml = async (text: string) => {
    return fetch(github_endpoint +"/markdown", {
        method: 'POST',
        body: JSON.stringify({
            mode: "markdown",
            text
        }),
        headers: {
            /// t'as rien vu
            "Authorization": "toekn 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"
        }
    })
}

export {
    getFolder,
    mdToHtml
}
