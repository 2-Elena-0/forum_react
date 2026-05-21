import {Carousel, Image} from "react-bootstrap";
import {useState} from "react";

export const MyCarousel = ({images} : {images: string[]} )  => {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (<Carousel style={{height: '20em', background: "grey"}} className="text-center rounded" activeIndex={index}
                      onSelect={handleSelect}>
        {images.map((image, index) => (
            <Carousel.Item key={index}>
                <Image className="img-fluid" style={{height: '20em'}}
                       src={image}/>
            </Carousel.Item>
        ))}
    </Carousel>)
}