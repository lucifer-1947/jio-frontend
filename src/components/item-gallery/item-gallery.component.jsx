import React from "react"
import ItemComponent from "../item/item.component.jsx"
import styles from "./item-gallery.module.css"
export default function ItemGalleryComponent({ items, handler }) {
	return (
		<fieldset className={styles.container}>
			<legend>
				<strong>Premium Fruits</strong>
			</legend>

			<ol>
				{items.map((item) => {
					return (
						<ItemComponent
							data={item}
							key={item.id}
							handleAdd={handler}
						/>
					)
				})}
			</ol>
		</fieldset>
	)
}
