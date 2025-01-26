import TicketCard from '@/components/TicketCard'

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="lg:grid grid-cols-2 xl:grid grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}
