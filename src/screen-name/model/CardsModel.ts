import { Dimension2, Vector2 } from 'scenerystack/dot';
import {Card} from './Card';
import { TModel } from "scenerystack/joist";  

export class CardsModel implements TModel {
  public readonly NUM_CARDS = 5;
  public readonly cards: Card[];

  constructor() {
    this.cards = [];
    for (let i = 1; i <= this.NUM_CARDS; i++) {
      const card = new Card(10*i + i, i + 1, new Vector2(i, 0), new Dimension2(1.61, 1.00));
      card.colorProperty.value = i % 2 === 0 ? 'blue' : 'red';
      this.cards.push(card);
    }
  }

  public reset(): void {
    // Called when the user presses the reset-all button
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public step(_dt: number): void {
    // Called every frame, with the time since the last frame in seconds
  }
}
