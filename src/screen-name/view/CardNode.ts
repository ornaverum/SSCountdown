import {DragListener, Node, Rectangle, RectangleOptions} from 'scenerystack/scenery';
import { Dimension2, Vector2 } from 'scenerystack/dot';
import {Color} from 'scenerystack/scenery';
import {Card} from '../model/Card';
import { ModelViewTransform2 } from "scenerystack/phetcommon";
import { EmptySelfOptions, optionize } from "scenerystack/phet-core";

type SelfOptions = EmptySelfOptions;
type CardNodeOptions = SelfOptions & RectangleOptions;

export class CardNode extends Rectangle {

    public readonly card: Card;

    public static readonly DEFAULT_WIDTH = 100

    constructor (card: Card,
        modelViewTransform: ModelViewTransform2,
        providedOptions?: CardNodeOptions) {

        const options = optionize<
            CardNodeOptions,
            SelfOptions,
            RectangleOptions
        >()(
 
             {
                rectX: card.positionProperty.value.x,
                rectY: card.positionProperty.value.y,
                rectWidth: card.sizeProperty.value.width,
                rectHeight: card.sizeProperty.value.height,
                cornerRadius: 10,
                fill: 'red',
                cursor: 'pointer',
            },
            providedOptions,
        );
        
        super(options);


        card.positionProperty.link((position) => {
            this.translation = modelViewTransform.modelToViewPosition(position);
        });

        this.card = card;

        this.addInputListener(
            new DragListener({
                allowTouchSnag: true,
                positionProperty: card.positionProperty,
                transform: modelViewTransform,
            })
        );


    }

}