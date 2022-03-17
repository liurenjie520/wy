fetch("https://api.muxiaoguo.cn/api/163reping?api_key=f21d80c84331c877")
	.then((response) => response.json())
	.then((data) => {
		document.getElementById("content").innerHTML = data.data.content;
		document.getElementById("nickname").innerHTML = data.data.nickname;
		document.getElementById("songName").innerHTML = data.data.songName;
	})
	.catch(console.error);
