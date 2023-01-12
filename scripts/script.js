const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active link
    navLink.forEach(n =>n.classList.remove('active'))
    this.classList.add('active')
}

navLink.forEach(n =>n.addEventListener('click',linkAction))


var app = angular.module("myApp",["ngRoute"])
.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl:"Templates/home.html",
        controller:"homeController"
    })

    .when("/about",{
        templateUrl:"Templates/about.html",
        controller:"aboutController"
    })

    .when("/contact",{
        templateUrl:"Templates/contact.html",
        controller:"contactController"
    })

    .otherwise("/home",{
        templateUrl:"Templates/home.html", 
    })

})
.controller("homeController",function($scope){
    $scope.message = "Home Page"

})

.controller("aboutController",function($scope){
    $scope.message = "About Page"

})

.controller("contactController",function($scope){
    $scope.message = "Contact Page"

})



    // for sticky navbar
        window.addEventListener("scroll" ,function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky" , window.scrollY > 0);
        });

        // for responsive sidebar
        var menu = document.querySelector(".menu");
        var menuBtn = document.querySelector(".menu-btn");
        var closeBtn = document.querySelector(".close-btn");

        menuBtn.addEventListener("click" , () =>{
            menu.classList.add('active');
        });

        closeBtn.addEventListener("click" , () =>{
            menu.classList.remove('active');
        });


