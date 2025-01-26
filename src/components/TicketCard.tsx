import DeleteBlock from '@/components/DeleteBlock'
import PriorityDisplay from '@/components/PriorityDisplay'
import ProgressDisplay from '@/components/ProgressDisplay'
import StatusDisplay from '@/components/StatusDisplay'

const TicketCard = () => {
  return (
    <div className="flex flex-col  bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4> Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">Ticket descriptionn</p>
      {/* Make sure ticket cards are the same size no matter how many text they have */}
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">01/01/2025 10:10pm</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  )
}

export default TicketCard
