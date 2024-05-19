// SettingsStyle.js
const settingsStyles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        color: '#333', // Default text color
    },
    header: {
        marginBottom: '30px',
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    headerText: {
        margin: '20px 0',
        fontSize: '2.5em',
        fontWeight: 'bold', // Bold text for headings
        position: 'relative',
        paddingBottom: '10px',
        color: '#333', // Default color
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
        width: '200px',
        height: 'auto',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    formContainer: {
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    section: {
        marginBottom: '20px',
    },
    label: {
        marginBottom: '15px',
        fontSize: '1.2em',
        color: '#333', // Default color
    },
    input: {
        padding: '10px',
        fontSize: '1.2em',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginTop: '5px',
        width: '100%',
    },
    checkbox: {
        marginRight: '10px',
    },
    select: {
        padding: '10px',
        fontSize: '1.2em',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginTop: '5px',
        width: '100%',
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: '#ff416c',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.2em',
        marginTop: '20px',
    },
    dangerButton: {
        padding: '10px 20px',
        backgroundColor: '#ff4b2b',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1.2em',
        marginTop: '10px',
        marginBottom: '10px',
    },
    footer: {
        marginTop: '30px',
        color: '#888',
        textAlign: 'center',
        fontSize: '1.2em',
    },
};

const darkModeStyles = {
    headerText: {
        color: '#fff', // White color for dark mode
        fontWeight: 'bold', // Bold font weight for headings
    },
    label: {
        color: '#fff', // White color for dark mode
    },
    heading: {
        color: '#000', // Black color for headings in dark mode
    },
    subheading: {
        color: '#000', // Black color for subheadings in dark mode
    },
};

export { settingsStyles, darkModeStyles };
