
User.create!({id: 1, user_name: "Mr. Holmes", password_digest: "$2a$10$oZc6pdXFTd/xEreC5P8Qku1DeunUBz8EOxJwCFn8Jno/REj9bDoo2", session_token: "7nffgOd7AYqYZSxVbLPDaQ", url_string: "http://res.cloudinary.com/dy1hwxj4e/image/upload/v1446424981/phzz7qictzgffktltdrr.png"})

User.create!({id: 2, user_name: "Dr. Watson", password_digest: "$2a$10$yPy52UUg2NY8eWW94hxZj.oNIsjV5GqNJwSPbdMgd1sXK.NQSUu7.", session_token: "91ZfT0A72wtLsmAbn8fevw", url_string: "http://res.cloudinary.com/dy1hwxj4e/image/upload/v1446445161/fgp9pheq7m4tnnlmsm1q.jpg", is_doctor: true})

Post.create!({id: 1, body: "I am blind as a mole.", user_id: 1})
Post.create!({id: 2, body: "My mental acuity tires me.", user_id: 1})
Post.create!({id: 3, body: "I can hear voices in my head.", user_id: 1})

Comment.create!({body: "Perhaps, you should see a doctor.", user_id: 2, post_id:3})

Notification.create!({body: "Dr. Watson commented on your post.", notifyee_id: 1, notifier_id: 2})

MedicalPost.create!({field_name: "IQ", field_value: 300, user_id: 1})
MedicalPost.create!({field_name: "Smoking history", field_value: "Pipes", user_id: 1})


MedicalFile.create!({url_string: "http://res.cloudinary.com/dy1hwxj4e/image/upload/v1446484758/i3iy7sbu6hhykwgwx21c.jpg", title: "My back MRI", user_id: 1})
