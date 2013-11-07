$(document).ready(function(){
	console.log('main.js loaded');

	// c = new Puls4.Collections.Articles()
	window.collections.articles = new Puls4.Collections.Articles();

	window.collections.articles.fetch();
});
