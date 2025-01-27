import Ticket from '@/models/Ticket'
import { NextResponse } from 'next/server'

export async function POST(req) {
  // await dbConnect()

  try {
    const body = await req.json()
    console.log('POST', body)

    const ticketData = body.formData
    await Ticket.create(ticketData)
    return NextResponse.json({ message: 'Ticket created' }, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
