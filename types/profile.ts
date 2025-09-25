export interface Property {
  id: string;
  status: 'published' | 'pending' | 'rejected' | 'draft';
  mark: 'booked' | 'available';
  title: string;
  price: string;
  address: string;
  details: string;
  size: string;
  icons: string;
  timeAgo: string;
}

export interface PropertySection {
  title: string;
  count: string;
  properties: Property[];
}