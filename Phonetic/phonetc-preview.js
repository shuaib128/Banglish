export const phoneticPreview = (value, event) => {
  // Extract the last word from the inputValue
  const words = value.split(/\s+/);
  const lastWord = words[words.length - 1]

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
    tooltip.style.color = "black"
    document.body.appendChild(tooltip);
  }

  // Position the tooltip near the input/textarea and show the translated text
  const rect = event.target.getBoundingClientRect();
  tooltip.style.left = `${rect.left}px`;
  tooltip.style.top = `${rect.bottom + window.scrollY}px`;
  tooltip.textContent = lastWord;
  tooltip.style.display = "block";
};
