export default function Error(props: { text: string }) {
    return (
        <div className="flex justify-center items-center h-screen text-red-500 text-xl font-light">Error loading blog: {props.text}</div>
    );
}
