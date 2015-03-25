var BeverageView = Backbone.View.extend({
	tagName: 'li',
	className: 'beverage-item',
	template: _.template($('#beverage-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click img': 'acknowledge'
	},
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
	addBooze: function() {
		var boozeOnDelivery = new Beverage(this.model.attributes);
		boozeOnDelivery.set({selected: true});
		boozeItems.add(boozeOnDelivery);
		boozeOnDelivery.save();
	},
	 acknowledge: function(e) {
	 	this.addBooze();
    console.log('i felt that!', $(e.currentTarget));
    $(e.currentTarget).addClass('screen-click');
    setTimeout(function() {
      $('img').removeClass('screen-click');
    }, 600);
  },
});

