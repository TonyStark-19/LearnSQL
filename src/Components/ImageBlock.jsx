// image block component
export default function ImageBlock({ src, alt }) {
    return (
        <div className="mt-6 rounded-xl overflow-hidden border border-slate-700 shadow-lg">
            <img
                src={src}
                alt={alt}
                className="w-full object-cover"
            />
        </div>
    );
}