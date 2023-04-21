// import Images from "../json/images.json";
import ContentList from "./ContentList";
import ContentItem from "./ContentItem";
import { Row, Col } from "antd";
import { useImages } from '../react-query'
export default function Content() {
    const { data, isLoading } = useImages()
    const images = data || []


    return (
        <div>
            <article className="course py-3 py-sm-5">
                <div className="container">
                    <div className="container d-flex flex-column align-items-center">
                        <h1 className="text-center">IMAGES</h1>
                        <hr className="divider--dark" />
                    </div>
                    <Row gutter={[32, 24]}>
                        {images.map(image =>
                            <Col
                                key={image.id}
                                sm={{ span: 24 }}
                                lg={{ span: 12 }}
                                xl={{ span: 6 }}
                                xxl={{ span: 6 }}
                            >
                                <ContentItem image={image} />
                            </Col>
                        )}
                    </Row>
                </div>
            </article>

            <article className="resume py-4 py-sm-5">
                <div className="container d-flex flex-column align-items-center">
                    <h1>DISCRIPTION</h1>
                    <hr className="divider--light" />
                    <p className="text-justify resume__description py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                        corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
                        unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
                        ullam
                        eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
                        quod
                        quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
                        dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
                        tempora.
                        Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
                        repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
                </div>
            </article>


        </div>

    );
}