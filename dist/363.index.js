export const id = 363;
export const ids = [363];
export const modules = {

/***/ 9363:
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"provider":{"type":"string","enum":["repository"]},"repository":{"type":"string"},"path":{"type":"string"},"gh-account-owner":{"type":"string"},"document":{"type":"string"},"sn-sbom-user":{"type":"string"},"sn-sbom-password":{"type":"string"},"sn-instance-url":{"type":"string"},"gh-token":{"type":"string"}},"required":["provider","sn-sbom-user","sn-sbom-password","sn-instance-url"],"additionalProperties":false,"dependencies":{"provider":{"oneOf":[{"properties":{"provider":{"enum":["repository"]},"gh-account-owner":{"type":"string"},"repository":{"type":"string"},"path":{"type":"string"},"gh-token":{"type":"string"}},"required":["gh-account-owner","repository","path","gh-token"]}]}}}');

/***/ })

};
