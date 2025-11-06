import { poppins } from '@/app/fonts'
import Link from 'next/link'
import {
  GithubIcon,
  LinkedInIcon,
} from '../Icons'

const FooterMenu = () => {
  return (
    <div
      className={`flex flex-col items-center gap-4 font-light lg:flex-row lg:gap-8 ${poppins.className}`}>
      <ul className='flex items-center gap-2'>
        <li>
          <Link href="https://www.linkedin.com/in/fai-bin-onayq-ab079b20a//">
            <LinkedInIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/FaiOnayq">
            <GithubIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterMenu
