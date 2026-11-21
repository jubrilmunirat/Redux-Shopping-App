import childrenbag from "../assets/childrenbag.jpg"
import dinningset from "../assets/dinningset.jpg"
import handbag from "../assets/handbag.jpg"
import ladieschain from "../assets/ladieschain.jpg"
import ladiesjacket from "../assets/ladiesjacket.jpg"
import pots from "../assets/pots.jpg"
import slickphone from "../assets/slickphone.jpg"
import ladiesshoe from "../assets/ladiesshoe.jpg"
const products = [
    {
        id: 1,
        name: "Ladies Bag",
        price: 40000,
        category: "Bags",
        image: handbag,
        description: "High qulaity ladies leather bag"

    },
    {
        id: 2,
        name: "Ladies Office Shoe",
        price: 25000,
        category: "Ladies Shoes",
        image: ladiesshoe,
        description: "High Quality Leather Office Shoes"
    },
    {
        id: 3,
        name: "Leather Jacket",
        price: 35000,
        category:
            "Ladies Leather Jacket",
        image: ladiesjacket,
        description: "High Quality Ladies Leather Jacket"
    },
    {
        id: 4,
        name: "Slick Phone",
        price: 250000,
        category: "Electronics",
        image: slickphone,
        description: "High quality portable slick phone"
    },
    {
        id: 5,
        name: "Gold Chain",
        price: 54000,
        category: "Ladies Jewelries",
        image: ladieschain,
        description: "Pure Gold Ladies chain"

    },
    {
        id: 6,
        name: "Non - Stick Pot",
        price: 65000,
        category: "Cooking Wares",
        image: pots,
        description: "High quality non-stick pot"
    },
    {
        id: 7,
        name: "Dinning Set",
        price: 250000,
        category: "Home Funitures",
        image: dinningset,
        description: "Standard Durable Dinning Set"
    },
    {
        id: 8,
        name: "School Bag",
        price: 130000,
        category: "children School bags",
        image: childrenbag,
        description: "High Quality, durable children school bag"
    }

]
export default products;