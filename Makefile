THEME_DIR=user/themes/kinderhaus/
GRAV_BIN=bin/grav

all: serve

serve:
	cd ${THEME_DIR} && npm start

clearcache:
	${GRAV_BIN} clearcache

build:
	cd ${THEME_DIR} && npm build

clean:
	cd ${THEME_DIR} && npm clean

install:
	composer install && cd user/themes/kinderhaus && npm install
