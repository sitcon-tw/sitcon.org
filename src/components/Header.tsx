import { motion } from "framer-motion";
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
      className="bg-gray-100 py-16 mb-4"
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
      key={title + description}
    >
      <div className="container">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          {description}
        </motion.div>
      </div>
    </div>
  );
}
