export interface Trip {
  from: string
  destination: string
  startDate: Date
  endDate: Date
  description: string
  userId?: string
}

export interface DestinationInfo {
  lat: string
  lng: string
  name: string
  countryCode: string
  countryName: string
}
