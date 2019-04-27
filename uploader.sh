
#!/bin/bash
set -e; # stop on error

pushd ./Content_files
i=0;
for file in *; do
    if [ -f ${file} ];
    then
        i=i+1;
        if [ i = 5 ]
        then
            break;
        fi
        if ! [ $file = "imageUpload.js" ]
        then
            node imageUpload.js $file;
        fi
    else
        echo "No images";
        exit 0;
    fi
done
