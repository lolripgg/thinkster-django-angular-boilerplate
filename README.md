# thinkster-django-angular-boilerplate

## Origial Installation

*NOTE: Requires [virtualenv](http://virtualenv.readthedocs.org/en/latest/),
[virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/) and
[Node.js](http://nodejs.org/).*

* Fork this repository.
* `$ git clone git@github.com:<your username>/thinkster-django-angular-boilerplate.git`
* `$ mkvirtualenv thinkster-djangular`
* `$ cd thinkster-django-angular-boilerplate/`
* `$ pip install -r requirements.txt`
* `$ npm install -g bower`
* `$ npm install`
* `$ bower install`
* `$ python manage.py migrate`
* `$ python manage.py runserver`

## My Installation

*NOTE: Requires [virtualenv](http://virtualenv.readthedocs.org/en/latest/) and [Node.js](http://nodejs.org/).*

* `$ sudo apt-get install python-pip`
* `$ sudo pip install virtualenv`
* `$ mkdir -p $HOME/work/solo/venvs`
* `$ virtualenv $HOME/work/solo/venvs/thinkster-djangular`
* `$ source $HOME/work/solo/venvs/thinkster-djangular/bin/activate`
* `$ cd thinkster-django-angular-boilerplate/`
* `$ pip install -r requirements.txt`
* `$ sudo npm install -g bower`
* `$ sudo npm install -g gulp`
* `$ sudo apt-get install nodejs-legacy`
* `$ npm install`
* `$ bower install`
* `$ python manage.py migrate`
* `$ python manage.py runserver`

## TODO's

* Add flake8 [OK]
* Add jshint
* Add ng-model-options where is possible
* Refactoring ViewModels to Model as a service (Maybe)