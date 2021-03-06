THEME_DIR=user/themes/kinderhaus/
GRAV_BIN=bin/grav

all: serve

serve:
	cd ${THEME_DIR} && npm start

serve-watch:
	cd ${THEME_DIR} && npm run serve-watch

clearcache:
	${GRAV_BIN} clearcache

build:
	cd ${THEME_DIR} && npm run build

build-dev:
	cd ${THEME_DIR} && npm run build-dev

clean:
	cd ${THEME_DIR} && npm run clean

sync:
	rsync -rztplv --delete . f:kinderhaus.childrenofthe.net --exclude={.git,.gitignore,cache/,user/themes/antimatter/,backup/,user/themes/kinderhaus/node_modules/,user/config/,./images/,logs/,Makefile}

install:
	composer install && cd user/themes/kinderhaus && npm install

watch:
	cd ${THEME_DIR} && npm run watch
