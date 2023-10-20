import { useEffect, useState } from "react"
import "./App.css"
import CartComponent from "./components/cart/cart.component.jsx"
import DetailsComponent from "./components/details/details.component.jsx"
import DiscountComponent from "./components/discount/discount.component.jsx"
import ItemGalleryComponent from "./components/item-gallery/item-gallery.component.jsx"
import OffersGalleryComponent from "./components/offers-gallery/offers-gallery.component.jsx"

const initialState = [
	{
		id: 10,
		name: "Guava Jumbo White Premium Indian 1 Pc (Approx 340 g - 490 g)",
		src: "https://www.jiomart.com/images/product/original/599991760/guava-jumbo-white-premium-indian-1-pc-approx-325-g-450-g-product-images-o599991760-p602564082-0-202306231616.jpg?im=Resize=(360,360)",
		price: 300,
	},
]
const fruits = [
	{
		id: 0,
		name: "Coconut Tender Premium Indian 3 Pc (Approx 4.48 kg - 5.22 kg)",
		src: "https://www.jiomart.com/images/product/original/599991275/coconut-tender-premium-indian-3-pc-approx-300-ml-350-ml-per-nut-product-images-o599991275-p591189405-0-202303031318.jpg?im=Resize=(150,150)",
		price: 300,
	},
	{
		id: 1,
		name: "Dragonfruit Red Flesh Medium Premium Indian 1 Pc (Approx 290 g - 390 g)",
		src: "https://www.jiomart.com/images/product/original/599991773/dragonfruit-red-flesh-medium-premium-indian-1-pc-approx-300-g-400-g-product-images-o599991773-p602538035-0-202306230600.jpg?im=Resize=(360,360)",
		price: 300,
	},
	{
		id: 2,
		name: "Apple Shimla Royal Bites Premium Indian 6 Pc (Approx 510 g - 610 g)",
		src: "https://www.jiomart.com/images/product/original/599991860/apple-shimla-royal-bites-premium-indian-3-pc-product-images-o599991860-p604442073-0-202309061047.jpg?im=Resize=(360,360)",
		price: 300,
	},
	{
		id: 3,
		name: "Blueberry Premium Imported Pack 125 g",
		src: "https://www.jiomart.com/images/product/original/599990932/blueberry-premium-imported-pack-125-g-product-images-o599990932-p590860270-0-202304180621.jpg?im=Resize=(360,360)",
		price: 300,
	},
	{
		id: 4,
		name: "Banana Yellaki Premium Indian 6 Pc (Approx 340 g - 490 g)",
		src: "https://www.jiomart.com/images/product/original/599990399/banana-yellaki-premium-indian-6-pc-approx-320-g-400-g-product-images-o599990399-p590860325-0-202305241833.jpg?im=Resize=(360,360)",
		price: 300,
	},
	{
		id: 5,
		name: "Pomegranate Kesar Medium Premium Indian 4 pc (Approx 1.13 kg - 1.32 kg)",
		src: "https://www.jiomart.com/images/product/original/599991204/pomegranate-kesar-medium-premium-indian-4-pc-approx-1-00-kg-1-40-kg-product-images-o599991204-p591041952-0-202304281756.jpg?im=Resize=(360,360)",
		price: 300,
	},
	{
		id: 6,
		name: "Orange Nagpur Premium Indian 4 Pc (Approx 640 g - 760 g)",
		src: "https://www.jiomart.com/images/product/original/599990134/orange-nagpur-premium-indian-4-pc-approx-640-g-880-g-product-images-o599990134-p593160807-0-202304281828.jpg?im=Resize=(360,360)",
		price: 300,
	},
	{
		id: 7,
		name: "Custard Apple Premium Indian 2 Pc (Approx 450 g - 530 g)",
		src: "https://www.jiomart.com/images/product/original/599990077/custard-apple-premium-indian-2-pc-approx-500-g-700-g-product-images-o599990077-p591980101-0-202207282046.jpg?im=Resize=(360,360)",
		price: 300,
	},
	{
		id: 8,
		name: "Raspberry Pink Premium Indian Pack 100 g",
		src: "https://www.jiomart.com/images/product/original/599991283/raspberry-pink-premium-indian-pack-100-g-product-images-o599991283-p591195273-0-202304281824.jpg?im=Resize=(360,360)",
		price: 300,
	},
	{
		id: 9,
		name: "Pineapple Queen Mini Premium Indian 1 Pc (Approx 440 g - 640 g)",
		src: "https://www.jiomart.com/images/product/original/599991786/pineapple-queen-mini-premium-indian-1-pc-product-images-o599991786-p602987482-0-202307061954.jpg?im=Resize=(360,360)",
		price: 300,
	},
	{
		id: 10,
		name: "Guava Jumbo White Premium Indian 1 Pc (Approx 340 g - 490 g)",
		src: "https://www.jiomart.com/images/product/original/599991760/guava-jumbo-white-premium-indian-1-pc-approx-325-g-450-g-product-images-o599991760-p602564082-0-202306231616.jpg?im=Resize=(360,360)",
		price: 300,
	},
]

const light = `--bg-color: #ffffff; 	color: #000000;
`
const dark = `--bg-color: #000000; 	color: #ffffff;
`
const auto = `--bg-color: #bdebff;  color:#000000;
`

function App() {
	const [fav, setFav] = useState(initialState)
	const [items, setItems] = useState(fruits)
	const [reveal, setReveal] = useState(false)

	const [theme, setTheme] = useState(light)
	useEffect(() => {
		document.documentElement.style = theme
	}, [theme])

	const handleAdd = (id) => {
		if (!fav.find((item) => item.id === id)) setFav([...fav, items[id]])
	}

	const handleRemove = (id) => {
		setFav(fav.filter((item) => item.id !== id))
	}

	return (
		<>
			{reveal ? (
				<p>Implemented all the futures in the below JIO MART clone</p>
			) : null}

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "100%",
					marginLeft: "auto",
					marginRight: "0",
					padding: "8px",
					borderRadius: "10px",
					border: "1px solid grey",
					marginBottom: "20px",
					backgroundColor: "#0078ad",
					flexWrap:'wrap',
					gap:'20px'
				}}>
				<img
					src="https://www.jiomart.com/assets/ds2web/images/jiomart_beta_logo.svg"
					alt="JIO Mart Logo"
				/>

				<div>
					<label htmlFor="theme">
						<strong>Theme:</strong>{" "}
					</label>
					<select
						style={{
							borderRadius: "10px",
							border: "1px solid grey",
							padding: "4px",
							margin: "0 10px",
						}}
						id="theme"
						onChange={(e) => {
							switch (e.target.value) {
								case "light":
									setTheme(light)
									break
								case "dark":
									setTheme(dark)
									break
								case "auto":
									setTheme(auto)
									break
							}
						}}>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
						<option value="auto">auto</option>
					</select>

					<button onClick={() => setReveal(!reveal)}>Learn More</button>
				</div>
			</div>

			<OffersGalleryComponent />
			<div className="container2">
				<div>
					<CartComponent
						fav={fav}
						handler={handleRemove}
					/>
				</div>

				<DetailsComponent />
			</div>

			<DiscountComponent />
			<ItemGalleryComponent
				items={items}
				handler={handleAdd}
			/>
		</>
	)
}

export default App
