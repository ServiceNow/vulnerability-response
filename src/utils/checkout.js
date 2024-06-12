const github = require('@actions/github');

/**
 * Checks out the SBOM document at a given path within the supplied repository.
 * @param token The GitHub token for the provider repository.
 * @param repo The name of the provider GitHub repository.
 * @param path The absolute path to the SBOM document from the root of the provider GitHub repository.
 * @param owner The name of the owner of the provider GitHub repository.
 */
async function checkout({token, owner, repo, path}) {
    const gh = github.getOctokit(token);
    const resp = await gh.request(`GET /repos/{owner}/{repo}/contents/{path}`, {
        owner, path, repo, headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            'Accept': 'application/vnd.github.raw+json'
        }
    });
    const document = resp.data;
    return JSON.parse(document);
}

module.exports = {checkout};