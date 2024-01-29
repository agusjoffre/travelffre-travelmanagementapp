'use client'
import { type DestinationInfo, type Trip } from '@/lib/types'
import { icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function random (): string {
  const randomId = crypto.randomUUID()
  return randomId
}

export default function Map ({ tripInfo }: { tripInfo: DestinationInfo[] }): JSX.Element {
  return (
    <div className="shadow-md w-full h-full">
      <MapContainer className='w-full h-full ' center={[0, 0]} zoom={2} scrollWheelZoom={true}>
        <TileLayer

    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  {tripInfo.map(({ lat, lng, name, countryName }) => (
    <Marker icon={icon({ iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png' })} key={random()} position={[Number(lat), Number(lng)]}>
      <Popup className=' text-sm'>
        <strong>{name}</strong>, {countryName}
      </Popup>
    </Marker>
  ))}
</MapContainer>
      </div>
  )
}
