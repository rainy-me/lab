#!/bin/bash

git clone https://github.com/rainy-me/work-with-you.git
cd ./work-with-you

yarn
yarn build

cd ..
mkdir ./dist/work-with-you
cp -r ./work-with-you/public/* ./dist/work-with-you