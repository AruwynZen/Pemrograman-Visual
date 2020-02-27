const electron = require("electron");

const {
    app,
    BrowserWindow,
    MEnu,
    ipcMain
} = electron;

let todayWindows;
let creteWindows;
let listWindow;

app.on("ready", () => {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Aplikasi Awal"
    });
    todayWindow.loadURL(`file://${__dirname}/today.html`)
    todayWindow.on("closed", () => {

        app.quit();
        todayWindow = null;
    })
});