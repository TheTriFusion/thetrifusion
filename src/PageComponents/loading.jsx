
import React from "react";
import { JellyTriangle } from '@uiball/loaders'

function ScreenLoading() {
    return (
        <div className="fixed top-1/2 left-1/2 justify-center w-16 h-16 flex flex-row gap-4 "
         style={styles.container}>
            <JellyTriangle
                size={40}
                lineWeight={5}
                speed={2}
                color="#79E0EE"
            />
        </div>
    )
}

const styles = {
    container: {
        transform: 'translate(-50%, -50%)',
    },
};

export default ScreenLoading;

