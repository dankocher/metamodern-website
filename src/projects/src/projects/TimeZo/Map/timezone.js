import moment from "moment-timezone"

const ny = moment().tz("America/New_York")
const paris = moment().tz("Europe/Paris")
const moscow = moment().tz("Europe/Moscow")
const tokyo = moment().tz("Asia/Tokyo")
const canberra = moment().tz("Australia/Canberra")

const timezone = [
  {
    capital : "New-York",
    country: "USA",
    zone: "UTC−4",
    time: ny.format("HH:mm"),
  },
  {
    capital : "Paris",
    country: "France",
    zone: "UTC+2",
    time: paris.format("HH:mm"),
  },
  {
    capital : "Moscow",
    country: "Russia",
    zone: "UTC+3",
    time: moscow.format("HH:mm"),
  },
  {
    capital : "Tokyo",
    country: "Japan",
    zone: "UTC+9",
    time: tokyo.format("HH:mm"),
  },
  {
    capital : "Canberra",
    country: "Australia",
    zone: "GMT+10",
    time: canberra.format("HH:mm"),
  },
]

export default timezone
