import React, { useState } from "react"
import { numberDivisibility } from "../b/number-divisibility.js"
import DiscountComponent from "../discount/discount.component.jsx"
import styles from "./details.module.css"

export default function DetailsComponent() {
	const [age, setAge] = useState("")
	const [visible, setVisible] = useState(false)

	const handleSubmit = (e) => {
		setVisible(true)
	}

	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<fieldset>
					<legend>Contact Details</legend>
					<ul>
						<li>
							<input
								type="text"
								id="name"
								name="Name"
								required
							/>
							<label
								className={styles.label}
								htmlFor="name">
								Name
							</label>
						</li>
						<li>
							<input
								type="text"
								id="email"
								name="Email"
								required
							/>
							<label
								className={styles.label}
								htmlFor="email">
								Email
							</label>
						</li>
						<li>
							<input
								type="number"
								min={18}
								id="age"
								name="age"
								required
								value={age}
								onInput={(e) => setAge(e.target.value)}
							/>

							<label
								className={styles.label}
								htmlFor="age">
								{numberDivisibility(age) ? (
									<p className={styles.highlight}>
										You are a <strong>even</strong> Person
									</p>
								) : (
									<p className={`${styles.highlight} ${styles.odd}`}>
										You are a <strong>odd</strong> Person
									</p>
								)}
							</label>
						</li>
						<li>
							<textarea
								className={styles.input}
								id="address"
								name="address"
							/>
							<label
								className={styles.label}
								htmlFor="address">
								Comments
							</label>
						</li>
						<li>
							<button
								onSubmit={(e) => handleSubmit(e)}
								className={styles.button}
								type="submit"
								disabled={age < 18 || age > 65}>
								Validate
							</button>
						</li>
					</ul>
				</fieldset>
			</form>

			<section className={styles.inner_container}>
				<fieldset>
					<legend>Payment</legend>

					<div className={styles.price_container}>
						<p>MRP Total</p>
						<p>$2200</p>
					</div>
					<div className={styles.price_container}>
						<p>Product Discount</p>
						<p>-$200</p>
					</div>
					<div className={styles.price_container}>
						<p>Delivery</p>
						<p>Free</p>
					</div>
					<div className={styles.price_container}>
						<p>Total</p>
						<p>$2000</p>
					</div>
				</fieldset>
			</section>

		</div>
	)
}
