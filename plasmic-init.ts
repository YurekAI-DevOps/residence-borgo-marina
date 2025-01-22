import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "8txbjMb6FWt4Unj23r77q5";
export const projectApiToken = "IMtIAUUcE9hRZ0kyRYhLd85ZQ4ZYZjB2S1Z2yLzxLdV0SohF2Uc2855L44t5pU28ht1OXNEf4ZQwyEVwrkA";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
