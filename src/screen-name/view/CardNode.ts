import {Node, Rectangle, RectangleOptions} from 'scenerystack/scenery';
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
                rectX: 100,
                rectY: 100,
                rectWidth: 100,
                rectHeight: 200,
                cornerRadius: 10,
                fill: 'red'
            },
            providedOptions,
        );

        super(options);

        this.card = card;

    }

}