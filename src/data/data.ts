export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface QuestionSection {
  questionText: string;
  answers: Answer[];
}

export interface LearningPageData {
  title: string;
  content: {
    imageUrl: string;
    text: string;
  };
  questionSection: QuestionSection;
}

export const learningPageData: LearningPageData[] = [
  {
    title: "Section 1",
    content: {
      imageUrl: "https://picsum.photos/200/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. Est ultricies integer quis auctor. Laoreet id donec ultrices tincidunt arcu. Vel facilisis volutpat est velit egestas dui id.",
    },
    questionSection: {
      questionText: "How many moons does Mars have?",
      answers: [
        {
          text: "0",
          isCorrect: false,
        },
        {
          text: "1",
          isCorrect: false,
        },
        {
          text: "2",
          isCorrect: true,
        },
        {
          text: "5",
          isCorrect: false,
        },
      ],
    },
  },
  {
    title: "Section 2",
    content: {
      imageUrl: "https://picsum.photos/200/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. Est ultricies integer quis auctor. Laoreet id donec ultrices tincidunt arcu. Vel facilisis volutpat est velit egestas dui id.",
    },
    questionSection: {
      questionText: "How long does a day last on Mars?",
      answers: [
        {
          text: "10 hours and 5 minutes",
          isCorrect: false,
        },
        {
          text: "15 hours and 15 minutes",
          isCorrect: false,
        },
        {
          text: "19 hours and 47 minutes",
          isCorrect: false,
        },
        {
          text: "24 hours and 37 minutes",
          isCorrect: true,
        },
      ],
    },
  },
  {
    title: "Section 3",
    content: {
      imageUrl: "https://picsum.photos/200/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. Est ultricies integer quis auctor. Laoreet id donec ultrices tincidunt arcu. Vel facilisis volutpat est velit egestas dui id.",
    },
    questionSection: {
      questionText: "When did the first Mars Rover arrive on Mars?",
      answers: [
        {
          text: "December 10th 1972",
          isCorrect: false,
        },
        {
          text: "March 4th 1979",
          isCorrect: false,
        },
        {
          text: "May 25th 1982",
          isCorrect: false,
        },
        {
          text: "July 4th 1997 ",
          isCorrect: true,
        },
      ],
    },
  },
  {
    title: "Section 4",
    content: {
      imageUrl: "https://picsum.photos/200/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. Est ultricies integer quis auctor. Laoreet id donec ultrices tincidunt arcu. Vel facilisis volutpat est velit egestas dui id.",
    },
    questionSection: {
      questionText: "How much of Mars’ atmosphere is carbon dioxide?",
      answers: [
        {
          text: "0.04%",
          isCorrect: false,
        },
        {
          text: "37.1%",
          isCorrect: false,
        },
        {
          text: "95.9%",
          isCorrect: true,
        },
        {
          text: "99.9%",
          isCorrect: false,
        },
      ],
    },
  },
  {
    title: "Section 5",
    content: {
      imageUrl: "https://picsum.photos/200/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. Est ultricies integer quis auctor. Laoreet id donec ultrices tincidunt arcu. Vel facilisis volutpat est velit egestas dui id.",
    },
    questionSection: {
      questionText: "How far away is Mars from Earth?",
      answers: [
        {
          text: "120 million miles",
          isCorrect: false,
        },
        {
          text: "141 million miles ",
          isCorrect: true,
        },
        {
          text: "302 million miles",
          isCorrect: false,
        },
        {
          text: "367 million miles",
          isCorrect: false,
        },
      ],
    },
  },
];

export interface MarsHolidayData {
  defaultOptions: {
    weatherData: {
      tempInDegreesCelsius: number;
      description: string;
    };
    durationOfFlightInMinutes: number;
    cost: string;
  };
  questions: QuestionSection[];
}

export const marsHolidayData: MarsHolidayData = {
  defaultOptions: {
    weatherData: { tempInDegreesCelsius: 20, description: "Cloudy" },
    durationOfFlightInMinutes: 900,
    cost: "£100,000",
  },
  questions: [
    {
      questionText: "Question 1",
      answers: [
        {
          text: "a",
          isCorrect: true,
        },
        {
          text: "b",
          isCorrect: true,
        },
        {
          text: "c",
          isCorrect: true,
        },
        {
          text: "d",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Question 2",
      answers: [
        {
          text: "a",
          isCorrect: true,
        },
        {
          text: "b",
          isCorrect: true,
        },
        {
          text: "c",
          isCorrect: true,
        },
        {
          text: "d",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Question 3",
      answers: [
        {
          text: "a",
          isCorrect: true,
        },
        {
          text: "b",
          isCorrect: true,
        },
        {
          text: "c",
          isCorrect: true,
        },
        {
          text: "d",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Question 4",
      answers: [
        {
          text: "a",
          isCorrect: true,
        },
        {
          text: "b",
          isCorrect: true,
        },
        {
          text: "c",
          isCorrect: true,
        },
        {
          text: "d",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Question 5",
      answers: [
        {
          text: "a",
          isCorrect: true,
        },
        {
          text: "b",
          isCorrect: true,
        },
        {
          text: "c",
          isCorrect: true,
        },
        {
          text: "d",
          isCorrect: true,
        },
      ],
    },
  ],
};
