export async function base64convert (url, split) {
    const data = await fetch(url);
    const blob = await data.blob();

    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
        const base64data = reader.result;
        resolve(split ? base64data.split(',')[1] : base64data);
        }    
    });
}