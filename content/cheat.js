async function cheat(pin, type) {
    // Different API endpoints for different types of websites
    const PIN = (type == "quizizz") ? "/answers?pin=" + pin : "/answers/" + pin

    const endPoints = "https://api.quizit.online/" + type + PIN 

    const response = await fetch(endPoints)
    const data = await response.json()
    let answers = data.data
    answers ? alert("Success!") : alert("Error: Invalid pin")
    if (type == "quizizz") {
        answers = data.data.answers
    }
    else if (type == "blooket") {
        answers = data.data
    }
    setInterval(() => {
        for (let i = 0; i < answers.length; i++) {
            let classQuestion;

            // Different question class names for different types of websites
            if(type == "quizizz") {
                classQuestion = ".question-text"
            } else if(type == "blooket") {
                classQuestion = ".styles__questionText___2MlSZ-camelCase"
            }

            const questionHTML = document.querySelector(classQuestion).textContent

            let questionAPI  = answers[i].question.text
            // Remove HTML tags from questionAPI
            while(questionAPI.includes("<p>") || questionAPI.includes("</p>") || questionAPI.includes("<u>") || questionAPI.includes("</u>")) {
                questionAPI = questionAPI.replace("<p>", "").replace("</p>", "").replace("</u>", "").replace("<u>", "")
            }
            if (questionHTML == questionAPI) {
                let options;
                // Different option class names for different types of websites
                if(type == "quizizz") {
                    options = document.querySelectorAll(".option-inner")
                } else if(type == "blooket") {
                    options = document.querySelectorAll(".styles__answerTextContainer___3YgCT-camelCase")
                }

                for(let j = 0; j < options.length; j++) {

                    const optionHTML = options[j].textContent
                    // click answers
                    for(let k = 0; k < answers[i].answers.length; k++) {
                        // Remove HTML tags from optionAPI
                        const optionAPI = answers[i].answers[k].text.replace("<p>", "").replace("</p>", "").replace("</u>", "").replace("<u>", "").replace("<p>", "").replace("</p>", "").replace("</u>", "").replace("<u>", "")
                        if(optionHTML == optionAPI) {
                            options[j].click();
                            console.log("Clicked: " + options[j].textContent)
                        }  
                    } 
                }
            }
        }
    }, 2000)
}

chrome.runtime.onMessage.addListener((message) => {
        if(message.pin) {
            console.log("Sent successfully. Pin: " + message.pin + " Type: " + message.type)
        }
        cheat(message.pin, message.type);
})

