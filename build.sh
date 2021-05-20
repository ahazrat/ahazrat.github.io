#!/bin/sh
containing_directory="~/Documents/projects"
project_name="ahazrat.github.io"
c="build.log"
build_log_filepath="$containing_directory/$project_name/$project_name"

echo '===========================' >> $build_log_filepath
date  >> $build_log_filepath
git add .
git commit -m 'automated build'
git push
