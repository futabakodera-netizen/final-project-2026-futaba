//Scroll down to find the function to work on!
let personalities = {
    "Warm Spring": 0,
    "Cool Summer": 0,
    "Warm Autumn": 0,
    "Cool Winter": 0
}; 

let questions = [
    {
        id:0, // First question
        text: "What color are your eyes?",
        image: "pictures/eyecolor.png",
        choices: {
            "Light brown or light black. It looks like it's sparkling.": ["Warm Autumn", "Warm Spring"],
            "Red brown or Dark gray. The boundary between the iris and the white part of the eye creates a soft impression.": ["Warm Autumn", "Warm Spring"],
            "Dark brown or black. Gives off a calm impression.": ["Cool Winter"],
            "Dark red brown or black. There is a contrast between the iris and the white part of the eye.": ["Cool Summer", "Warm Autumn"]
        }
    },
    {
        id:1,
        text: "What color are your (not colored) hair?",
        image: "lil_images/story/rainbow.png",
        choices: {
            "Deep Brown": ["Warm Autumn"],
            "Black hair with a soft, gentle texture": ["Cool Summer"],
            "Thick, lustrous, and distinctly black hair": ["Cool Winter"],
            "A soft brown when exposed to sunlight.": ["Warm Spring"]
        }
    },
    {
        id:2,
        text: "What is your skin color?",
        image: "lil_images/story/baked.png",
        choices: {
            "A light ivory shade.The skin is somewhat thin and has a glossy finish.": ["Warm Spring", "Cool Summer"],
            "It has an ochre base and a matte finish. It may also be prone to looking dull.": ["Warm Autumn"],
            "A bright, rosy pink shade. The texture is slightly matte, and it tends to bring out a natural flush on the cheeks.": ["Cool winter"],
            "Fair skin with pink undertones.It has a glossy finish, but conveys little sense of natural flush.": ["Cool winter, Warm Autumn"]
        }
    },
    {
        id:3,
        text: "What happens if you get a sunburn?",
        image: "lil_images/story/fortnite.png",
        choices: {
            "It becomes slightly red at first, then becomes brown.": ["Warm Autumn"],
            "Tan easily, absorbing the sun's rays and turning dark. It is difficult for the skin to return to its original shade.": ["Warm Spring", "Warm Autumn"],
            "Tan easily, but the tan fades quickly. Also sometimes turn red.": ["Cool Winter", "Cool Summer"],
            "It tends to turn red easily. It does not absorb, but immediately reverts to its original color.": ["Cool Winter"]
        }
    },
    {
        id:4,
        text: "What is your natural lip color?",
        image: "lil_images/story/batcat.png",
        choices: {
            "Pink/Rose": ["Cool Winter", "Cool Summer"],
            "Muted orange or beige tones. Subtle natural flush.": ["Warm Autumn"],
            "Pale salmon pink or a light beige shade": ["Warm Spring", "Warm Autumn"],
            "Rose-based. It can sometimes make the complexion appear pale or lacking in natural color.": ["Cool Winter"]
        }
    },
    {
        id:5,
        text: "What lip color feels just right for you?",
        image: "lil_images/story/catdog.png",
        choices: {
            "Fuchsia pink or bordeaux shades. Vivid or deep coloration.": ["Warm autumn", "Cool Summer"],
            "Coral or Orange. Light and glossy coloration.": ["Warm Autumn", "Warm Spring"],
            "Muted orange or brown tones. Subdued color payoff.": ["Warm Spring"],
            "Pink or rose. Bright, soft color payoff.": ["Cool Summer", "Cool Winter"]
        }
    }
];


// This keeps track of which question we're on
let currentQuestion = 0;

// Let's complete this function
function loadQuestion(ID) {
    // The loadQuestion function should update the text, images, and buttons of the question with the ID given.
    
    // Step 1
    let questionText = document.getElementById('question-text');
    let questionImage = document.getElementById('question-image');
    let choices = document.getElementById('choices');
    
    // Step 2
    questionText.innerHTML = questions[ID].text;
    questionImage.src = questions[ID].image;
    
    // Step 6
    choices.innerHTML = " ";

    for (const [choice, personality] of Object.entries(questions[ID].choices)) {
        
        // Step 3
        let button = document.createElement("button");
        button.innerHTML = choice;
        button.className = "choice-button";
        // Step 4
        choices.appendChild(button);
        // Step 5
        button.addEventListener("click", function() {
            changeQuestion(currentQuestion + 1, personality);
        });
       
    }
}

function changeQuestion(newQuestion, cats) {
    console.log("state is: " + newQuestion);
    cats.forEach(cat => {
        personalities[cat]++;
        console.log(cat + personalities[cat]);
    });
    console.log("Current question: " + newQuestion);
    currentQuestion = newQuestion;

    if (currentQuestion === 6) {
        console.log("End game go!");
        endGame();
    } else {
        loadQuestion(currentQuestion);
    }
}

function endGame() {
    let maxCount = 0;
    let maxCat = '';

    for (const [cat, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxCat = cat;
        }
    }

    console.log("The result is: "+ maxCat);


    const text = document.getElementById('question-text');
    const questionImage = document.getElementById('question-image');
    const choicesContainer = document.getElementById('choices');
    const resultImagePath = `results/${maxCat}.png`;
    const gameContainer = document.getElementById("game-container");

    questionImage.src = resultImagePath;
    choicesContainer.innerHTML = '';
    text.innerHTML = "You got: " + maxCat;

    let resultText = document.createElement('p');
    
    resultText.style.color = "black";

    if (maxCat == 'Warm Spring') {
        resultText.innerHTML = "EXPLAIN WARM SPRING";
    }
    else if (maxCat == 'Cool Summer') {
        resultText.innerHTML = "EXPLAIN COOL SUMMER";
    }
    else if (maxCat == 'Warm Autumn') {
        resultText.innerHTML = "EXPLAIN WARM AUTUMN";
    }
    else if (maxCat == 'Cool Winter') {
        resultText.innerHTML = "EXPLAIN COOL WINTER";
    }
    

    gameContainer.appendChild(resultText);

}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('title1').style.display = 'none'
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    loadQuestion(currentQuestion);
}


console.log("Welcome to the Personality Quiz!");
console.log(personalities);
console.log(questions);
window.startGame = startGame;