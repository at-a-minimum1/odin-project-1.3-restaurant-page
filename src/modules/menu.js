export default function menu() {
	const message = document.createElement("h1");
	message.innerHTML = "Menu Page";

	const content = document.getElementById("content");
	content.append(message);

	return content;
}
