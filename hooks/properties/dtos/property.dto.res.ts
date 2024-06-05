import { PropertyFlag, PropertyType, ProperTyStatus, RateOption } from "../../../enums";
import { TLocationAddress, TSocialMediaLinks, responseMetaData } from "../../type";

export type PropertiesListResponseDTO = {
  items:   PropertyResponsetDTO[];
  meta:    responseMetaData
};

export type PropertyResponsetDTO = {
  id:              number;
  property_id:     null;
  title:           string;
  description:     string;
  property_type:   PropertyType;
  price:           number;
  commission:      number;
  currency:        string;
  rate:            RateOption;
  discount:        number;
  flag:            PropertyFlag;
  year_built:      Date;
  details:         PropertyDetailsInfo;
  dimensions:      null;
  animities:       Animities;
  features:        any[];
  images:          ImageData[];
  videos:          any;
  location:        {  district: string } & TLocationAddress;
  status:          ProperTyStatus;
  deals_counter:   number;
  reviews_counter: number;
  role_user:       'agent' | 'agency';
  rating:          number;
  agent:           AgentOwner | null;
  agency:          AgencyOwner | null;
  review_average:  number;
  reviews:         ReviewComments[];
  created_at:      string;
  updated_at:      Date;
  deals:           any[];
  clients:         any[];
  investors:       any[];
}

export type PropertyDetailsInfo = {
  rooms:       number;
  bedrooms:    number;
  bathrooms:   number;
  property_id: string;
}

export type ImageData = {
  fileId:       string;
  name:         string;
  filePath?:     string;
  fileType:     string;
  url:          string;
  size?:         number;
  versionInfo:  { id: string; name: string;};
  width?:        number;
  height?:       number;
  thumbnailUrl?: string;
  AITags?:       null;
}

export type AssociationOwner = {
  id:                 number;
  name:               string;
  about:              string;
  social_media_links: TSocialMediaLinks;
  email:              null;
  phone:              null;
  reviews_counter:    number;
}

export type AgentOwner = {
  avatar_url:        string;
  service_description: string;
} & AssociationOwner;

export type AgencyOwner = {
  logo_url:          string;
  header_intro:       string;
} & AssociationOwner;

export type ReviewComments = {
  id:         number;
  comment:    string;
  rate:     number;
  owner:       string;
  user_photo?: string;
  created_at: string;
  updated_at: string;
  user_id:    number;
}

export type Animities = {
  air_conditioning: boolean;
  alarm_system:     boolean;
  balcony:          boolean;
  cable_tv:         boolean;
  dish_washer:      boolean;
  elevator:         boolean;
  fire_place:       boolean;
  gym:              boolean;
  heating:          boolean;
  internet:         boolean;
  jacuzzi:          boolean;
  lawn:             boolean;
  microwave:        boolean;
  outdoor_shower:   boolean;
  pool:             boolean;
  sauna:            boolean;
  storage:          boolean;
  washer_dryer:     boolean;
  wifi:             boolean;
}
