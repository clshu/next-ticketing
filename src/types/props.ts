/* eslint-disable @typescript-eslint/no-explicit-any */
import { ITicket } from './models'

export interface RadioProps {
  formData: any
  handleChange: any
  seq: number
  id: string
  name: string
}

export interface TicketCardProps {
  ticket: ITicket
}

export interface PriorityDisplayProps {
  priority: number
}

export interface ProgressDisplayProps {
  progress: number
}

export interface StatusDisplayProps {
  status: string
}

export interface DeleteBlockProps {
  id: string
}
