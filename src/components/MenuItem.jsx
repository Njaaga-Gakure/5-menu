const MenuItem = ({title, img, desc, price}) => {
    return (
        <article className="menu-item">
            <img className="menu-item-img" src={img} alt={title} />
            <div className="menu-item-info">
                <h5 className="menu-item-title">{title}</h5>
                <p className="menu-item-desc">{desc}</p>
                <span className="menu-item-price">${price}</span>
            </div>
        </article>
    )
}

export default MenuItem