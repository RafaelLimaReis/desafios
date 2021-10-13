const nextSection = document.getElementById('nextSection');
const isMobile = navigator.userAgentData.mobile;
var menuIsEnable = false;
var on = false;

document.getElementById('scrollTop').addEventListener('click', toTop);

document.getElementById('menu__mobile').addEventListener('click', controlMenu);

setInterval(function () {
    document.getElementById('nextSection').style.animation = (on) ? 'topToBottom 1s 0s linear infinite' : '';
    on = !on;
}, 3000);

[...document.getElementsByClassName('menu__item a')].forEach(() => {
    const urlHash = window.location.hash;

    stateAngle(urlHash);
})

nextSection.addEventListener('click', () => {
    const urlHash = window.location.hash;
    if (urlHash == '') {
        location.href += '#' + document.getElementsByTagName('section')[1].id;
    } else {
        stateAngle(urlHash);
    }
});

const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true,
});

sr.reveal('.animate-d1', {delay: 200});
sr.reveal('.animate-d2', {delay: 400});
sr.reveal('.animate-d3', {delay: 600});


function toTop()
{
    if(!isMobile) nextSection.style.display = 'flex';
    location.href = location.origin + location.pathname + '#main';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function controlMenu()
{
    menuIsEnable = !menuIsEnable;
    document.getElementsByClassName('menu__list')[0].classList.toggle('active');
    [...document.getElementsByClassName('menu__item')].forEach((element) => {
        element.style.animation = (menuIsEnable) ? 'rightToLeft .5s' : null;
    });
}

function stateAngle(urlHash)
{
    [...document.getElementsByTagName('section')].forEach((element, i, arr) => {
        if (`#${element.id}` == urlHash) {
            if (arr.length == i+2) {
                nextSection.style.display = 'none';
            } else {
                nextSection.style.display = 'flex';
            }
            location.href = location.origin + location.pathname + '#' + document.getElementsByTagName('section')[i+1].id;
        }
    });
}