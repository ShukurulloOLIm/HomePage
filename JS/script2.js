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

const contactInfo = () => {
    let element = document.createElement('div');
    element.setAttribute('id', 'drop1');
    element.innerHTML = `<div id='flex'> <img src="Images/gmailIcon.png" alt="gmail Icon" class="gmailIcon"> <h3 class='Info'>shukuolim0909@gmail.com</h2></div> <div id='flex'> <img src="Images/gitHubIcon.png" alt="gmail Icon" class="gitHubIcon"> <h3 class='Info'> <a href='https://github.com/ShukurulloOLIm'>https://github.com/ShukurulloOLIm</a> </h3></div>`;
    document.body.append(element);
    if (windowWidth <= 780) {
        document.getElementById('gmailIcon').style.height = '25px';
        document.getElementById('gmailIcon').style.width = '35px';
        document.getElementById('gitHubIcon').style.width = '30px';
        document.getElementById('gitHubIcon').style.width = '30px';
    };
};

if (lang == 'uk') {
    let txt = 'Here are my contacts:';
    let contactElement = document.createElement('div');
    contactElement.setAttribute('id', 'drop1');
    if (windowWidth <= 780) {
        contactElement.innerHTML = '<h2 id="textAnimation"></h2>';
    } else {
        contactElement.innerHTML = '<h1 id="textAnimation"></h1>';
    };
    document.body.append(contactElement);
    if (windowWidth <= 780) {
        document.getElementById('textAnimation').style.fontSize = '28px';
    };
    setTimeout(() => startAnimation('textAnimation', txt), 300);
    setTimeout(() => contactInfo(), 1600);
    let N1 = document.getElementById('textAnimation');
    N1.style.fontFamily = 'consolasMobile';
} else if (lang == 'jp') {
    let txt = 'ここに私の連絡先があります：';
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
    if (windowWidth <= 780) {
        document.getElementById('textAnimation').style.fontSize = '28px';
    };
    setTimeout(() => startAnimation('textAnimation', txt), 300);
    setTimeout(() => contactInfo(), 1600);
};