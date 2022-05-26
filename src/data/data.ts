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
    title: "Mars' Moons",
    content: {
      imageUrl:
        "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880",
      text: "Asaph Hall was about to give up his frustrating search for a Martian moon one August night in 1877, but his wife Angelina urged him on. He discovered Deimos the next night, and Phobos six nights after that. Ninety-four years later, NASA's Mariner 9 spacecraft got a much better look at the two moons from its orbit around Mars. The dominant feature on Phobos, it found, was a crater six miles (10 kilometers) wide—nearly half the width of the moon itself. It was given Angelina's maiden name: Stickney.",
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
    title: "Mars Days",
    content: {
      imageUrl:
        "https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
      text: "The Earth zips around the Sun at about 67,000 miles per hour, making a full revolution in about 365 days - one year on Earth. Mars is a little slower, and farther from the sun, so a full circuit takes 687 Earth days - or one Mars year. This makes a day on Mars slightly LONGER than on earth.",
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
    title: "Mars Rover",
    content: {
      imageUrl:
        "https://images.unsplash.com/photo-1639782792143-d8ce97e5d330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332",
      text: "As of May 2021, there have been six successful robotically operated Mars rovers; the first five, managed by the American NASA Jet Propulsion Laboratory, were (by date of Mars landing): Sojourner (1997), Opportunity (2004), Spirit (2004), Curiosity (2012), and Perseverance (2021)",
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
    title: "Mars' Atmosphere",
    content: {
      imageUrl:
        "https://images.unsplash.com/photo-1538551868183-edf7bfc50391?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
      text: "Over the course of three Mars years an instrument in the portable chemistry lab inside the belly of NASA's Curiosity rover inhaled the air of Gale Crater and analyzed its composition. The results confirmed the makeup of the Martian atmosphere at the surface: 95% by volume of carbon dioxide (CO2), 2.6% molecular nitrogen (N2), 1.9% argon (Ar), 0.16% molecular oxygen (O2), and 0.06% carbon monoxide (CO). ",
    },
    questionSection: {
      questionText: "How much of Mars' atmosphere is carbon dioxide?",
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
    title: "Mars Distance",
    content: {
      imageUrl:
        "https://images.pexels.com/photos/5259414/pexels-photo-5259414.jpeg",
      text: "In theory, the closest Mars and Earth would get  is when Mars reaches its closest point to the sun and Earth is at its farthest. This would bring the two planets within 33.9 million miles of each other. Mars and Earth are farthest apart when they are both on opposite sides of the sun. Here, they can be 250 million miles apart. The average distance between Earth and Mars is 140 million miles (225 million km). ",
    },
    questionSection: {
      questionText: "What is the average distance from Mars to Earth?",
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
      questionText: "How many people will be coming on your trip?",
      answers: [
        {
          text: "1",
          isCorrect: true,
        },
        {
          text: "2",
          isCorrect: true,
        },
        {
          text: "3",
          isCorrect: true,
        },
        {
          text: "4",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Which snack would you like for your journey?",
      answers: [
        {
          text: "Freeze-dried Ice-cream Sandwiches",
          isCorrect: true,
        },
        {
          text: "Freeze-dried Banana Split",
          isCorrect: true,
        },
        {
          text: "Freeze-dried Cinnamon Apples",
          isCorrect: true,
        },
        {
          text: "Freeze-dried Bananas",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Which rocket would you like to take on your journey?",
      answers: [
        {
          text: "Atlas V",
          isCorrect: true,
        },
        {
          text: "Falcon 9",
          isCorrect: true,
        },
        {
          text: "Saturn V",
          isCorrect: true,
        },
        {
          text: "Long March 5",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "What time of year would you like to go? Remember a Mars year is 687 days!",
      answers: [
        {
          text: "Winter (-125 °C)",
          isCorrect: true,
        },
        {
          text: "Summer (20 °C)",
          isCorrect: true,
        },
        {
          text: "Spring (-63 °C)",
          isCorrect: true,
        },
        {
          text: "Autumn (-62 °C)",
          isCorrect: true,
        },
      ],
    },
  ],
};
