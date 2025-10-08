import { ScreenView, ScreenViewOptions } from "scenerystack/sim";
import { ModelViewTransform2 } from "scenerystack/phetcommon";
import { SimModel } from "../model/SimModel.js";
import { ResetAllButton } from "scenerystack/scenery-phet";
import { Rectangle, Text } from "scenerystack/scenery";
import { Card } from "../model/Card.js";
import {CardNode} from './CardNode';
import { Vector2 } from "scenerystack/dot";

export class SimScreenView extends ScreenView {

  public constructor(model: SimModel, options?: ScreenViewOptions) {
    super(options);

    const viewOffset = new Vector2(this.layoutBounds.centerX, 20);
    const modelViewTransform = ModelViewTransform2.createOffsetXYScaleMapping(
      viewOffset, 1, -1 );


    const resetAllButton = new ResetAllButton({
      listener: () => {
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10,
    });
    this.addChild(resetAllButton);

    const card = new Card(5, 1);
    const cardNode = new CardNode(card, modelViewTransform, {
      center: this.layoutBounds.center
      
    });
    this.addChild(cardNode);
  }

  public reset(): void {
    // Called when the user presses the reset-all button
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public step(dt: number): void {
    // Called every frame, with the time since the last frame in seconds

  }
}
