exports.handler = async (event, context) => {
    const response = await fetch('https://www.highperformanceformat.com/4ac78650522e2a12d6f5ae29674a29b8/invoke.js');
    const script = await response.text();
    return {
        statusCode: 200,
        body: script,
        headers: {
            'Content-Type': 'application/javascript',
        },
    };
};