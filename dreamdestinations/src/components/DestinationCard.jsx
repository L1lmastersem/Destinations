export default function DestinationCard({ destination }) {
  return (
    <article className="card">
      <img src={`/images/destinations/${destination.image}`} alt={destination.city} />
      <div className="card-body">
        <h3>{destination.city}</h3>
        <p className="country">{destination.country}</p>
        <p className="bookings">
          {destination.number_of_bookings.toLocaleString("nl-NL")} boekingen
        </p>
      </div>
    </article>
  );
}