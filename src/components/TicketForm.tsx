'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Radio from '@/components/form/Radio'

const startingTicketData = {
  title: '',
  description: '',
  priority: 1,
  progress: 0,
  status: 'open',
  category: 'Hardware Issue',
  active: true,
}

const TicketForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState(startingTicketData)

  const handleChange = (e) => {
    let value = e.target.value
    const name = e.target.name
    if (name === 'priority') {
      value = parseInt(value)
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData }),
    })
    if (!res.ok) {
      throw new Error('Failed to create ticket')
    }
    // console.log('Response', res)
    router.refresh()
    router.push('/')
  }

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>Create Your Yicket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Issue">Hardware Issue</option>
          <option value="Software Issue">Software Issue</option>
          <option value="Network Issue">Network Issue</option>
          <option value="Other">Other</option>
        </select>
        <label>Priority</label>
        <div>
          <Radio
            formData={formData}
            handleChange={handleChange}
            seq={1}
            id="priority-1"
            name="priority"
          />
          <Radio
            formData={formData}
            handleChange={handleChange}
            seq={2}
            id="priority-2"
            name="priority"
          />
          <Radio
            formData={formData}
            handleChange={handleChange}
            seq={3}
            id="priority-3"
            name="priority"
          />
          <Radio
            formData={formData}
            handleChange={handleChange}
            seq={4}
            id="priority-4"
            name="priority"
          />
          <Radio
            formData={formData}
            handleChange={handleChange}
            seq={5}
            id="priority-5"
            name="priority"
          />
        </div>
        <label>Progress</label>
        <input
          id="progress"
          name="progress"
          type="range"
          onChange={handleChange}
          value={formData.progress}
          min="0"
          max="100"
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
        <input className="btn" type="submit" value="Create Ticket" />
      </form>
    </div>
  )
}

export default TicketForm
