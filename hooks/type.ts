export type queryParamsType = {
  page?: number;
  pageSize?: number;
  search?: string;
  sort_by?: 'name' | 'title' | 'location';
  itemsPerPage?: number;
};

export type TSuccessMessage = {
  message: string;
  statusCode: number;
};

export type TPaginationResponse = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
};

export type TLocationAddress = {
  address:  string;
  city:     string;
  state:    string;
  country:  string;
  // district?: string;
  zip_code: null;
}

export type TSocialMediaLinks = {
  twitter:   string;
  youtube:   string;
  facebook:  string;
  linkedin:  string;
  instagram: string;
}


export type responseMetaData = {
  current_page: number;
  per_page: number;
  total_count: number;
  total_pages: number;
};