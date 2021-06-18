#!/bin/sh
containing_directory="/Users/asif/Documents/projects"
project_name="ahazrat.github.io"
build_log_filename="build.log"
build_log_filepath="$containing_directory/$project_name/$build_log_filename"
divider="==========================="
# commit_message="automated build"
commit_message="fix ratio of tile icons"

echo $divider >> $build_log_filepath
date >> $build_log_filepath
echo $commit_message >> $build_log_filepath
git add .
git commit -m "'$commit_message'"
git push
