const Categories = ({categories, filterCategories}) => {
    return (
        <div className="categories">
            {categories.map((category, index) => {
                return <button onClick={() => filterCategories(category)} key={index} className="category-btn">{category}</button>
            })}
        </div>
    )
}

export default Categories