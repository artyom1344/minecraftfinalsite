document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const resultMessage = document.getElementById('result-message');
    const restartButton = document.createElement('button');
    restartButton.id = 'restart-button';
    restartButton.textContent = 'Пройти тест заново';
    restartButton.style.display = 'none';
    const submitButton = quizForm.querySelector('button[type="submit"]');
    let quizTaken = false;
    let resultsShown = false;
  
  
    quizForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      if (quizTaken && resultsShown) {
        alert("Вы уже проходили и проверяли тест. Нажмите кнопку \"Пройти тест заново\", чтобы пройти его снова.");
        return;
      }
      quizTaken = true;
      submitButton.style.display = 'none';
      restartButton.style.display = 'inline-block';
  
  
      const allQuestions = quizForm.querySelectorAll('.question');
      let score = 0;
      const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'крипер',
        q4: 'морковь',
        q5: 'b',
        q6: 'c'
      };
  
  
      allQuestions.forEach(question => {
        const questionId = question.querySelector('p').textContent.split('.')[0].trim();
        const questionResult = question.querySelector('.result-message');
        const questionInputs = question.querySelectorAll('input[type="text"], input[type="radio"]'); //important
  
        // Disable all inputs inside the question
        questionInputs.forEach(input => input.disabled = true);
  
        let userAnswer = "";
        const input = question.querySelector(`input[name="q${questionId}"]`);
        if (input) {
          if (input.type === 'text') {
            userAnswer = input.value.trim().toLowerCase();
          } else if (input.type === 'radio') {
            userAnswer = question.querySelector(`input[name="q${questionId}"]:checked`)?.value || "";
          }
  
          if (userAnswer === answers[`q${questionId}`]) {
            score++;
            questionResult.textContent = 'Правильно';
          } else {
            let correctAnswerText = answers[`q${questionId}`];
            // ... (rest of your correct answer logic) ...
            questionResult.textContent = `Неправильно. Правильный ответ: ${correctAnswerText}`;
          }
          questionResult.style.color = 'red';
          questionResult.style.fontWeight = 'bold';
        }
      });
  
      resultMessage.textContent = `Ваш результат: ${score} из ${allQuestions.length}`;
      resultsShown = true;
    });
  
    restartButton.addEventListener('click', () => {
      quizForm.reset();
      resultMessage.textContent = '';
      restartButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
      quizTaken = false;
      resultsShown = false;
  
  
      const allQuestions = quizForm.querySelectorAll('.question');
      allQuestions.forEach(question => {
        const questionInputs = question.querySelectorAll('input[type="text"], input[type="radio"]');
        questionInputs.forEach(input => input.disabled = false);
        const questionResult = question.querySelector('.result-message');
        questionResult.textContent = "";
      });
    });
  
  
  });