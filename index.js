const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabct = $$('.tab-content');
const tabit = $$('.tab-item');
const tabActive = $(".tab-item.ac");
const line = $("ul .line");
requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
});
tabit.forEach((tab, index) => {
    const tabcontent = tabct[index];
    tab.onclick = function () {
        $('.tab-item.ac').classList.remove('ac');
        $('.tab-content.ac').classList.remove('ac');
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        tab.classList.add('ac')
        tabcontent.classList.add('ac')
    }
});

const bg = $('#hd2');
const btlg = $('.account-button');
const login = $('#login')
const asign = $('#asign')
const sign = $('#sign')

asign.addEventListener('click',() =>{
    login.setAttribute('style','display: none')
    sign.setAttribute('style','display: flex')
});

bg.addEventListener('click', function(){
    bg.setAttribute('style', 'display: none');
    login.setAttribute('style', 'display: none');
    sign.setAttribute('style','display: none')
});

btlg.addEventListener('click', function(){
    bg.setAttribute('style', 'display: flex');
    login.setAttribute('style', 'display: flex');
});

const bg1 = $('#hd1');
const bell1 = $('#belli');

bell1.addEventListener('click', function () {
    bg1.setAttribute('style', 'display: block')
    $('#bell1').setAttribute('style', 'transform: translateX(0);')
})

bg1.addEventListener('click', function () {
    bg1.setAttribute('style', 'display: none')
    $('#bell1').setAttribute('style', 'transform: translateX(100%);')
})

