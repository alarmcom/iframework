$(function(){

  Iframework.Port = Backbone.Model.extend({
    defaults: {
      name: "",
      type: "",
      description: "",
      "default": null
    },
    initialize: function () {
      if (this.get("type")==="") {
        // No type set, connect to anything
        this.set("type", "all");
      }
      // To sanitize data:image/gif types for css class
      // this.set( "type_class", this.get("type").split("/")[0].replace(":", "_") );
      this.set( "type_class", this.get("type").split(":")[0] );
      this.Edges = new Iframework.Edges();

      this.parentNode = this.get("parentNode");
    },
    // Ports keep track of connected edges
    connect: function (edge) {
      this.Edges.add(edge);
    },
    disconnect: function (edge) {
      this.Edges.remove(edge);
    }
  });
  
  Iframework.Ports = Backbone.Collection.extend({
    model: Iframework.Port
  });

});
