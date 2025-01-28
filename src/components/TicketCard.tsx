import DeleteBlock from '@/components/DeleteBlock'
import PriorityDisplay from '@/components/PriorityDisplay'
import ProgressDisplay from '@/components/ProgressDisplay'
import StatusDisplay from '@/components/StatusDisplay'
import { TicketCardProps } from '@/types/props'

const formatTimeStamp = (timestamp: string) => {
  const options = {
    year: 'numeric' as const,
    month: '2-digit' as const,
    day: '2-digit' as const,
    hour: '2-digit' as const,
    minute: '2-digit' as const,
    hour12: true,
  }

  const date = new Date(timestamp)
  const formattedTimestamp = date.toLocaleString('en-US', options)
  return formattedTimestamp
}
const TicketCard = ({ ticket }: TicketCardProps) => {
  console.log('ticket', ticket)
  return (
    <div className="flex flex-col  bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4> {ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        {formatTimeStamp(ticket.description)}
      </p>
      {/* Make sure ticket cards are the same size no matter how many text they have */}
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimeStamp(ticket.createdAt)} </p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  )
}

export default TicketCard
