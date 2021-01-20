$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
  


// toggle-menu

function toggleMenu(){
    const toggle =document.querySelector('.toggle-menu')
    toggle.classList.toggle('active')
    const navigation =document.querySelector('.navigation')
    navigation.classList.toggle('active')
}






