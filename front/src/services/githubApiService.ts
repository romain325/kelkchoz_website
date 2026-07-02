import {
  github_endpoint,
  user as ghuser,
  repo as ghRepo,
} from "@/config/ghApiConf";

const getFolder = async (path: string) => {
  /// t'as rien vu
  return fetch(
    github_endpoint + "/repos/" + ghuser + "/" + ghRepo + "/contents" + path,
  );
};

const mdToHtml = async (text: string) => {
  return fetch(github_endpoint + "/markdown", {
    method: "POST",
    body: JSON.stringify({
      mode: "markdown",
      text,
    }),
  });
};

export { getFolder, mdToHtml };
