import { Phonetic } from "./Phonetic/phonetic";
import { phoneticPreview } from "./Phonetic/phonetc-preview";

const phonetic = new Phonetic();

// Add an event listener to the document to handle input events
document.addEventListener("input", function (event) {
  // Get the target element that triggered the input event
  const target = event.target;

  // Check if the target is an <input> element or a <textarea> element
  if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
    // Retrieve the current value from the target input/textarea
    const value = target.value;

    // Parse the input value to obtain the translated Bangla representation
    let translated_bangla_value = phonetic.parse(value);

    // If the last character in the input value is a space,
    // replace the input value with the translated Bangla value
    if (value.charAt(value.length - 1) === " ") {
      // Update the input value
      target.value = translated_bangla_value;

      // Dispatch an 'input' event to notify listeners of the change
      target.dispatchEvent(new Event("input", { bubbles: true }));
    }

    // Display a tooltip showing the translated Bangla value
    // near the target input/textarea
    phoneticPreview(translated_bangla_value, event);
  }
});


// Instantiate a new MutationObserver which will monitor changes in the DOM.
const observer = new MutationObserver(function (mutations) {
  // Iterate through each mutation observed
  mutations.forEach(function (mutation) {
    // Start with the target of the mutation
    let target = mutation.target;

    // Traverse up the tree to find the closest parent that is contentEditable
    while (target && !target.isContentEditable) {
      target = target.parentNode;
    }

    // If a contentEditable parent is found
    if (target && target.isContentEditable) {
      // Retrieve the textual content of the editable element
      const content = target.innerText;

      // Parse the content to get the translated bangla value
      let translated_bangla_value = phonetic.parse(content);

      // Show a tooltip with the translated bangla value,
      // positioned relative to the target element
      phoneticPreview(translated_bangla_value, target);
    }
  });
});


// Configure the MutationObserver to listen for characterData
// changes and childList changes
const config = {
  characterData: true,
  childList: true,
  subtree: true,
};


// Attach the MutationObserver to the document body
observer.observe(document.body, config);
