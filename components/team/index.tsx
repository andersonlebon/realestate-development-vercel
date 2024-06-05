import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { AgentResponseDTO } from "../../hooks/agent";

type AgentItemProps = {
  data: AgentResponseDTO;
  baseUrl: string;
  // slug: string;
  additionalClassname: string;
};

const AgentItem = ({
  data,
  baseUrl,
  additionalClassname,
}: AgentItemProps) => {
  return (
    <>
      <div className={`ltn__team-item ${additionalClassname}`}>
        <div className="team-img">
          <img src={data.avatar_url || `/images/caleb.jpg`} alt="Image" />
        </div>
        <div className="team-info">
          <h4>
            <Link href={`/agents/${data.id}`}>{data.full_name}</Link>
          </h4>
          <h6 className="ltn__secondary-color">
            {data.designation || "No Designation"}
          </h6>
          <div className="ltn__social-media">
            <ul className="flex justify-center items-center">
              <li>
                <Link href={data.social_media_links?.facebook || "#"}>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href={data.social_media_links?.twitter || "#"}>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href={data.social_media_links?.instagram || "#"}>
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentItem;
