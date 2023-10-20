import React from "react"
import styles from "./item.module.css"

export default function ItemComponent({ data, handleAdd }) {
	return (
		<div
			className={styles.card}
			key={data.id}>
			<img
				alt="fruits"
				src={data.src}
			/>

			<div>
				<h3>{data.name}</h3>
				<p>{data.price}</p>
				<button
					onClick={() => {
						handleAdd(data.id)
					}}>
					Add to Cart
				</button>
			</div>
		</div>
	)
}
