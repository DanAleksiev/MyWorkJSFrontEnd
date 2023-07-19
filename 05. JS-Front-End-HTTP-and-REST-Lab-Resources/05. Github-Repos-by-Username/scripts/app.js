function loadRepos() {
	const username = document.querySelector("#username").value;

	fetch(`https://api.github.com/users/${username}/repos`)
	.then((res) => res.json())
	.then((body) => {
		body.forEach(repo => {
			const element = document.createElement("li");

			element.textContent = repo.full_name + repo.html_url;
			document.querySelector("#repos").appendChild(element);

		});
	})

}