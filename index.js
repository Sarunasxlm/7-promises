async function kelione (charge, total) {

    return new Promise((resolve, reject) => {
    setTimeout(() => {
resolve((charge*5) + total)
    }, 1000);
});
};

(async () => {
    console.log("Start");
try {
    const keleivis1 = await kelione(2, 0);
    console.log('uzdirbo' + keleivis1 + '$');

    const keleivis2 = await kelione(3, keleivis1);
    console.log('uzdirbo' + keleivis2 + '$');

    const keleivis3 = await kelione(1, keleivis2);
    console.log('uzdirbo' + keleivis3 + '$');

    const keleivis4 = await kelione(1, keleivis3);
    console.log('uzdirbo' + keleivis4 + '$');

    const keleivis5 = await kelione(4, keleivis4);
    console.log('uzdirbo' + keleivis5 + '$');
} catch (error) {
    console.log(error)
}
    console.log("done");
})();