import { motion } from "framer-motion";

const PageTransition = ({children}) => {
    return (
        <motion.div
            id="intro"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
        >
            {children}
        </motion.div>
    )
}


export default PageTransition;