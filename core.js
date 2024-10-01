var vi = [];
var suggestion = [];
function chromiumVersionType(version) {}
function chromiumVersionDate(version) {}
function chromiumVersionSuggestion(version) {}
function isChromium(userAgent) {
    var chromium = "mozilla/&&applewebkit/&&chrome/&&safari/".split("&&");
    for (var i = 0; i < chromium.length; i++)
        if (userAgent.indexOf(chromium[i]) < 0)
            return false;
    return true;
}

function isWebkit(userAgent) {
    if (userAgent.indexOf("applewebkit/") < 0)
        return false;
    return true;
}

function chromiumDisplay(userAgent) {
    var version = userAgent.match(/chrome\/([\d.]+)/)[1];

    var versionType = chromiumVersionType(version);
    var versionsObj = document.getElementById("version");
    var suggestionObj = document.getElementById("suggestion");
    var versionDate = chromiumVersionDate(version);
    var suggestion = chromiumVersionSuggestion(version);
    var versionNum = version.split(".")[0];

    versionsObj.innerHTML = "浏览器内核版本：<strong>" + version
    if (versionNum >= 8 && versionType == "") {
        suggestionObj.innerHTML = versionDate + "<br \/>" + suggestion;
    } else {
        suggestionObj.innerHTML = versionDate + "<br \/><span style='color:#900101;'>" + suggestion + "<\/span>";
        var versionDiv = document.getElementById("in");
        versionDiv.style.background = "#C49259";
        versionDiv.style.borderColor = "#C49259";
        document.getElementById("version").style.borderBottomColor = "#9b6A33";
        document.getElementById("tb").style.borderTopColor = "#D7B287";
    }
}

function whatBrowser() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (isChromium(userAgent)) {
        chromiumDisplay(userAgent);
    } else if (isWebkit(userAgent)) {
        webkitDisplay(userAgent);
    } else {
        othersDisplay(userAgent);
    }
}