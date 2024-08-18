// document.addEventListener("DOMContentLoaded", function() {
//     var icon1 = document.getElementById("icon1");
//     var icon2 = document.getElementById("icon2");
//     var smallerMenu = document.querySelector(".smaller-menu");

//     icon1.style.display = "none";
//     smallerMenu.style.display = "none";

//     // showing the menu
//     icon1.addEventListener("click", function() {
//         slideToggle(smallerMenu, function() {
//             icon1.style.display = "none";
//             icon2.style.display = "block";
//         });
//     });

//     // closing menu
//     icon2.addEventListener("click", function() {
//         slideToggle(smallerMenu, function() {
//             icon2.style.display = "none";
//             icon1.style.display = "block";
//         });
//     });

//     function slideToggle(element, callback) {
//         var display = window.getComputedStyle(element).display;

//         if (display === "none") {
//             element.style.display = "block";
//             element.style.height = "0";
//             var height = element.scrollHeight + "px";
//             element.style.height = height;
//             setTimeout(function() {
//                 element.style.height = "";
//                 if (callback) callback();
//             }, 600); // slow animation
//         } else {
//             element.style.height = element.scrollHeight + "px";
//             setTimeout(function() {
//                 element.style.height = "0";
//                 setTimeout(function() {
//                     element.style.display = "none";
//                     element.style.height = "";
//                     if (callback) callback();
//                 }, 600); // slow animation
//             }, 10);
//         }
//     }
// });
