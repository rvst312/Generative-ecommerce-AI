const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: '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',
})

async function main() {
    const image = await openai.images.generate({
        model: "dall-e-3",
        prompt: "un diseño subrealista sobre una tienda de camisetas personalizables",
        n: 1,
        size: "1024x1024",
    });

    console.log(image.url);

    return image.url;
}

main();

// 2 centimos por imagen generada 1024x1024





