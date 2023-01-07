function component() {
	const content = document.getElementById("content");

	// const element = document.createElement("div");
	const restaurantHeader = document.createElement("h1");
	const image = document.createElement("img");
	const about_wrapper = document.createElement("div");
	const about_content = document.createElement("p");

	// Classlists
	restaurantHeader.classList.add("primary_clr", "nav_bar");
	about_content.classList.add("about_content");
	about_wrapper.classList.add("about_wrapper", "secondary_clr");

	image.src = "restaurant-img.jpg";
	image.alt = "A picture of a busy restaurant";
	about_content.innerHTML =
		"Our restaurant is the best in town! We offer a wide variety of delicious dishes, a welcoming atmosphere, and friendly service. Come visit us and experience the best dining experience around.";

	about_wrapper.append(about_content);

	content.append(restaurantHeader, image, about_wrapper);

	// Lodash, currently included via a script, is required for this line to work
	// element.innerHTML = "Hello World";

	return content;
}

document.body.append(component());
