import { makeAutoObservable } from 'mobx';

class Todo {
  id;
  text;
  isFinished;

  constructor(text: string, isFinished?: boolean) {
    makeAutoObservable(this);
    this.id = Math.round(Math.random() * new Date().getTime()).toString();
    this.text = text;
    this.isFinished = isFinished ?? false;

    this.toggleFinished = this.toggleFinished.bind(this);
  }

  toggleFinished() {
    this.isFinished = !this.isFinished;
  }
}

export default Todo;
