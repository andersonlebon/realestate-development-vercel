import { ProperTyStatus, PropertyFlag, PropertyType, RateOption } from "../../../enums";
import { AgentResponseDTO } from "../../agent";
import { PropertyDetailsInfo } from "../../properties/dtos/property.dto.res";
import { TLocationAddress, TSocialMediaLinks, TSuccessMessage } from "../../type";

export type AgenciesListResponseDTO = {
  items:      AgencyItemResponseDTO[];
  totalItems: number;
};

export type AgencyItemResponseDTO = {
  id:                 number;
  name:               null | string;
  about:              string;
  logo_url:           string;
  cover_photo_url:    string;
  header_intro:       string;
  verified:           boolean;
  rent:               boolean;
  budget:             string[];
  propertyTypes:      string[];
  category:           string[];
  date_of_establishment: Date | string;
  agents_counter:     number;
  deals_counter:      number;
  properties_counter: number;
  reviews_counter:    number;
  personal_details:   PersonalDetails;
  services:           ServicesResponse[];
  location:            TLocationAddress;
  social_media_links: TSocialMediaLinks;
  fa_questions:       FaQuestion[];
  role:               Role;

  created_at:         Date;
  updated_at:         Date;
  agents:             AgentResponseDTO[] | null;
  deals:              any[];
  properties:         PropertyAssociation[];
}

export type PersonalDetails = {
  email:      string;
  phone:      string;
  experience: number;
  position:   string;
  pratice_areas: string[];
  website:    string;
  work_email: string;
  work_phone: string;
}

export type Role = {
  id:         string;
  name:       string;
  user_id:    number;
}

export type FaQuestion = {
  id:                    number;
  title:                 string;
  description:           string;
  type:                  null;
  agency_id:             number;
  video_explanation_url: string;
}

export type ServicesResponse = {
  icon:         number;
  title:       string;
  description: string;
  type:        number     
}


export type PropertyAssociation = {
  id:            number;
  property_id:   null;
  title:         string;
  property_type: PropertyType;
  price:         number;
  commission:    number;
  currency:      string;
  rate:          RateOption;
  year_built:    Date;
  flag:          PropertyFlag;
  details:       PropertyDetailsInfo;
  status:        ProperTyStatus;
  location:      string;
}

