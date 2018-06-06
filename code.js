var router;

window.onload = setup;

function setup() {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
      if (lang) return hljs.highlight(lang, code).value;
      else return hljs.highlightAuto(code).value;
    },
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("page");
  var page = "README.md";
  if (c) page = c;
  
  $.get("SUMMARY.md", function(data) {
    var $menu = $(marked(data));
    $menu.find("a").each(function(el) {
      var href = $(this).attr('href');
      var url = window.location.href.split('?')[0];
      if (href.indexOf("https://") == -1)
        $(this).attr("href",url+"?page="+href);
    });
    // console.log($menu);
    $(".menu").html($menu);
  });
  $.get(page, function(data) {
    $("page").html(marked(data));
  });
}
