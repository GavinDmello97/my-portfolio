
![alt text](https://github.com/GavinDmello97/my-portfolio/blob/master/public/logo192.png "Logo Title Text 1")

# My Portfolio

A lightweight mobile-responsive React application showcasing my education, experience, projects, testimonies and some other information.

**Domain:** `Web Development`

**Tech stack:** `React.js, Bootstrap, HTML5, CSS3, Scss, JSON`

**DEMO** Check out [**my software developer porfolio**](https://gavindmello97.github.io/my-portfolio/#/) designed using this project, deployed on [**gh-pages**](https://www.npmjs.com/package/gh-pages)

## Project Tables

### User
| Parameters | Format/Types | Default | Description |
| :------------- |:-------:|:-----:|:---------|
| profile | User Profile | null | Container for  user profile image, personal information, social links, etc.
| about | string | "" | Container for user bio
| resume | User Resume | null |  Container for user's education, skills and employment history
| projects | Array(User Project) | null | Container for user's projects
| testimonies | Array(User Testimony) | null | Container for user's testimonies
| blogs | Array(User Blog) | null | Container for user's blogs



### User Profile
| Parameters | Format/Types | Default | Description |
| :------------- |:-------:|:-----:|:---------|
| first_name | string | "" | provide First name |
| middle_name | string | "" | provide Middle name |
| last_name | string | "" | provide Last name |
| job_title | string | "" | provide Job Title/Profile |
| age | number | 0 | provide Age |
| email | string | "" | provide Email |
| phone_country_code | string | "" | provide Phone's country code |
| phone | string | "" | provide Phone number |
| address | string | "" | provide Address/Demographics |
| social_links | SocialLinks| null | Container for a collection of social links such as github, linkedin, facebook, etc. |
| display_picture | string| "" | provide url for user's profile picture |


For other detailed tables, please review the [types file](https://github.com/GavinDmello97/my-portfolio/blob/master/src/config/types.tsx)
## Development Setup

### Cloning this repository on local machine
#### Using HTTPS 

```sh
git clone https://github.com/GavinDmello97/my-portfolio.git
```

**Using Github CLI**
```sh
gh repo clone GavinDmello97/my-portfolio
```

  



### Running the project on local machine

In the project directory, you can run:

`npm start` - Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

`npm test` - Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build` - Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


