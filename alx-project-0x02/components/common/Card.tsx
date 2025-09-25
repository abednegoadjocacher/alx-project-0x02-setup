import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
    return(
        <>
            <h3 className="text-4xl text-yellow-500">
                {title}
            </h3>
            <p>
                {content}
            </p>
        </>
    );
}

export default Card;