// @flow

export default class Product {
  // #region TYPE PROPERTY DEFINITIONS
  id: number;
  name: string;
  slug: string;
  featured: boolean;
  description: string;
  shortDescription: string;
  sku: string;
  price: number;
  regularPrice: number;
  salePrice: number;
  dateOnSaleFrom: ?Date;
  dateOnSaleFromGmt: ?Date;
  dateOnSaleTo: ?Date;
  dateOnSaleToGmt: ?Date;
  onSale: boolean;
  relatedIds: number[];
  categories: { id: number, name: string, slug: string }[];
  images: { id: number, src: string, name: string, alt: string }[];
  attributes: {
    id: number,
    name: string,
    position: number,
    visible: boolean,
    variation: boolean,
    options: string[]
  }[];
  // #endregion

  constructor(json: {
    id: number,
    name: string,
    slug: string,
    featured: boolean,
    description: string,
    shortDescription: string,
    sku: string,
    price: number,
    regularPrice: number,
    salePrice: number,
    dateOnSaleFrom: ?Date,
    dateOnSaleFromGmt: ?Date,
    dateOnSaleTo: ?Date,
    dateOnSaleToGmt: ?Date,
    onSale: boolean,
    relatedIds: number[],
    categories: { id: number, name: string, slug: string }[],
    images: { id: number, src: string, name: string, alt: string }[],
    attributes: {
      id: number,
      name: string,
      position: number,
      visible: boolean,
      variation: boolean,
      options: string[]
    }[]
  }) {
    this.id = json.id;
    this.name = json.name;
    this.slug = json.slug;
    this.featured = json.featured;
    this.description = json.description;
    this.shortDescription = json.shortDescription;
    this.sku = json.sku;
    this.price = json.price;
    this.regularPrice = json.regularPrice;
    this.salePrice = json.salePrice;
    this.dateOnSaleFrom = json.dateOnSaleFrom;
    this.dateOnSaleFromGmt = json.dateOnSaleFromGmt;
    this.dateOnSaleTo = json.dateOnSaleTo;
    this.dateOnSaleToGmt = json.dateOnSaleToGmt;
    this.onSale = json.onSale;
    this.relatedIds = json.relatedIds;
    this.categories = json.categories;
    this.images = json.images;
    this.attributes = json.attributes;
  }
}
