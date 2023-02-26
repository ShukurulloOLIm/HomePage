let darkOrLightMode = localStorage.getItem('whichMode');
let i = 0;
let speed = 48;
let windowWidth = window.innerWidth;

let lang = localStorage.getItem('lang');
if (lang == null || lang == undefined) {
    lang = 'uk';
};

const switchLang = () => {
    let langSwitch = localStorage.getItem('lang');
    if (langSwitch == 'uk') {
        localStorage.removeItem('lang');
        localStorage.setItem('lang', 'jp');
    } else if (langSwitch == 'jp') {
        localStorage.removeItem('lang');
        localStorage.setItem('lang', 'uk');
    };
    document.location.reload();
}

if (darkOrLightMode == undefined || darkOrLightMode == null) {
    darkOrLightMode = 'lightMode';
};
if (darkOrLightMode == 'darkMode') {
    localStorage.setItem('whichMode', darkOrLightMode);
    document.body.style.backgroundColor = '#1e1e1e';
    document.body.style.color = 'white';
} else if (darkOrLightMode == 'lightMode') {
    localStorage.setItem('whichMode', darkOrLightMode);
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';   
};

const startAnimation = (name, text) => {
    for (let index = 0; index < text.length; index++) {
        setTimeout(() => {
            document.getElementById(name).innerHTML += text.charAt(index);
        }, speed * index);
    };
    i = 0;
};

const updates = () => {
    let element = document.createElement('div');
    element.setAttribute('id', 'drop1');
    let flexBox = document.createElement('div');
    flexBox.setAttribute('id', 'flex');
    flexBox.style.display = 'flex';
    flexBox.style.justifyContent = 'center';
    flexBox.style.alignItems = 'center';
    flexBox.style.width = '100%';
    flexBox.style.height = '100vh';
    let i1 = `<h2 class='updateText'>Update: 1</h2><h3 class='Info'>Created About Page.</h3>`;
    let i2 = `<h2 class="updateText">Update: 2</h2><h3 class='Info'>Created Updates Page.</h3>`;
    flexBox.innerHTML = i2 + i1;
    element.innerHTML = flexBox.innerHTML;
    document.body.append(element);
    element.style.marginTop = '60px';
};

if (lang == 'uk') {
    let txt = 'Updates:';
    let contactElement = document.createElement('div');
    contactElement.setAttribute('id', 'drop1');
    if (windowWidth <= 780) {
        contactElement.innerHTML = '<h2 id="textAnimation"></h2>';
    } else {
        contactElement.innerHTML = '<h1 id="textAnimation"></h1>';
    };
    document.body.append(contactElement);
    let N1 = document.getElementById('textAnimation');
    N1.style.fontFamily = 'consolasMobile';
    setTimeout(() => startAnimation('textAnimation', txt), 300);
    setTimeout(() => updates(), 1600);
} else if (lang == 'jp') {
    let txt1 = '';
};