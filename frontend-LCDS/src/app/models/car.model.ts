// export class ICar {
//   id!: number;
//   model!: string;
//   brand!: string;
//   year!: number;
//   imageURL!: string;
//   description!: string;
//   mileage!: number;
//   price!: number;
//   color?: string;
//   createdDate?: Date;
// }

export class ICar {
  id!: number;
  model!: string;
  brand!: string;
  year!: number;
  imageURL!: string;
  description!: string;
  mileage!: number;
  price!: number;
  color?: number;
  createdDate?: Date;

  sellerLastName?: string;
  sellerFirstName?: string;
  sellerPhoneNo?: string;
  sellerMail?: string;
}
