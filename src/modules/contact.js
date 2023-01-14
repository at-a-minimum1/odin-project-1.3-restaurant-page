export default function contact() {
	const message = document.createElement("h1");
	message.innerHTML = "Contact Page";
	const content = document.getElementById("content");

	content.append(message);
	return content;
}
