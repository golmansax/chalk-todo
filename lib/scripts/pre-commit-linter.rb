#!/usr/bin/ruby

# This script looks for files in staged changes for
# files in stylesheets/ or javascripts dir, and runs
# `bundle exec scss-lint file_name` on the former and
# following commands on the latter:
# `jscs --esprima=esprima-fb file_name`
# `jsxhint --verbose file_name`
#
# NOTE: this assumes you have jscs & jsxhint installed globally
# with all required dependencies. Make sure running the commands
# manually works fine first, before making this a pre-commit hook.
#
# To install - symlink it into hooks directory like this:
# ln -s ../../lib/scripts/pre-commit-linter.rb .git/hooks/pre-commit

def run_csslint file
  puts "running 'bundle exec scss-lint #{file}'"
  result = system 'bundle', 'exec', 'scss-lint', file
  if result.nil?
    puts "Couldn't run the command: error was #{$?}"
  # non-zero outcome of the command yields a "false", so exit
  elsif !result
    exit(1)
  end
end

def run_jscs file
  puts "running 'jscs --esprima=esprima-fb #{file}'"
  result = system 'jscs', '--esprima=esprima-fb', file
  if result.nil?
    puts "Couldn't run the command: error was #{$?}"
  elsif !result
    exit(1)
  end
end

def run_jsxhint file
  puts "running 'jsxhint --verbose #{file}'"
  result = system 'jsxhint', '--verbose', file
  if result.nil?
    puts "Couldn't run the command: error was #{$?}"
  elsif !result
    exit(1)
  end
end


JS_FILES=`git diff --cached --name-only | grep -E "(/javascripts/)"`
CSS_FILES=`git diff --cached --name-only | grep -E "(/stylesheets/)"`

if CSS_FILES.length > 0
  CSS_FILES.split("\n").each do |file|
    run_csslint file
  end
end

if JS_FILES.length > 0
  JS_FILES.split("\n").each do |file|
    run_jscs file
    run_jsxhint file
  end
end
