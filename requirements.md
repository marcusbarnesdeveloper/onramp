# Submission Requirements
## Project Description
- A high level architectural overview of your web application. e.g. names, relationships and purposes of all components and relevant data models
- Brief description of the architectural design pattern that you leveraged (MVC, MVP, MVVM)
- Screenshots of each View and descriptions of the overall user flow as well as any place that you made distinct design decisions.  (Screenshots can be taken via any screenshot capture application or native methods).


At the top level app renders 3 components
header , main , footer
Footer is just text and no state and does not contain any other smaller components
  purpose: placeholder
Header contains the Logo, Search, and Celcius toggle components
 purpose: display logo, give access to search for a city to get weather info from, toggle from celcius to farnhiet inside of current and tabs
Main contains Tabs, WeatherCardMain, WeatherCardSecondary
 purpose: displays a variey of weather informaion in a card format
WeatherCardSecondary also contains a single weatheritem component

I feel like react is great for breaking down big applications into tiny ones and thats what i did with each component that needed another. each component is a view and its gets info, state, functions from the app.tsx. I have a controller file that reaches out the server and I  use typescript interface to design a model for the weather state

All State and functions having to do with state are passed down from App.tsx

                          App

Header                    Main                                 Footer
    Logo                     Tabs
    Search                   WeathercardMain
    CelciusToggle            WeatcherCardSecondary
                                WeatcherItem
![WeatherCardMainComponent](https://i.imgur.com/FVCKHat.png "Weather Card main")
![WeatherCardSecondaryComponent](https://imgur.com/VQ8hJ3f.png "Weather Card daily")
![FooterComponent](https://imgur.com/3Vf72kp.png "Footer")
![HeaderComponent](https://imgur.com/lRVI2xZ.png "Header")
![TabsComponent](https://imgur.com/VJjaAcr.png "Tab component")
![WeatherCardSecondaryComponent](https://imgur.com/l3XynN0.png "Weather Card hourly")
## Project Requirements
Please list examples of how your project meets the following requirements below:
- [x] Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.
    I am using react
- [x] Create an application that can be interacted with in a minimum of three different ways by the user.
    the user can enter city, enter a state, toggle between farenheit and celcius, switch betweent current informaion, daily, or hourly
- [x] Use of at least one Service.
      openweather api
      opencagedata
- [x] The usage of a specified architectural pattern (MVC, MVP, MVVM,  etc.)
      I followed an mvc. most components are just views with limited logic. I made an interface as a model for weather data, controllers reach out to services
- [x] Use of a [REST API](https://medium.com/@arteko/the-best-way-to-use-rest-apis-in-swift-95e10696c980).
      i am using express and node to serve data.
- [x] Usage of at least 5 UI components from the [material-ui/@core](https://material-ui.com/) library (if you are not using React, a comparable UI library is acceptable)  box,grid,typography,icon, styles, cardContent, Card,

- [x] An example of a reusable UI component that you have created and used in the app. This should be different than the 5 UI components from the vendor library.
i use weatheritem for both daily and hourly compoonents
<WeatherItem />



