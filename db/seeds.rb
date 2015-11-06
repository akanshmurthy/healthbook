
user1 = User.create!({user_name: "Mr. Holmes", password: "thebestdetective!", url_string: "http://res.cloudinary.com/dy1hwxj4e/image/upload/v1446424981/phzz7qictzgffktltdrr.png"})

user2 = User.create!({user_name: "Dr. Watson", password: "thebestdoctor!", url_string: "http://res.cloudinary.com/dy1hwxj4e/image/upload/v1446445161/fgp9pheq7m4tnnlmsm1q.jpg", is_doctor: true})

Post.create!({body: "I am blind as a mole.", user_id: user1.id})
post2 = Post.create!({body: "My mental acuity tires me.", user_id: user1.id})
Post.create!({body: "I can hear voices in my head.", user_id: user1.id})

Comment.create!({body: "Perhaps, you should see a doctor.", user_id: user2.id, post_id: post2.id})

Notification.create!({body: "Dr. Watson commented on your post.", notifyee_id: user1.id, notifier_id: user2.id})

MedicalPost.create!({field_name: "IQ", field_value: 300, user_id: user1.id})
MedicalPost.create!({field_name: "Smoking history", field_value: "Pipes", user_id: user1.id})


MedicalFile.create!({url_string: "http://res.cloudinary.com/dy1hwxj4e/image/upload/v1446484758/i3iy7sbu6hhykwgwx21c.jpg", title: "My back MRI", user_id: user1.id})
