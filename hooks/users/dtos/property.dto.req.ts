import { ProperTyStatus, PropertyFlag, PropertyType, RateOption } from "../../../app/enums";
import { Animities, PropertyDetails } from "./property.dto.res";

export type PropertiesRequestDTO = {
  id:            number;
  property_id:   null;
  title:         string;
  description:   string;
  property_type: PropertyType;
  price:         number;
  commission:    number;
  currency:      string;
  rate:          RateOption;
  year_built:    Date;
  flag:          PropertyFlag;
  details:       PropertyDetails;
  dimensions:    null;
  animities:     Animities;
  features:      any[];
  images:        string[];
  videos:        any;
  location:      Location;
  status:        ProperTyStatus;
  agent:         any;
  agency:        any;
  created_at:    Date;
  updated_at:    Date;
  deals:         any[];
  clients:       any[];
  investors:     any[];
}