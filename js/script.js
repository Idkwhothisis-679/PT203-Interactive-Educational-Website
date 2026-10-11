const quizForm = document.querySelector("#trivia-quiz");

if (quizForm) {
    const answers = {
        q1: { value: "jupiter", label: "Jupiter" },
        q2: { value: "six", label: "Six" },
        q3: { value: "carbon-dioxide", label: "Carbon dioxide" },
        q4: { value: "tokyo", label: "Tokyo" },
        q5: { value: "pacific", label: "Pacific Ocean" }
    };
    const result = document.querySelector("#quiz-result");

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(quizForm);
        let score = 0;

        Object.entries(answers).forEach(([question, answer]) => {
            const feedback = document.querySelector(`#feedback-${question}`);
            const isCorrect = formData.get(question) === answer.value;

            if (isCorrect) {
                score += 1;
                feedback.textContent = "Correct!";
                feedback.className = "quiz-feedback is-correct";
            } else {
                feedback.textContent = `Not quite. The answer is ${answer.label}.`;
                feedback.className = "quiz-feedback is-incorrect";
            }
        });

        result.textContent = `You scored ${score} out of ${Object.keys(answers).length}.`;
        result.hidden = false;
    });

    quizForm.addEventListener("reset", () => {
        Object.keys(answers).forEach((question) => {
            const feedback = document.querySelector(`#feedback-${question}`);
            feedback.textContent = "";
            feedback.className = "quiz-feedback";
        });

        result.textContent = "";
        result.hidden = true;
    });
}
