from flask.ext.sqlalchemy import SQLAlchemy
db = SQLAlchemy()

# This module contains the database models
# See example model below

# class Example(db.Model):
# 	__tablename__ = 'example'

# 	id = db.Column(db.Integer, primary_key=True)
# 	slug = db.Column(db.String())
# 	text = db.Column(db.String())

# 	def __init__(self, slug, text):
# 		self.slug = slug
# 		self.text = text

# 	def __repr__(self):
# 		return '<slug: {}>'.format(self.slug)