export interface LearningPageData {
  title: string;
  content: {
    imageUrl: string;
    text: string;
  };
  questionSection: {
    questionText: string;
    answers: {
      text: string;
      isCorrect: boolean;
    }[];
  };
}

export const learningPageData: LearningPageData[] = [
  {
    title: "Section 1",
    content: {
      imageUrl: "https://picsum.photos/200/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer quis auctor elit sed vulputate mi sit amet. Est ultricies integer quis auctor. Laoreet id donec ultrices tincidunt arcu. Vel facilisis volutpat est velit egestas dui id.",
    },
    questionSection: {
      questionText: "Question 1",
      answers: [
        {
          text: "a",
          isCorrect: true,
        },
        {
          text: "b",
          isCorrect: false,
        },
        {
          text: "c",
          isCorrect: false,
        },
        {
          text: "d",
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
      questionText: "Question 2",
      answers: [
        {
          text: "a",
          isCorrect: false,
        },
        {
          text: "b",
          isCorrect: true,
        },
        {
          text: "c",
          isCorrect: false,
        },
        {
          text: "d",
          isCorrect: false,
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
      questionText: "Question 3",
      answers: [
        {
          text: "a",
          isCorrect: false,
        },
        {
          text: "b",
          isCorrect: false,
        },
        {
          text: "c",
          isCorrect: true,
        },
        {
          text: "d",
          isCorrect: false,
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
      questionText: "Question 4",
      answers: [
        {
          text: "a",
          isCorrect: false,
        },
        {
          text: "b",
          isCorrect: false,
        },
        {
          text: "c",
          isCorrect: false,
        },
        {
          text: "d",
          isCorrect: true,
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
      questionText: "Question 5",
      answers: [
        {
          text: "a",
          isCorrect: true,
        },
        {
          text: "b",
          isCorrect: false,
        },
        {
          text: "c",
          isCorrect: false,
        },
        {
          text: "d",
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
  questions: {
    questionText: string;
    answers: {
      text: string;
      isCorrect: boolean;
    }[];
  }[];
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
