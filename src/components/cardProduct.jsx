export default function CardProduct({
    title,
    ingredients
}) {
    return (
        <div className="border mb-4 border-black">
            <h3>{title}</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}
