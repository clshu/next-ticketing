import mongoose, { Schema } from 'mongoose'

export interface ITicket extends mongoose.Document {
  title: string
  description: string
  category: string
  priority: number
  progress: number
  status: string
  active: boolean
  createdAt?: Date
  updatedAt?: Date
}

const TicketSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: Number, required: true },
    progress: { type: Number, required: true },
    status: { type: String, required: true },
    active: { type: Boolean, required: true },
  },
  { timestamps: true }
)

const Ticket =
  mongoose.models.Tecket || mongoose.model<ITicket>('Ticket', TicketSchema)

export default Ticket
