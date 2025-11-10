import { Map, useMap } from "@vis.gl/react-maplibre";
import { useEffect } from "react";
import { middleOfParis } from "./lib/constants";

function MapController() {
  const { current: map } = useMap();

  useEffect(() => {
    if (!map) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === " ") {
        event.preventDefault();
        map.flyTo({
          center: [middleOfParis[0], middleOfParis[1]],
          zoom: 10,
          duration: 2000,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [map]);

  return null;
}

export default function App() {
  return (
    <>
      <div className="h-screen w-screen">
        <Map
          initialViewState={{
            longitude: middleOfParis[0],
            latitude: middleOfParis[1],
            zoom: 10,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="/styles/paris-restaurant.json"
        >
          <MapController />
        </Map>
      </div>
    </>
  );
}
