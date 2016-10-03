function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      layout_placeholder = __loadTag(require("marko/taglibs/layout/placeholder-tag"));

  return function render(data, out) {
    out.w("<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <title>Marko: Transclusion</title> <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css\"> </head> <body> ");

    layout_placeholder({
        name: "page",
        content: data.layoutContent
      }, out);

    out.w(" </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
