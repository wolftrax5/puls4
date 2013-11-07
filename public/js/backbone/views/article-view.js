Puls3.Views.Article = Backbone.View.extend({
	events:{
		"click .votos .up" : "upvote",
		"click .votos .down" : "downvote"
	},
	tagName : "article",
	className : "post",
	initialize : function () {
		var self = this;

		this.model.on('change', function (data) {
			self.render();
		});

		this.template = _.template( $('#article-template').html() );
		// this.template = swig.compile( $('#article-template').html() );
	},
	upvote : function () {
		var votes = parseInt( this.model.get('votes'), 10 );

		this.model.set('votes', ++votes);
		this.model.save();
	},
	downvote : function () {
		var votes = parseInt( this.model.get('votes'), 10 );

		this.model.set('votes', --votes);
		this.model.save();
	},
	render : function () {
		var data = this.model.toJSON();
		// junto data con el template;
		var html = this.template(data);

		this.$el.html( html );
	}
});