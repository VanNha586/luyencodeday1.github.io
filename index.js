var menuBar = document.getElementById("bar");
var header = document.getElementById("header");
var headerHeight = header.clientHeight;
// console.log(menuBar);
menuBar.onclick = function () {
  // console.log(header.clientHeight);
  // var subnav = this.nextElementSibling &&
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

/* -------------------------------------------------------------------------- */
/*                         tự động đóng khi chạm menu                         */
/* -------------------------------------------------------------------------- */
var bar_menu = document.querySelectorAll("#nav li a[href*='#']");
// console.log(bar_menu);
for (var i = 0; i < bar_menu.length; i++) {
  var menuItem = bar_menu[i];
  console.log(menuItem);

  menuItem.onclick = function (vannha) {
    var ParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    console.log(ParentMenu);
    if (ParentMenu) {
      vannha.preventDefault();
    } else {
      header.style.height = null;
    }
  };
  // menuItem.onclick = function(event){
  //   var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav'); //tìm thẻ a có anh chị em liền kề là sub nav
  //       if (isParentMenu){
  //           event.preventDefault();

  //       } else{
  //           header.style.height = null;
  //       }
  //   }
}
// console.log(bar_menu);
