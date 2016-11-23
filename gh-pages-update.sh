#!/usr/bin/env bash
git checkout gh-pages &&
git merge origin/master &&
node build.js &&
git commit * -m "update build files"
git push origin gh-pages &&
git checkout master
