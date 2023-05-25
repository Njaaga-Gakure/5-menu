const Categories = ({categories, filterCategories}) => {
    return (
        <div className="categories-container">
            <p className="categories-text">what will you be having?</p>
            <div className="categories">
                {categories.map((category, index) => {
                    return <button onClick={() => filterCategories(category)} key={index} className="category-btn">{category}</button>
                })}
            </div>
        </div>       
    )
}

export default Categories