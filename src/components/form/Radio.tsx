import { RadioProps } from '@/types/props'

const Radio = ({ formData, handleChange, seq, id, name }: RadioProps) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type="radio"
        value={seq}
        onChange={handleChange}
        checked={formData.priority == seq}
      />
      <label htmlFor={id}>{seq}</label>
    </>
  )
}

export default Radio
