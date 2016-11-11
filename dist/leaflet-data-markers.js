(function(L) {

  L.DataDivIcon = L.DivIcon.extend({
    createIcon: function(oldIcon) {
      var div = L.DivIcon.prototype.createIcon.call(this, oldIcon);
      if(this.options.data) {
        for(var key in this.options.data) {
          div.dataset[key] = this.options.data[key];
        }
      }
      return div;
    }
  });

  L.dataDivIcon = function(options) {
    return new L.DataDivIcon(options);
  }

  L.DataIcon = L.DivIcon.extend({
    createIcon: function(oldIcon) {
      var newIcon = L.Icon.prototype.createIcon.call(this, oldIcon);
      if(this.options.data) {
        for(var key in this.options.data) {
          newIcon.dataset[key] = this.options.data[key];
        }
      }
      return newIcon;
    }
  });

  L.dataIcon = function(options) {
    return new L.DataIcon(options);
  }
})(window.L);