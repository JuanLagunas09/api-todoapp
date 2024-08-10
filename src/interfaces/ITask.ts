import { IUser } from './IUser';

export interface ITask {
  _id: string;
  title: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  user: IUser;
}
