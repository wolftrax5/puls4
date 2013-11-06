$(document).ready(function(){
	console.log('main.js loaded');

	// c = new Puls3.Collections.Articles()
	window.collections.articles = new Puls3.Collections.Articles();

	window.collections.articles.fetch();
});
