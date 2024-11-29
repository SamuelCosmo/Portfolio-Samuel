import { StaticImageData } from 'next/image'
import byop from '../../../../public/assets/work/byop-excess.png'
import byop_mobile from '../../../../public/assets/work/byop-excess-mobile.png'
import ssi from '../../../../public/assets/work/ssi-excess.png'
import ssi_mobile from '../../../../public/assets/work/ssi-excess-mobile.png'
import medicaid from '../../../../public/assets/work/medicaid-excess.png'
import medicaid_mobile from '../../../../public/assets/work/medicaid-excess-mobile.png'
import medical from '../../../../public/assets/work/medical-excess.png'
import medical_mobile from '../../../../public/assets/work/medical-excess-mobile.png'
import wic from '../../../../public/assets/work/wic-excess.png'
import wic_mobile from '../../../../public/assets/work/wic-excess-mobile.png'
import angel from '../../../../public/assets/work/angel-mobile.png'
import angel_mobile from '../../../../public/assets/work/angel-mobile-mobile.png'
import unlimited from '../../../../public/assets/work/boost-unlimited.png'
import unlimited_mobile from '../../../../public/assets/work/boost-unlimited-mobile.png'
import galaxy from '../../../../public/assets/work/boost-galaxy.png'
import galaxy_mobile from '../../../../public/assets/work/boost-galaxy-mobile.png'
import iphone from '../../../../public/assets/work/boost-iphone.png'
import iphone_mobile from '../../../../public/assets/work/boost-iphone-mobile.png'
import boost_byop from '../../../../public/assets/work/boost-byop.png'
import boost_byop_mobile from '../../../../public/assets/work/boost-byop-mobile.png'
import multilines from '../../../../public/assets/work/boost-multilines.png'
import multilines_mobile from '../../../../public/assets/work/boost-multilines-mobile.png'
import react from '../../../../public/svg/work/react.svg'
import sass from '../../../../public/svg/work/sass.svg'
import typescript from '../../../../public/svg/work/typescript.svg'

export interface ImageProps {
  image: StaticImageData
  alt: string
}

export interface Props {
  web_title: string
  domain: string
  image: StaticImageData
  image_mobile: StaticImageData
  technologies: ImageProps[]
}

export interface ComponentProps {
  showModal: (value: boolean) => void
  changeModalContent: (value: any) => void
}

export const expertises: Props[] = [
  {
    web_title: 'Excess - Byop',
    domain: 'https://excess-byop.1wireless.com',
    image: byop,
    image_mobile: byop_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Excess - SSI',
    domain: 'https://excess-ssi.1wireless.com',
    image: ssi,
    image_mobile: ssi_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Excess - Medicaid',
    domain: 'https://excess-medicaid.1wireless.com',
    image: medicaid,
    image_mobile: medicaid_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Excess - Medical',
    domain: 'https://excess-medical.1wireless.com',
    image: medical,
    image_mobile: medical_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Excess - Wic',
    domain: 'https://excess-wic.1wireless.com',
    image: wic,
    image_mobile: wic_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Angel Mobile',
    domain: 'https://www.getangelmobile.com',
    image: angel,
    image_mobile: angel_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Unlimited',
    domain: 'https://boostaffiliate.com/unlimited',
    image: unlimited,
    image_mobile: unlimited_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Galaxy',
    domain: 'https://boostaffiliate.com/access-galaxy',
    image: galaxy,
    image_mobile: galaxy_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Iphone',
    domain: 'https://boostaffiliate.com/access-iphone',
    image: iphone,
    image_mobile: iphone_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Byop',
    domain: 'https://boostaffiliate.com/bring-your-device',
    image: boost_byop,
    image_mobile: boost_byop_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Multilines',
    domain: 'https://boostaffiliate.com/multilines',
    image: multilines,
    image_mobile: multilines_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
]
