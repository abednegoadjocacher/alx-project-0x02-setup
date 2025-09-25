export interface CardProps{
    title: string;
    content: string;
}

export interface PostData {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface Post extends PostData {
  id: number;
  createdAt: string;
}

export interface ButtonProps {
  styles: string;
  title: string
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  posts?:PostProps[];
}

export interface UserProps {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

 export interface UsersPageProps {
    posts: UserProps[];
}
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}


