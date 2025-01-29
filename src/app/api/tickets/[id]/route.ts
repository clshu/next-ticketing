import Ticket from '@/models/Ticket'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    await Ticket.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Ticket Deleted' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}
