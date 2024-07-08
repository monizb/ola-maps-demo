import { useState } from "react"
import MapLibreGlDirections, {
  LoadingIndicatorControl,
} from "@maplibre/maplibre-gl-directions";

import { useEffect } from "react";
import { Map as MapLibreMap, NavigationControl, Marker } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

function App() {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapReady) return;

    const map = new MapLibreMap({
      container: "central-map",
      center: [0, 0],
      zoom: 0,
      style:
        "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
      transformRequest: (url, resourceType) => {
        // Replace the wrong URL with the correct one
        url = url.replace("app.olamaps.io", "api.olamaps.io");

        // Add the API key to the URL based on existing parameters
        if (url.includes("?")) {
          url = url + "&api_key={your_api_key}";
        } else {
          url = url + "?api_key={your_api_key";
        }
        return { url, resourceType };
      },
    });

    const nav = new NavigationControl({
      visualizePitch: false,
      showCompass: true,
    });

    map.addControl(nav, "top-left");

    new Marker().setLngLat([77.5353394, 16.03106]).addTo(map);

    map.on("click", "symbols", (e) => {
      map.flyTo({
        center: e.features[0].geometry.coordinates,
      });
    });

    map.on("load", () => {
      // Create an instance of the default class
      const directions = new MapLibreGlDirections(map);

      // Enable interactivity (if needed)
      directions.interactive = true;

      // Optionally add the standard loading-indicator control
      map.addControl(new LoadingIndicatorControl(directions));

      // Set the waypoints programmatically
      directions.setWaypoints([
        [77.5353394, 13.03106],
        [77.5353394, 15.03106],
      ]);

      // Remove waypoints
      directions.removeWaypoint(0);

      // Add waypoints
      directions.addWaypoint([-73.8671258, 40.82234996], 0);

      // Remove everything plugin-related from the map
      directions.clear();
    });
  }, [mapReady]);

  return (
    <>
      <div
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        ref={() => setMapReady(true)}
        id="central-map"
      />
    </>
  );
}

export default App;
