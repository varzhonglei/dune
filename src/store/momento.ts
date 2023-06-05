import { merge, cloneDeep } from 'lodash'
import { produce } from 'immer';

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

  setState(p: T | ((prevState: T) => any)): void {
    if (typeof p === 'function') {
      const newState = produce(this.getState(), p as any) as any
      newState && this._setState(newState)
    } else {
      const newState = merge(this.getState(), p)
      this._setState(cloneDeep(newState))
    }
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