let currentScene = 1;

function makeChoice(choice) {
    switch (currentScene) {
        case 1:
            if (choice === 1) {
                updateStory(
                    "You chose Choice 1. This is the end of the story."
                );
            } else if (choice === 2) {
                currentScene = 2;
                updateStory(
                    "You chose Choice 2. Now, faced with a new decision..."
                );
                updateChoices(["New Choice 1", "New Choice 2"]);
            }
            break;
        case 2:
            if (choice === 1) {
                updateStory(
                    "You chose New Choice 1. This is the end of the story."
                );
            } else if (choice === 2) {
                updateStory(
                    "You chose New Choice 2. This is a different ending."
                );
            }
            break;
    }
}

function updateStory(text) {
    document.getElementById("story-text").textContent = text;
    document.getElementById("choices-container").innerHTML = "";
}

function updateChoices(choices) {
    const choicesContainer = document.getElementById("choices-container");
    choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => makeChoice(index + 1);
        choicesContainer.appendChild(button);
    });
}
