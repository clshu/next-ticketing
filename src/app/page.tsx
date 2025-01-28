import TicketCard from '@/components/TicketCard'
import { ITicket } from '@/types/models'

const getTickets = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/tickets', {
      cache: 'no-cache',
    })

    return res.json()
  } catch (error) {
    console.error('Error fetching tickets', error)
    return null
  }
}

export default async function Dashboard() {
  const { tickets } = await getTickets()

  if (!tickets) {
    return <div>Error fetching tickets</div>
  }

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ]

  return (
    <div className="p-4">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, catgoryIndex) => (
            <div key={catgoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((ticket, index) => (
                    <TicketCard id={index} key={index} ticket={ticket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
