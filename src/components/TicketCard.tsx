import DeleteBlock from '@/components/DeleteBlock'
import PriorityDisplay from '@/components/PriorityDisplay'
import ProgressDisplay from '@/components/ProgressDisplay'

const TicketCard = () => {
  return (
    <div>
      <DeleteBlock />
      <PriorityDisplay />
      <ProgressDisplay />
    </div>
  )
}

export default TicketCard
