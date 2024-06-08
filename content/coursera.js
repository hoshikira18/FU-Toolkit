console.log("Chrome extension ready to go!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
  console.log(message);
  if (message.action === "point") {
    const radioGroups = document.querySelectorAll('div[role="radiogroup"]');
    // radioGroups.forEach((e) => {
    //   // Select all the option divs within the radiogroup
    //   const options = e.querySelectorAll("div > label > input");

    //   // Get the last input element
    //   const lastOption = options[options.length - 1];

    //   // Click the last child input element
    //   lastOption.click();
    // });
    radioGroups.forEach((e) => {
      const options = e.querySelectorAll("div > label");

      // Initialize variables to track the highest point option
      let highestPointOption = null;
      let highestPoints = -Infinity;

      // Iterate over each option to find the one with the highest points
      options.forEach((option) => {
        // Get the point value from the span element inside the option
        const pointValue = parseInt(
          option.querySelector(".option-contents span").textContent
        );

        // Update highestPointOption if the current option has higher points
        if (pointValue > highestPoints) {
          highestPoints = pointValue;
          highestPointOption = option.querySelector("input");
        }
      });

      // Click the input element of the option with the highest points
      if (highestPointOption) {
        highestPointOption.click();
      }
    });
  }
}
