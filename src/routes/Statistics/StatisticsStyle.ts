const statisticsStyles: StatisticsStyles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundImage: `url('/background.jpg')`, 
        //*********Image Reference**********************
        //https://st4.depositphotos.com/13349494/23275/i/450/depositphotos_232755656-stock-photo-grey-shabby-wooden-material-black.jpg"
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(8px)',
        padding: '30px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#ffffff'
    },
    boxContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '20px',
        alignItems: 'flex-start',
        width: '80%',
    },
    box: {
        backgroundColor: '#f0f0f0', // Greyish color
        padding: '60px', // Increase padding to make the boxes larger
        borderRadius: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        width: 'calc(33.33% - 20px)', // Adjust width to accommodate increased padding and maintain grid layout
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
    },
    boxTitle: {
        fontSize: '18px',
        marginBottom: '10px',
        color: '#333333'
    },
    boxContent: {
        fontSize: '16px',
        color: '#666666'
    }
};

export default statisticsStyles;
