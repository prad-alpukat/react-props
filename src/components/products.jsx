import CardProduct from "./cardProduct"

export default function Products({ className }) {
    const dataProducts = [
        {
            title: 'Product 1',
            ingredients: [
                'Ingredient 1',
                'Ingredient 2',
                'Ingredient 3'
            ]
        },
        {
            title: 'Product 2',
            ingredients: [
                'Ingredient 1',
                'Ingredient 2',
                'Ingredient 3'
            ]
        },
        {
            title: 'Product 3',
            ingredients: [
                'Ingredient 1',
                'Ingredient 2',
                'Ingredient 3'
            ]
        }
    ]

    return (
        <div className={"grid grid-cols-2 gap-6 " + className}>
            {dataProducts.map((product, index) => (
                <CardProduct
                    key={index}
                    title={product.title}
                    ingredients={product.ingredients}
                />
            ))}
        </div>
    )
}
