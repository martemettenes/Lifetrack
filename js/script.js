// Kjører alle funksjoner som ligger i fuksjonen start
var firstLoad = true;
loadTasksFromLocalStorage();
firstLoad = false;


// LOCAL STORAGE //

function doFunction() {

    var what = document.forms["new"]["what"].value;
    var when = document.forms["new"]["when"].value;
    var description = document.forms["new"]["description"].value;

    console.log(document.forms["new"]["what"].value);
    console.log(document.forms["new"]["when"].value);
    console.log(document.forms["new"]["description"].value);

    var taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    var task = {
        'what': what,
        'when': when,
        'description': description
    };
    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    addLi(task);

    // Hide id nothing (yay) when there is tasks available
    document.getElementById('nothing').classList.add('displaynone');
}



// Create a new <li> and add it to the <ul>


function addLi(task) {
    var ul = document.getElementById("test");
    var li = document.createElement("li");
    var children = ul.children.length + 1
    li.setAttribute("id", "Marte " + children)
    li.appendChild(document.createTextNode(task.what));
    ul.appendChild(li);

    li.task = task;

    li.addEventListener('mousedown', function () {
        console.log('open popup', this.task);
    });
}



// Open CREATE NEW screen when plus-icon is pressed



document.getElementById("frontplus").addEventListener("mousedown", display);

document.getElementById("headerlogo").addEventListener("mousedown", frontPage);

document.getElementById("cogwheel").addEventListener("mousedown", openSettings);

//document.getElementById("addtask").addEventListener("mousedown", addLi);


function display() {
    document.getElementById('newlist').classList.remove('displaynone');
    document.getElementById('overview').classList.add('displaynone');
    document.getElementById('settings').classList.add('displaynone');
    document.getElementById('nothing').classList.add('displaynone');
    console.log('display');

    //    loadTasksFromLocalStorage();

}

function loadTasksFromLocalStorage() {

    // read all tasks
    var taskListObject = document.getElementById('test');
    var taskString = '';

    var taskList = JSON.parse(localStorage.getItem("tasks"));
    if (taskList == null) {
        document.getElementById('nothing').classList.remove('displaynone');
        return;
    }

    if (firstLoad == true) {
        for (var i = 0; i < taskList.length; i++) {
            var task = taskList[i];
            addLi(task);
        }
    }
}

// Open CREATE NEW screen when plus-icon in small menu is pressed

function frontPage() {
    document.getElementById('newlist').classList.add('displaynone');
    document.getElementById('settings').classList.add('displaynone');
    document.getElementById('overview').classList.remove('displaynone');
    loadTasksFromLocalStorage();
    //    document.getElementById('header').classList.add('visibilityhidden');
    console.log('back to front page');
}


// Open page SETTINGS

function openSettings() {
    document.getElementById('settings').classList.remove('displaynone');
    document.getElementById('overview').classList.add('displaynone');
    document.getElementById('newlist').classList.add('displaynone');
    document.getElementById('nothing').classList.add('displaynone');

    //    document.getElementById('header').classList.remove('visibilityhidden');

    console.log('Change settings');
}









str = JSON.stringify(obj);
str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
console.log(str); // Logs output to dev tools console.
alert(str); // Displays output using window.alert()


