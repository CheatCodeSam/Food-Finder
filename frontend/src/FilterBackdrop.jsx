import PropTypes from "prop-types"
import React from "react"
import { motion } from "framer-motion"

const FilterBackdrop = ({ children, onClick }) => {
    return (
        <motion.div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                background: "#1a1d2690",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    )
}

FilterBackdrop.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.any
}

export default FilterBackdrop