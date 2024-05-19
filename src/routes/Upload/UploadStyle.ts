const uploadStyles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1400px', // Increased maxWidth
        margin: '0 auto',
        padding: '40px', // Increased padding
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    header: {
        marginBottom: '30px', // Increased marginBottom
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    headerText: {
        margin: '20px 0', // Increased margin
        fontSize: '2.5em', // Increased fontSize
        position: 'relative',
        paddingBottom: '10px',
        color: '#333',
    },
    headerUnderline: {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '5px',
        bottom: '0',
        left: '0',
        background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
        borderRadius: '5px',
        transform: 'translateY(10px) skewX(-15deg)',
    },
    logoImg: {
        width: '200px', // Increased width
        height: 'auto', // Maintain aspect ratio
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    uploadSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
        marginBottom: '30px', // Increased marginBottom
        padding: '30px', // Increased padding
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    uploadImage: {
        width: '150px', // Increased width
        height: 'auto', // Maintain aspect ratio
        marginRight: '30px', // Increased marginRight
    },
    fileInput: {
        marginBottom: '10px',
        fontSize: '1.2em', // Increased font size for better visibility
    },
    uploadButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff4b2b',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '15px 30px', // Increased padding
        cursor: 'pointer',
        fontSize: '1.2em', // Increased font size
    },
    preview: {
        marginTop: '20px', // Increased marginTop
        maxWidth: '100%',
        maxHeight: '300px', // Increased maxHeight
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    message: {
        marginTop: '20px', // Increased marginTop
        color: '#ff4b2b',
        fontSize: '1.2em', // Increased font size
    },
    footer: {
        marginTop: '30px', // Increased marginTop
        color: '#888',
        textAlign: 'center',
        fontSize: '1.2em', // Increased font size
    },
};

export default uploadStyles;
