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

        super();

        this.card = card;

    }

}