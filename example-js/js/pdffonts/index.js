async function base64convert (url, split) {
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

var malgun = async () => {
    return await base64convert('./malgun.ttf', true);
}

var malgunBold = async () => {
    return await base64convert('./malgunbd.ttf', true);
}