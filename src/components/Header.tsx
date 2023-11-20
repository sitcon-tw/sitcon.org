export default function Header({
  title,
  description,
  featured_image,
}: {
  title: string;
  description: string;
  featured_image?: string;
}) {
  return (
    <div
      className="bg-gray-100 py-16  mb-4"
      style={
        featured_image
          ? {
              backgroundImage: `url(${featured_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      <div className="container">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="text-gray-600">{description}</div>
      </div>
    </div>
  );
}
