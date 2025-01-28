import dbConnect from '@/lib/dbConnect'
import { ITicket } from '@/types/models'
import mongoose, { Schema } from 'mongoose'

await dbConnect()

export interface MTicket extends ITicket, mongoose.Document {}

const TicketSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    priority: { type: Number, required: true },
    progress: { type: Number, required: true },
    status: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
)

const Ticket =
  mongoose.models.Tecket || mongoose.model<MTicket>('Ticket', TicketSchema)

export default Ticket
