exports.handler = async (event, context) => {
    const response = await fetch('https://pl25949899.effectiveratecpm.com/cd/88/57/cd88574e56a8b5884bc4dbfcfd79c869.js');
    const script = await response.text();
    return {
        statusCode: 200,
        body: script,
        headers: {
            'Content-Type': 'application/javascript',
        },
    };
};