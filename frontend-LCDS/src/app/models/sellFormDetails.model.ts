export class ISellFormDetails {
  id!: number;
  model!: string;
  brand!: string;
  year!: number;
  imageURL!: string;
  description!: string;
  mileage!: number;
  price!: number;
  color?: string;
  createdDate?: Date;

  sellerLastName?: string;
  sellerFirstName?: string;
  sellerPhoneNo?: string;
  sellerMail?: string;
}
