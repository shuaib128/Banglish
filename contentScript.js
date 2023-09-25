import { Phonetic } from "./Phonetic/phonetic";

const phonetic = new Phonetic();

// Handle input events for <input>, <textarea>, and <select> elements
document.addEventListener("input", function (event) {
  const target = event.target;
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
    console.log(phonetic.parse(target.value))
  }
});

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // Find the closest contenteditable ancestor
    let target = mutation.target;
    while (target && !target.isContentEditable) {
      target = target.parentNode;
    }
    if (target && target.isContentEditable) {
      console.log(phonetic.parse(target.innerText))
    }
  });
});

// Configure the MutationObserver to listen for characterData changes and childList changes
const config = {
  characterData: true,
  childList: true,
  subtree: true,
};

// Attach the MutationObserver to the document body
observer.observe(document.body, config);
