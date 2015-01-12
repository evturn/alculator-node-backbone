var BeerItemsView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(beerItems, 'add', this.addOne);
    this.listenTo(beerItems, 'reset', this.addAll);
	},
  addOne: function(beerModel) {
  var view = new BeerItemView({model: beerModel});
  $('#beer-items').append( view.render().el );
  },
  addAll: function() {
    this.$('#beer-items').html('');
    beerItems.each(this.addOne, this);
  },
});

console.log('BeerItemsView');