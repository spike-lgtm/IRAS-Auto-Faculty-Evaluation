// Select radio value 5 (Strongly Agree) for all options

const targetRadioValue = '5';
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
  if (radioButton.value === targetRadioValue) {
    radioButton.checked = true;
    radioButton.dispatchEvent(new Event('change', { bubbles: true }));
  }
});

// Fill the textarea with the specified text
const targetText = "The faculty was really wholesome.";
const textarea = document.querySelector('textarea[placeholder="Remarks *"]');

if (textarea) {
  textarea.value = targetText;
  const inputEvent = new Event('input', { bubbles: true });
  textarea.dispatchEvent(inputEvent);
} else {
  console.error('Textarea element not found.');
}
