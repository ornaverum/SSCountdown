import { TModel } from 'scenerystack/joist';
import { NumberProperty } from 'scenerystack/axon';
import { Property } from 'scenerystack/axon';
import { Vector2, Dimension2 } from 'scenerystack/dot';
import { Color } from 'scenerystack';

export class Card implements TModel {
    public readonly cardIdProperty: NumberProperty = new NumberProperty(0);
    public readonly valueProperty = new NumberProperty(0);
    public readonly sequenceProperty = new NumberProperty(0);
    public readonly positionProperty = new Property<Vector2>(new Vector2(0, 0));
    public readonly sizeProperty = new Property<Dimension2>(new Dimension2(161, 100));
    public readonly colorProperty = new Property<Color | string>(Color.red);
    public selectedProperty = new Property<boolean>(false);


    constructor(
        cardId: number = 0,
        value: number = 0,
        sequence: number = 0,
        position: Vector2 = new Vector2(0,0),
        size: Dimension2 = new Dimension2(1.61,1.00),
        color: Color | string = Color.red,
        selected: boolean = false
    ){
        this.cardIdProperty = new NumberProperty(cardId);
        this.valueProperty = new NumberProperty(value);
        this.sequenceProperty = new NumberProperty(sequence);
        this.positionProperty = new Property<Vector2>(position);
        this.sizeProperty = new Property<Dimension2>(size);
        this.colorProperty = new Property<Color | string>(color);
        this.selectedProperty = new Property<boolean>(selected);
    }

    reset(): void {
        this.cardIdProperty.reset();
        this.valueProperty.reset();
        this.sequenceProperty.reset();
        this.positionProperty.reset();
        this.sizeProperty.reset();
        this.colorProperty.reset();
        this.selectedProperty.reset();
    }
    
}