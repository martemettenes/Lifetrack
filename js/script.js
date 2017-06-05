// Kjører alle funksjoner som ligger i fuksjonen start
//used to NOT spawn li when loading tasks more than once
var firstLoad = true;
loadTasksFromLocalStorage();
firstLoad = false;


// LOCAL STORAGE //

function doFunction() {

    var what = document.forms["new"]["what"].value;
    var when = document.forms["new"]["when"].value;
    var description = document.forms["new"]["description"].value;
    
    if(what == "" || when == "" ){
        showEmpty(what, when);
        return;
    }
    

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

function showEmpty(_what, _when){
    if (_what == "")
        document.getElementById('what-require').classList.remove('displaynone');
    else
        document.getElementById('what-require').classList.add('displaynone');
        
    if (_when == "")
        document.getElementById('when-require').classList.remove('displaynone');
    else
        document.getElementById('when-require').classList.add('displaynone');
    
}

// Create a new <li> and add it to the <ul>


function addLi(task) {
    var ul = document.getElementById("test");
    var li = document.createElement("li");
    var children = ul.children.length + 1;
    



    switch (task.when) {
        case "High Priority":
            console.log("we made a hi!!");
            li.classList.add('background1');
          
            break;
        case "Medium Priority":
            console.log("we made a med!!");
            li.classList.add('background2');
            
            break;
        case "Low Priority":
            console.log("we made a law!!");
            li.classList.add('background3');

            break;
    }

    li.setAttribute("id", "obj" + children);
    li.appendChild(document.createTextNode(task.what));
    ul.appendChild(li);

    li.task = task;

    li.addEventListener('mousedown', function () {
        if(li.classList.contains('background1')){
            document.getElementById('details').classList.add('details-high')
            
            //Remove other styles
            document.getElementById('details').classList.remove('details-med')
            document.getElementById('details').classList.remove('details-low')
        }
        if(li.classList.contains('background2')){
            document.getElementById('details').classList.add('details-med')
            
            //Remove other styles
            document.getElementById('details').classList.remove('details-high')
            document.getElementById('details').classList.remove('details-low')
        }
        if(li.classList.contains('background3')){
            document.getElementById('details').classList.add('details-low')
            
            //Remove other styles
            document.getElementById('details').classList.remove('details-high')
            document.getElementById('details').classList.remove('details-med')
        }
        
        document.getElementById('details').classList.remove('displaynone');

        document.getElementById('what').textContent = "";
        document.getElementById('what').appendChild(document.createTextNode(this.task.what));

        document.getElementById('when').textContent = "";
        document.getElementById('when').appendChild(document.createTextNode(this.task.when));

        document.getElementById('desc').textContent = "";
        document.getElementById('desc').appendChild(document.createTextNode(this.task.description));


        //createTextNode(task.what);

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
    
    // Quickfix to give LI's padding
    
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++){
        lis[i].classList.remove('padding');
    }
    setTimeout(function(){
        addPadding(lis);
    },1);
   
}

function addPadding(liList){
    for (var i = 0; i < liList.length; i++){
            liList[i].classList.add('padding');
    }
}

// Open CREATE NEW screen when plus-icon in small menu is pressed

function frontPage() {
    document.getElementById('newlist').classList.add('displaynone');
    document.getElementById('settings').classList.add('displaynone');
    document.getElementById('overview').classList.remove('displaynone');
    
    document.getElementById('details').classList.add('displaynone');

    loadTasksFromLocalStorage();
    console.log('back to front page');
}


// Open page SETTINGS

function openSettings() {
    document.getElementById('settings').classList.remove('displaynone');
    document.getElementById('overview').classList.add('displaynone');
    document.getElementById('newlist').classList.add('displaynone');
    document.getElementById('nothing').classList.add('displaynone');
    //document.getElementById('test').innerHTML = '';

    console.log('Change settings');
}



// Create function that converts objects values to strings and displays the in each li



function swapStyleSheetDark(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
    console.log('dark');
}

function swapStyleSheetLight(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
    console.log('light');
}



/*


str = JSON.stringify(obj);
str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
console.log(str); // Logs output to dev tools console.
alert(str); // Displays output using window.alert()


*/
