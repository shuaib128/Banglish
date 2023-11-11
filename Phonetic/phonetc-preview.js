export const phoneticPreview = (value, event) => {
  const targetElement = event.target || document.activeElement;

  // Get cursor's current position
  const cursorPosition = targetElement.selectionStart;

  // Extract the word where the cursor is currently located
  const valueUpToCursor = value.substring(0, cursorPosition);
  const words = valueUpToCursor.split(/\s+/);
  const currentWord = words[words.length - 1];

  if (currentWord.length !== 0) {
    // Create a tooltip element to show the preview
    let tooltip = document.getElementById("banglish-tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.id = "banglish-tooltip";
      tooltip.style.position = "fixed";
      tooltip.style.backgroundColor = "rgb(255 176 0)";
      tooltip.style.border = "1px solid #ccc";
      tooltip.style.padding = "3px";
      tooltip.style.display = "none";
      tooltip.style.zIndex = "2147483647";
      tooltip.style.color = "black";
      document.body.appendChild(tooltip);
    }

    // Position the tooltip near the input/textarea and show the translated text
    const rect = targetElement.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `0px`;
    tooltip.textContent = currentWord;
    tooltip.style.display = "block";
  }
};
