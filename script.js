let idLink = 1
let link
document.onkeydown = function(event){
if (event.key === "Control"){      
let s = "#rso > div:nth-child(" + idLink + ")  > div.rc > div.r > a";
      if (link){
        link.style.backgroundColor = "white";
      }
      link = document.querySelector(s);
      if (link) {
        link.style.backgroundColor = "red";
        link.scrollIntoView(false);
      }
      idLink += 1;
    }
  else if (event.code == "Enter"){
    link.click();
  }
  
};
