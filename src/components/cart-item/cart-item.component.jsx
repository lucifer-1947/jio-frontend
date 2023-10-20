import React from "react"
import styles from "./cart-item.module.css"
export default function CartItemComponent({ data, handleRemove }) {
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
			</div>

			<button
				onClick={() => {
					handleRemove(data.id)
				}}>
				Remove
			</button>
		</div>
	)
}
