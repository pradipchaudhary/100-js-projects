const url = `https://api.github.com/users`;
const searchInputEl = document.getElementById("searchInput");
const searchButtonEl = document.getElementById("searchButton");
const profileBox = document.getElementById("profileBox");
const loading = document.getElementById("loading");

const profileGenerator = (profile) => {
	return `<div class="inner_profile">
        <div class="profile_header">
            <div class="header_info">
                <div class="profile_image">
                    <img src="${profile.avatar_url}" alt="">
                </div>
                <div class="profile_info">
                    <h2>${profile.name} </h2>
                    <p class="username">@${profile.login}</p>
                </div>
            </div>
            <div class="profile_link">
                <a href="${profile.html_url}" target="_blank">Profile</a>
            </div>
        </div>
        <main>
            <h1>About</h1>
            <div class="bio">${profile.bio}</div>
            <div class="more_profile_info">
                <div>
                    <h3>Followers</h3>
                    <h4>${profile.followers}</h4>
                </div>
                <div>
                    <h3>Following</h3>
                    <h4>${profile.following}</h4>
                </div>
                <div>
                    <h3>Prpositories</h3>
                    <h4>${profile.public_repos}</h4>
                </div>
            </div>
        </main>
    </div>`;
};

// Fetch user Profile from GitHub
const fetchProfile = async () => {
	const username = searchInputEl.value;

	loading.value = "Loading...";
	try {
		const res = await fetch(`${url}/${username}`);
		const data = await res.json();
		console.log(data);

		if (data.name) {
			profileBox.innerHTML = profileGenerator(data);
		} else {
			loading.innerHTML = "Username not found";
		}
	} catch (error) {
		console.log({ error });
	}
};

searchButtonEl.addEventListener("click", fetchProfile);
