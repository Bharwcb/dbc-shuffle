# DBC Shuffle

## Description:
DBC Shuffle is a 3-day project intended to simulate a real-world scenario of back-and-forth changing of client needs and requests for an application.  

Using DBC Shuffle, weekly groups and pair-programming partners are generated for all cohorts of Dev Bootcamp each week.  Our team designed a RESTful Rails app for an MVP implementing an algorithm to minimize repitition of students pair-programming with the same groups and partners.  

We promised a backend for teachers to login and manage group sizes and preferences for their cohorts each week, while giving all students public access to view their assigned groups. With the MVP we did not have time to implement much of a front-end, so this will be a personal project post-graduation..

## Personal Updates Since Project Closed

I made improvements on the public vs. teacher interface, including: 
- Hide teacher admin features (generate groups, etc.) from public/students
- Hide login from signed in teachers

## Challenges & Takeaways:

The largest challenge we faced was often having to rewrite features or adjust our models often while managing client expectations, to reach a middle ground we could deliver on time. 

During the scope of the project, I managed:
- Concepting and designing of the MVC
- Custom Devise gem set up (teacher login/authentication)
- All models, controllers & views for teacher admin and students, including RESTful routes for adding new cohorts and permissions
- Running client meetings to liason back to team

## Next Steps:

Beyond the scope of this 3 day project, on a teacher's profile page the "save" button would next persist groupings to the database.  Second, adding students to a cohort after it is initially created.  Lastly, DESIGN. The app is clearly very barebones.

## Running Locally

```sh
$ git clone https://github.com/Bharwcb/dbc-shuffle.git
$ cd dbc-shuffle
$ bundle install
$ bundle exec rake db:create db:migrate db:seed
$ bundle exec rails s
Sign up as a teacher, click on a cohort, choose group size, and click "Generate"
```

## Team Members:
- Brad Harris
- Michael Laurel
- Noah Naamad
- Maeve Tierney

