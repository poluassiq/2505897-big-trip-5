import AbstractView from '../framework/view/abstract-view.js';

const tripInfoTemplate = `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
@@ -11,21 +9,9 @@ function createTripInfoElement() {
      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  </section>`;
export default class TripInfoView extends AbstractView {
  get template() {
    return tripInfoTemplate;
  }
}
