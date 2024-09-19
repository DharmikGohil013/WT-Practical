document.addEventListener('DOMContentLoaded', () => {
    const correctAnswers = {
        q1: 'C',
        q2: 'B'
    };

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', () => {
        let score = 0;
        const form = document.getElementById('quizForm');
        const resultDiv = document.getElementById('result');

        // Iterate over each question
        Object.keys(correctAnswers).forEach(question => {
            const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++;
            }
        });

        // Display the result
        resultDiv.textContent = `Your score is ${score} out of ${Object.keys(correctAnswers).length}.`;
    });
});
