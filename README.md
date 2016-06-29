# SFFoodTrucks
Hosted on [Heroku](http://foodtrucks-in-sf.herokuapp.com/)

#Challenge
Create a service that tells the user what types of food trucks might be found near a specific location on a map.

#Solution:
As a prototype, this application focuses more on front-end design and leverages the [CartoDB](https://cartodb.com/) mapping platform to illustrate the dataset made available through [SF OpenData](https://data.sfgov.org/). For additional design considerations, Bootstrap and Google Fonts were utilized.

I chose Rails for the backend for speed of set up and familiarity with the stack. [Rubocop](https://github.com/bbatsov/rubocop),  [Simplecov](https://github.com/colszowka/simplecov) and [Brakeman](https://github.com/presidentbeef/brakeman) were utilized for linting, test coverage and security analysis respectively.

#Scaling Considerations
- For the current tier of service from the mapping platform, the application is limited to 250MB data storage cap, no private datasets, no datasync, no external database connections or a stated uptime SLA.
- For the current tier of service for the hosting platform, the application is limited to 512MB of RAM, 2 different process types, no application metrics and the server will "sleep" if inactive for 30 minutes.
- Without any type of performance monitoring or visitor analytics having been implemented yet, planning for future scaling projections will be difficult.

#Stretch Goals
- Access user location via browser as a default setting for centering the map.
- Narrow the results down by closest 5 food trucks by distance.
- Make the truck listings filterable by food type.
- User authentication.
- Add ability to favorite certain vendors.
- Performance monitoring
- Visitor analytics

Here's another project I'm particularly proud of: [Codex](https://github.com/benvogcodes/codexproject)

Check me out on [LinkedIn](https://www.linkedin.com/in/benjaminvoglewede)
