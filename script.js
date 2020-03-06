
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(screen.width >= 900){

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("inputTitle").style.fontSize = "28px";
      document.getElementById("inputTitle").style.margin = "0 0 0 65%";
      document.getElementById("myInput").style.width = "40%";

    } else {
      document.getElementById("inputTitle").style.fontSize = "60px";
        document.getElementById("inputTitle").style.margin = "0 0 0 23%";
          document.getElementById("myInput").style.width = "70%";

    }
  }else if(screen.width <= 900){

      console.log("else if")
      document.getElementById("myInput").style.width = "77%";

  }
}



function searchList() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function sortListDir() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("myUL");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

sortListDir();


function toggleDocs(event) {

    if (event.target && event.target.className == 'clickable-heading') {

        var next = event.target.nextElementSibling;


        if (next.style.display == "inline-block") {
            next.style.display = "none";

        } else {
            next.style.display = "inline-block";
        }
    }
}

document.addEventListener('click', toggleDocs, true);


document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    var number = document.getElementById("myUL").getElementsByTagName("li").length;
    console.log(number)
    document.getElementById("knownCommands").innerHTML = number;
  }
}


// =============================================================================================================================
// =============================================================MARKUP==========================================================
// =============================================================================================================================
// var codeTags = document.getElementsByTagName("pre");
// Array.prototype.forEach.call(elements, function(el, i){
//
// });
//
//
//
//
//
// var strReg1 = /"(.*?)"/g,
//     strReg2 = /'(.*?)'/g,
//     specialReg = /\b(new|var|if|do|function|while|switch|for|foreach|in|continue|break)(?=[^\w])/g,
//     specialCommentReg  = /(\/\*.*\*\/)/g,
//     inlineCommentReg = /(\/\/.*)/g;
//
// codeTags.each(function (){
//         var string = this.innerHTML,
//         parsed = string.replace(strReg1,'<span class="string">"$1"</span>');
//         parsed = parsed.replace(strReg2,"<span class=\"string\">'$1'</span>");
//         parsed = parsed.replace(specialReg,'<span class="yellow">$1</span>');
//         parsed = parsed.replace(specialCommentReg,'<span class="special-comment">$1</span>');
//         parsed = parsed.replace(inlineCommentReg,'<span class="special-comment">$1</span>');
//
//         this.innerHTML = parsed;
//     });




// function highlight(text) {
//   var inputText = document.querySelector(".codeExample");
//   var innerHTML = inputText.innerHTML;
//   var index = innerHTML.indexOf(text);
//   if (index >= 0) {
//    innerHTML = innerHTML.substring(0,index) + "<span class='yellow'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
//    inputText.innerHTML = innerHTML;
//   }
// }
//
// highlight('if');
//
// document.querySelector(".codeExample").innerText.replace(/if/,"<span class='yellow'>if</span>");
var mapObj = {
   if:"<span class='yellow'>if</span>",
   while:"<span class='yellow'>while</span>",
   return:"<span class='yellow'>return</span>",
   int:"<span class='green'>int</span>",
   const:"<span class='green'>const</span>",
   char:"<span class='green'>char</span>",
   include:"<span class='cyan'>include</span>",
   void:"<span class='green'>void</span>",
   size_t:"<span class='green'>size_t</span>",
   unsigned:"<span class='green'>unsigned</span>",
   0:"<span class='magenta'>0</span>",
   1:"<span class='magenta'>1</span>",
   2:"<span class='magenta'>2</span>",
   3:"<span class='magenta'>3</span>",
   4:"<span class='magenta'>4</span>",
   5:"<span class='magenta'>5</span>",
   6:"<span class='magenta'>6</span>",
   7:"<span class='magenta'>7</span>",
   8:"<span class='magenta'>8</span>",
   9:"<span class='magenta'>9</span>",
   "\\t":"<span class='magenta'>\\t</span>",
   "\\n":"<span class='magenta'>\\n</span>",
   "\\r":"<span class='magenta'>\\r</span>",
   "\\v":"<span class='magenta'>\\v</span>",
   "\\f":"<span class='magenta'>\\f</span>",
   "\'\-":"<span class='magenta'>'-</span>",
   "\'\+":"<span class='magenta'>'+</span>",
   "\'":"<span class='magenta'>'</span>",
   "\\":"<span class='magenta'>\\</span>",
   "\#":"<span class='cyan'>\#</span>"

};

function addLoadEvent(func) {
   var oldonload = window.onload;
   if (typeof window.onload != 'function') {
     window.onload = func;
   } else {
     window.onload = function() {
       if (oldonload) {
         oldonload();
       }
       func();
     }
   }
 }
 addLoadEvent(function() {
    oldText = document.getElementsByClassName("code");
    for (i = 0; i<oldText.length; i++){
      newText = oldText[i].innerHTML;
      newText = newText.replace(/if|while|return|int|const|char|include|void|size_t|unsigned|0|1|2|3|4|5|6|7|8|9|\\t|\\n|\\r|\\v|\\f|\'\-|\'\+|\'|\\|\#/g, function(matched){
        return mapObj[matched];
      });
      oldText[i].innerHTML = newText;
    }
 });
