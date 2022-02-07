import { fragmentFrom } from 'elix/src/core/htmlLiterals'
import C360Card from './card'
import docs from './docs.mdx'

import demo from '../../demo.css'
import imageFile from '../../../static/demo/cars3-small.jpg'

const cardContent = {
  headlineText: "This is a small H3 headline",
  bodyText: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
  buttonText: "CTA button",
  image: {
    src: imageFile,
    alt: "Placeholder",
  },
}

export default {
  title: 'C360 Components/Card',
  compontent: C360Card,
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
      <c360-headline slot="header" level="h2" size="medium">
        This story, the <em>Base</em> Card, uses the following information:
      </c360-headline>

      <ul>
        <li>No optional representative image</li>
        <li>Card has no width limits because it is not present in a Card Group</li>
      </ul>
    </div>

    <c360-card>
      <span slot="header">${cardContent.headlineText}</span>

      <span slot="body">${cardContent.bodyText}</span>

      <span slot="cta">${cardContent.buttonText}</span>
    <c360-card>
  `
}

export const BaseWithImage = () => {
  return fragmentFrom.html`
    <style>
      ${demo}
    </style>

    <div class="intro">
      <c360-headline slot="header" level="h2" size="medium">
        This story, the <em>Base With Image</em> Card, uses the following information:
      </c360-headline>

      <ul>
        <li>Optional representative image, which has a border</li>
        <li>Card has no width limits because it is not present in a Card Group</li>
      </ul>
    </div>

    <c360-card>
      <span slot="header">${cardContent.headlineText}</span>

      <img slot="image" class="card-image card-image--with-border" src=${cardContent.image.src} alt=${cardContent.image.alt} />

      <span slot="body">${cardContent.bodyText}</span>

      <span slot="cta">${cardContent.buttonText}</span>
    <c360-card>
  `
}
