(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['AddNoteModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"new-note-modal\" class=\"modal\" data-classname=\"\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h2>New Note</h2>\n    </div>\n\n    <div class=\"post-input-element\">\n      <label for=\"post-text-input\">Date</label>\n      <input id=\"today\" type=\"date\">\n    </div>\n\n    <div class=\"post-input-element\">\n      <label for=\"post-text-input\">Note Title</label>\n      <input type=\"text\" id=\"new-note-title-input\"></input>\n    </div>\n\n    <button class=\"button\" id=\"new-note-close-button\">Cancel</button>\n    <button class=\"button\" id=\"new-note-OK-button\">Create</button>\n  </div>\n</div>\n";
},"useData":true});
})();