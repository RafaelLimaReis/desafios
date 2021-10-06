document.getElementById('scrollTop').addEventListener('click', () => {
    location.href = location.origin + '#main';
    icon.style.display = 'flex';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const icon = document.getElementById('nextSection');
var on = false;

setInterval(function () {
    document.getElementById('nextSection').style.animation = (on) ? 'topToBottom 1s 0s linear infinite' : '';
    on = !on;
}, 3000);

icon.addEventListener('click', () => {
    const urlHash = window.location.hash;
    if (urlHash == '') {
        location.href += '#' + document.getElementsByTagName('section')[1].id;
    } else {
        [...document.getElementsByTagName('section')].forEach((element, i, arr) => {
            if (`#${element.id}` == urlHash) {
                if (arr.length == i+2) {
                    icon.style.display = 'none';
                }
                location.href = location.origin + '#' + document.getElementsByTagName('section')[i+1].id;
            }
        });
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