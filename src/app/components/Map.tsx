'use client'
import { type Trip } from '@/lib/types'
import { icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Map (): JSX.Element {
  return (
    <div className="shadow-md w-full h-full">
      <MapContainer className='w-full h-full ' center={[0, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer

    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  {/* {tripInfo.map(({ lat, lng }) => (
    <Marker icon={icon({ iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png' })} key={lat} position={[lat, lng]}>
      <Popup>
        Dummy popup... Some info about the place.
      </Popup>
    </Marker>
  ))} */}
</MapContainer>
      </div>
  )
}
