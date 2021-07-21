//Header
window.addEventListener('scroll', function(){
	let header = document.querySelector('.header');
	let windowPosition = window.scrollY > 0;
	header.classList.toggle('header-color', windowPosition);
})
function openMenu(){
   document.querySelector('.grid__column-2-c').classList.toggle('grid__column-2-active');
}
function closeMenu(){
   document.querySelector('.grid__column-2-c').classList.remove('grid__column-2-active')
}
function openVouchers(){
    document.getElementById("Box-vouchers").style.display="block"
}
function closeVouchers(){
    document.getElementById("Box-vouchers").style.display="none"
}
function openClassify(){
    document.getElementById("product-classify").style.marginLeft="0%"
}
function closeClassify(){
    document.getElementById("product-classify").style.marginLeft="-120%"
}
//modal
function openUserBox(){
    document.querySelector('.modal').classList.toggle('modal-open');
    document.querySelector('.home__filter-select').style.display="none"
}
function closeAllModal(){
    document.querySelector('.modal').classList.remove('modal-open');
    filterBox();
}
function filterBox(){
    var filter= document.querySelector('.home__filter-select');
    Object.assign(filter.style, {
        display:'block',
        display:'flex',
        flexDirection: 'row',
    })
}