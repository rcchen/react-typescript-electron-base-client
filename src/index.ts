// This file is adapted from the Electron quick-start
// http://electron.atom.io/docs/latest/tutorial/quick-start/

"use strict";

import * as http from 'http';
import * as electron from "electron";

const APP_DIMENSIONS = {
  height: 600,
  width: 800
};

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow: Electron.BrowserWindow = null;

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != "darwin") {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on("ready", () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: APP_DIMENSIONS.width,
    height: APP_DIMENSIONS.height
  });

  // and load the index.html of the app.
  mainWindow.loadURL("index.html");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
