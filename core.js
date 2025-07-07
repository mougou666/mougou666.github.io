const vi = [];
const suggestion = [];

function chromiumVersionType(version) {
  // 实现版本类型检测逻辑
}

function chromiumVersionDate(version) {
  // 实现版本日期检测逻辑
}

function chromiumVersionSuggestion(version) {
  // 实现版本建议逻辑
}

function isChromium(userAgent) {
  const requiredParts = ["mozilla/", "applewebkit/", "chrome/", "safari/"];
  return requiredParts.every(part => userAgent.includes(part));
}

function isWebkit(userAgent) {
  return userAgent.includes("applewebkit/");
}

function chromiumDisplay(userAgent) {
  const version = userAgent.match(/chrome\/([\d.]+)/)[1];
  const versionNum = parseInt(version.split(".")[0]);
  const versionType = chromiumVersionType(version);
  const versionDate = chromiumVersionDate(version);
  const suggestionText = chromiumVersionSuggestion(version);
  
  const versionsObj = document.getElementById("version");
  const suggestionObj = document.getElementById("suggestion");
  
  versionsObj.textContent = `浏览器内核版本: ${version}`;
  
  if (versionNum >= 8 && !versionType) {
    suggestionObj.innerHTML = `${versionDate}${suggestionText}`;
  } else {
    suggestionObj.innerHTML = `${versionDate}<span style="color:var(--danger-color)">${suggestionText}</span>`;
    const versionDiv = document.getElementById("in");
    if (versionDiv) {
      versionDiv.style.background = "#C49259";
      versionDiv.style.borderColor = "#C49259";
    }
    document.getElementById("version").style.borderBottomColor = "#9b6A33";
    document.getElementById("tb").style.borderTopColor = "#D7B287";
  }
}

function whatBrowser() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (isChromium(userAgent)) {
    chromiumDisplay(userAgent);
  } else if (isWebkit(userAgent)) {
    webkitDisplay(userAgent);
  } else {
    othersDisplay(userAgent);
  }
}
