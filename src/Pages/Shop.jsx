import Hero from "../Components/Hero/Hero"
import NewCollection from "../Components/NewCollection/NewCollection"
import NewLetter from "../Components/NewsLetter/NewLetter"
import Offer from "../Components/Offer/Offer"
import Popular from "../Components/Popular/Popular"

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewLetter />
    </div>
  )
}

export default Shop
