import { TLocationAddress, TSocialMediaLinks, TSuccessMessage } from "../../type";

export type AgentiesListResponseDTO = {
  items:      AgentResponseDTO[];
  totalItems: number;
};

export type AgentResponseDTO = {
  id:                 number;
  full_name:          string;
  about_me:           string;
  avatar_url:         string;
  cover_photo_url:    null;
  designation:        null;
  category:           any[];
  verified:           boolean;
  personal_details:   PersonalDetails;
  services:           any[];
  service_description: string;
  address:            TLocationAddress;
  social_media_links: TSocialMediaLinks;
  role:               Role;
  agency:             Agency | null;
  created_at:         Date;
  updated_at:         Date;
  deals:              any[];
  properties:         any[];
}


export type PersonalDetails = {
  email:      string;
  phone:      string;
  experience: string;
  position:   string;
  pratice_areas: string[];
  website:    string;
  work_email: string;
  work_phone: string;
}

export type Role = {
  id:         number;
  name:       string;
  user_id:    number;
}

export type Agency = {
  id:              number;
  name:            string;
  logo_url:        string;
  cover_photo_url: string;
}
