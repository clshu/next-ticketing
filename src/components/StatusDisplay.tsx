import { StatusDisplayProps } from '@/types/props'

const StatusDisplay = ({ status }: StatusDisplayProps) => {
  const getColor = (status: string) => {
    switch (status) {
      case 'closed':
        return 'bg-green-200 text-green-700'
      case 'open':
        return 'bg-red-200 text-red-700'
      case 'in-progress':
        return 'bg-yellow-200 text-yellow-700'
      default:
        return 'bg-gray-200 text-gray-700'
    }
  }

  return (
    <span
      className={`in-block rounded-full px-2 py-1 text-xs font-semibold ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  )
}

export default StatusDisplay
