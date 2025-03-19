const practiceSessionsSamples = [
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d0", // john_doe
      "topicId": "67d6b45a953bd3a26da2ad84", // JavaScript
      "moduleId": "JavaScript Basics",
      "questions": [
        {
          "questionId": "67d9a0c448e47b1199c694f2", // What is the output of `console.log(typeof null)`?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-10T14:30:00Z")
        },
        {
          "questionId": "67d9a0c448e47b1199c69512", // Which keyword is used to declare a variable in ES6?
          "selectedOption": "D",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-10T14:32:00Z")
        },
        {
          "questionId": "67d9a0c448e47b1199c69532", // What will be logged? `console.log(2 + '2' - 1)`
          "selectedOption": "B",
          "isCorrect": false,
          "attemptedAt": new Date("2025-03-10T14:35:00Z")
        },
        {
          "questionId": "67d9a0c448e47b1199c69552", // Which of the following is NOT a JavaScript data type?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-10T14:37:00Z")
        }
      ],
      "totalQuestions": 4,
      "correctAnswers": 3,
      "score": 75,
      "completed": true,
      "createdAt": new Date("2025-03-10T14:30:00Z"),
      "completedAt": new Date("2025-03-10T14:40:00Z")
    },
    {
     
      "userId": "65f7a1b2c3d4e5f6a7b8c9d1", // jane_smith
      "topicId": "67d6b45a953bd3a26da2ad84", // JavaScript
      "moduleId": "Control Flow & Functions",
      "questions": [
        {
          "questionId": "67d9a0c448e47b1199c69592", // Which statement is used to stop a loop immediately?
          "selectedOption": "B",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-12T09:15:00Z")
        },
        {
          "questionId": "67d9a0c448e47b1199c695b2", // What is the difference between `==` and `===` in JavaScript?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-12T09:17:00Z")
        },
        {
          "questionId": "67d9a0c448e47b1199c695d2", // What is an Immediately Invoked Function Expression (IIFE)?
          "selectedOption": "B",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-12T09:20:00Z")
        },
        {
          "questionId": "67d9a0c448e47b1199c695f2", // Which loop guarantees at least one execution?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-12T09:22:00Z")
        },
        {
          "questionId": "67d9a0c448e47b1199c69612", // What does the `return` statement do in a function?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-12T09:25:00Z")
        }
      ],
      "totalQuestions": 5,
      "correctAnswers": 5,
      "score": 100,
      "completed": true,
      "createdAt": new Date("2025-03-12T09:15:00Z"),
      "completedAt": new Date("2025-03-12T09:30:00Z")
    },
    {
     
      "userId": "65f7a1b2c3d4e5f6a7b8c9d2", // alex_kumar
      "topicId": "67d6b45a953bd3a26da2ad84", // JavaScript
      "moduleId": "JavaScript Basics",
      "questions": [
        {
          "questionId": "67d9a0c448e47b1199c694f2", // What is the output of `console.log(typeof null)`?
          "selectedOption": "A",
          "isCorrect": false,
          "attemptedAt": new Date("2025-03-15T16:10:00Z")
        },
        {
          "questionId": "67d9a0c448e47b1199c69512", // Which keyword is used to declare a variable in ES6?
          "selectedOption": "D",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-15T16:12:00Z")
        },
        {
          "questionId": "67d9a0c448e47b1199c69572", // What is the result of `typeof NaN`?
          "selectedOption": "A",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-15T16:15:00Z")
        }
      ],
      "totalQuestions": 3,
      "correctAnswers": 2,
      "score": 67,
      "completed": true,
      "createdAt": new Date("2025-03-15T16:10:00Z"),
      "completedAt": new Date("2025-03-15T16:20:00Z")
    },
    {
    
      "userId": "65f7a1b2c3d4e5f6a7b8c9d3", // sarah_chen
      "topicId": "67d6b45a953bd3a26da2ad84", // JavaScript
      "moduleId": "Control Flow & Functions",
      "questions": [
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3f9", // Which statement is used to stop a loop immediately?
          "selectedOption": "B",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-16T10:00:00Z")
        },
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3fa", // What is the difference between `==` and `===` in JavaScript?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-16T10:03:00Z")
        },
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3fb", // What is an Immediately Invoked Function Expression (IIFE)?
          "selectedOption": "D",
          "isCorrect": false,
          "attemptedAt": new Date("2025-03-16T10:06:00Z")
        }
      ],
      "totalQuestions": 3,
      "correctAnswers": 2,
      "score": 67,
      "completed": true,
      "createdAt": new Date("2025-03-16T10:00:00Z"),
      "completedAt": new Date("2025-03-16T10:10:00Z")
    },
    {
     
      "userId": "65f7a1b2c3d4e5f6a7b8c9d4", // mike_johnson
      "topicId": "67d6b45a953bd3a26da2ad84", // JavaScript
      "moduleId": "JavaScript Basics",
      "questions": [
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3f4", // What is the output of `console.log(typeof null)`?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-17T14:00:00Z")
        },
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3f5", // Which keyword is used to declare a variable in ES6?
          "selectedOption": "B",
          "isCorrect": false,
          "attemptedAt": new Date("2025-03-17T14:02:00Z")
        }
      ],
      "totalQuestions": 2,
      "correctAnswers": 1,
      "score": 50,
      "completed": false,
      "createdAt": new Date("2025-03-17T14:00:00Z"),
      "completedAt": null
    },
    {
     
      "userId": "65f7a1b2c3d4e5f6a7b8c9d2", // alice_dev
      "topicId": "67d6b45a953bd3a26da2ad84", // JavaScript
      "moduleId": "Control Flow & Functions",
      "questions": [
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3fd", // What does the `return` statement do in a function?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-17T18:30:00Z")
        },
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3fc", // Which loop guarantees at least one execution?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-17T18:32:00Z")
        },
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3fb", // What is an Immediately Invoked Function Expression (IIFE)?
          "selectedOption": "A",
          "isCorrect": false,
          "attemptedAt": new Date("2025-03-17T18:35:00Z")
        }
      ],
      "totalQuestions": 3,
      "correctAnswers": 2,
      "score": 67,
      "completed": true,
      "createdAt": new Date("2025-03-17T18:30:00Z"),
      "completedAt": new Date("2025-03-17T18:40:00Z")
    },
    {
     
      "userId": "65f7a1b2c3d4e5f6a7b8c9d0", // bob_coder
      "topicId": "67d6b45a953bd3a26da2ad84", // JavaScript
      "moduleId": "JavaScript Basics",
      "questions": [
        {
          "questionId": "67d9a0c448e47b1199c69572", // What is the result of `typeof NaN`?
          "selectedOption": "A",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-18T09:00:00Z")
        },
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3f7", // Which of the following is NOT a JavaScript data type?
          "selectedOption": "C",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-18T09:02:00Z")
        },
        {
          "questionId": "67d7c5d6e7f8a9b0c1d2e3f6", // What will be logged? `console.log(2 + '2' - 1)`
          "selectedOption": "A",
          "isCorrect": true,
          "attemptedAt": new Date("2025-03-18T09:05:00Z")
        }
      ],
      "totalQuestions": 3,
      "correctAnswers": 3,
      "score": 100,
      "completed": true,
      "createdAt": new Date("2025-03-18T09:00:00Z"),
      "completedAt": new Date("2025-03-18T09:10:00Z")
    }
  ];
  
  export default practiceSessionsSamples;