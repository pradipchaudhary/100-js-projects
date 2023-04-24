const url = "https://api.github.com/users/default";

const fetchProfile = async () => {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
};

fetchProfile();
