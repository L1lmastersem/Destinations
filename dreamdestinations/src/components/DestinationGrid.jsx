import { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

const API_URL = "http://localhost/dreamdestinations-api/destinations.php";

export default function DestinationGrid() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Kon bestemmingen niet laden");
        return res.json();
      })
      .then((data) => setDestinations(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status">Bestemmingen laden...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <section className="destinations" id="bestemmingen">
      <h2>Onze favoriete bestemmingen</h2>
      <div className="grid">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  );
}