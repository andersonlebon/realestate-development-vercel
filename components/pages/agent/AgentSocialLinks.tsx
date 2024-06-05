import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

interface AgentSocialLinksProps {
  socialMediaLinks: SocialMediaLinks;
}

const AgentSocialLinks: React.FC<AgentSocialLinksProps> = ({ socialMediaLinks }) => (
  <div className="ltn__social-media-3 bg-white">
    <ul className="flex justify-center items-center">
      <li>
        <Link
          href={socialMediaLinks?.facebook || '#'}
          title="Facebook"
          target="_blank"
          className="flex justify-center items-center"
        >
          <FaFacebookF />
        </Link>
      </li>
      <li>
        <Link
          href={socialMediaLinks?.twitter || '#'}
          title="Twitter"
          target="_blank"
          className="flex justify-center items-center"
        >
          <FaTwitter />
        </Link>
      </li>
      <li>
        <Link
          href={socialMediaLinks?.instagram || '#'}
          title="Instagram"
          target="_blank"
          className="flex justify-center items-center"
        >
          <FaInstagram />
        </Link>
      </li>
    </ul>
  </div>
);

export default AgentSocialLinks;
