import React from 'react'
import '../hojas-de-estilo/Contador.css'

export default function Contador({ numClicks }) {
	return (
		<>
			<div className='contador'>{numClicks}</div>
		</>
	)
}
