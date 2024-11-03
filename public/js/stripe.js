import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe(
  'pk_test_51QG3CzFq35L6QX4bobRWJcNdoUiK4sDhRrBeXwsYNTN1IB2ssvTpqi0yv1QewO6kPlnCyhBFE3Zeg2ay6EfZOLOd00gVWSqueL'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
