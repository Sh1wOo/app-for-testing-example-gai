import { Ticket1 } from "./tickets/ticket1";
import { Ticket2 } from "./tickets/ticket2";
import { Ticket3 } from "./tickets/ticket3";
import { Ticket4 } from "./tickets/ticket4";
import { Ticket5 } from "./tickets/ticket5";

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
  Ticket2,
  Ticket3,
  Ticket4,
  Ticket5
];

export function getRandomTicket(): ITicket {
  const randomIndex = Math.floor(Math.random() * tickets.length);
  return tickets[randomIndex];
}
