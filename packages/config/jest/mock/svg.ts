const path = require("path");
const { Config } = require(`jest`);

// See https://stackoverflow.com/questions/58603201/jest-cannot-load-svg-file
module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = {}`,
    };
  },
  getCacheKey() {
    // The output is always the same.
    return "svgTransform";
  },
};
