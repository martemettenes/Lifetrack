/*

// Require Electron and Node.js modules
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var path = require('path');
var url = require('url');


// Global reference of the window object
var win;


function createWindow () {
// Create the browser window.
win = new BrowserWindow({width: 350, height: 600})

// and load the index.html of the app.
win.loadURL(url.format({
pathname: path.join(__dirname, 'index.html'),
protocol: 'file:',
slashes: true
}));

// Open the DevTools.
//win.webContents.openDevTools()

// Emitted when the window is closed.
win.on('closed', function(){
// Dereference the window object, usually you would store windows
// in an array if your app supports multi windows, this is the time
// when you should delete the corresponding element.
win = null
});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function(){
// On macOS it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q
if (process.platform !== 'darwin') {
app.quit();
};
});

app.on('activate', function(){
// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
if (win === null) {
createWindow();
}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

*/


// FUNCTIONS WITHIN THE APP //



function doFunction () {
    
var listname = document.forms["new"]["listname"].value ;
var description = document.forms["new"]["description"].value ;
    
console.log(document.forms["new"]["listname"].value);

    
localStorage.setItem("chore", listname);
localStorage.setItem("description", description);


var data = localStorage.getItem("new");
console.log(data);
}


// Open CREATE NEW screen when plus-icon is pressed

document.getElementById("frontplus").addEventListener("click", display);

document.getElementById("headerlogo").addEventListener("click", frontPage);


function display () {
 document.getElementById('newlist').classList.remove('displaynone');
document.getElementById('frontpage').classList.add('displaynone');
document.getElementById('header').classList.remove('visibilityhidden');
    console.log('display');

}

// Open CREATE NEW screen when plus-icon in small menu is pressed

function frontPage () {
document.getElementById('frontpage').classList.remove('displaynone');
document.getElementById('newlist').classList.add('displaynone');
document.getElementById('header').classList.add('visibilityhidden');
    console.log('back to front page');   
}



























