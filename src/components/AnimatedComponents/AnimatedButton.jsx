import { motion } from "framer-motion";

export default function AnimatedButton({ children }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="transition-colors duration-300"
        >
            {children}
        </motion.button>
    );
}