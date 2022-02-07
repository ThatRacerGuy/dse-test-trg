import { fragmentFrom } from 'elix/src/core/htmlLiterals'
import C360CardGroup from './card-group'
import docs from './docs.mdx'

import demo from '../../demo.css'
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

  baseWithImagesText += `<c360-card slot="cards">
      <span slot="header">${cardContent[card].headlineText}</span>

      <img slot="image" class="card-image card-image--with-border" src=${cardContent[card].image.src} alt=${cardContent[card].image.alt} />

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

      <img slot="image" class="card-image" src=${cardContent[card].image.src} alt=${cardContent[card].image.alt} />

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
    <style>
      ${demo}
    </style>

    <div class="intro">
      <c360-headline slot="headline" level="h2" size="medium">
        This story, the <em>Base</em> Card Group, uses the following information:
      </c360-headline>

      <ul>
        <li>No optional headline</li>
        <li>3 columns for the Cards in the Card Group</li>
        <li>Cards do not contain the optional representative image</li>
      </ul>
    </div>

    <c360-card-group columns="3">
      ${baseText}
    <c360-card-group>
  `
}

export const BaseWithImages = () => {
  return fragmentFrom.html`
    <style>
      ${demo}
    </style>

    <div class="intro">
      <c360-headline level="h2" size="medium">
        This story, the <em>Base With Images</em> Card Group, uses the following information:
      </c360-headline>

      <ul>
        <li>Optional headline</li>
        <li>4 columns for the Cards in the Card Group</li>
        <li>Cards contain the optional representative image, which has a border</li>
      </ul>
    </div>

    <c360-card-group columns="4">
      <c360-headline slot="headline" level="h2" size="x-large">
        ${headlineText}
      </c360-headline>

      ${baseWithImagesText}
    <c360-card-group>
  `
}

export const BottomAligned = () => {
  return fragmentFrom.html`
    <style>
      ${demo}
    </style>

    <div class="intro">
      <c360-headline level="h2" size="medium">
        This story, the <em>Bottom Aligned</em> Card Group, uses the following information:
      </c360-headline>

      <ul>
        <li>Optional headline</li>
        <li>5 columns for the Cards in the Card Group</li>
        <li>Cards do not contain the optional representative image</li>
        <li>Buttons, the last elements of each card, are bottom-aligned</li>
      </ul>
    </div>

    <c360-card-group columns="5">
      <c360-headline slot="headline" level="h2" size="x-large">
        ${headlineText}
      </c360-headline>

      ${bottomAlignedText}
    <c360-card-group>
  `
}

export const BottomAlignedWithImages = () => {
  return fragmentFrom.html`
    <style>
      ${demo}
    </style>

    <div class="intro">
      <c360-headline slot="header" level="h2" size="medium">
        This story, the <em>Bottom Aligned With Images</em> Card Group, uses the following information:
      </c360-headline>

      <ul>
        <li>Optional headline</li>
        <li>3 columns for the Cards in the Card Group</li>
        <li>Cards contain the optional representative image, which doesn't have a border</li>
        <li>Buttons, the last elements of each card, are bottom-aligned</li>
      </ul>
    </div>

    <c360-card-group columns="3">
      <c360-headline slot="headline" level="h2" size="x-large">
        ${headlineText}
      </c360-headline>

      ${bottomAlignedWithImagesText}
    <c360-card-group>
  `
}
