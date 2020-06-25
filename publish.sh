# Usage:
# publish 1.2 "my publish message"

npm run build
sed -i "" "3s/: .*/: \"$1\",/" package.json
git add .
git commit -m "$2"
git tag -a "v$1" -m "$2"
git push origin --tags
git push origin main
npm publish
