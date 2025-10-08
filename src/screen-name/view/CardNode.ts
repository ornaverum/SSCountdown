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


    constructor (card: Card,
        modelViewTransform: ModelViewTransform2,
        providedOptions?: CardNodeOptions) {

        const options = optionize<
            CardNodeOptions,
            SelfOptions,
            RectangleOptions
        >()(
 
             {
                rectX: modelViewTransform.modelToViewX(card.positionProperty.value.x),
                rectY: modelViewTransform.modelToViewY(card.positionProperty.value.y),
                rectWidth: Math.abs(modelViewTransform.modelToViewDeltaX(card.sizeProperty.value.width)),
                rectHeight: Math.abs(modelViewTransform.modelToViewDeltaY(card.sizeProperty.value.height)),
                cornerRadius: 10,
                fill: card.colorProperty ? card.colorProperty.value : Color.white,
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