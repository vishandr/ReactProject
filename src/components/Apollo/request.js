import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
query GetTitles{
	categories {
		name
  		}
	}`;

export const GET_ALL_PROD = gql`
query GetAllProducts{
	category (input: { title: "all" }){
	products{
		id
		name
		inStock
		gallery
  }
}
}`;

export const GET_CURRENCY = gql`
query GetCurrency {
	currencies{
		label
		symbol
  }
}`;

