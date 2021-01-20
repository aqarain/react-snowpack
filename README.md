# React Snowpack

This is a very simple react project build using **Snowpack** instead of Webpack (the default bundler)

## Goal
The goal of this project is to show how Snowpack can be integrated into a React project and how different it is performance wise from Webpack

## Snowpack
> ✨ Snowpack is a lightning-fast frontend build tool.

It is a potential replacement for Webpack or Parcel.

It has over 16k github stars.

There is almost no learning curve, if you are familiar with Webpack.

Snowpack claims: 
> "Once you try it, it's impossible to go back to anything else." 

***Turns it, they are right!***

## How Snowpack works and why is it better?
Webpack has a web-server which is used while development. So, whenever you save a file, it rebuilds the entire application, rebundles it and serves it back to the browser.

Snowpack, on the other hand, doesn't rebundle the entire app. It only updates/change the file you have changed. Your entire app is cached.

Let's say you make a change to `FileB`, it only rebuilds the `FileB` **But, it only does that when you need it the browser.** So, if that file is not being used in your browser the time you press `ctrl+s`, Snowpack doesn't rebundle anything. **It only rebundles when the browser needs it in the browser.**

## To get started:
1. Clone the repo
2. Run the following command:
	 ```npm run start``` 
   ```yarn start```
  
  
Links
[Snowpack](https://www.snowpack.dev)
