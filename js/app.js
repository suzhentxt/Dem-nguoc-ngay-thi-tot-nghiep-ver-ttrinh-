$(document).ready(function(){
  
  var menu = $(".menu");
  var hamburger = $(".hamburger");
  var line = $(".line");
  var menuOpen;
  
  function openMenu(){
    menu.css("left", "0px");
    line.css("background", "#FFF");
    menuOpen = true;
  }
  
  function closeMenu(){
    menu.css("left", "-320px");
    line.css("background", "#BCAD90");
    menuOpen = false;
  }
  
  function toggleMenu(){
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
 
  hamburger.on({
    mouseenter: function(){
      openMenu();
    }
  });
  
  menu.on({
    mouseleave: function(){
      closeMenu();
    }
    
  });
  
  hamburger.on({
    click: function(){
      toggleMenu();
    }
  })
  
});

var homeMenuItem = document.getElementById("home");
homeMenuItem.addEventListener("click", function() {
    window.location.href = "index.html";
});

var homeMenuItem = document.getElementById("pomodoro");
homeMenuItem.addEventListener("click", function() {
    window.location.href = "pomodoro.html";
});

caches.has('site-static-v18').then(function(hasCache) {
    if (!hasCache) {
    } else {
        caches.delete("site-static-v18");
        alert("Bạn đang ở phiên bản cũ của Website. Reload để cập nhật thời gian mới nhất");
    }
  }).catch(function() {
    // Handle exception here.
  });

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//         .then((reg) => console.log('Service Worker Register', reg))
//         .catch((err) => console.log('Service Worker Not Register', err))
// }