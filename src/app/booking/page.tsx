import { TextField, Select, MenuItem, Button } from "@mui/material"
import DateReserve from "@/components/DateReserve"

export default function BookingPage() {
  return (
    <main className="w-full flex flex-col items-center p-5 space-y-4">
      <h1 className="text-2xl font-bold">Venue Booking</h1>

      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
      />

      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
      />

      <Select variant="standard" id="venue" defaultValue="">
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>

      <DateReserve />

      <Button variant="contained" name="Book Venue">
        Book Venue
      </Button>
    </main>
  )
}