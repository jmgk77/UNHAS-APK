#!/bin/sh
rm -rf build
cordova create build
cd build
cordova platform add android
cp ../assets/hand.png ./www
cp ../assets/nail.png ./www
cp ../index.html ./www
cp ../index.js ./www
cp ../paintengine.min.js ./www
cp ../unhas.css ./www
cordova build
cp ./platforms/android/app/build/outputs/apk/debug/app-debug.apk ..
