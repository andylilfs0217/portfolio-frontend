import Image from 'next/image'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Connect with me</p>
      <div>
        <a href="tel:16476840232" target="_blank" rel="noopener">
          <Image
            src="/phone_icon.png"
            alt="Phone Icon"
            width="30"
            height="30"
            style={{ margin: '10px', objectFit: 'contain' }}
          />
        </a>
        <a href="mailto:andylilfs@gmail.com" target="_blank" rel="noopener">
          <Image
            src="/mail_icon.png"
            alt="Email Icon"
            width="30"
            height="30"
            style={{ margin: '10px', objectFit: 'contain' }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/andyli0217/"
          target="_blank"
          rel="noopener"
        >
          <Image
            src="/linkedin/linkedin_icon.png"
            alt="LinkedIn Icon"
            width="30"
            height="30"
            style={{ margin: '10px', objectFit: 'contain' }}
          />
        </a>
        <a
          href="https://github.com/andylilfs0217"
          target="_blank"
          rel="noopener"
        >
          <Image
            src="/github/github_light_mode_icon.png"
            alt="GitHub Icon"
            width="30"
            height="30"
            style={{ margin: '10px', objectFit: 'contain' }}
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=16476840232"
          target="_blank"
          rel="noopener"
        >
          <Image
            src="/whatsapp/whatsapp_icon.png"
            alt="WhatsApp Icon"
            width="30"
            height="30"
            style={{ margin: '10px', objectFit: 'contain' }}
          />
        </a>
        <a
          href="https://www.facebook.com/andylilfs/"
          target="_blank"
          rel="noopener"
        >
          <Image
            src="/facebook/facebook_icon.png"
            alt="Facebook Icon"
            width="30"
            height="30"
            style={{ margin: '10px', objectFit: 'contain' }}
          />
        </a>
        <a
          href="https://www.instagram.com/andyli_lfs898/"
          target="_blank"
          rel="noopener"
        >
          <Image
            src="/instagram/instagram_icon.png"
            alt="Instagram Icon"
            width="30"
            height="30"
            style={{ margin: '10px', objectFit: 'contain' }}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UC8gxJNWe4Ms5UH-DNZs7SWQ"
          target="_blank"
          rel="noopener"
        >
          <Image
            src="/youtube/youtube_icon.png"
            alt="YouTube Icon"
            width="30"
            height="30"
            style={{ margin: '10px', objectFit: 'contain' }}
          />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Andy Li</p>
    </footer>
  )
}

export default Footer
