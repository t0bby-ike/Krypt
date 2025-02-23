exports.handler = async (event, context) => {
    const response = await fetch('https://pl25949916.effectiveratecpm.com/5e312d546ef05f84b4a69bfa056c0d8c/invoke.js');
    const script = await response.text();
    return {
        statusCode: 200,
        body: script,
        headers: {
            'Content-Type': 'application/javascript',
        },
    };
};