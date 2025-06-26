let xhr = new XMLHttpRequest();
let src =
	"https://newsapi.org/v2/everything?q=apple&from=2025-06-25&to=2025-06-25&sortBy=popularity&pageSize=10&apiKey=aff4fd0ecfd542919be811de2df97c1b";
xhr.open("GET", src, true);
xhr.responseType = "json";
xhr.onload = function () {
	let response = xhr.response.articles;
	var articlesDiv = document.getElementById("articles");

	response.map(function (article) {
		console.log(article);
	});
	// return;
	response.map(function (article) {
		var articleDiv = document.createElement("div");
		articleDiv.classList.add("article");

		var image = document.createElement("img");
		image.setAttribute("src", article.urlToImage);

		var title = document.createElement("h2");
		title.textContent = article.title;

		var description = document.createElement("p");
		description.textContent = article.description;

		var cta = document.createElement("a");
		cta.textContent = "Read More";
		cta.setAttribute("href", article.url);
		cta.setAttribute("target", "_blank");

		articleDiv.appendChild(image);
		articleDiv.appendChild(title);
		articleDiv.appendChild(description);
		articleDiv.appendChild(cta);

		articlesDiv.appendChild(articleDiv);
	});
};
xhr.send();
