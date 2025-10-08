import { Screen, ScreenOptions } from "scenerystack/sim";
import { CardsModel } from "./model/CardsModel.js";
import { SimScreenView } from "./view/SimScreenView.js";

export class SimScreen extends Screen<CardsModel, SimScreenView> {
  public constructor(options: ScreenOptions) {
    super(
      () => new CardsModel(),
      (model) => new SimScreenView(model),
      options,
    );
  }
}
