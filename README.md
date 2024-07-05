## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# How to deploy

 - Run `npm install` | `yarn install` to install all dependencies.
 - Run `npm start`   | `yarn run` to run the app locally.
 - You can find the project running on `localhost:3000`.

# Reminder

<div align="center">
    <img width="442" alt="image" src="https://github.com/Willikox/calendarioRedux/assets/38199474/4737d236-439f-4b13-9715-5ee54fe3a37a">
</div>

A data entry was created and can be observed within the indicated date. It is controlled by month in such a way that, if you want to enter a reminder in a specific month and year, the reminder will be there, and the data entry will be cleared. Reminders cannot exceed 30 characters.

If the reminder is set outside the current month, it can be seen in a shaded color, and by clicking on the shaded color, it will direct you to that month for modification.

# More Reminders

<div align="center">
    <img width="442" alt="image" src="https://github.com/Willikox/calendarioRedux/assets/38199474/da5141dd-a987-4341-bcbf-756847057afb">
</div>

By clicking, the information is retrieved, which can be modified such as the reminder, date, time, and city. If you do not want to modify and want a new reminder instead, you can click on an empty box in the calendar, and the data will be cleared.

The way to control more reminders is by clicking the '+3 more' button since I have 3 reminders, and according to the amount, you can see the number; which allows you to see the reminders made and ordered by time. Additionally, if I create a reminder, it will always be shown in the calendar at the earliest time.

# edit multiple reminders

<div align="center">
    <img width="442" alt="image" src="https://github.com/Willikox/calendarioRedux/assets/38199474/a50e0e29-2de9-4281-8fe8-d69bfa5a2f43">
</div>

In a modal, we can see all the reminders, and when hovering over them, they are selected thanks to the cursor pointer, and the color changes to select which one we want to modify. We select it, and the modal closes, retrieving the data so we can modify it. If we do not want to modify anything, clicking outside the modal will close it.

```javascript
const remindersReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_REMINDER':
            return [...state, action.payload];
        case 'UPDATE_REMINDER':
            return state.map(r => (r.id === action.payload.id ? action.payload : r));
        default:
            return state;
    }
};

export default remindersReducer;
```

```javascript
const remindersReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_REMINDER':
            return [...state, action.payload];
        case 'UPDATE_REMINDER':
            return state.map(r => (r.id === action.payload.id ? action.payload : r));
        default:
            return state;
    }
};

export default remindersReducer;
```

```javascript
const handleAddReminder = async (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const newReminder = {
      id: editReminder ? editReminder.id : Date.now(),
      text: formData.get('text'),
      date: formData.get('date'),
      time: formData.get('time'),
      city: formData.get('city')
    };
    const weather = await fetchWeather(newReminder.city, newReminder.date);
    newReminder.weather = weather;
    if (editReminder){
      updateReminder(newReminder)
      clearEditReminder();
    }else {
      addReminder(newReminder)
    };
    e.target.reset();
  };
```

There are some details such as the colors used for the text color, background, etc., which do not allow defining unique styles for this practice. The main focus was the implementation of Redux in the code, which allows us to better synthesize the code when making requests and not have to go through all the code, ideal for large projects. What I did was focus on best practices and divide into parts like editing and data entry. For example, we can see that for an edit, 'editReminder' was used, it will be updated to 'updateReminder', and for an entry, 'addReminder' was used.

# VisualCrossing

```javascript
const fetchWeather = async () => {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ecuador?unitGroup=metric&key=5LQWAFGK7VFALAM3SWURFYY8L&contentType=json`);
    const data = await response.json();
    return data.days[0].description;
  }
```

```javascript
const weather = await fetchWeather(newReminder.city, newReminder.date);
    newReminder.weather = weather;
```
The API used is VisualCrossing. By following the steps for API incorporation, we were able to use an address from Ecuador for this example with its included key. A unique key allows us to obtain weather data. In part of the previous code, we can see that through await, we make a request to wait for weather data, which we merge with newReminders.city obtained from fetchWeather. Feel free to ask if you have any questions about the code. It was submitted as a Fork to the repository, creating a branch, as I did not have access. I appreciate the opportunity and believe it meets the requested criteria, including the Bonuses. Thank you :)
