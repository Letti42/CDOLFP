// Upscales CDO project, this will have to be dynamic depending on the projects aspect ratio
const urlEmbed = `${location.search.match(/(?<=url=)[^&]*/g)}/embed`
const embed = document.querySelector("#game");
const frame = document.querySelector("#visualizationColumn > div > div")
embed.src = urlEmbed;
const aspect = Math.min(window.innerWidth, window.innerHeight);
const scale = aspect / frame.clientWidth; // divide this by the height if you want the joypad
embed.style["transform"] = `scale(${scale})`;
embed.style["transform-origin"] = `top center`;
