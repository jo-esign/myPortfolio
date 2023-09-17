   //Get the button
   let mybutton = document.getElementById("btn-back-to-top");

   // When the user scrolls down 20px from the top of the document, show the button
   window.onscroll = function () {
   scrollFunction();
   };
   
   function scrollFunction() {
   if (
   document.body.scrollTop > 20 ||
   document.documentElement.scrollTop > 20
   ) {
   mybutton.style.display = "block";
   } else {
   mybutton.style.display = "none";
   }
   }
   // When the user clicks on the button, scroll to the top of the document
   mybutton.addEventListener("click", backToTop);
   
   function backToTop() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
   }

  
   const btn = document.querySelector(".btn-toggle");
   const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
   
   const currentTheme = localStorage.getItem("theme");
   if (currentTheme == "dark") {
      document.body.classList.toggle("dark-theme");
      
   } else if (currentTheme == "light") {
      document.body.classList.toggle("light-theme");
   
   }
   
   btn.addEventListener("click", function () {
      if (prefersDarkScheme.matches) {
         document.body.classList.toggle("light-theme");
         var theme = document.body.classList.contains("light-theme")
         ? "light"
         : "dark";
         
      } else {
       document.body.classList.toggle("dark-theme");
       var theme = document.body.classList.contains("dark-theme")
         ? "dark"
         : "light";
     }
     localStorage.setItem("theme", theme);
   });
   
  
