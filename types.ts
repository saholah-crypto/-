
export interface Lesson {
  id: string;
  title: string;
  mathFunNote: string;
  videoUrl: string;
  studentBook: string;
  activityBook: string;
  mindMap: string;
  games: {
    testYourself: string;
    matching: string;
    flipCards: string;
  };
  quiz: QuizQuestion[];
  identity: {
    info: string;
    image: string;
  };
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface UserStats {
  points: number;
  lessonsCompleted: string[];
  visitorCount: number;
  activeUsers: number;
}
