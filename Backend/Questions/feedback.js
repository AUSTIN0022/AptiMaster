const feedbackSamples = [
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d0", // john_doe
      "message": "Really enjoying the JavaScript Basics module! The explanations after each question are super helpful. Would love to see more questions added on ES6 features.",
      "isAcknowledged": true,
      "acknowledgedBy": "admin",
      "acknowledgedAt": new Date("2025-02-15T14:30:00Z"),
      "createdAt": new Date("2025-02-14T09:23:45Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d1", // jane_smith
      "message": "Found a bug in the Control Flow & Functions module. When I got to question 5, it showed me the same question I already answered. The session didn't record my correct answer.",
      "isAcknowledged": true,
      "acknowledgedBy": "techsupport",
      "acknowledgedAt": new Date("2025-03-02T11:15:00Z"),
      "createdAt": new Date("2025-03-01T16:45:12Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d2", // alex_kumar
      "message": "The difficulty level of 'JavaScript Basics' seems inconsistent. Some 'easy' questions are quite challenging while some 'medium' ones are too basic. Could you revisit the difficulty ratings?",
      "isAcknowledged": false,
      "createdAt": new Date("2025-03-10T08:33:21Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d3", // sarah_chen
      "message": "I love the badges system! It keeps me motivated to continue learning. Would be great if you could add more achievement badges for different milestones.",
      "isAcknowledged": false,
      "createdAt": new Date("2025-03-12T19:20:45Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d4", // mike_johnson
      "message": "The explanations for the IIFE question in Control Flow & Functions module could be more detailed. It was hard to understand why my answer was wrong.",
      "isAcknowledged": true,
      "acknowledgedBy": "content_editor",
      "acknowledgedAt": new Date("2025-02-28T13:40:00Z"),
      "createdAt": new Date("2025-02-25T17:15:30Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d0", // john_doe
      "message": "The app crashed when I tried to complete a practice session with more than 15 questions. Can you please look into this?",
      "isAcknowledged": true,
      "acknowledgedBy": "techsupport",
      "acknowledgedAt": new Date("2025-03-05T09:10:00Z"),
      "createdAt": new Date("2025-03-04T21:05:17Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d1", // jane_smith
      "message": "Would love to see a feature where we can bookmark difficult questions for later review.",
      "isAcknowledged": false,
      "createdAt": new Date("2025-03-15T10:12:33Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d2", // alex_kumar
      "message": "Getting 'undefined' errors when trying to check my progress on the Quantitative Aptitude module. The dashboard doesn't show my completed questions.",
      "isAcknowledged": true,
      "acknowledgedBy": "devteam",
      "acknowledgedAt": new Date("2025-03-07T14:25:00Z"),
      "createdAt": new Date("2025-03-06T11:30:45Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d3", // sarah_chen
      "message": "The leaderboard doesn't seem to be updating properly. I've answered over 20 questions correctly today but my rank hasn't changed.",
      "isAcknowledged": true,
      "acknowledgedBy": "devteam",
      "acknowledgedAt": new Date("2025-03-14T16:30:00Z"),
      "createdAt": new Date("2025-03-13T18:45:22Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d4", // mike_johnson
      "message": "The UI is not responsive on my mobile device. The options are getting cut off on smaller screens.",
      "isAcknowledged": false,
      "createdAt": new Date("2025-03-17T15:20:10Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d0", // john_doe
      "message": "It would be great if we could create custom practice sessions based on specific topics or difficulty levels.",
      "isAcknowledged": false,
      "createdAt": new Date("2025-03-16T08:55:40Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d1", // jane_smith
      "message": "Love the streak feature! It's motivating me to practice every day. Maybe add a calendar view to track my daily progress?",
      "isAcknowledged": false,
      "createdAt": new Date("2025-03-11T22:15:00Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d4", // mike_johnson
      "message": "The hint feature is really helpful, but sometimes I accidentally click it. Could you add a confirmation dialog before showing hints?",
      "isAcknowledged": true,
      "acknowledgedBy": "product_manager",
      "acknowledgedAt": new Date("2025-02-20T10:05:00Z"),
      "createdAt": new Date("2025-02-18T14:30:25Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d2", // alex_kumar
      "message": "It would be great if you could add more JavaScript questions about modern frameworks like React and Vue.",
      "isAcknowledged": true,
      "acknowledgedBy": "content_team",
      "acknowledgedAt": new Date("2025-03-08T11:20:00Z"),
      "createdAt": new Date("2025-03-05T19:40:15Z")
    },
    {
      "userId": "65f7a1b2c3d4e5f6a7b8c9d3", // sarah_chen
      "message": "Can you add an option to view all previously completed sessions? I'd like to review my progress over time.",
      "isAcknowledged": false,
      "createdAt": new Date("2025-03-09T13:55:30Z")
    }
  ];
  
  export default feedbackSamples;