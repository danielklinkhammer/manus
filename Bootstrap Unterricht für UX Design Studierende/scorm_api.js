/* SCORM API Implementation for Bootstrap Course
 * This file implements the SCORM 1.2 API for tracking student progress
 */

// SCORM API Interface
var API = null;
var findAPITries = 0;

function findAPI(win) {
    // Check if API is available in current window
    if (win.API != null && typeof(win.API) != "undefined") {
        return win.API;
    }
    
    // If not, check the parent window
    if (win.parent != null && win.parent != win) {
        findAPITries++;
        if (findAPITries > 500) {
            return null;
        }
        return findAPI(win.parent);
    }
    
    return null;
}

function getAPI() {
    if (API == null) {
        API = findAPI(window);
        if (API == null && window.opener != null) {
            API = findAPI(window.opener);
        }
    }
    return API;
}

// SCORM Functions
var initialized = false;
var finished = false;

function initializeSCORM() {
    var api = getAPI();
    if (api == null) {
        console.log("SCORM API not found");
        return "false";
    }
    
    if (initialized) return "true";
    
    initialized = api.LMSInitialize("");
    return initialized.toString();
}

function terminateSCORM() {
    if (!initialized || finished) return "false";
    
    var api = getAPI();
    if (api == null) {
        console.log("SCORM API not found");
        return "false";
    }
    
    finished = api.LMSFinish("");
    return finished.toString();
}

function setValue(element, value) {
    var api = getAPI();
    if (api == null) {
        console.log("SCORM API not found");
        return "false";
    }
    
    var result = api.LMSSetValue(element, value);
    api.LMSCommit("");
    return result.toString();
}

function getValue(element) {
    var api = getAPI();
    if (api == null) {
        console.log("SCORM API not found");
        return "";
    }
    
    return api.LMSGetValue(element);
}

// Page specific functions
function loadPage() {
    initializeSCORM();
    
    // Set lesson status to incomplete if not already set
    var status = getValue("cmi.core.lesson_status");
    if (status == "" || status == "not attempted") {
        setValue("cmi.core.lesson_status", "incomplete");
    }
    
    // Set session time
    startTime = new Date();
}

function completePage() {
    // Calculate session time
    var endTime = new Date();
    var sessionTime = (endTime - startTime) / 1000;
    var formattedTime = formatTime(sessionTime);
    
    // Set session time
    setValue("cmi.core.session_time", formattedTime);
    
    // Set lesson status to completed
    setValue("cmi.core.lesson_status", "completed");
    
    // Terminate SCORM session
    terminateSCORM();
}

function formatTime(totalSeconds) {
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    var seconds = Math.floor(totalSeconds - hours * 3600 - minutes * 60);
    
    return padDigits(hours) + ":" + padDigits(minutes) + ":" + padDigits(seconds);
}

function padDigits(number) {
    return (number < 10 ? "0" : "") + number;
}

// Initialize when page loads
var startTime;
window.onload = loadPage;
window.onunload = completePage;
