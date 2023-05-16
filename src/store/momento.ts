import { merge, cloneDeep } from 'lodash'

interface Memento<T> {
  state: T;
  index: number;
}

export class DataStore<T> {
  private state: T;
  private history: Memento<T>[] = [];
  private currentIndex = 0;

  constructor(initialState: T) {
    this.state = initialState;
    this.saveState();
  }

  saveState(): void {
    const memento = this.createMemento();
    this.history.push(memento);
    this.currentIndex = memento.index;
  }

  restoreState(index: number): void {
    const memento = this.history[index];
    this.state = memento.state;
    this.currentIndex = memento.index;
  }

  private createMemento(): Memento<T> {
    return {
      state: this.state,
      index: this.history.length
    };
  }

  setState(data: T): void {
    const newState = merge(this.getState(), data)
    this._setState(cloneDeep(newState))
  }

  _setState(newState: T): void {
    this.state = newState;
  }

  getState(): T {
    return this.state;
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }
}