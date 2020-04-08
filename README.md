# Sample React App

This project was initially a playground application from [JS playground](https://jscomplete.com/playground/rgs2.1) converted into a react app application for practice.

## Docker Running Instructions

__Build Image__

`docker build .`

__Tag Image__

`docker tag {imageid} react-image`

__Run Initial NPM Install__

`docker run -it --rm -v "$PWD":/project react-image npm install`

__Start NPM Server__

`docker run -it --rm -p 3000:8000 --name react-container -v "$PWD":/project react-image`

__View Page__

`http://localhost:3000`
