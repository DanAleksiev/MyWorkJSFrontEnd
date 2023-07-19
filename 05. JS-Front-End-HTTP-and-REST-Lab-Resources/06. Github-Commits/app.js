function loadCommits() {
    const username = document.querySelector("#username").value;
	const repo = document.querySelector("#repo").value;

    if (!username || !repo){
        return
    }


    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then((res) => res.json)
    .then(console.log());
}