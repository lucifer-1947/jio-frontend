import React, { useState } from "react"
import styles from "./discount.module.css"
// min and max both are inclusive
function getRandomInteger(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const number = getRandomInteger(1, 10) //generating a random number

export default function DiscountComponent() {
	const [offer, setOffer] = useState(0)
	const [message, setMessage] = useState("Guess the box with offer to avail it")
	const [chances, setChances] = useState(3)

	const offers = Array(10).fill(0) //making all boxes empty
	offers[number] = 1 //assigning offer to only at generated number

	const handleClick = (index) => {
		if (number === index) {
			setChances(0) //ending game
			setOffer(1)
			setMessage("Correct Guess 🎉 . You have won the offer")
		} else if (index < number) {
			setMessage("Guess higher than current ----> ")
			setChances(chances - 1)
		} else if (index > number) {
			setMessage("Guess lower than current <---- ")
			setChances(chances - 1)
		}
	}

	return (
		<div className={styles.container}>
			{chances === 0 ? (
				<h2>
					Sorry you missed the offer . <br /> Reload the page to try again{" "}
				</h2>
			) : (
				<>
					<h2>{message}</h2>
					<p>
						Note:since state is stored locally , reloading age removes the state
					</p>
					{offers.map((item, index) => (
						<img
							src={
								index === number && offer === 1
									? "/offer.svg"
									: "/glowing-gift.gif"
							}
							key={index}
							onClick={() => handleClick(index)}
						/>
					))}
				</>
			)}
		</div>
	)
}
