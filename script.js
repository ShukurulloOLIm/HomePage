let darkOrLightMode = localStorage.getItem('whichMode');


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

let i = 0;

const startAnimation = (name, text) => {
    for (let index = 0; index < text.length; index++) {
        setTimeout(() => {
            document.getElementById(name).innerHTML += text.charAt(index);
        }, speed * index);
    };
    i = 0;
};

const reset = () => {
    localStorage.removeItem('firstTime');
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

const games = () => {
    let games = document.createElement('div');
    games.setAttribute('id', 'flex');
    if (lang == 'uk') {
        games.innerHTML = `<a href='https://shukurulloolim.github.io/sqrt/'><button id='selectionButtons' style='--order: 1' class='drop1'><div class='main-box'><img src='Images/sqrt.png' alt='sqrt' class='sqrtImage'><div class='Card-body'><h3 class='Title'>F Sqrt</h3><div class='smallerbox'></div></div></div></button></a><a href='https://shukurulloolim.github.io/hi/'><button id='selectionButtons' style='--order: 2' class='drop1'> <div class='main-box'> <img src='Images/math.png' alt='sqrt' class='cbrtImage'> <div class='Card-body'><h3 class='Title'>Mental Math Game</h3><div class='smallerbox'></div></div></div></button></a>`;    
    } else if (lang == 'jp') {
        games.innerHTML = `<a href='https://shukurulloolim.github.io/sqrt/'><button id='selectionButtons' style='--order: 1' class='drop1'><div class='main-box'><img src='Images/sqrt.png' alt='sqrt' class='sqrtImage'><div class='Card-body'><h3 class='Title'>F Sqrt</h3><div class='smallerbox'></div></div></div></button></a><a href='https://shukurulloolim.github.io/hi/'><button id='selectionButtons' style='--order: 2' class='drop1'> <div class='main-box'> <img src='Images/math.png' alt='sqrt' class='cbrtImage'> <div class='Card-body'><h3 class='Title'>暗算ゲーム</h3><div class='smallerbox'></div></div></div></button></a>`;
    };
    document.body.append(games);
};

const appendDiv = (name, id) => {
    let findElement = document.getElementById(id);
    findElement.innerHTML = name;
};

let firstTime = localStorage.getItem('firstTime');
if (firstTime == null || firstTime == undefined) {
    firstTime = 'false';
};

let lang = localStorage.getItem('lang');
if (lang == null || lang == undefined) {
    lang = 'uk';
};

let speed = 48;

if (lang == 'uk') {
    let txt1 = 'Hello!';
    let txt2 = ' My name is Shukurullo Olimjonov.';
    let txt3 = `I have made loads of games and websites.`
    let txt4 = `Made for educational purposes and also to make people's lives more convenient.`
    let txt5 = `Here is a list of them:`
    
    let element = document.createElement('div');
    element.innerHTML = `<h1 id='textAnimation'></h1><h1 id='textAnimation2'></h1><h1 id='textAnimation3'></h1><h1 id='textAnimation4'></h1><h1 id='textAnimation5'></h1>`
    document.body.append(element);
    element.setAttribute('id', 'drop1');

    if (firstTime == 'false') {
        setTimeout(() => startAnimation('textAnimation', txt1), 600);
        setTimeout(() => startAnimation('textAnimation2', txt2), 1600);
        setTimeout(() => startAnimation('textAnimation3', txt3), 3600);
        setTimeout(() => startAnimation('textAnimation4', txt4), 6000);
        setTimeout(() => startAnimation('textAnimation5', txt5), 9800);
        setTimeout(() => games(), 12000);
        localStorage.setItem('firstTime', 'true')
    } else if (firstTime == 'true') {
        txt2 = 'Welcome Back!'
        setTimeout(() => startAnimation('textAnimation', txt1), 600);
        setTimeout(() => startAnimation('textAnimation2', txt2), 1600);
        setTimeout(() => games(), 2000);
    };
} else if (lang == 'jp') {
    let txt1 = 'こんにちは！';
    let txt2 = '僕の名前はオリムジョノフ　シュクルロです。';
    let txt3 = `たくさんのゲームやウェブサイトを作ったことがあります。`
    let txt4 = `教育目的と人々の生活をより便利にするために作られました。`
    let txt5 = `それらのリストは次のとおりです：`
    let element = document.createElement('div');
    element.innerHTML = `<h1 id='textAnimation'></h1><h1 id='textAnimation2'></h1><h1 id='textAnimation3'></h1><h1 id='textAnimation4'></h1><h1 id='textAnimation5'></h1>`
    document.body.append(element);
    element.setAttribute('id', 'drop1');

    if (firstTime == 'false') {
        setTimeout(() => startAnimation('textAnimation', txt1), 600);
        setTimeout(() => startAnimation('textAnimation2', txt2), 1600);
        setTimeout(() => startAnimation('textAnimation3', txt3), 3600);
        setTimeout(() => startAnimation('textAnimation4', txt4), 5400);
        setTimeout(() => startAnimation('textAnimation5', txt5), 8000);
        setTimeout(() => games(), 10000);
        localStorage.setItem('firstTime', 'true')
    } else if (firstTime == 'true') {
        txt2 = 'おかえり！'
        setTimeout(() => startAnimation('textAnimation', txt1), 600);
        setTimeout(() => startAnimation('textAnimation2', txt2), 1600);
        setTimeout(() => games(), 2000);
    };
}








