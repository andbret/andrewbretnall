// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");
// hamburger.addEventListener("click", function() {
//   this.classList.toggle("is-active");
// }, false);
// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });



// $(document.on("turbolinks:load",function(){
    (function type1(){
  
        // // if(count1 === titles.length){
        // //   count1 = 0;
        // // }
        // currentText1 = titles[count1];
        // letter1 = currentText1.slice(0, ++index1);
        
        // document.querySelector('.typing1').textContent = letter1;
        // if(letter1.length ===currentText1.length){
          
        //   count1++;
        //   index1 = 0;
        //   document.querySelector('.testtt').classList.remove("invis");
        //   document.querySelector('.typing1').classList.remove("test0");
        //   document.querySelector('.typing2').classList.add("test1");
          type3();
       
        // }
        // else {
        //   document.querySelector('.testtt').classList.add("invis");
        //   document.querySelector('.typing1').classList.add("test0");
        //   document.querySelector('.typing2').classList.remove("test1");
      
      
        //   }
        // setTimeout(type1,90);
        }());
      
      
        // function type4(){
          
        //   // if(count1 === titles.length){
        //   //   count1 = 0;
        //   // }
        //   currentText4 = iama[count4];
        //   letter4 = currentText4.slice(0, ++index4);
          
        //   document.querySelector('.typing4').textContent = letter4;
        //   if(letter4.length ===currentText4.length){
            
        //     count4++;
        //     index4 = 0;
        //     type();
        //   }
        //   setTimeout(type4,120);
        //   }
        function type3(){
          
          // if(count1 === titles.length){
          //   count1 = 0;
          // }
          currentText3 = iama[count3];
          letter3 = currentText3.slice(0, ++index3);
          
          document.querySelector('.typing3').textContent = letter3;
          if(letter3.length ===currentText3.length){
            
            count3++;
            index3 = 0;
            type();
          }
          setTimeout(type3,120);
          }
      
      
        
      function type(){
      if(count === texts.length){
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      // console.log(index);
      document.querySelector('.typing2').textContent = letter;
      
      
      if(letter.length ===currentText.length){
        return setTimeout(backspace, 1000);
      // index = 0;
      
      // count++;
       
      }
      setTimeout(type,120);
      }
      
      function backspace(){
        if(count === texts.length){
          count = 0;
        }
      
        currentText = texts[count];
        letter = currentText.slice(0, --index);
        // console.log(index);
        document.querySelector('.typing2').textContent = letter;
       
      
       
        if(letter.length ===0){
          // count++;
        //   for(letter.length ===currentText.length; letter.length > 0; letter.length--){
          // backspace();
        //     console.log(letter);
       
        // }
        index = 0;
        count++;
        
        return type();
          // index = 0;
        }
        setTimeout(backspace,30);
        }
      