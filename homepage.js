
$(document).ready(function(){

    const questions = [
        {
            question: "What college does Gerald go?",
            answers: [
                { text: "Harvard University", choice: false},
                { text: "Purdue University", choice: false},
                { text: "Truman State University", choice: true},
                { text: "University of Lagos", choice: false}
            ]
        },
        {
            question: "Gerald is a ...?",
            answers: [
                { text: "Freshman", choice: false},
                { text: "Sophomore", choice: false},
                { text: "Junior", choice: true},
                { text: "Senior", choice: false}
            ]

        },
        {
            question: "What is Gerald's favorite video game?",
            answers: [
                { text: "The Last Of Us", choice: true},
                { text: "Spider-Man", choice: false},
                { text: "Resident Evil", choice: false},
                { text: "GTA", choice: false}
            ]
        },
        {
            question: "What is Gerald's favorite Football/Soccer club?",
            answers: [
                { text: "Manchester United", choice: false},
                { text: "Manchester City", choice: true},
                { text: "Real Madrid", choice: false},
                { text: "Chelsea", choice: false}
            ]
        },
        {
            question: "What country is Gerald from?",
            answers: [
                { text: "South Africa", choice: false},
                { text: "Nigeria", choice: true},
                { text: "USA", choice: false},
                { text: "Ghana", choice: false}
            ]
        },
        {
            question: "What is Gerald's favorite food?",
            answers: [
                { text: "Pasta", choice: false},
                { text: "Rice", choice: false},
                { text: "Burger (with no cheese)", choice: false},
                { text: "Medium Cooked Steak", choice: true}
            ]
        },
        {
            question: "What is Gerald's favorite programming language?",
            answers: [
                { text: "C#", choice: false},
                { text: "Python", choice: false},
                { text: "C++", choice: true},
                { text: "Javascript", choice: false}
            ]
        },
        {
            question: "How long has Gerald been PROgramming?",
            answers: [
                { text: "1 year", choice: false},
                { text: "2 years", choice: false},
                { text: "3 years", choice: false},
                { text: "4 years", choice: true}
            ]

        },
        {
            question: "What was Gerald's favorite class in high school?",
            answers: [
                { text: "English Language", choice: false},
                { text: "Biology", choice: false},
                { text: "Mathematics", choice: true},
                { text: "Economics", choice: false}
            ]
        },
        {
            question: "Who is Gerald's favorite artiste?",
            answers: [
                { text: "Wizkid", choice: false},
                { text: "Lil baby", choice: false},
                { text: "Odumodublvck", choice: false},
                { text: "Burna Boy", choice: true}
            ]
        }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButtons = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;
    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButtons.innerHTML = "Next";
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("abtn");
            answerButtons.appendChild(button);
            if(answer.choice){
                button.dataset.choice = answer.choice;
            }
            button.addEventListener('click', selectAnswer);
        });
        nextButtons.innerHTML = "Play Again";
    }

    function resetState(){
        nextButtons.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild)
        }
    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.choice === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
        });
        nextButtons.style.display = "block";
    }

    function showScore(){
        resetState();
        if (score > 8)
        {
            questionElement.innerHTML = "Sensational! You scored " + score + " out of " + questions.length + " points!";
        }
        else if (score >= 5 && score <= 8)
        {
            questionElement.innerHTML = "Nice! You scored " + score + " out of " + questions.length + " points!";
        }
        else
        {
            questionElement.innerHTML = "Oops, Bookie! You scored " + score + " out of " + questions.length + " points! You should try again and think harder!";
        }
        nextButtons.innerHTML = "Play Again";
        nextButtons.style.display = "block";
    }

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    };

    nextButtons.addEventListener("click",()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })

    startQuiz();



    $('#menu').click(function(){
        $(this).toggleClass('far fa-hand-point-left');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

    });


    $('a[href*="#"]').on('click', function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });

});
