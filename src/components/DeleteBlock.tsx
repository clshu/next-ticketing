'use client'
import { DeleteBlockProps } from '@/types/props'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

const DeleteBlock = ({ id }: DeleteBlockProps) => {
  const router = useRouter()

  const deleteTicket = async () => {
    const res = await fetch(`/api/tickets/${id}`, {
      method: 'DELETE',
    })
    if (res.ok) {
      router.refresh()
      router.push('/')
    }
  }

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  )
}

export default DeleteBlock
