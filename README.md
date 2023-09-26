Criteria of 3 pages:
---
- Login or create account page
- Homepage/dashboard/timeline
- Interactive page where we could interact (like a post with comment threads etc...)

 App Flow
---
Sequence of Pages starting from Login
```mermaid
graph LR;
    Login-->Home;
    Home-->Dashboard;
```

Sequence of Pages starting from SignUp
```mermaid
graph LR;
    SignUp->Login;
```

Page Descriptions
---
#### Login
---
>___INSERT SAMPLE DESIGN___

A page that asks user inputs of the following info;
- Email
- Password

__Related Files__
- LoginView.jsx
- LoginLayout.jsx

---
#### SignUp
>___INSERT SAMPLE DESIGN___

A page that asks user inputs of the following info;
- Email
- Username
- Password
- Birthdate
- Profile Picture

__Related Files__
- SignUpView.jsx
- SignUpLayout.jsx

---
#### Home
>___INSERT SAMPLE DESIGN___

Similar to a For You Page. It houses all user inputted data in a [twitter](www.twitter.com) or [reddit](www.reddit.com) format.

__Related Files__
- HomeView.jsx
- HomeLayout.jsx

---
#### Dashboard
>___INSERT SAMPLE DESIGN___

A profile page where users can see their own inputted data.

__Related Files__
- DashboardView.jsx
- DashboardLayout.jsx

-----

> ALL INPUTTED ARE TENTATIVE EXCEPT FOR THE CRITERIA
