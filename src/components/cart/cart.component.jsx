import React from "react"
import CartItemComponent from "../cart-item/cart-item.component.jsx"
import styles from "./cart.module.css"

export default function CartComponent({ fav, handler }) {
	return (
		<fieldset className={styles.container}>
			<legend>
				<strong>Fav Fruits Cart</strong>
			</legend>

			<ol>
				{fav.map((item) => {
					return (
						<CartItemComponent
							data={item}
							key={item.id}
							handleRemove={handler}
						/>
					)
				})}
			</ol>
		</fieldset>
	)
}
