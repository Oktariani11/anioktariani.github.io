function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jnQftK3cdF":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="instrumen-Merdeka-Belajar.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

