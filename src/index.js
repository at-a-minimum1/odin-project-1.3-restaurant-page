import aboutPage from "./modules/about";
import navigation from "./modules/navigation";

function component() {
	const content = document.getElementById("content");

	content.append(navigation());
	content.append(aboutPage());
	return content;
}

document.body.append(component());
