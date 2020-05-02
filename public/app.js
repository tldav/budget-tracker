// Registers the service worker

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("sw.js").then((reg) => {
			console.log("We found your service worker file!", reg);
		});
	});
}
