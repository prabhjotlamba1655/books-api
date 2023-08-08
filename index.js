const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const books = [
  {
    id: 1,
    title: "Book 1",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 1",
    reviews: [
      { id: 1,  rating: 1, comment: "Good book" },
      { id: 2,  rating: 1, comment: "Excellent" },
    ],
  },
  {
    id: 2,
    title: "Book 2",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 2",
    reviews: [
      { id: 1, rating: 1, comment: "Good book" },
      { id: 2, rating: 2, comment: "Excellent" },
    ],
  },
  {
    id: 3,
    title: "Book 3",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 3",
    reviews: [
      { id: 1, rating: 3, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 4,
    title: "Book 4",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 4",
    reviews: [
      { id: 1, rating: 5, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 5,
    title: "Book 5",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 5",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 6,
    title: "Book 6",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 6",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 7,
    title: "Book 7",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 7",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 8,
    title: "Book 8",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 8",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 9,
    title: "Book 9",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 9",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 10,
    title: "Book 10",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 10",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 11,
    title: "Book 11",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 11",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 12,
    title: "Book 12",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 12",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 13,
    title: "Book 13",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 13",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 14,
    title: "Book 14",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 14",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 15,
    title: "Book 15",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 15",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 16,
    title: "Book 16",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 16",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 17,
    title: "Book 17",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 17",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 18,
    title: "Book 18",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 18",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 19,
    title: "Book 19",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 19",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 20,
    title: "Book 20",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 20",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 21,
    title: "Book 21",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 21",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 22,
    title: "Book 22",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 22",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 23,
    title: "Book 23",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 23",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 24,
    title: "Book 24",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 24",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 25,
    title: "Book 25",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 25",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 26,
    title: "Book 26",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 26",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 27,
    title: "Book 27",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 27",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 28,
    title: "Book 28",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 28",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 29,
    title: "Book 29",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 29",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 30,
    title: "Book 30",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 30",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  {
    id: 31,
    title: "Book 31",
    img: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    price: "45.00",
    authorName: "J.K Rowling",
    rating: 0,
    shortDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 31",
    reviews: [
      { id: 1, rating: 4, comment: "Good book" },
      { id: 2, rating: 5, comment: "Excellent" },
    ],
  },
  // Add more book data...
];

function calculateAverageRating(book) {
  if (!book.reviews || book.reviews.length === 0) {
    return 0; // Default to 0 if there are no reviews
  }

  const totalRating = book.reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / book.reviews.length;

  return averageRating;
}



app.get("/api/books", (req, res) => {
  
  books.forEach(book => {
    const averageRating = calculateAverageRating(book);
    book.rating = averageRating; 
  });
  books.sort((a, b) => b.rating - a.rating);
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedBooks = books.slice(startIndex, endIndex);
  
  res.json({
    data: paginatedBooks,
    totalItems: books.length, // Include the totalItems count in the response
  });
});

app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    res.status(404).json({ message: "Book not found" });
  } else {
    res.json({ data: book });
  }
});

app.post("/api/books/:id/reviews", (req, res) => {
  const { id } = req.params;
  const {description, rating } = req.body;
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    res.status(404).json({ message: "Book not found" });
  } else {
    const newReview = {
      id: Date.now(),
      rating,
      comment: description,
    };
    book.reviews.push(newReview);
    const averageRating = calculateAverageRating(book);
    book.rating = averageRating; 
    res.json({ message: "Review added successfully", review: newReview });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
