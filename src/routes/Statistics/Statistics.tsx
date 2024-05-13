import React, { useState } from 'react';
import statisticsStyles from './StatisticsStyle'; // Import the styles from StatisticsStyle.ts

const Statistics: React.FC = () => {
    const [hoveredBox, setHoveredBox] = useState<number | null>(null);

    const getBoxStyles = (boxNumber: number) => {
        const isHovered = hoveredBox === boxNumber;
        return {
            ...statisticsStyles.box,
            backgroundColor: '#f0f0f0', // Greyish color
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            boxShadow: isHovered ? '0px 0px 20px 5px rgba(255, 140, 0, 0.5)' : '0px 0px 10px rgba(0, 0, 0, 0.2)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            marginBottom: '20px', // Add some space between boxes
            width: 'calc(50% - 20px)', // Take up half the container's width with spacing
            height: '200px', // Set a fixed height to ensure uniformity
        };
    };

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ ...statisticsStyles.container }}>
                <h1 style={statisticsStyles.title}>Statistics Dashboard</h1>
                <div style={{ ...statisticsStyles.boxContainer }}>
                    {[1, 2, 3, 4].map((boxNumber) => (
                        <div
                            key={boxNumber}
                            style={getBoxStyles(boxNumber)}
                            onMouseEnter={() => setHoveredBox(boxNumber)}
                            onMouseLeave={() => setHoveredBox(null)}
                        >
                            <h2 style={statisticsStyles.boxTitle}>Box {boxNumber}</h2>
                            <p style={statisticsStyles.boxContent}>Content for Box {boxNumber}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;