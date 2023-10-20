import { merge, cloneDeep } from 'lodash'
import { produce } from 'immer';
import { v4 } from 'uuid'

interface Memento<T> {
  state: T;
  index: string;
}

export class DataStore<T> {
  private state: T;
  private history: Memento<T>[] = [];
  private currentIndex = 'init-index';

  constructor(initialState: T) {
    this.state = initialState;
    this.saveState();
  }

  private createMemento(): Memento<T> {
    return {
      state: this.state,
      index: v4()
    };
  }

  _setState(newState: T): void {
    this.state = newState;
  }

  setState(p: T | ((prevState: T) => any)): void {
    if (typeof p === 'function') {
      const newState = produce(this.getState(), p as any) as any
      newState && this._setState(newState)
    } else {
      const newState = merge({},this.getState(), p)
      this._setState(cloneDeep(newState))
    }
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

  getState(): T {
    return this.state
  }

  getCurrentIndex(): string {
    return this.currentIndex;
  }
}