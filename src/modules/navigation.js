import aboutPage from "./about";
import menuPage from "./menu";
import contactPage from "./contact";

export default function navigation() {
	const content = document.getElementById("content");
	const nav_bar = document.createElement("nav");

	const about_tab = document.createElement("h2");
	const menu_tab = document.createElement("h2");
	const contact_tab = document.createElement("h2");

	const pageWrapper = document.createElement("div");
	pageWrapper.innerHTML = "This is a placeholder";
	pageWrapper.id = "pageWrap";

	about_tab.innerHTML = "About";
	menu_tab.innerHTML = "Menu";
	contact_tab.innerHTML = "Contact";

	about_tab.addEventListener("click", () => switchPage(aboutPage()));
	menu_tab.addEventListener("click", () => switchPage(menuPage()));
	contact_tab.addEventListener("click", () => switchPage(contactPage()));

	function switchPage(page) {
		if (pageWrapper.innerHTML != "") {
			pageWrapper.innerHTML = "";
		}
		pageWrapper.innerHTML = page;
	}

	nav_bar.append(about_tab, menu_tab, contact_tab, pageWrapper);
	content.append(nav_bar);
}
