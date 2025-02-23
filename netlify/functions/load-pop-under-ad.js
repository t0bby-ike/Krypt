exports.handler = async (event, context) => {
    const response = await fetch('https://pl25949423.effectiveratecpm.com/0b/e1/d4/0be1d4aeebbe71ebce21beecdf0f3d05.js');
    const script = await response.text();
    return {
        statusCode: 200,
        body: script,
        headers: {
            'Content-Type': 'application/javascript',
        },
    };
};