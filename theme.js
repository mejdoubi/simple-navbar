const themeMap = {
  default: "dim",
  dim: "dark",
  dark: "default"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
    localStorage.setItem('theme', tmp),
    tmp);

const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  console.log(current);
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;
