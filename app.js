var listofActivities = [];

var input = document.getElementById("input");

var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;


function click() {
    listofActivities.push(input.value);
    console.log(listofActivities);

    input.value = "";
    showList();
}

function showList(){
    todolist.innerHTML= " ";
    listofActivities.forEach(function(n,i) {
        todolist.innerHTML += "<li>" + n + "<a onclick= 'editItem(" + i + ")'>Edit</a>" + 
        "<a onclick= 'deleteItem(" + i + ")'>&times | </a></li>";
    })

}

function deleteItem(i){
    listofActivities.splice(i,1);
    showList();
}

function editItem(i){

    var newValue = prompt(" Please insert your new value");
    listofActivities.splice(i, 1, newValue)
    showList();
} 