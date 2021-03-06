const now = new Date();

module.exports = function (eleventyConfig) {
  // collections
  eleventyConfig.addCollection("blogposts", function (collection) {
    return collection.getFilteredByGlob("./src/blog/*.md");
  });

  // filters
  eleventyConfig.addFilter("date", require("./src/_filters/date.js"));
  eleventyConfig.addFilter("exclude", require("./src/_filters/exclude.js"));
  eleventyConfig.addFilter("include", require("./src/_filters/include.js"));
  eleventyConfig.addFilter("jsonify", require("./src/_filters/jsonify.js"));
  eleventyConfig.addFilter("sortby", require("./src/_filters/sortby.js"));

  // copy files
  eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/assets/img/");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");

  // override default config
  return {
    dir: {
      input: "./src/",
      output: "./dist/"
    }
  };
};
