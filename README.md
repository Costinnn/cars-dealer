# Car dealer website with embedded Content Management System (CMS)
This is a React website, build using [Next.js](https://nextjs.org/) , and [Sanity.io](https://www.sanity.io/) as CMS

<img src="https://github.com/Costinnn/cars-dealer/assets/103998434/7c338bf1-e6cf-4179-b37c-e40b25d57b80" width=70% >

## Introduction - project's aim
The purpose of this project is to experiment with a CMS solution for various types of websites, so that you can deliver a digital product to a client in a short time. After a research I decided to choose Sanity.io because it seemed to me the most optimized for performance next to Wordpress Headless CMS, Strapi, Payload or Hygraph.

## Technologies
The technologies used in this project seem to me to be very efficient and oriented towards creating an efficient and easy-to-modify application in subsequent updates, and these are:

### React
React, a powerful library used in the front end of both applications, which helps you structure and organize in an easy-to-understand way, both javascript and jsx code.

### Next.js
Next.js a framework that brings major improvements to applications created with React that gives developers the option to create with server-side rendering and static websites.

### Sanity.io
Sanity was used as a headless CMS for an easy introduction of content on the website using an easy-to-use dashboard.

### HTML & SCSS
HTML & SCSS basic languages for web applications, I choosed SCSS over CSS only because it's nested structure, which helps me understand faster HTML components hierarchy.

## Dependencies :

#### Axios
I used axios to access the API route for contact form.

#### Nodemon
I used Nodemon to connect the contact form with gmail.

## What I learned?
This is the first project where I started using Typescript and I can say that I can already see the benefits and advantages. At the same time, I also used the GROQ language to filter the results received from Sanity.io

## Functionalities

#### This is the main page where user can see a list of posts and and filter them according to his own needs
<img src="https://github.com/Costinnn/cars-dealer/assets/103998434/e822f1a1-0802-46bf-bf3f-b82db6a709c8" width=48%><img hspace="10" src="https://github.com/Costinnn/cars-dealer/assets/103998434/489bdf95-d2d3-475a-8e2a-d539eb3662a4" width=48%>
======

#### This is the post page, where user can see all details related to that specific car. The image gallery is custom coded by me.
<img src="https://github.com/Costinnn/cars-dealer/assets/103998434/a680edef-6dc1-45ff-8727-d6b59c858d7c" width=48%><img hspace="10" src="https://github.com/Costinnn/cars-dealer/assets/103998434/3b751766-88f5-4b97-afce-c6306f3aa781" width=48%>
======

#### This is the contact page where users can contact the owner
<img src="https://github.com/Costinnn/cars-dealer/assets/103998434/33c435c6-c22e-47aa-b35f-f8d525788d47" width=70%>
======

#### This is the Sanity.io dashboard embedded directly into Next.js app, where the owner can login and update every post on the website.
<img src="https://github.com/Costinnn/cars-dealer/assets/103998434/865e0264-c01c-42f7-89fd-87b4ab989768" width=70%>
======


## How to install the app on your computer

#### Required environment variables:

NEXT_PUBLIC_SANITY_PROJECT_ID=

NEXT_PUBLIC_SANITY_DATASET=

NODEMAILER_EMAIL=

NODEMAILER_PW=

## Run the application

First, download the code and run 
```
npm install
```
then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

