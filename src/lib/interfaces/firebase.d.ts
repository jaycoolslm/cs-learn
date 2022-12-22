export interface Session {
    host: string;
    lessons: Lesson[]
}

export interface Lesson {
    date: {
        nanoseconds: number;
        seconds: number;
        toDate(): Date;
    };
    description: string
    level: number;
    mins: number;
    title: string
    video?: string;
    url?: string;
}

export interface ITeacher {
    image: { src: string; alt: string };
    name: string;
    title: string;
    description: string;
}