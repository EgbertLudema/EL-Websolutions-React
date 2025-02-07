"use client";

import * as motion from "motion/react-client";
import { useRef, useState } from "react";

export default function DraggableEmoji({
    initialEmoji = "😃",
    draggedEmoji = "😧",
    boxStyle = {},
    constraintsStyle = {},
}) {
    const constraintsRef = useRef<HTMLDivElement>(null);
    const [emoji, setEmoji] = useState(initialEmoji);

    return (
        <motion.div ref={constraintsRef} style={{ ...defaultConstraints, ...constraintsStyle }}>
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.8}
                onDragStart={() => setEmoji(draggedEmoji)}
                onDragEnd={() => setEmoji(initialEmoji)}
                style={{ ...defaultBox, ...boxStyle }}
            >
                {emoji}
            </motion.div>
        </motion.div>
    );
}

/**
 * ==============   Default Styles   ================
 */
const defaultConstraints = {
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const defaultBox = {
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    cursor: "grab",
};
