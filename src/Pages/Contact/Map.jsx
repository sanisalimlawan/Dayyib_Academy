import { GoogleMap, LoadScript } from "@react-google-maps/api";

const center = {
    lat: -3.745,
    lng: -38.523
  };

export default function Map(){
    return(
        <section>
            <LoadScript googleMapsApiKey="AIzaSyDWQTIeaQkSnf7s_g2rgoLgs95qEGcZIlk">
                <GoogleMap center={center} zoom={10}>

                </GoogleMap>
            </LoadScript>
        </section>
    )
}