import React from 'react'
import { Button } from 'react-bootstrap'

export const CardApts = ({apt , navigate}) => {
  return (
    <article className='p-3 rounded-4 border border-3 h-100'>
        <div>
            <div>
                <img height={300} width={400} src={apt.image} alt="" className='rounded-4'  />
            </div>
            <h3>{apt.title}</h3>
            <Button onClick={() => navigate(`/apartments/${apt.id}`)}>Reservar</Button>
        </div>
    </article>
  )
}
