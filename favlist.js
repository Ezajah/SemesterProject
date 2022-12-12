"uses strict";
//Function will load and run when the webpage loads.
window.onload=(event) =>{ 
    setup()
};
//Prevents duplication by keeping track of favorite classes.
favoriteclasses=[]
//Setup function is created.
function setup() {
//Variable assigned to collect inputs.
    var btns = document.querySelectorAll("input")
//List is then looped.
    btns.forEach(btn=>{
//Event listener is added to button.
        btn.addEventListener("click",event =>{
//On click of the button, the function is activated.
            addClass(event);
        })
    })
}
//Function is made that passes variable e.
function addClass(e) {
//When an id is not present in the favorite classes the ! is for it "not" being there.
    if (!(favoriteclasses.includes(e.target.id))){
//ID is added to favorite classes.
        favoriteclasses.push(e.target.id);
//New variable element is created for table.
        var tr= document.createElement("tr");
//HTML elements are added.
        var favoriteclass=document.getElementById("Class" + e.target.id).innerHTML;
//Current time and date are added.
        var currentdate=new Date().toLocaleString();
//They're added to each row.
        favoriteclass+="<td> Date Added: "+currentdate+"</td>";
        tr.innerHTML=favoriteclass;
//HTML elements are put into table through the use of the element's ID.
        document.getElementById("FavClassTable").appendChild(tr);
    }
}