# Calculator built using REACTJS

## Description
A simple cactus themed calculator application built using **ReactJS**. The layout was created using **Materialize**. The mathematical functions of the calculator include addition, subtraction, division, multiplication, modulo, percentage, and signing. The functionality is limited to only two number operations.

## Functionality
This calculator utilizes the manipulation of states in order to grab data and perform computations. Values entered are sent to the `displayValue`. The value of this is then stored into another state variable called `value1` once an operation is selected. When the equals operation is selected, the desired function is performed using `value1` and the current `displayValue`. Other state variables such as `opstatus` and `active` determine whether an operation is being performed currently or if an operation has been perform respectively. These state primarily prevent newer inputs from concatenating with the current `displayValue`.

## Screenshots
![screenshot](https://user-images.githubusercontent.com/36168517/45685668-f33b2800-bafe-11e8-87ff-5b0fa555cf67.PNG)


## Technologies Used
- [ReactJS](https://reactjs.org/): Used to create the client-side funcitonality such as the HTML, CSS, and page layout.
- [Materialize](https://materializecss.com/): Used to assist in establishing the layout and color scheme.

## The Site is live!
[Click here to see the page on Github Pages!](https://marviesolis.github.io/calculator/)