// Upscales CDO project, this will have to be dynamic depending on the projects aspect ratio
const urlEmbed = `${location.search.match(/(?<=url=)[^&]*/g)}/embed`
const embed = document.querySelector("#game");
embed.src = urlEmbed;
const aspect = Math.min(window.innerWidth, window.innerHeight);
if(urlEmbed.includes("gamelab")) {
  embed.width = "440px";
  embed.height = "757px";
} else {
  embed.width = "392px";
  embed.height = "620px";
}
const scale = aspect / embed.width; // divide this by the height if you want the joypad
embed.style["transform"] = `scale(${scale})`;
embed.style["transform-origin"] = `top center`;
