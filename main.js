import { Phonetic } from "./Phonetic/phonetic";
import { phoneticPreview } from "./Phonetic/phonetc-preview";

const phonetic = new Phonetic();

document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("main-textarea");

  textarea.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      // If Enter key is pressed, prevent the newline
      event.preventDefault();
    }
  });

  textarea.addEventListener("keyup", function (event) {
    const target = event.target;
    const value = textarea.value;

    if (event.keyCode === 32 || event.keyCode === 13) {
      // Parse the input value to obtain the translated Bangla representation
      let translated_bangla_value = phonetic.parse(value);

      // Store the current cursor position
      const cursorPosition = target.selectionStart;

      // Update the input value if a space or enter key is pressed
      target.value = translated_bangla_value;

      // Restore the cursor position
      target.setSelectionRange(cursorPosition, cursorPosition);
    }
  });

  // Input event for phoneticPreview
  textarea.addEventListener("input", function (event) {
    const value = textarea.value;
    let translated_bangla_value = phonetic.parse(value);
    phoneticPreview(translated_bangla_value, event);
  });
});
