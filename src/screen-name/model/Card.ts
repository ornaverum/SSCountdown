import { TModel } from 'scenerystack/joist';
import { NumberProperty } from 'scenerystack/axon';
import { Property } from 'scenerystack/axon';
import { Vector2, Dimension2 } from 'scenerystack/dot';

export class Card implements TModel {
    public readonly valueProperty = new NumberProperty(0);
    public readonly sequenceProperty = new NumberProperty(0);
    public readonly positionProperty = new Property<Vector2>(new Vector2(0, 0));
    public readonly sizeProperty = new Property<Dimension2>(new Dimension2(100, 161));

    constructor(
        value: number = 0,
        sequence: number = 0,
        position: Vector2 = new Vector2(0,0),
        size: Dimension2 = new Dimension2(100,161)
    ){
        this.valueProperty = new NumberProperty(value);
        this.sequenceProperty = new NumberProperty(sequence);
        this.positionProperty = new Property<Vector2>(position);
        this.sizeProperty = new Property<Dimension2>(size);
    }

    reset(): void {
        this.valueProperty.reset();
        this.sequenceProperty.reset();
    }
    
}