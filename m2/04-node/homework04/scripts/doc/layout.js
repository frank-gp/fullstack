var newDate_getTime = new Date().getTime();

const head = `
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="styles/reset.css?${newDate_getTime}" />
<link rel="stylesheet" href="styles/main.css?${newDate_getTime}" />
`;

document.head.innerHTML += head;

const header = `
<h2><a href="./">Cinema</a></h2>
<nav>
  <a href="./">Inicio</a>
  <a href="./about-project.html">Sobre mi proyecto</a>
  <a href="./history-movie.html">Historia del cine</a>
</nav>
`;

document.querySelector("header").innerHTML = header;

const footer = `
<p>Copyright 2024</p>
`;

document.querySelector("footer").innerHTML = footer;
