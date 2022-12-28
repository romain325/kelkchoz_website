import {github_endpoint, user as ghuser, repo as ghRepo} from "@/config/ghApiConf";

const getFolder = async (path: string) => {
    return fetch(github_endpoint + "/repos/" + ghuser + "/" + ghRepo + "/contents" + path);
};

const getFile = async () => {

};

const mdToHtml = async () => {

}

export {
    getFolder,
    getFile,
    mdToHtml
}