#!/bin/bash
set -e; # stop on error

pushd /Users/rutup/Workplace/Stranger-Beings-DA/dataFiles/Images
i=0;

for file in *; do
  if [ -f ${file} ];
  then
    node /Users/rutup/Workplace/Stranger-Beings-DA/src/utils/uploadImages.js $file;
  else
    echo "No images";
    exit 0;
  fi
done
