$(document).ready(() => {
	const watcher = new Watch($("#spy"));

	watcher.inView(() => {
		$(".video-container.sticky").removeClass("sticky");
	});

	watcher.outView(() => {
		$(".video-container").addClass("sticky");
	});

	console.log(watcher);


});