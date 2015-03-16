from flask import Flask
from flask.ext.script import Manager
from flask.ext.migrate import Migrate, MigrateCommand
from models import db
import os

app = Flask(__name__)
app.config['IMG_DIR'] = 'https://s3-eu-west-1.amazonaws.com/hackforsweden'
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('HEROKU_POSTGRESQL_COBALT_URL')

db.init_app(app)
migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
	manager.run()
else:
	import boilerplate.views