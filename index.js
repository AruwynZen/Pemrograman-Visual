const electron = require("electron");

const {
    app,
    BrowserWindow,
    Menu,
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
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const listWindowCreator = () => {
    listWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "All Appoinment"
    });
    listWindow.setMenu(null);
    listWindow.loadURL(`file://${__dirname}/list.html`);
    listWindow.on("closed", () => (listWindow = null));
};

const createWindowCreator = () => {
    createWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Create Appoinment"
    });
    createWindow.setMenu(null);
    createWindow.loadURL(`file://${__dirname}/create.html`);
    createWindow.on("closed", () => (createWindow = null));
};

const menuTemplate = [{
    label: "File",
    submenu: [{
        label: "New Appointment",

        click() {
            createWindowCreator();
        }
    },
    {
        label: "All Appoinment",
        click() {
            listWindowCreator();
        }
    },
    {
        label: "Quit",
        accelerator: process.platform === "darwin" ? "Command + Q" : "CTRL + Q",
        click() {
            app.quit();
        }
    }
    ]
},

{
    label: "View",
    submenu: [{ role: "reload" }, { role: "toggledevtools" }]
}
]