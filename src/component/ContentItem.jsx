export default function ContentItem({images}){
    return(
        <section
            className="image"
            key={images.id}
        >
            <div>
                <a href="" className="course__link">
                    <img className="course__image"
                        src={images.image}
                        alt={images.name} />
                </a>
                <p className="image_title">{images.title}</p>
            </div>
        </section>
    );
}