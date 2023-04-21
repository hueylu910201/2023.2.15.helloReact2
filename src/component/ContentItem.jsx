export default function ContentItem({ image }){
    return(
        <section
            className="image"
            key={image.id}
        >
            <div>
                <a href="" className="course__link">
                    <img className="course__image"
                        src={image.image}
                        alt={image.name} />
                </a>
                <p className="image_title">{image.title}</p>
            </div>
        </section>
    );
}