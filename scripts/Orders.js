import { getOrders, getMetals, getSizes, getStyles } from "./database.js"
const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

const buildOrderListItem = (order) => {
   

const foundStyles = styles.find(
        (style) => {
            return style.id === order.styleId
        
        }
    )

const foundSizes = sizes.find(
        (size) => {
            return size.id === order.sizeId
        
        }
    )

const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    
    }
)

let newCost = foundMetal.price + foundSizes.price + foundStyles.price

    const totalCost = newCost
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`

}

export const Orders = () => {


    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

