import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "w8smplyk",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skvMjV2ipPhC9uFj1AFtxCrJSpNgjEd5wzP2BpuPcUvJYRu3ivWLOrIOM1TovzdLzGbdauh5uKD1g6dIcJhz7UY0RZfMRfMStaZjRPC0efmhoIRaQngmVrkFpOAagUEePt35URq7uRHl5Z2Fx2TDCwiat722BtL4ZZFU2U7sfzGPIxQcLFvM",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
