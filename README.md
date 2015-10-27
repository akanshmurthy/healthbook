# Healthbook

Welcome to Healthbook, a healthcare web application inspired by Dropbox and Facebook built using Ruby on Rails and React.js.

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

# Features

My minimum viable product of Healthbook allows patients to
  - create an account
  - login/logout using a custom authentication system that uses the BCrypt gem to hash passwords and session tokens
  - create/read/delete a newsfeed of personal health updates
  - create/read/delete comments on personal health updates
  - create/read/delete medical entries
  - store/view/delete medical photos/videos/files
  - real-time search for status updates/comments/medical entries
  - find nearby doctors who may be able to treat a condition
  - ask medical questions and see popular answers

# Details

This application utilizes Ruby v2.1.2, Rails v4.2.3, React.js v0.13.3, Bootstrap 3 and a Postgresql production database, all deployed on Aptible, a HIPAA-compliant cloud server. It follows the Flux architecture and uses a RESTful JSON API for all internal CRUD operations.

Third party APIs/plugins include Cloudinary for file upload,
BetterDoctor for doctor search, HealthTap for medical questions, timeago for time simplifications, and shepherd for user tours.

# Upcoming features
* Allow for doctor verification through Doximity API
* Invite doctors to view and comment on your status updates and medical profile
* Chat with doctors via instant messaging
* Better error handling

