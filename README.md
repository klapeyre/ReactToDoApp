Simple README for ToDo App built with ReactJS (To Eventually Be Combined with RPi and Google Calendar on Browser Monitor Display)

This app was built using the create-react-app package through npm/yarn.
- Bootstrap and react-bootstrap dependencies were added for use of buttons
- Datepicker dependencies added for calendar when choosing dates
- Moment dependencies added for defaulting the date when creating a new todo

Functionality
- Two separate lists, for two people. Can add todos to each list
- Use of calendar widget to choose the date, which defaults to the current date
- Todos are sorted by date in ascending order
- Todos are saved to localstorage in the browser, so the state of the lists is maintained on refresh
- Can remove todos if you do not want them on the lists anymore
- Can cross off todos as complete if you simply want to mark them as done

Further functionality to implement
- Would like to re-write the app from scratch without bootstrapping from create-react-app
- Also use of Grid/Flex CSS to make it responsive
- Eventually connect to simple express server
- Port-forward router at home to this app, which will run on a Raspberry Pi, hooked up to a monitor
- Have a script that flips between Google Calendars and this To Do App every 60 seconds, leave in kitchen