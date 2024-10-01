import Image from 'next/image'


type CardImageProps = {
    imageUrl: string;
    altText: string;
}

const styles = {
    CardImage:'w-full h-48 object-cover'
}

export const CardImage = ({  imageUrl, altText }: CardImageProps) => {
    return (
        <Image 
            src={imageUrl} 
            alt={ altText} 
            className={ styles.CardImage}
            width={600} 
            height={400} 
    />
    )   
}