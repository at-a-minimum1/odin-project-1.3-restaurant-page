import navigation from "./modules/navigation";

function component() {
	const content = document.getElementById("content");

	content.append(navigation());
	return content;
}

document.body.append(component());
