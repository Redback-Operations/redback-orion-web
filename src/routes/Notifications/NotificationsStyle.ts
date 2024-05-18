const notificationStyles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    headerText: {
        margin: '10px 0',
        fontSize: '2em',
        position: 'relative',
        paddingBottom: '10px',
        color: 'black',
    },
    headerUnderline: {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '5px',
        bottom: '0',
        left: '0',
        background: 'linear-gradient(to right, red, purple)',
        borderRadius: '5px',
        transform: 'translateY(10px) skewX(-15deg)',
    },
    logoImgContainer: {
        position: 'fixed',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    logoImg: {
        width: '150px',
        height: 'auto', // Maintain aspect ratio
    },
    content: {
        display: 'flex',
        justifyContent: 'center', // Align items horizontally to the center
        width: '100%',
        alignItems: 'flex-start', // Align items vertically to the top
    },
    list: {
        flex: 2,
        marginBottom: '20px',
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        border: '1px solid #eee',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginBottom: '10px',
        fontSize: '1.2em',
    },
    listItemSelected: {
        backgroundColor: '#f0f0f0',
    },
    listItemIndex: {
        marginRight: '10px',
        fontWeight: 'bold',
    },
    notificationContent: {
        flexGrow: 1,
        marginLeft: '20px', // Add margin to create a gap
    },
    notificationTitle: {
        fontWeight: 'bold',
    },
    deleteButton: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'red',
        padding: '0 5px',
    },
    details: {
        border: '1px solid #eee',
        borderRadius: '5px',
        padding: '20px',
        width: '100%',
        fontSize: '1.2em',
    },
    footer: {
        marginTop: '20px',
        color: '#888',
        textAlign: 'center',
        fontSize: '1em',
    },
};

export default notificationStyles;
