export async function base64convert(url, split) {
  const data = await fetch(url);
  console.log('data: ', data);
  const blob = await data.blob();

  const base64Data = await blobReader(blob, split);
  return base64Data;
}

export function blobReader(file, split) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(split ? base64data.split(",")[1] : base64data);
    };
  });
}
