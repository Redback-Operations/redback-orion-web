import React, { useState } from 'react';
import statisticsStyles from './StatisticsStyle'; // Import the styles from StatisticsStyle.ts

const Statistics: React.FC = () => {
    const [hoveredBox, setHoveredBox] = useState<number | null>(null);

    const getBoxStyles = (boxNumber: number) => {
        const isHovered = hoveredBox === boxNumber;
        return {
            ...statisticsStyles.box,
            backgroundColor: 'white', // Set the background color to white
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            boxShadow: isHovered ? '0px 0px 20px 5px rgba(255, 140, 0, 0.5)' : '0px 0px 10px rgba(0, 0, 0, 0.2)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            marginBottom: '20px', // Add some space between boxes
            width: 'calc(50% - 20px)', // Take up half the container's width with spacing
            height: '220px', // Increase the height slightly
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        };
    };

    const boxTitles = [
        "Team Stats",
        "Player Stats",
        "Overall Stats",
        "Overall Performance",
        "Improvement",
        "Other Team Stats"
    ];

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ ...statisticsStyles.container }}>
                <h1 style={{ ...statisticsStyles.title, borderBottom: '5px solid #FF8C00', paddingBottom: '5px', color: '#00aeb2', display: 'flex', alignItems: 'center' }}>
                    Statistics Dashboard
                    <img src="/logo2.svg" alt="Logo" style={{ marginLeft: '20px', width: '60px', height: 'auto' }} />
                </h1>
                <div style={{ ...statisticsStyles.boxContainer }}>
                    {[1, 2, 3, 4, 5, 6].map((boxNumber) => (
                        <div
                            key={boxNumber}
                            style={getBoxStyles(boxNumber)}
                            onMouseEnter={() => setHoveredBox(boxNumber)}
                            onMouseLeave={() => setHoveredBox(null)}
                        >
                            <h2 style={{ ...statisticsStyles.boxTitle, color: 'red' }}>{boxTitles[boxNumber - 1]}</h2>
                            <hr style={{ border: '1px solid #FF8C00', width: '50%', marginTop: '5px', marginBottom: '10px' }} />
                            {/* Add a comment here for image reference */}
                            <img
                                src={boxNumber % 2 === 1 ? `/bar${Math.ceil(boxNumber / 2)}.jpg` : `/line${boxNumber / 2}.jpg`}
                                alt={`Image ${boxNumber}`}
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;



// Image 1 Reference: https://atlas-content-cdn.pixelsquid.com/stock-images/bar-chart-graph-lOoXy18-600.jpg//
// Image 2 Reference: https://us.123rf.com/450wm/jemastock/jemastock1606/jemastock160613678/59174364-simple-flat-design-colored-bar-graph-icon.jpg?ver=6
// Image 3 Reference: https://images.template.net/81461/Free-Athletics-Vector-JPG-01-1.jpg
// Image 4 Reference: https://static.vecteezy.com/system/resources/previews/025/267/711/non_2x/boy-character-is-playing-and-dribbling-a-basketball-can-be-used-for-basketball-sport-activity-training-etc-flat-illustration-free-vector.jpg
// Image 5 Reference: https://cache.getarchive.net/Prod/thumb/cdn12/L3Bob3RvLzIwMTYvMTIvMzEvc3RhdGlzdGljcy1ncmFwaGljLWJ1c2luZXNzLWJ1c2luZXNzLWZpbmFuY2UtODZkOGJjLTEwMjQuanBn/320/320/jpg
// Image 6 Reference: https://datavizproject.com/wp-content/uploads/types/3D-Stream-Graph.png