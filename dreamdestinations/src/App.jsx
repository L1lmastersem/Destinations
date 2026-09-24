import Header from "./components/Header";
import Hero from "./components/Hero";
import DestinationGrid from "./components/DestinationGrid";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DestinationGrid />
      </main>
    </>
  );
}