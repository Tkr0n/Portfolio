document.addEventListener("DOMContentLoaded", ready);

function ready(){
    const typed = new Typed(
        ".multiple",{
            strings: ["Fullstack Developer", "C# Developer", "Angular Developer", "SQL Server Analist"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        }
    );
    
    var modal = document.getElementById("NotReady");
    
    var events = document.querySelectorAll(".navbar-item");
    
    var span = document.getElementsByClassName("close")[0];

    events.forEach(element => {
        element.addEventListener('click',()=>{
            modal.style.display = "block";
        })
    });
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}