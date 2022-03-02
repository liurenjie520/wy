fetch("https://api.muxiaoguo.cn/api/163reping")
	.then((response) => response.json())
	.then((data) => {
		document.getElementById("content").innerHTML = data.data.content;
		document.getElementById("nickname").innerHTML = data.data.nickname;
		document.getElementById("songName").innerHTML = data.data.songName;
	})
	.catch(console.error);
