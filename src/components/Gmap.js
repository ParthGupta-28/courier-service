import { Box, Skeleton } from "@chakra-ui/react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function Gmap() {
  /*if (!isLoaded) {
    return <Skeleton />;
  }*/

  const center = { lat: 28.6139, lng: 77.209 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBs14RzT2ISKOBjnYsd7YuqGYMyw15ZQ5s",
  });

  if (!isLoaded) {
    return <Skeleton />;
  }

  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
    ></GoogleMap>
  );
}
