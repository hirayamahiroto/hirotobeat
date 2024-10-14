import Image from 'next/image'


type CardImageProps = {
    imageUrl: string;
    altText: string;
}

const styles = {
    base:'w-full h-48 object-cover'
}

const CardImage = ({  imageUrl, altText }: CardImageProps) => {
    return (
        <Image 
            src={`${imageUrl}?fm=webp`} 
            alt={altText} 
            className={ styles.base}
            width={600} 
            height={400} 
    />
    )   
}

export default CardImage;
