import { TModel } from 'scenerystack/joist';
import { NumberProperty } from 'scenerystack/axon';
import { Property } from 'scenerystack/axon';
import { Vector2, Dimension2 } from 'scenerystack/dot';
import { Color } from 'scenerystack';

export class Card implements TModel {
    public readonly valueProperty = new NumberProperty(0);
    public readonly sequenceProperty = new NumberProperty(0);
    public readonly positionProperty = new Property<Vector2>(new Vector2(0, 0));
    public readonly sizeProperty = new Property<Dimension2>(new Dimension2(161, 100));
    public readonly colorProperty = new Property<Color | string>(Color.red);


    constructor(
        value: number = 0,
        sequence: number = 0,
        position: Vector2 = new Vector2(0,0),
        size: Dimension2 = new Dimension2(1.61,1.00),
        color: Color | string = Color.red
    ){
        this.valueProperty = new NumberProperty(value);
        this.sequenceProperty = new NumberProperty(sequence);
        this.positionProperty = new Property<Vector2>(position);
        this.sizeProperty = new Property<Dimension2>(size);
        this.colorProperty = new Property<Color | string>(color);
    }

    reset(): void {
        this.valueProperty.reset();
        this.sequenceProperty.reset();
    }
    
}