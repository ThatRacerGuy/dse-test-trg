import { fragmentFrom } from 'elix/src/core/htmlLiterals'
import C360CardGroup from './card-group'
import docs from './docs.mdx'

import imageFile1 from '../../../static/demo/cars1.jpg'
import imageFile2 from '../../../static/demo/cars2.jpg'
import imageFile3 from '../../../static/demo/cars3.jpg'
import imageFile4 from '../../../static/demo/cars4.jpg'
import imageFile5 from '../../../static/demo/cars5.jpg'

const headlineText = `This is an x-large H2 headline`;
const cardContent = [
  {
    headlineText: "This is a small H3 headline",
    bodyText: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
    buttonText: "CTA button",
    image: {
      src: imageFile3,
      alt: "Placeholder",
    },
  },
  {
    headlineText: "This is a small H3 headline",
    bodyText: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
    buttonText: "CTA button",
    image: {
      src: imageFile5,
      alt: "Placeholder",
    },
  },
  {
    headlineText: "This is a small H3 headline",
    bodyText: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
    buttonText: "CTA button",
    image: {
      src: imageFile2,
      alt: "Placeholder",
    },
  },
  {
    headlineText: "This is a small H3 headline",
    bodyText: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
    buttonText: "CTA button",
    image: {
      src: imageFile1,
      alt: "Placeholder",
    },
  },
  {
    headlineText: "This is a small H3 headline",
    bodyText: "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
    buttonText: "CTA button",
    image: {
      src: imageFile4,
      alt: "Placeholder",
    },
  }
];

let baseText = '';
let baseWithImagesText = '';
let bottomAlignedText = '';
let bottomAlignedWithImagesText = '';

for (const card in cardContent) {
  baseText += `<c360-card slot="cards">
      <span slot="header">${cardContent[card].headlineText}</span>

      <span slot="body">${cardContent[card].bodyText}</span>

      <span slot="cta">${cardContent[card].buttonText}</span>
    </c360-card>`;

  baseWithImagesText += `<c360-card slot="cards" images="with-borders">
      <span slot="header">${cardContent[card].headlineText}</span>

      <img slot="image" src=${cardContent[card].image.src} alt=${cardContent[card].image.alt} />

      <span slot="body">${cardContent[card].bodyText}</span>

      <span slot="cta">${cardContent[card].buttonText}</span>
    </c360-card>`;

  bottomAlignedText += `<c360-card slot="cards" align="stretch">
      <span slot="header">${cardContent[card].headlineText}</span>

      <span slot="body">${cardContent[card].bodyText}</span>

      <span slot="cta">${cardContent[card].buttonText}</span>
    </c360-card>`;

  bottomAlignedWithImagesText += `<c360-card slot="cards" align="stretch">
      <span slot="header">${cardContent[card].headlineText}</span>

      <img slot="image" src=${cardContent[card].image.src} alt=${cardContent[card].image.alt} />

      <span slot="body">${cardContent[card].bodyText}</span>

      <span slot="cta">${cardContent[card].buttonText}</span>
    </c360-card>`;
}

export default {
  title: 'C360 Components/Card Group',
  component: C360CardGroup,
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const Base = () => {
  return fragmentFrom.html`
    <c360-card-group columns="3">
      ${baseText}
    </c360-card-group>
  `
}

export const BaseWithImages = () => {
  return fragmentFrom.html`
    <c360-card-group columns="4">
      <span slot="headline">${headlineText}</span>

      ${baseWithImagesText}
    </c360-card-group>
  `
}

export const BottomAligned = () => {
  return fragmentFrom.html`
    <c360-card-group columns="5">
      <span slot="headline">${headlineText}</span>

      ${bottomAlignedText}
    </c360-card-group>
  `
}

export const BottomAlignedWithImages = () => {
  return fragmentFrom.html`
    <c360-card-group columns="3">
      <span slot="headline">${headlineText}</span>

      ${bottomAlignedWithImagesText}
    </c360-card-group>
  `
}

export const Single = () => {
  return fragmentFrom.html`
    <c360-card-group>
      <span slot="headline">${headlineText}</span>

      <c360-card slot="cards" images="with-borders">
        <span slot="header">${cardContent[0].headlineText}</span>

        <img slot="image" src=${cardContent[0].image.src} alt=${cardContent[0].image.alt} />

        <span slot="body">${cardContent[0].bodyText}</span>

        <span slot="cta">${cardContent[0].buttonText}</span>
      </c360-card>
    </c360-card-group>
  `
}
