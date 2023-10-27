const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/* chuyển trang - nav */
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

/* đăng nhập / đăng ký */

const bg = $('#hd2');
const btlg = $('.account-button');
const login = $('#login')
const asign = $('#asign')
const sign = $('#sign')
const alogin = $('#alogin')
const btsg = $('.account-login')

alogin.addEventListener('click', () => {
    login.setAttribute('style', 'display: flex')
    sign.setAttribute('style', 'display: none')
});

asign.addEventListener('click', () => {
    login.setAttribute('style', 'display: none')
    sign.setAttribute('style', 'display: flex')
});

bg.addEventListener('click', function () {
    bg.setAttribute('style', 'display: none');
    login.setAttribute('style', 'display: none');
    sign.setAttribute('style', 'display: none')
    $('body').setAttribute('style','overflow: visible')
});

btsg.addEventListener('click', () => {
    bg.setAttribute('style', 'display: flex');
    sign.setAttribute('style', 'display: flex');
    $('body').setAttribute('style','overflow: hidden')
})

btlg.addEventListener('click', function () {
    bg.setAttribute('style', 'display: flex');
    login.setAttribute('style', 'display: flex');
    $('body').setAttribute('style','overflow: hidden')
});


/* tạo bài viết */
const cre_photo = $('.create-photo')
const cre_text = $('.create-ports')
const cre_bg = $('.cre-bg')
const cre_box = $('.cre-main')

cre_text.addEventListener('click', () => {
    cre_bg.setAttribute('style', 'display: flex');
    cre_box.setAttribute('style', 'display: flex');
})

cre_photo.addEventListener('click', () => {
    cre_bg.setAttribute('style', 'display: flex');
    cre_box.setAttribute('style', 'display: flex');
})

cre_bg.addEventListener('click', () => {
    cre_bg.setAttribute('style', 'display: none');
    cre_box.setAttribute('style', 'display: none');
})

/* hiện thông tin du lịch khi click */

const cards = $$('.infor-card-wrap')
const infor_main = $$('.infor-card-main')
const clost_infor_main = $$('.close-card')

cards.forEach((card, index) => {
    const cardmain = infor_main[index];
    card.onclick = function () {
        cardmain.setAttribute('style', 'display: flex');
        $('body').setAttribute('style','overflow: hidden')
    }
});

clost_infor_main.forEach((infor_bg, index) => {
    const infor_bg_main = infor_main[index];
    infor_bg.onclick = function () {
        infor_bg_main.setAttribute('style', 'display: none');
        $('body').setAttribute('style','overflow: visible')
    }
});
