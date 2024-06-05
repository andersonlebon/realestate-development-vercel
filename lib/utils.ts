import ImageKit from 'imagekit';

const IS_SERVER = typeof window === 'undefined';

export function getBaseUrl(path: string) {
  const baseURL = IS_SERVER
    ? process.env.NEXTAUTH_URL!
    : window.location.origin;
  return new URL(path, baseURL).toString();
}


export const getRadom = (array) => {
  if (!array) return {}
  return array[Math.floor(Math.random() * array?.length )]
}


export const generateImage  = ({originFileObj}) => {
  const imageKit = new ImageKit({
    publicKey: 'public_JujSSXM+QEZGWnpvMfmFxxjKVik=',
    privateKey: "private_OSXMiJxawN5Bnj1E2OvcNeONOt0=",
		urlEndpoint:'https://ik.imagekit.io/imp7suzrml',
  })

  return imageKit.upload({
    file: originFileObj,
    fileName: originFileObj.name
  })
}