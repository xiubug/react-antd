#!/bin/bash
rm -rf $HOME/.qshell/qupload/*
rm -rf antd
targetBucket="image-video"

#build the static files
yarn run dist

#deploy to the bucket
qshell listbucket $targetBucket -o list.txt
qshell batchdelete $targetBucket -i list.txt
qshell qupload2 --src-dir=$PWD/antd --bucket=$targetBucket

#clean jobs
rm list.txt
rm -rf antd
rm -rf $HOME/.qshell/qupload/*