#!/bin/sh

setup_git() {
  git config --global user.email "njjeffreys@gmail.com"
  git config --global user.name "JakeJeffreys"
  git config --global user.password $github_token
}

push_new_files() {
  git checkout master
  git add *
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
  git push
}

# upload_files() {
#   # git remote add origin-pages https://${github_token}@github.com/MVSE-outreach/resources.git > /dev/null 2>&1
#   # git push --quiet --set-upstream origin-pages gh-pages
#   git push
# }

setup_git
push_new_files
# upload_files
