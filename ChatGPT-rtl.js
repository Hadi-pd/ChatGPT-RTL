const link = document.createElement("link");
link.href = browser.runtime.getURL("css/style.css");
link.rel = "stylesheet";
document.head.appendChild(link);

const button = document.createElement("button");
button.textContent = "برای اعمال راستچین کلیک کنید";
button.style.position = "fixed";
button.style.top = "10px";
button.style.right = "10px";
button.style.zIndex = "9999";
button.classList.add("my-button");
document.body.appendChild(button);

function applyRTL() {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.direction = "rtl";
  }

  const textareas = document.getElementsByTagName("textarea");
  for (let i = 0; i < textareas.length; i++) {
    textareas[i].style.direction = "rtl";
  }

  const lists = document.getElementsByTagName("ol");
  for (let i = 0; i < lists.length; i++) {
    const innerParagraphs = lists[i].getElementsByTagName("p");
    if (innerParagraphs.length > 0) {
      lists[i].style.direction = "rtl";
    }
  }
}

function removeRTL() {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.direction = "initial";
  }

  const textareas = document.getElementsByTagName("textarea");
  for (let i = 0; i < textareas.length; i++) {
    textareas[i].style.direction = "initial";
  }

  const lists = document.getElementsByTagName("ol");
  for (let i = 0; i < lists.length; i++) {
    const innerParagraphs = lists[i].getElementsByTagName("p");
    if (innerParagraphs.length > 0) {
      lists[i].style.direction = "initial";
    }
  }
}

button.addEventListener("click", () => {
  if (button.textContent === "برای اعمال راستچین کلیک کنید") {
    button.textContent = "بازگشت به حالت قبل";
    applyRTL();
  } else {
    button.textContent = "برای اعمال راستچین کلیک کنید";
    removeRTL();
  }
});
