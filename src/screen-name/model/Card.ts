import { TModel } from 'scenerystack/joist';
import { NumberProperty } from 'scenerystack/axon';
// import { Vector2, Dimension2 } from 'scenerystack/dot';

export class Card implements TModel {
    public readonly valueProperty = new NumberProperty(0);
    public readonly sequenceProperty = new NumberProperty(0);

    constructor(
        value: number = 0,
        sequence: number = 0,
    ){
        this.valueProperty = new NumberProperty(value);
        this.sequenceProperty = new NumberProperty(sequence);
    }

    reset(): void {
        this.valueProperty.reset();
        this.sequenceProperty.reset();
    }
    
}