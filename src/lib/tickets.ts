import { Ticket1 } from "./tickets/ticket1";
import { Ticket2 } from "./tickets/ticket2";

export interface IQuestion {
  id: number;
  text: string;
  image?: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
}

export interface ITicket {
  id: number;
  questions: IQuestion[];
}

const tickets: ITicket[] = [
  Ticket1,
  Ticket2
];

export function getRandomTicket(): ITicket {
  const randomIndex = Math.floor(Math.random() * tickets.length);
  return tickets[randomIndex];
}
